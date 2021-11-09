import * as React from 'react';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Media, MediaObject } from '@ionic-native/media';
import { useDispatch, useSelector } from 'react-redux';
import { useSetPlayerUrl } from '../../hooks/useSetPlayerUrl';
import {
    playerStop,
    selectPlayerMuted,
    selectPlayerUrl,
    selectPlayerPlaying,
    selectPlayerVolume,
} from '../../modules/player';

const PlayerInterfaceComponent: React.FC = () => {
    const [media, setMedia] = React.useState<MediaObject | undefined>(undefined);
    const [mediaReloading, setMediaReloading] = React.useState(false);
    const [mediaReloadLock, setMediaReloadLock] = React.useState(false);
    // const [mediaStatus, setMediaStatus] = React.useState<number | undefined>(undefined);
    const [mediaIsPlaying, setMediaIsPlaying] = React.useState(false);
    const [mediaEnded, setMediaEnded] = React.useState(false);

    const dispatch = useDispatch();

    const volume: number = useSelector(selectPlayerVolume);
    const muted: boolean = useSelector(selectPlayerMuted);
    const playing: boolean = useSelector(selectPlayerPlaying);
    const url: string | undefined = useSelector(selectPlayerUrl);

    const mediaRef = React.useRef(media);
    const volRef = React.useRef(volume);

    useSetPlayerUrl();

    document.addEventListener(
        'deviceready',
        () => {
            window.console.log('Device ready.');
            window.console.log(LocalNotifications);
            window.console.log((LocalNotifications as any).launchDetails);
            LocalNotifications.addActions('radioStopGrp', [{ id: 'radioStop', title: 'Stop' }]);

            LocalNotifications.on('radioStop').subscribe((notification) => {
                dispatch(playerStop());
            });

            LocalNotifications.fireQueuedEvents();
        },
        false
    );

    const loadPlayer = React.useCallback((mediaUrl) => {
        window.console.log('loading player');
        const mObj = Media.create(mediaUrl);
        mObj.onStatusUpdate.subscribe((status) => {
            setMediaIsPlaying(status === 2);
            if (status === 4) {
                mObj.release();
                setMediaEnded(true);
                setMedia(undefined);
                LocalNotifications && LocalNotifications.clearAll();
            }
        });
        setMedia(mObj);
        setMediaReloading(false);
        setMediaReloadLock(false);
    }, []);

    React.useEffect(() => {
        if (!media && url && url.length) {
            loadPlayer(url);
        } else if (media && !url) {
            setMediaReloading(true);
        }
    }, [media, url, loadPlayer]);

    React.useEffect(() => {
        if (mediaReloading && !mediaReloadLock) {
            setMediaReloadLock(true);
            window.console.log('reloading');
            media && media.stop();
            media && media.release();
            LocalNotifications && LocalNotifications.clearAll();
            setMedia(undefined);
        }
    }, [media, mediaReloading, mediaReloadLock]);

    React.useEffect(() => {
        window.console.log(`play effect, media: ${media}`);
        const vRef = volRef.current;
        if (!mediaReloading && playing && media && !mediaIsPlaying) {
            window.console.log('playing');
            media.play({ playAudioWhenScreenIsLocked: true });
            media.setVolume(Math.max(Math.min(vRef, 1.0), 0));
            LocalNotifications &&
                LocalNotifications.schedule({
                    autoLaunch: true,
                    channelId: 1696912,
                    channelName: 'rogerradio.notifications',
                    title: 'RogerRadio',
                    text: 'RogerRadio is streaming.',
                    icon: 'res://main_logo_transparent',
                    smallIcon: 'res://notification_logo',
                    sticky: true,
                    sound: false,
                    actions: 'radioStopGrp',
                } as any);
        } else if (!mediaReloading && !playing && media && mediaIsPlaying) {
            window.console.log('stopping');
            media.stop();
            LocalNotifications && LocalNotifications.clearAll();
            setMediaIsPlaying(false);
        }
    }, [playing, media, mediaIsPlaying, mediaReloading]);

    React.useEffect(() => {
        if (mediaIsPlaying && !muted && volume && media) {
            media.setVolume(Math.max(Math.min(volume, 1.0), 0));
        } else if (mediaIsPlaying && muted && media) {
            media.setVolume(0);
        }
    }, [mediaIsPlaying, muted, volume, media]);

    const onError = React.useCallback(() => {
        dispatch(playerStop());
    }, [dispatch]);

    React.useEffect(() => {
        if (mediaEnded) {
            setMediaEnded(false);
            onError();
        }
    }, [mediaEnded, onError]);

    React.useEffect(() => {
        const mRef = mediaRef.current;
        return () => {
            if (mRef) {
                mRef.stop();
                mRef.release();
                LocalNotifications && LocalNotifications.clearAll();
            }
        };
    }, []);
    return null;
};

export const PlayerInterface = React.memo(PlayerInterfaceComponent);
