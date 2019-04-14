chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    title: `Learner's Dictionary`,
    id: 'Learner',
    contexts: ['selection'],
  });
  chrome.contextMenus.create({
    title: `English Dictionary`,
    id: 'En2En',
    contexts: ['selection'],
  });
});

chrome.contextMenus.onClicked.addListener(function(item, tab) {
  let urlPrefix;
  const { selectionText, menuItemId } = item;
  if (menuItemId === 'Learner') {
    urlPrefix = 'https://dictionary.cambridge.org/dictionary/learner-english/';
  } else {
    urlPrefix = 'https://dictionary.cambridge.org/dictionary/english/';
  }
  if (tab.index === -1) {
    chrome.tabs.create({ url: urlPrefix + selectionText });
  } else {
    chrome.tabs.create({
      url: urlPrefix + selectionText,
      index: tab.index + 1,
    });
  }
});
