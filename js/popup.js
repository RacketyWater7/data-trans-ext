let copy_address = document.getElementById("copy_address");
if (copy_address) {
  copy_address.addEventListener("click", function (e) {
    e.preventDefault();
    try {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {
          messageType: "ACTION_SAVE_ADDRESS",
        });
      });
      // window.close();
    } catch (exception) {
      toast.error("Error has occurred. Please refresh page and try again.");
    }
  });
}
let wmart_to_diypest = document.getElementById("wmart_to_diypest");
if (wmart_to_diypest) {
  wmart_to_diypest.addEventListener(
    "click",
    function (e) {
      e.preventDefault();
      try {
        console.log("wmart_to_diypest");
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          chrome.tabs.sendMessage(tabs[0].id, {
            messageType: "ACTION_WMART_TO_DIYPEST",
          });
        });
        // window.close();
      } catch (exception) {
        toast.error("Error has occurred. Please refresh page and try again.");
      }
    },
    false
  );
}
