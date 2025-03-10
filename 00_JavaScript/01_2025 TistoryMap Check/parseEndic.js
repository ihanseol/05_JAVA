const DEFAULT_OPTIONS = {
  DCLICK: true,
  DCLICK_TRIGGER: "none",
  DCLICK_SPEED: 400,
  DRAG: true,
  DRAG_TRIGGER: "ctrl",
  TRANSLATE: false,
  TRANSLATE_TRIGGER: "ctrlalt",
  DEEPL_AUTH_KEY: "",
  POPUP_BG_COLOR: "#FFF59D",
  POPUP_FONT_COLOR: "#000000",
  POPUP_FONT_SIZE: "11",
  USE_DENY_LIST: false,
  SAFE_URLS: null,
};

const PADDING = 10;
const OFFSET_Y = 30;
const OFFSET_X = 20;
const POPUP_WIDTH = 360;

let bgColor = DEFAULT_OPTIONS.POPUP_BG_COLOR;
let fontColor = DEFAULT_OPTIONS.POPUP_FONT_COLOR;
let fontSize = DEFAULT_OPTIONS.POPUP_FONT_SIZE;
let clickSpeed = DEFAULT_OPTIONS.DCLICK_SPEED;

function parseEndic(response) {
  if (!response || !response.searchResultMap) return;

  let resultHTML = "";
  let audioSrc = null;
  let audioIndex = 0;
  let wordItems = response.searchResultMap.searchResultListMap.WORD.items;

  if (wordItems.length > 0) {
    for (let item of wordItems) {
      let word = item.handleEntry;
      if (!audioSrc) {
        for (let phonetic of item.searchPhoneticSymbolList) {
          if (phonetic.symbolFile) {
            audioSrc = phonetic.symbolFile;
            break;
          }
        }
      }

      let link = `https://en.dict.naver.com/#/search?query=${word}`;
      resultHTML += `<div class="naverdic-wordTitle">
                      <a href="${link}" target="_blank">${word}</a>`;

      let partOfSpeech = item.meansCollector[0].partOfSpeech;
      if (partOfSpeech) resultHTML += ` [${partOfSpeech}]`;

      let phonetic = item.searchPhoneticSymbolList[0];
      if (audioSrc && audioIndex === 0) {
        if (phonetic && phonetic.symbolValue) {
          resultHTML += `<span>[${phonetic.symbolValue}]</span>`;
        }
        let audioId = `proaudio${++audioIndex}`;
        resultHTML += `<span><audio class="naverdic-audio" controls src="${audioSrc}" 
                        id="${audioId}" controlslist="nodownload nooption"></audio></span>`;
      }
      resultHTML += `</div>`;

      let meanings = item.meansCollector[0].means;
      meanings.forEach((meaning, index) => {
        let className = index === meanings.length - 1 ? "naverdic-wordMeans-last" : "naverdic-wordMeans";
        resultHTML += `<div class="${className}">${meaning.order}. ${meaning.value}</div>`;
      });
    }
  }
  return resultHTML;
}

function showPopup(event, content, top, left) {
  if (!content) return;
  let popup = document.createElement("div");
  popup.setAttribute("id", "popupFrame");
  let shadow = popup.attachShadow({ mode: "open" });

  fetch(chrome.runtime.getURL("content.css"))
    .then(res => res.text())
    .then(css => {
      shadow.innerHTML += `<style>${css}</style>`;
    });

  let popupContent = document.createElement("div");
  popupContent.innerHTML = content.replace(/(?:\r\n|\r|\n)/g, "<br />");
  popupContent.setAttribute("id", "popupShadow");
  popupContent.className = "popupFrame";
  popupContent.style.cssText = `
    top: ${top}px;
    left: ${left}px;
    width: ${POPUP_WIDTH}px;
    background-color: ${bgColor};
    font-size: ${fontSize}pt;
    color: ${fontColor};
  `;
  
  shadow.appendChild(popupContent);
  document.body.appendChild(popup);
}

function handleSelection(event, authKey = null, type = "search") {
  let top = event.clientY + window.scrollY + OFFSET_Y;
  let left = event.clientX - 120 + window.scrollX;
  if (event.clientX - 120 < PADDING) left = PADDING + window.scrollX;
  if (left + POPUP_WIDTH + OFFSET_X >= window.innerWidth) left = window.innerWidth - POPUP_WIDTH - PADDING - OFFSET_X;

  let selection = window.getSelection();
  if (selection.rangeCount > 0) {
    let text = selection.toString().trim();
    if (!text) return;
    
    if (type === "translate") {
      translateText(event, text, top, left, authKey);
    } else if (/^[A-Za-z]*$/.test(text[0]) && text.split(/\s+/).length < 6) {
      searchDictionary(event, text.toLowerCase(), top, left);
    }
  }
}

function initialize() {
  chrome.storage.sync.get(DEFAULT_OPTIONS, (options) => {
    if (!options.DCLICK && !options.DRAG && !options.TRANSLATE) return;
    
    let isMouseDown = false;
    let isDragging = false;
    let clickCount = 0;
    let startX = 0;
    let timer;
    
    document.body.onmousedown = (event) => {
      isMouseDown = true;
      startX = event.pageX;
    };
    
    document.body.onmousemove = (event) => {
      if (isMouseDown && Math.abs(event.pageX - startX) > 8) {
        isDragging = true;
      }
    };
    
    document.body.onmouseup = (event) => {
      if (isDragging && options.DRAG) {
        isMouseDown = isDragging = false;
        handleSelection(event);
      } else if (!isDragging && options.DCLICK) {
        isMouseDown = false;
        clickCount++;
        if (clickCount === 1) {
          timer = setTimeout(() => { clickCount = 0; }, clickSpeed);
        } else {
          clearTimeout(timer);
          handleSelection(event);
          clickCount = 0;
        }
      } else {
        isMouseDown = isDragging = false;
      }
    };
  });
}

export { DEFAULT_OPTIONS, initialize as main, parseEndic };
