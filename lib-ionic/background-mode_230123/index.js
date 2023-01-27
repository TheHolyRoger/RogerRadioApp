var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
var BackgroundModeOriginal = /** @class */ (function (_super) {
    __extends(BackgroundModeOriginal, _super);
    function BackgroundModeOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BackgroundModeOriginal.prototype.enable = function () { return cordova(this, "enable", { "sync": true }, arguments); };
    BackgroundModeOriginal.prototype.disable = function () { return cordova(this, "disable", { "sync": true }, arguments); };
    BackgroundModeOriginal.prototype.setEnabled = function (enable) { return cordova(this, "setEnabled", { "sync": true }, arguments); };
    BackgroundModeOriginal.prototype.fireEvent = function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return cordova(this, "fireEvent", { "sync": true }, arguments);
    };
    BackgroundModeOriginal.prototype.isEnabled = function () { return cordova(this, "isEnabled", { "sync": true }, arguments); };
    BackgroundModeOriginal.prototype.isActive = function () { return cordova(this, "isActive", { "sync": true }, arguments); };
    BackgroundModeOriginal.prototype.setDefaults = function (overrides) { return cordova(this, "setDefaults", { "platforms": ["Android"] }, arguments); };
    BackgroundModeOriginal.prototype.configure = function (options) { return cordova(this, "configure", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundModeOriginal.prototype.on = function (event) { return cordova(this, "on", { "observable": true, "clearFunction": "un", "clearWithArgs": true }, arguments); };
    BackgroundModeOriginal.prototype.un = function (event, callback) { return cordova(this, "un", {}, arguments); };
    BackgroundModeOriginal.prototype.moveToBackground = function () { return cordova(this, "moveToBackground", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundModeOriginal.prototype.disableWebViewOptimizations = function () { return cordova(this, "disableWebViewOptimizations", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundModeOriginal.prototype.moveToForeground = function () { return cordova(this, "moveToForeground", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundModeOriginal.prototype.overrideBackButton = function () { return cordova(this, "overrideBackButton", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundModeOriginal.prototype.excludeFromTaskList = function () { return cordova(this, "excludeFromTaskList", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundModeOriginal.prototype.isScreenOff = function (fn) { return cordova(this, "isScreenOff", { "platforms": ["Android"] }, arguments); };
    BackgroundModeOriginal.prototype.wakeUp = function () { return cordova(this, "wakeUp", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundModeOriginal.prototype.unlock = function () { return cordova(this, "unlock", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundModeOriginal.prototype.disableBatteryOptimizations = function () { return cordova(this, "disableBatteryOptimizations", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundModeOriginal.prototype.requestForegroundPermission = function () { return cordova(this, "requestForegroundPermission", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundModeOriginal.pluginName = "BackgroundMode";
    BackgroundModeOriginal.plugin = "cordova-plugin-background-mode";
    BackgroundModeOriginal.pluginRef = "cordova.plugins.backgroundMode";
    BackgroundModeOriginal.repo = "https://github.com/katzer/cordova-plugin-background-mode";
    BackgroundModeOriginal.platforms = ["AmazonFire OS", "Android", "Browser", "iOS", "Windows"];
    return BackgroundModeOriginal;
}(IonicNativePlugin));
var BackgroundMode = new BackgroundModeOriginal();
export { BackgroundMode };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2JhY2tncm91bmQtbW9kZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQTZFRSxrQ0FBaUI7Ozs7SUFRbkQsK0JBQU07SUFTTixnQ0FBTztJQWNQLG1DQUFVLGFBQUMsTUFBZTtJQWExQixrQ0FBUyxhQUFDLEtBQWE7UUFBRSxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLDZCQUFjOzs7O0lBV3ZDLGtDQUFTO0lBV1QsaUNBQVE7SUFhUixvQ0FBVyxhQUFDLFNBQXVDO0lBV25ELGtDQUFTLGFBQUMsT0FBcUM7SUFhL0MsMkJBQUUsYUFBQyxLQUFhO0lBV2hCLDJCQUFFLGFBQUMsS0FBYSxFQUFFLFFBQWtDO0lBV3BELHlDQUFnQjtJQVNoQixvREFBMkI7SUFTM0IseUNBQWdCO0lBU2hCLDJDQUFrQjtJQVNsQiw0Q0FBbUI7SUFVbkIsb0NBQVcsYUFBQyxFQUEyQjtJQVN2QywrQkFBTTtJQVNOLCtCQUFNO0lBU04sb0RBQTJCO0lBUzNCLG9EQUEyQjs7Ozs7O3lCQTlSN0I7RUErRW9DLGlCQUFpQjtTQUF4QyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogQ29uZmlndXJhdGlvbnMgaXRlbXMgdGhhdCBjYW4gYmUgdXBkYXRlZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBCYWNrZ3JvdW5kTW9kZUNvbmZpZ3VyYXRpb24ge1xuICAvKipcbiAgICogVGl0bGUgb2YgdGhlIGJhY2tncm91bmQgdGFza1xuICAgKi9cbiAgdGl0bGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIERlc2NyaXB0aW9uIG9mIGJhY2tncm91bmQgdGFza1xuICAgKi9cbiAgdGV4dD86IHN0cmluZztcblxuICAvKipcbiAgICogVGhpcyB3aWxsIGxvb2sgZm9yIGA8aWNvbiBuYW1lPi5wbmdgIGluIHBsYXRmb3Jtcy9hbmRyb2lkL3Jlcy9kcmF3YWJsZXxtaXBtYXBcbiAgICovXG4gIGljb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgbm90aWZpY2F0aW9uIGNpcmNsZVxuICAgKi9cbiAgY29sb3I/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEJ5IGRlZmF1bHQgdGhlIGFwcCB3aWxsIGNvbWUgdG8gZm9yZWdyb3VuZCB3aGVuIHRhcHBpbmcgb24gdGhlIG5vdGlmaWNhdGlvbi4gSWYgZmFsc2UsIHBsdWdpbiB3b24ndCBjb21lIHRvIGZvcmVncm91bmQgd2hlbiB0YXBwZWQuXG4gICAqL1xuICByZXN1bWU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBXaGVuIHNldCB0byBmYWxzZSBtYWtlcyB0aGUgbm90aWZpY2F0aW9ucyB2aXNpYmxlIG9uIGxvY2sgc2NyZWVuIChBbmRyb2lkIDUuMCspXG4gICAqL1xuICBoaWRkZW4/OiBib29sZWFuO1xuXG4gIC8qKiBCaWcgdGV4dCAqL1xuICBiaWdUZXh0PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogVGhlIHRleHQgdGhhdCBzY3JvbGxzIGl0c2VsZiBvbiBzdGF0dXNiYXJcbiAgICovXG4gIHRpY2tlcj86IHN0cmluZztcblxuICAvKipcbiAgICogaWYgdHJ1ZSBwbHVnaW4gd2lsbCBub3QgZGlzcGxheSBhIG5vdGlmaWNhdGlvbi4gRGVmYXVsdCBpcyBmYWxzZS5cbiAgICovXG4gIHNpbGVudD86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQG5hbWUgQmFja2dyb3VuZCBNb2RlXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvcmRvdmEgcGx1Z2luIHRvIHByZXZlbnQgdGhlIGFwcCBmcm9tIGdvaW5nIHRvIHNsZWVwIHdoaWxlIGluIGJhY2tncm91bmQuXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogY29yZG92YS1wbHVnaW4tYmFja2dyb3VuZC1tb2RlLiBGb3IgbW9yZSBpbmZvIGFib3V0IHBsdWdpbiwgdmlzaXQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9rYXR6ZXIvY29yZG92YS1wbHVnaW4tYmFja2dyb3VuZC1tb2RlXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEJhY2tncm91bmRNb2RlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9iYWNrZ3JvdW5kLW1vZGUvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhY2tncm91bmRNb2RlOiBCYWNrZ3JvdW5kTW9kZSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5iYWNrZ3JvdW5kTW9kZS5lbmFibGUoKTtcbiAqIGBgYFxuICpcbiAqIEBpbnRlcmZhY2VzXG4gKiBCYWNrZ3JvdW5kTW9kZUNvbmZpZ3VyYXRpb25cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdCYWNrZ3JvdW5kTW9kZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWJhY2tncm91bmQtbW9kZScsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5iYWNrZ3JvdW5kTW9kZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20va2F0emVyL2NvcmRvdmEtcGx1Z2luLWJhY2tncm91bmQtbW9kZScsXG4gIHBsYXRmb3JtczogWydBbWF6b25GaXJlIE9TJywgJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnV2luZG93cyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCYWNrZ3JvdW5kTW9kZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIEVuYWJsZSB0aGUgYmFja2dyb3VuZCBtb2RlLlxuICAgKiBPbmNlIGNhbGxlZCwgcHJldmVudHMgdGhlIGFwcCBmcm9tIGJlaW5nIHBhdXNlZCB3aGlsZSBpbiBiYWNrZ3JvdW5kLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGVuYWJsZSgpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIERpc2FibGUgdGhlIGJhY2tncm91bmQgbW9kZS5cbiAgICogT25jZSB0aGUgYmFja2dyb3VuZCBtb2RlIGhhcyBiZWVuIGRpc2FibGVkLCB0aGUgYXBwIHdpbGwgYmUgcGF1c2VkIHdoZW4gaW4gYmFja2dyb3VuZC5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBkaXNhYmxlKCk6IHZvaWQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGUgb3IgZGlzYWJsZSB0aGUgYmFja2dyb3VuZCBtb2RlLlxuICAgKlxuICAgKiBAcGFyYW0gZW5hYmxlIHtib29sZWFufSBUaGUgc3RhdHVzIHRvIHNldCBmb3IuXG4gICAqXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgc2V0RW5hYmxlZChlbmFibGU6IGJvb2xlYW4pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEZpcmUgZXZlbnQgd2l0aCBnaXZlbiBhcmd1bWVudHMuXG4gICAqXG4gICAqIEBwYXJhbSBldmVudCB7c3RyaW5nfSBldmVudCBUaGUgZXZlbnQncyBuYW1lLlxuICAgKiBAcGFyYW0gYXJncyB7YXJyYXl9IFRoZSBjYWxsYmFjaydzIGFyZ3VtZW50cy5cbiAgICpcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGZpcmVFdmVudChldmVudDogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBiYWNrZ3JvdW5kIG1vZGUgaXMgZW5hYmxlZCBvciBub3QuXG4gICAqIEByZXR1cm5zIHtib29sZWFufSByZXR1cm5zIGEgYm9vbGVhbiB0aGF0IGluZGljYXRlcyBpZiB0aGUgYmFja2dyb3VuZCBtb2RlIGlzIGVuYWJsZWQuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgaXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYW4gYmUgdXNlZCB0byBnZXQgdGhlIGluZm9ybWF0aW9uIGlmIHRoZSBiYWNrZ3JvdW5kIG1vZGUgaXMgYWN0aXZlLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gcmV0dXJucyBhIGJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgaWYgdGhlIGJhY2tncm91bmQgbW9kZSBpcyBhY3RpdmUuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgaXNBY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJ3cml0ZSB0aGUgZGVmYXVsdCBzZXR0aW5ncy5cbiAgICogQXZhaWxhYmxlIG9ubHkgZm9yIEFuZHJvaWQgcGxhdGZvcm0uXG4gICAqIEBwYXJhbSBvdmVycmlkZXMge0JhY2tncm91bmRNb2RlQ29uZmlndXJhdGlvbn0gRGljdCBvZiBvcHRpb25zIHRvIGJlIG92ZXJyaWRkZW4uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbiAgfSlcbiAgc2V0RGVmYXVsdHMob3ZlcnJpZGVzPzogQmFja2dyb3VuZE1vZGVDb25maWd1cmF0aW9uKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBNb2RpZnkgdGhlIGRpc3BsYXllZCBpbmZvcm1hdGlvbi5cbiAgICogQXZhaWxhYmxlIG9ubHkgZm9yIEFuZHJvaWQgcGxhdGZvcm0uXG4gICAqIEBwYXJhbSB7QmFja2dyb3VuZE1vZGVDb25maWd1cmF0aW9ufSBbb3B0aW9uc10gQW55IG9wdGlvbnMgeW91IHdhbnQgdG8gdXBkYXRlLiBTZWUgdGFibGUgYmVsb3cuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBjb25maWd1cmUob3B0aW9ucz86IEJhY2tncm91bmRNb2RlQ29uZmlndXJhdGlvbik6IHZvaWQge31cblxuICAvKipcbiAgICogUmVnaXN0ZXIgY2FsbGJhY2sgZm9yIGdpdmVuIGV2ZW50LlxuICAgKiA+IEF2YWlsYWJsZSBldmVudHMgYXJlIGBlbmFibGVgLCBgZGlzYWJsZWAsIGBhY3RpdmF0ZWAsIGBkZWFjdGl2YXRlYCBhbmQgYGZhaWx1cmVgLlxuICAgKiBAcGFyYW0gZXZlbnQge3N0cmluZ30gRXZlbnQgbmFtZVxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgY2xlYXJGdW5jdGlvbjogJ3VuJyxcbiAgICBjbGVhcldpdGhBcmdzOiB0cnVlLFxuICB9KVxuICBvbihldmVudDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVuIGZvciBldmVudHMgdGhhdCB0aGUgcGx1Z2luIGZpcmVzLiBBdmFpbGFibGUgZXZlbnRzIGFyZSBgZW5hYmxlYCwgYGRpc2FibGVgLCBgYWN0aXZhdGVgLCBgZGVhY3RpdmF0ZWAgYW5kIGBmYWlsdXJlYC5cbiAgICogQHBhcmFtIGV2ZW50IHtzdHJpbmd9IEV2ZW50IG5hbWVcbiAgICogQHBhcmFtIGNhbGxiYWNrIHtmdW5jdGlvbn0gVGhlIGZ1bmN0aW9uIHRvIGJlIGV4ZWMgYXMgY2FsbGJhY2suXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHVuKGV2ZW50OiBzdHJpbmcsIGNhbGxiYWNrOiAoLi4uYXJnczogYW55W10pID0+IHZvaWQpOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQW5kcm9pZCBhbGxvd3MgdG8gcHJvZ3JhbW1hdGljYWxseSBtb3ZlIGZyb20gZm9yZWdyb3VuZCB0byBiYWNrZ3JvdW5kLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgbW92ZVRvQmFja2dyb3VuZCgpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBHUFMtdHJhY2tpbmcgaW4gYmFja2dyb3VuZCAoQW5kcm9pZCkuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBkaXNhYmxlV2ViVmlld09wdGltaXphdGlvbnMoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBBbmRyb2lkIGFsbG93cyB0byBwcm9ncmFtbWF0aWNhbGx5IG1vdmUgZnJvbSBiYWNrZ3JvdW5kIHRvIGZvcmVncm91bmQuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBtb3ZlVG9Gb3JlZ3JvdW5kKCk6IHZvaWQge31cblxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGJhY2sgYnV0dG9uIG9uIEFuZHJvaWQgdG8gZ28gdG8gYmFja2dyb3VuZCBpbnN0ZWFkIG9mIGNsb3NpbmcgdGhlIGFwcC5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIG92ZXJyaWRlQmFja0J1dHRvbigpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEV4Y2x1ZGUgdGhlIGFwcCBmcm9tIHRoZSByZWNlbnQgdGFzayBsaXN0LiBXb3JrcyBvbiBBbmRyb2lkIDUuMCsuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBleGNsdWRlRnJvbVRhc2tMaXN0KCk6IHZvaWQge31cblxuICAvKipcbiAgICogSWYgdGhlIHNjcmVlbiBpcyBvZmYuXG4gICAqIEBwYXJhbSBmbiB7ZnVuY3Rpb259IENhbGxiYWNrIGZ1bmN0aW9uIHRvIGludm9rZSB3aXRoIGJvb2xlYW4gYXJnLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxuICB9KVxuICBpc1NjcmVlbk9mZihmbjogKGFyZzA6IGJvb2xlYW4pID0+IHZvaWQpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFR1cm4gc2NyZWVuIG9uXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICB3YWtlVXAoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBUdXJuIHNjcmVlbiBvbiBhbmQgc2hvdyBhcHAgZXZlbiBsb2NrZWRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHVubG9jaygpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIGJhdHRlcnkgb3B0aW1hemF0aW9uIG1vZGUgZm9yIHRoZSBhcHAgKGFuZHJvaWQgb25seSlcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGRpc2FibGVCYXR0ZXJ5T3B0aW1pemF0aW9ucygpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3RzIHBlcm1pc3Npb24gdG8gXCJkcmF3IG9uIHRvcFwiIHdoaWNoIGlzIG5lY2Vzc2FyeSBmb3IgdGhlIFwibW92ZVRvRm9yZWdyb3VuZFwiIG1ldGhvZCBpbiBBbmRyb2lkIDEwK1xuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgcmVxdWVzdEZvcmVncm91bmRQZXJtaXNzaW9uKCk6IHZvaWQge31cbn1cbiJdfQ==