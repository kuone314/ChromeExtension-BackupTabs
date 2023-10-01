function polling() {
  setTimeout(polling, 1000 * 30);

  chrome.tabs.onUpdated.addListener(function (tab) {
    chrome.tabs.query({}, function (tabs) {
      const urlAry = tabs.map(tab => tab.url ?? "");
      if (urlAry.length <= 25) { return; }
      chrome.storage.local.set({ 'key': urlAry });
    });
  });
}

polling();
