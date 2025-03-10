// Utility functions and constants
const WIDGET_PREFIX = "twitter-widget-";
let widgetCounter = 0;

// Generates a unique widget ID
function generateWidgetId() {
  return `${WIDGET_PREFIX}${widgetCounter++}`;
}

// Validates and normalizes a string (e.g., removes '@' from screen names)
function normalizeScreenName(value) {
  return value && value.startsWith("@") ? value.substring(1) : value;
}

// Base Widget class (derived from module 160 and 162)
class BaseWidget {
  constructor(options = {}) {
    this.params = options.params || {};
    this.sandbox = options.sandbox || {};
    this.id = generateWidgetId();
    this.Component = null; // Placeholder for component factory
  }

  static build(...args) {
    // Factory method to instantiate widget with dependencies
    const WidgetClass = this.prototype.constructor;
    return new WidgetClass(...args);
  }

  selectors(selectorsObj = {}) {
    this.Widget.prototype.selectors = { ...this.Widget.prototype.selectors, ...selectorsObj };
  }
}

// Widget Factory (module 163)
class WidgetFactory {
  constructor() {
    this.id = generateWidgetId();
    this.el = null;
    this.sandbox = null;
  }

  hydrate() {
    return Promise.resolve(); // Placeholder for hydration logic
  }

  prepForInsertion() {
    // Prepares widget for DOM insertion (stub)
  }

  render() {
    return Promise.resolve(); // Placeholder for rendering logic
  }

  show() {
    return Promise.resolve(); // Placeholder for visibility logic
  }

  resize() {
    return Promise.resolve(); // Placeholder for resizing logic
  }

  select(element, selector) {
    if (arguments.length === 1) {
      selector = element;
      element = this.el;
    }
    if (!element) return [];
    selector = this.selectors[selector] || selector;
    return Array.from(element.querySelectorAll(selector));
  }

  selectOne(...args) {
    return this.select(...args)[0];
  }

  selectLast(...args) {
    return this.select(...args).pop();
  }

  on(event, selectorOrCallback, callback) {
    let selector, handler;
    if (typeof selectorOrCallback === "function") {
      handler = selectorOrCallback;
      selector = null;
    } else {
      selector = this.selectors[selectorOrCallback] || selectorOrCallback;
      handler = callback;
    }

    const events = (event || "").split(/\s+/);
    events.forEach(evt => {
      if (selector) {
        // Delegate event handling
        this.el?.addEventListener(evt, e => {
          const target = e.target.closest(selector);
          if (target) handler.call(this, e);
        }, false);
      } else {
        this.el?.addEventListener(evt, handler, false);
      }
    });
  }
}

// Timeline Widget Parameters (module 191)
const timelineParams = {
  dataSource: { required: true },
  id: { validate: val => typeof val === "string" },
  lang: { required: true, transform: matchLanguage, fallback: "en" },
  isPreconfigured: { required: true, fallback: false },
  width: { validate: isValidPx, transform: toPx },
  height: { validate: isValidPx, transform: toPx },
  theme: { fallback: getConfigValue("widgets:theme"), validate: val => /^(dark|light)$/.test(val) },
  tweetLimit: { transform: val => Number(val) },
  partner: { fallback: getConfigValue("partner") },
  staticContent: { required: false, transform: val => Boolean(val) },
  screenName: { required: false },
  showReplies: { required: false },
  userId: { required: false }
};

// Helper functions (assumed from dependencies)
function matchLanguage(lang) {
  // Stub: Matches and normalizes language code
  return lang || "en";
}

function isValidPx(value) {
  if (typeof value === "number") value += "px";
  const div = document.createElement("div");
  div.style.width = value;
  return div.style.width || null;
}

function toPx(value) {
  return isValidPx(value) || value;
}

function getConfigValue(key) {
  // Stub: Retrieves config value from some storage
  return window[key] || "";
}

