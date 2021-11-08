export interface NowPlayingInfo {
    Artist: string;
    Duration: string;
    Listeners: string;
    TimeLeft: string;
    Title: string;
    CurrentRotation: string;
}

export interface RadioStatusInfo {
    now_playing: NowPlayingInfo;
}
