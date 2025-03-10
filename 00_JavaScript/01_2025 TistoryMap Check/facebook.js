/**
 * Copyright (c) 2017-present, Facebook, Inc. All rights reserved.
 *
 * You are hereby granted a non-exclusive, worldwide, royalty-free license to use,
 * copy, modify, and distribute this software in source code or binary form for use
 * in connection with the web services and APIs provided by Facebook.
 *
 * As with any software that integrates with the Facebook platform, your use of
 * this software is subject to the Facebook Platform Policy
 * [http://developers.facebook.com/policy/]. This copyright notice shall be
 * included in all copies or substantial portions of the software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Initializes the Facebook JavaScript SDK.
 * @param {string} scriptUrl - URL of the SDK script.
 * @param {number} timestamp - Build timestamp (Unix epoch in seconds).
 * @param {string} namespace - Global namespace for the SDK (e.g., "FB").
 * @param {string[]} methods - List of API methods to stub.
 * @param {boolean} useCrossOrigin - Whether to set crossOrigin="anonymous" on the script tag.
 */
(function initializeFacebookSDK(scriptUrl, timestamp, namespace, methods, useCrossOrigin) {
  // Warn if the SDK is older than 7 days
  const console = window.console;
  if (console && Math.floor(new Date().getTime() / 1000) - timestamp > 7 * 24 * 60 * 60) {
    console.warn('The Facebook JSSDK is more than 7 days old.');
  }

  // Exit if the SDK is already loaded or JSON is unavailable
  if (window[namespace]) return;
  if (!window.JSON) return;

  // Initialize the SDK namespace with a buffer for method calls
  window[namespace] = {
    __buffer: {
      replay: function () {
        const buffer = this;
        const replayCall = (index) => {
          const sdk = window[namespace];
          const methodPath = buffer.calls[index][0].split('.');
          let method = sdk;
          methodPath.forEach((part) => (method = method[part]));
          method.apply(null, buffer.calls[index][1]);
        };
        for (let i = 0; i < this.calls.length; i++) replayCall(i);
        this.calls = [];
      },
      calls: [],
      opts: null,
    },
    getUserID: () => '',
    getAuthResponse: () => null,
    getAccessToken: () => null,
    init: (options) => {
      window[namespace].__buffer.opts = options;
    },
  };

  // Stub out API methods
  const sdk = window[namespace];
  methods.forEach((method) => {
    if (method in sdk) return;
    const parts = method.split('.');
    const methodName = parts.pop();
    let context = sdk;
    for (let i = 0; i < parts.length; i++) {
      context = context[parts[i]] = context[parts[i]] || {};
    }
    context[methodName] = (methodPath) => {
      if (methodPath === 'init') return;
      return function () {
        sdk.__buffer.calls.push([methodPath, Array.prototype.slice.call(arguments)]);
      };
    }(method);
  });

  // Dynamically load the SDK script
  const script = document.createElement('script');
  script.src = scriptUrl;
  script.async = true;
  if (useCrossOrigin) script.crossOrigin = 'anonymous';
  const firstScript = document.getElementsByTagName('script')[0];
  if (firstScript.parentNode) {
    firstScript.parentNode.insertBefore(script, firstScript);
  }
})(
  'https://connect.facebook.net/ko_KR/sdk.js?hash=b9945a5507ccf730a7ceca1a130ec17f', // scriptUrl
  1741603288, // timestamp (April 27, 2024)
  'FB', // namespace
  [
    'AppEvents.EventNames',
    'AppEvents.ParameterNames',
    'AppEvents.activateApp',
    'AppEvents.clearAppVersion',
    'AppEvents.clearUserID',
    'AppEvents.getAppVersion',
    'AppEvents.getUserID',
    'AppEvents.logEvent',
    'AppEvents.logPageView',
    'AppEvents.logPurchase',
    'AppEvents.setAppVersion',
    'AppEvents.setUserID',
    'AppEvents.updateUserProperties',
    'Canvas.Plugin.showPluginElement',
    'Canvas.Plugin.hidePluginElement',
    'Canvas.Prefetcher.addStaticResource',
    'Canvas.Prefetcher.setCollectionMode',
    'Canvas.getPageInfo',
    'Canvas.scrollTo',
    'Canvas.setAutoGrow',
    'Canvas.setDoneLoading',
    'Canvas.setSize',
    'Canvas.setUrlHandler',
    'Canvas.startTimer',
    'Canvas.stopTimer',
    'Event.subscribe',
    'Event.unsubscribe',
    'XFBML.parse',
    'addFriend',
    'api',
    'getAccessToken',
    'getAuthResponse',
    'getLoginStatus',
    'getUserID',
    'init',
    'login',
    'logout',
    'publish',
    'share',
    'ui',
  ], // methods
  true // useCrossOrigin
);