// Chrome styling parser (module 192)
function parseChromeOptions(chromeStr = "") {
  const options = {
    transparent: false,
    hideBorder: false,
    hideHeader: false,
    hideFooter: false,
    hideScrollBar: false
  };
  if (chromeStr.includes("transparent")) options.transparent = true;
  if (chromeStr.includes("noborders")) options.hideBorder = true;
  if (chromeStr.includes("noheader")) options.hideHeader = true;
  if (chromeStr.includes("nofooter")) options.hideFooter = true;
  if (chromeStr.includes("noscrollbar")) options.hideScrollBar = true;
  return options;
}

// Timeline Widget (module 190)
class TimelineWidget extends BaseWidget {
  constructor(params, sandbox) {
    super({ params, sandbox });
    this.settingsData = { features: {}, sessionId: "" };
    this.params.chrome = parseChromeOptions(params.chrome);
  }

  initialize() {
    // Set default width and height if not provided
    if (!this.params.width && this.params.isPreconfigured) {
      this.params.width = "520px";
    }
    if (!this.params.height) {
      this.params.height = this.params.isPreconfigured || this.params.staticContent || this.params.tweetLimit > 0 ? null : "600px";
    }
    this.isStaticTimeline = this.params.staticContent || this.params.tweetLimit > 0;
    this.isFullyExpanded = this.isStaticTimeline || (!this.params.isPreconfigured && !this.params.height);

    // Fetch horizon settings
    return getHorizonSettings().then(settings => {
      this.settingsData = settings;
    });
  }

  scribeNamespace() {
    return { client: "tfw", page: "timeline" };
  }

  scribeData() {
    const dataSourceId = this.params.dataSource.id;
    return {
      context: "horizon",
      widget_id: Number.isInteger(dataSourceId) ? dataSourceId : undefined,
      widget_data_source: dataSourceId,
      query: this.el?.getAttribute("data-search-query"),
      profile_id: this.el?.getAttribute("data-profile-id"),
      widget_origin: getRootDocumentLocation(),
      widget_frame: isFramed() ? getCurrentDocumentLocation() : null,
      widget_partner: this.params.partner,
      widget_site_screen_name: normalizeScreenName(getConfigValue("site")),
      widget_site_user_id: Number(getConfigValue("site:id")),
      widget_creator_screen_name: normalizeScreenName(getConfigValue("creator")),
      widget_creator_user_id: Number(getConfigValue("creator:id"))
    };
  }

  queryParams() {
    const scribeData = this.scribeData();
    return {
      ...this.params.dataSource.queryParams(),
      embedId: this.id,
      sessionId: this.settingsData.sessionId,
      features: encodeFeatures(this.settingsData.features),
      theme: this.params.theme,
      partner: this.params.partner,
      widgetsVersion: "1.0", // Stub version
      origin: scribeData.widget_origin,
      frame: scribeData.widget_frame,
      siteScreenName: scribeData.widget_site_screen_name,
      siteUserId: scribeData.widget_site_user_id,
      creatorScreenName: scribeData.widget_creator_screen_name,
      creatorUserId: scribeData.widget_creator_user_id,
      showHeader: !this.params.chrome.hideHeader,
      hideHeader: this.params.chrome.hideHeader,
      hideFooter: this.params.chrome.hideFooter,
      hideBorder: this.params.chrome.hideBorder,
      transparent: this.params.chrome.transparent,
      hideScrollBar: this.params.chrome.hideScrollBar,
      maxHeight: this.params.height
    };
  }

  styleSandboxWrapper(styles) {
    return writeToDOM(() => {
      Object.entries(styles).forEach(([key, value]) => {
        this._sandboxWrapperEl.style[key] = value;
      });
    });
  }

