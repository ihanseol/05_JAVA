// Default configuration object
const DEFAULT_OPTIONS = {
  DCLICK: true,               // Enable double-click functionality
  DCLICK_TRIGGER: "none",     // Trigger key for double-click (default: none)
  DCLICK_SPEED: 400,          // Double-click speed threshold (ms)
  DRAG: true,                 // Enable drag selection
  DRAG_TRIGGER: "ctrl",       // Trigger key for drag (default: ctrl)
  TRANSLATE: false,           // Enable translation
  TRANSLATE_TRIGGER: "ctrlalt", // Trigger key for translation (default: ctrl+alt)
  DEEPL_AUTH_KEY: "",         // DeepL API authentication key
  POPUP_BG_COLOR: "#FFF59D",  // Popup background color
  POPUP_FONT_COLOR: "#000000", // Popup font color
  POPUP_FONT_SIZE: "11",      // Popup font size (pt)
  USE_DENY_LIST: false,       // Use deny list for URLs
  SAFE_URLS: null             // List of safe URLs
};

// Constants for positioning and styling
const MIN_X_OFFSET = 10;      // Minimum X offset from edge
const MAX_X_OFFSET = 30;      // Maximum X offset adjustment
const Y_OFFSET = 20;          // Vertical offset for popup
let popupWidth = 360;         // Popup width (px)
let popupBgColor = DEFAULT_OPTIONS.POPUP_BG_COLOR;
let popupFontColor = DEFAULT_OPTIONS.POPUP_FONT_COLOR;
let popupFontSize = DEFAULT_OPTIONS.POPUP_FONT_SIZE;
let doubleClickSpeed = DEFAULT_OPTIONS.DCLICK_SPEED;

// Parse Naver dictionary API response and format it as HTML
function parseEndic(response) {
  if (!response || !response.searchResultMap) return "";

  let html = "";
  let audioUrl = null;
  let audioCount = 0;
  const items = response.searchResultMap.searchResultListMap.WORD.items;

  if (items.length === 0) return html;

  for (let i = 0; i < items.length; i++) {
    const entry = items[i].handleEntry;

    // Extract audio URL from phonetic symbols if not already found
    if (!audioUrl) {
      for (let j = 0; j < items[i].searchPhoneticSymbolList.length; j++) {
        if (items[i].searchPhoneticSymbolList[0].symbolFile) {
          audioUrl = items[i].searchPhoneticSymbolList[0].symbolFile;
          break;
        }
      }
    }

    // Build word title with link
    const queryUrl = `https://en.dict.naver.com/#/search?query=${entry}`;
    html += `<div class="naverdic-wordTitle"><a href="${queryUrl}" target="_blank">${entry}</a>`;

    // Add part of speech if available
    const partOfSpeech = items[i].meansCollector[0].partOfSpeech;
    if (partOfSpeech) html += ` [${partOfSpeech}]`;

    // Add phonetic symbol and audio if available
    const phonetic = items[i].searchPhoneticSymbolList[0];
    if (audioUrl && audioCount === 0) {
      if (phonetic && phonetic.symbolValue) {
        html += `<span>[${phonetic.symbolValue}]</span>`;
      }
      const audioId = `proaudio${++audioCount}`;
      html += `<span><audio class="naverdic-audio" controls src="${audioUrl}" id="${audioId}" controlslist="nodownload nooption"></audio></span>`;
    }
    html += "</div>";

    // Add definitions
    const meanings = items[i].meansCollector[0].means;
    for (let j = 0; j < meanings.length; j++) {
      const className = j === meanings.length - 1 ? "naverdic-wordMeans-last" : "naverdic-wordMeans";
      html += `<div class="${className}">${meanings[j].order}. ${meanings[j].value}</div>`;
    }
  }
  return html;
}

// Create and display a popup with given content
function showPopup(event, content, top, left) {
  if (!content) return;

  const popup = document.createElement("div");
  popup.setAttribute("id", "popupFrame");
  const shadow = popup.attachShadow({ mode: "open" });

  // Fetch and apply CSS styles
  fetch(chrome.runtime.getURL("content.css"), { method: "GET" })
    .then(response => response.text())
    .then(css => {
      shadow.innerHTML += `<style>${css}</style>`;
    });

  // Create popup content element
  const popupContent = document.createElement("div");
  popupContent.innerHTML = content.replace(/(?:\r\n|\r|\n)/g, "<br />");
  popupContent.setAttribute("id", "popupShadow");
  popupContent.className = "popupFrame";
  popupContent.style.cssText = `
    top: ${top}px;
    left: ${left}px;
    width: ${popupWidth}px;
    background-color: ${popupBgColor};
    font-size: ${popupFontSize}pt;
    color: ${popupFontColor};
  `;
  shadow.appendChild(popupContent);
  document.body.appendChild(popup);

  // Adjust popup position if it exceeds window height
  const popupHeight = popupContent.clientHeight;
  if (event.clientY > popupHeight && event.clientY + popupHeight > window.innerHeight) {
    const adjustedTop = top - popupHeight - 2.5 * Y_OFFSET;
    shadow.getElementById("popupShadow").style.top = `${adjustedTop}px`;
  }

  // Prevent event propagation
  const stopPropagation = e => e.stopPropagation();
  popup.onmousedown = stopPropagation;
  popup.onmousemove = stopPropagation;
  popup.onmouseup = stopPropagation;
}

