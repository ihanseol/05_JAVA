// Property definition helpers
const defineProperty = Object.defineProperty;
const setProperty = (obj, key, value) => {
  if (key in obj) {
    defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      writable: true,
      value,
    });
  } else {
    obj[key] = value;
  }
  return obj;
};
const defineGetterSetter = (obj, key, value) => (setProperty(obj, typeof key !== 'symbol' ? key : `${key}`, value), value);

// Legacy guard for Vite
function legacyGuard() {
  import.meta.url;
  import('_').catch(() => 1);
  (async function* () {})().next();
}

// Tracker class
class Tracker {
  constructor(svcDomain) {
    this.TiaraInstance = this.newInstance();
    this.svcDomain = svcDomain;

    const phase = window.T?.config?.PHASE;
    this.TiaraInstance.init({
      svcDomain,
      adTrackId: false,
      enableAlwaysHttpPost: false,
      disableSendLegacy: true,
      enableHash: true,
      disableQuery: false,
      trackDomain: '',
      deployment: phase === 'local' ? 'dev' : phase === 'prod' ? 'production' : phase,
      autoClick: false,
      kakaoAppKey: '',
      appUserId: '',
    });

    // Define methods
    defineGetterSetter(this, 'newInstance', () => {
      window.TiaraTracker.initTracker();
      return window.TiaraTracker.getInstance();
    });
    defineGetterSetter(this, 'setCustomProps', (props) => {
      this.TiaraInstance.customProps(props);
      this.customProps = props;
      return this;
    });
    defineGetterSetter(this, 'setSection', (section) => {
      this.TiaraInstance.setSection(section);
      this.section = section;
      return this;
    });
    defineGetterSetter(this, 'setPage', (page) => {
      this.TiaraInstance.setPage(page);
      this.page = page;
      return this;
    });
    defineGetterSetter(this, 'setUrl', (url) => {
      this.TiaraInstance.setUrl(url);
      this.url = url;
      return this;
    });
    defineGetterSetter(this, 'setReferrer', (referrer) => {
      this.TiaraInstance.setReferrer(referrer);
      this.referrer = referrer;
      return this;
    });
    defineGetterSetter(this, 'setPageMeta', (meta) => {
      this.TiaraInstance.pageMeta(meta);
      this.pageMeta = meta;
      return this;
    });
    defineGetterSetter(this, 'setTitle', (title) => {
      this.TiaraInstance.setTitle(title);
      this.title = title;
      return this;
    });
    defineGetterSetter(this, 'setKakaoAppKey', (key) => {
      this.TiaraInstance.setKakaoAppKey(key);
      this.kakaoAppKey = key;
      return this;
    });
    defineGetterSetter(this, 'setAppUserId', (id) => {
      if (id === 'null') return this;
      this.TiaraInstance.setAppUserId(id);
      this.appUserId = id;
      return this;
    });
    defineGetterSetter(this, 'start', (trackPage) => {
      this.TiaraInstance.trackPage(trackPage);
      this.TiaraInstance.setAutoClick(true);
      this.TiaraInstance.track();
      return this;
    });
  }
}

// Metadata value class
class MetaValue {
  constructor() {
    this.value = {};
    defineGetterSetter(this, 'get', () => this.value);
    defineGetterSetter(this, 'setId', (id) => (this.value.id = id, this));
    defineGetterSetter(this, 'setType', (type) => (this.value.type = type, this));
    defineGetterSetter(this, 'setName', (name) => (this.value.name = name, this));
    defineGetterSetter(this, 'setCategory', (category) => (this.value.category = category, this));
    defineGetterSetter(this, 'setCategoryId', (id) => (this.value.category_id = id, this));
    defineGetterSetter(this, 'setAuthor', (author) => (this.value.author = author, this));
    defineGetterSetter(this, 'setAuthorId', (id) => (this.value.author_id = id, this));
    defineGetterSetter(this, 'setImage', (image) => (this.value.image = image, this));
    defineGetterSetter(this, 'setPlink', (plink) => (this.value.plink = plink, this));
    defineGetterSetter(this, 'setTags', (tags) => {
      if (tags && Array.isArray(tags)) this.value.tags = tags.join(',');
      return this;
    });
    defineGetterSetter(this, 'getValue', () => this.value);
  }
}

