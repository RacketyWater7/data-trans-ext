const options = (message) => {
  return {
    type: "basic",
    title: "Data Trans",
    message: message,
    iconUrl: "/images/48.png",
  };
};

let copy_address = document.getElementById("copy_address");
if (copy_address) {
  copy_address.addEventListener("click", function (e) {
    e.preventDefault();
    try {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(
          tabs[0].id,
          {
            messageType: "ACTION_SAVE_ADDRESS",
          },
          (response) => {
            console.log(response);
          }
        );
      });
      // window.close();
    } catch (exception) {
      toast.error("Error has occurred. Please refresh page and try again.");
    }
  });
}
