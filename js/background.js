chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  let { type, data } = request;
  switch (type) {
    case "SHOW_NOTIFICATION": {
      chrome.notifications.create(data);
      return true;
    }
    default:
      return false;
  }
});
