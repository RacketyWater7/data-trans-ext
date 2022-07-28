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

const pasteData = (elem, msgString) => {
  elem.addEventListener(
    "click",
    function (e) {
      e.preventDefault();
      try {
        console.log(msgString);
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          chrome.tabs.sendMessage(tabs[0].id, {
            messageType: `${msgString}`,
          });
        });
        // window.close();
      } catch (exception) {
        toast.error("Error has occurred. Please refresh page and try again.");
      }
    },
    false
  );
};
// DIYPEST
let wmart_to_diypest = document.getElementById("wmart_to_diypest");
if (wmart_to_diypest) {
  pasteData(wmart_to_diypest, "ACTION_WMART_TO_DIYPEST");
}
let amz_to_diypest = document.getElementById("amz_to_diypest");
if (amz_to_diypest) {
  pasteData(amz_to_diypest, "ACTION_AMZ_TO_DIYPEST");
}

let wooc_to_diypest = document.getElementById("wooc_to_diypest");
if (wooc_to_diypest) {
  pasteData(wooc_to_diypest, "ACTION_WOOC_TO_DIYPEST");
}
// DORSHIP
let wmart_to_dorship = document.getElementById("wmart_to_dorship");
if (wmart_to_dorship) {
  pasteData(wmart_to_dorship, "ACTION_WMART_TO_DORSHIP");
}
let amz_to_dorship = document.getElementById("amz_to_dorship");
if (amz_to_dorship) {
  pasteData(amz_to_dorship, "ACTION_AMZ_TO_DORSHIP");
}
let wooc_to_dorship = document.getElementById("wooc_to_dorship");
if (wooc_to_dorship) {
  pasteData(wooc_to_dorship, "ACTION_WOOC_TO_DORSHIP");
}
// PESTRONG
let wmart_to_pestrong = document.getElementById("wmart_to_pestrong");
if (wmart_to_pestrong) {
  pasteData(wmart_to_pestrong, "ACTION_WMART_TO_PESTRONG");
}
let amz_to_pestrong = document.getElementById("amz_to_pestrong");
if (amz_to_pestrong) {
  pasteData(amz_to_pestrong, "ACTION_AMZ_TO_PESTRONG");
}
let wooc_to_pestrong = document.getElementById("wooc_to_pestrong");
if (wooc_to_pestrong) {
  pasteData(wooc_to_pestrong, "ACTION_WOOC_TO_PESTRONG");
}
// Pedchem
let wmart_to_pedchem = document.getElementById("wmart_to_pedchem");
if (wmart_to_pedchem) {
  pasteData(wmart_to_pedchem, "ACTION_WMART_TO_PEDCHEM");
}
let amz_to_pedchem = document.getElementById("amz_to_pedchem");
if (amz_to_pedchem) {
  pasteData(amz_to_pedchem, "ACTION_AMZ_TO_PEDCHEM");
}
let wooc_to_pedchem = document.getElementById("wooc_to_pedchem");
if (wooc_to_pedchem) {
  pasteData(wooc_to_pedchem, "ACTION_WOOC_TO_PEDCHEM");
}
// Pirateship
let wmart_to_pirateship = document.getElementById("wmart_to_pirateship");
if (wmart_to_pirateship) {
  pasteData(wmart_to_pirateship, "ACTION_WMART_TO_PIRATESHIP");
}
let amz_to_pirateship = document.getElementById("amz_to_pirateship");
if (amz_to_pirateship) {
  pasteData(amz_to_pirateship, "ACTION_AMZ_TO_PIRATESHIP");
}
let wooc_to_pirateship = document.getElementById("wooc_to_pirateship");
if (wooc_to_pirateship) {
  pasteData(wooc_to_pirateship, "ACTION_WOOC_TO_PIRATESHIP");
}