  render() {
    const endpoint = this.params.dataSource.endpoint;
    const queryParams = this.queryParams();
    const url = buildUrl(endpoint, queryParams);

    this.sandbox.setWaitToSwapUntilRendered(true);
    return Promise.all([
      this.sandbox.setTitle("Twitter Timeline"),
      this.styleSandboxWrapper({
        display: "flex",
        width: this.params.width,
        maxWidth: "100%",
        marginTop: 0,
        marginBottom: 0
      }),
      this.sandbox.styleSelf({ display: "block", flexGrow: "1" }),
      this.sandbox.loadDocument(url)
    ]);
  }

  afterRender() {
    const sandbox = this.sandbox;
    return sandbox.getResultsPromise()
      .then(() => sandbox.makeVisible())
      .then(() => sandbox.getRenderedPromise())
      .then(() => logUpdateMessage());
  }
}

// Scribe (Analytics) Mixin (module 161)
class ScribeMixin {
  scribeItems() {
    return {};
  }

  scribeNamespace() {
    return { client: "tfw" };
  }

  scribeData() {
    return {
      widget_origin: getRootDocumentLocation(),
      widget_frame: isFramed() ? getCurrentDocumentLocation() : null,
      widget_partner: this.params.partner,
      widget_site_screen_name: normalizeScreenName(getConfigValue("site")),
      widget_site_user_id: Number(getConfigValue("site:id")),
      widget_creator_screen_name: normalizeScreenName(getConfigValue("creator")),
      widget_creator_user_id: Number(getConfigValue("creator:id"))
    };
  }

  async scribe(namespace, data, immediate = false, extra) {
    const horizonSettings = await getHorizonSettings();
    const session = { session_id: horizonSettings.sessionId };
    const fullNamespace = { ...this.scribeNamespace(), ...namespace };
    const fullData = { ...this.scribeData(), ...data };
    clientEvent(fullNamespace, fullData, immediate, { ...session, ...extra });
  }

  scribeInteraction(event, data, extra) {
    const terms = extractTermsFromDOM(event.target);
    terms.action = event.type;
    if (terms.element === "url") {
      terms.element = clickEventElement(event.target);
    }
    return this.scribe(terms, data, extra);
  }
}

// Stubbed utility functions (assumed from dependencies)
function getRootDocumentLocation() {
  return window.location.href; // Stub
}

function isFramed() {
  return window.self !== window.top; // Stub
}

function getCurrentDocumentLocation() {
  return window.location.href; // Stub
}

function getHorizonSettings() {
  return Promise.resolve({ sessionId: "abc123", features: {} }); // Stub
}

function clientEvent(namespace, data, immediate, extra) {
  console.log("Scribe:", { namespace, data, immediate, extra }); // Stub
}

function extractTermsFromDOM(target) {
  return { element: target.tagName.toLowerCase() }; // Stub
}

function clickEventElement(target) {
  return target.href ? "link" : "unknown"; // Stub
}

function encodeFeatures(features) {
  return JSON.stringify(features); // Stub
}

function buildUrl(endpoint, params) {
  const url = new URL(endpoint);
  Object.entries(params).forEach(([key, value]) => url.searchParams.append(key, value));
  return url.toString();
}

function writeToDOM(callback) {
  requestAnimationFrame(callback); // Stub
}

function logUpdateMessage() {
  console.log(
    "%c[Update] There have been recent updates to Embedded X Timelines and supported parameters.%c\n\t•For more information on what has changed visit: https://twittercommunity.com/t/embedded-timelines-update-parameters-support/177112\n\t•Please submit feedback or report any bugs: https://twittercommunity.com/c/publisher/websites/",
    "font-weight:bold;color:#006FD6",
    "color:#006FD6"
  );
}

// Combine mixins and export (module 79)
const TimelineWidgetWithMixins = Object.assign(
  TimelineWidget.prototype,
  ScribeMixin.prototype
);

export default class TwitterTimeline extends BaseWidget {
  static build(params, sandbox) {
    return new TimelineWidget(params, sandbox);
  }
}

// Bootstrap the widget (simulating window.__twttrll)
window.__twttrll = window.__twttrll || [];
window.__twttrll.push([
  [5],
  { 79: TwitterTimeline }
]);