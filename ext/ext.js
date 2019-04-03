chrome.runtime.onInstalled.addListener(function() {
  console.log(123);
  chrome.contextMenus.create({
    title: "Cambridge Learner's Dictionary",
    id: 'main',
    contexts: ['selection'],
  });
});

chrome.contextMenus.onClicked.addListener(function(item, tab) {
  let url =
    'https://dictionary.cambridge.org/dictionary/learner-english/' +
    item.selectionText;
  if (tab.index === -1) {
    chrome.tabs.create({ url: url });
  } else {
    chrome.tabs.create({ url: url, index: tab.index + 1 });
  }
});
