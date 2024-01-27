chrome.action.onClicked.addListener(() => {
  chrome.storage.local.get('star-trail-enabled', result => {
    const newValue = !result['star-trail-enabled'];
    chrome.storage.local.set({ 'star-trail-enabled': newValue });
    const message = { action: 'toggle-star-trail', value: newValue };
    chrome.tabs.query({}, tabs => tabs.forEach(tab => chrome.tabs.sendMessage(tab.id, message)));
  });
});