// Check if the correct modifier keys are pressed
function checkTrigger(event, trigger) {
  let isCtrl = event.ctrlKey;
  if (navigator.userAgentData?.platform.includes("mac")) isCtrl = event.metaKey;

  switch (trigger) {
    case "ctrl": return isCtrl && !event.altKey;
    case "alt": return !isCtrl && event.altKey;
    case "ctrlalt": return isCtrl && event.altKey;
    case "none":
    default: return !isCtrl && !event.altKey;
  }
}

// Fetch dictionary data from Naver and display it
async function fetchDictionary(event, query, top, left) {
  const url = `https://en.dict.naver.com/api3/enko/search?m=mobile&lang=ko&query=${query}`;
  chrome.runtime.sendMessage({ method: "GET", action: "endic", url }, response => {
    if (response) showPopup(event, parseEndic(response), top, left);
  });
}

// Fetch translation from DeepL API and display it
async function fetchTranslation(event, text, top, left, authKey) {
  const url = "https://api-free.deepl.com/v2/translate";
  chrome.runtime.sendMessage(
    {
      method: "POST",
      action: "translation",
      url,
      key: authKey,
      data: { text: [text], target_lang: "ko" }
    },
    response => {
      if (response) showPopup(event, response.translations[0].text, top, left);
    }
  );
}

// Handle text selection and trigger appropriate action
function processSelection(event, authKey = null, action = "search") {
  const top = event.clientY + window.scrollY + Y_OFFSET;
  let left = event.clientX - 120 + window.scrollX;

  // Adjust left position to stay within window bounds
  if (left < MIN_X_OFFSET) {
    left = MIN_X_OFFSET + window.scrollX;
  } else if (left + popupWidth + MAX_X_OFFSET >= window.innerWidth) {
    left = window.innerWidth - popupWidth - MIN_X_OFFSET - MAX_X_OFFSET;
  }

  const selection = window.getSelection();
  if (selection.rangeCount === 0) return;

  const text = selection.toString().trim();
  if (!text) return;

  if (action === "translate") {
    fetchTranslation(event, text, top, left, authKey);
  } else if (/^[A-Za-z]*$/.test(text[0]) && text.split(/\s+/).length < 6) {
    fetchDictionary(event, text.toLowerCase(), top, left);
  }
}

// Main function to initialize event listeners
function main() {
  chrome.storage.sync.get(
    {
      dclick: DEFAULT_OPTIONS.DCLICK,
      dclick_trigger_key: DEFAULT_OPTIONS.DCLICK_TRIGGER,
      dclick_speed: DEFAULT_OPTIONS.DCLICK_SPEED,
      drag: DEFAULT_OPTIONS.DRAG,
      drag_trigger_key: DEFAULT_OPTIONS.DRAG_TRIGGER,
      translate: DEFAULT_OPTIONS.TRANSLATE,
      translate_trigger_key: DEFAULT_OPTIONS.TRANSLATE_TRIGGER,
      deepl_auth_key: DEFAULT_OPTIONS.DEEPL_AUTH_KEY,
      popup_bgcolor: DEFAULT_OPTIONS.POPUP_BG_COLOR,
      popup_fontcolor: DEFAULT_OPTIONS.POPUP_FONT_COLOR,
      popup_fontsize: DEFAULT_OPTIONS.POPUP_FONT_SIZE,
      use_deny_list: DEFAULT_OPTIONS.USE_DENY_LIST,
      safe_urls: DEFAULT_OPTIONS.SAFE_URLS
    },
    settings => {
      if (!settings.dclick && !settings.drag && !settings.translate) return;

      // Check if current URL is in safe list if deny list is enabled
      if (settings.use_deny_list && settings.safe_urls) {
        const host = window.location.host;
        const safeUrls = settings.safe_urls.split(",");
        if (safeUrls?.[0]?.length > 3 && safeUrls.some(url => host.includes(url))) return;
      }

      // Update global variables with settings
      if (settings.popup_bgcolor) popupBgColor = settings.popup_bgcolor;
      if (settings.popup_fontcolor) popupFontColor = settings.popup_fontcolor;
      if (settings.popup_fontsize) popupFontSize = settings.popup_fontsize;
      if (settings.dclick_speed) doubleClickSpeed = settings.dclick_speed;

      let isMouseDown = false;
      let isDragging = false;
      let clickCount = 0;
      let clickTimeout;
      let startX;
      const dragThreshold = 8;

      // Mouse event handlers
      document.body.onmousedown = e => {
        isMouseDown = true;
        startX = e.pageX;
      };

      document.body.onmousemove = e => {
        if (isMouseDown && Math.abs(e.pageX - startX) > dragThreshold) {
          isDragging = true;
        }
      };

      document.body.onmouseup = e => {
        const existingPopup = document.getElementById("popupFrame");
        if (isDragging && settings.drag && checkTrigger(e, settings.drag_trigger_key)) {
          isMouseDown = isDragging = false;
          existingPopup?.remove();
          processSelection(e);
        } else if (isDragging && settings.translate && checkTrigger(e, settings.translate_trigger_key)) {
          isMouseDown = isDragging = false;
          existingPopup?.remove();
          processSelection(e, settings.deepl_auth_key, "translate");
        } else if (!isDragging && settings.dclick && checkTrigger(e, settings.dclick_trigger_key)) {
          isMouseDown = false;
          clickCount++;
          if (clickCount === 1) {
            existingPopup?.remove();
            clickTimeout = setTimeout(() => (clickCount = 0), doubleClickSpeed);
          } else {
            existingPopup?.remove();
            clearTimeout(clickTimeout);
            processSelection(e);
            clickCount = 0;
          }
        } else {
          isMouseDown = isDragging = false;
          existingPopup?.remove();
        }
      };
    }
  );
}

// Export functions and constants
export { DEFAULT_OPTIONS, main, parseEndic };