// Data tracker class
class DataTracker {
  constructor() {
    const { tiara } = window;
    this.svcDomain = tiara.svcDomain;
    this.section = tiara.section;
    this.page = tiara.page;
    this.trackPage = tiara.trackPage;
    this.customProps = tiara.customProps;
    this.entry = tiara.entry;
    this.kakaoAppKey = tiara.kakaoAppKey;
    this.appUserId = tiara.appUserId;
    this.key = tiara.key;
    this.hasEntry = !!(Object.prototype.hasOwnProperty.call(tiara, 'entry') && tiara.entry);
    this.meta = this.getMetaByData();

    defineGetterSetter(this, 'getMetaByData', () => {
      const meta = new MetaValue();
      meta.setId(this.key)
        .setName(this.key)
        .setType(this.entry?.entryType);
      if (this.hasEntry) {
        meta.setCategory(this.entry.serviceCategoryName)
          .setCategoryId(this.entry.serviceCategoryId)
          .setAuthor(this.entry.author)
          .setAuthorId(this.entry.author)
          .setPlink(this.entry.plink)
          .setImage(this.entry.image)
          .setName(this.entry.entryTitle)
          .setTags(this.entry.tags);
      }
      return meta.getValue();
    });
  }
}

// Usage tracker class extending Tracker
class UsageTracker extends Tracker {
  constructor(svcDomain) {
    super(svcDomain);
    defineGetterSetter(this, 'setUsage', (usage) => {
      this.TiaraInstance.usage(usage);
      return this;
    });
    defineGetterSetter(this, 'start', () => {
      if (isBlogPostPage()) {
        this.TiaraInstance.trackUsage('湲� �곸꽭酉� �꾨룆瑜�');
      } else if (isBlogMainPage()) {
        this.TiaraInstance.trackUsage('釉붾줈洹명솃_泥대쪟�쒓컙');
      } else {
        this.TiaraInstance.trackUsage();
      }
      this.TiaraInstance.track();
      return this;
    });
  }
}

// Page check helpers
function isBlogPostPage() {
  return window.tiara.page === '湲�酉�';
}

function isBlogMainPage() {
  return window.tiara.page === '釉붾줈洹명솃';
}

// Initialization and event handling
let startTime, tracker, usageTracker, dataTracker;

function initialize() {
  startTime = new Date();
  dataTracker = new DataTracker();
  setupTracker();
  window.addEventListener('changeStateEvent', handleStateChange);
}

function setupTracker() {
  tracker = new Tracker(dataTracker.svcDomain);
  if (!Object.prototype.hasOwnProperty.call(dataTracker, 'page') || !dataTracker.page) {
    dataTracker.page = 'default';
  } else {
    dataTracker.page = dataTracker.page.replace('/', '_');
  }
  tracker.setSection(dataTracker.section)
    .setPage(dataTracker.page || 'default')
    .setCustomProps(dataTracker.customProps)
    .setPageMeta(dataTracker.meta)
    .setTitle(document.title)
    .setKakaoAppKey(dataTracker.kakaoAppKey)
    .setAppUserId(dataTracker.appUserId)
    .start(dataTracker.trackPage);
}

function trackUsage() {
  if (!tracker || (!isBlogPostPage() && !isBlogMainPage())) return;

  const duration = new Date() - startTime;
  const { scrollHeight } = document.documentElement;
  const clientHeight = document.documentElement.clientHeight;
  const scrollTop = window.scrollY;
  const scrollBottom = scrollTop + clientHeight;
  const scrollPercent = Math.round((scrollBottom / scrollHeight) * 100);

  usageTracker = new UsageTracker(dataTracker.svcDomain);
  usageTracker.setSection(tracker.section)
    .setPage(tracker.page)
    .setCustomProps(tracker.customProps)
    .setPageMeta(tracker.pageMeta)
    .setReferrer(tracker.referrer)
    .setUsage({
      duration,
      scroll_bottom: `${scrollBottom}`,
      scroll_height: `${scrollHeight}`,
      scroll_inner_height: `${clientHeight}`,
      scroll_percent: `${scrollPercent}`,
      scroll_top: `${scrollTop}`,
    });
  if (tracker.url) usageTracker.setUrl(tracker.url);
  usageTracker.start();
}

function handleStateChange(event) {
  if (event.detail && ['url', 'prevLocation', 'currentLocation'].every((key) => key in event.detail)) {
    startTime = new Date();
    const { url, prevLocation, currentLocation } = event.detail;
    if (prevLocation?.pathname) tracker.setReferrer(`${url}${prevLocation.pathname}`);
    if (currentLocation?.pathname) {
      tracker.setPage(currentLocation.pathname.replace('/', ''))
        .setUrl(`${url}${currentLocation.pathname}`);
    }
    tracker.start(dataTracker.trackPage);
    trackUsage();
  }
}

function cleanup() {
  trackUsage();
  window.removeEventListener('changeStateEvent', handleStateChange);
}

// Event listeners
window.addEventListener('load', initialize);
window.addEventListener('beforeunload', cleanup);

// Export legacy guard
export { legacyGuard as __vite_legacy_guard };