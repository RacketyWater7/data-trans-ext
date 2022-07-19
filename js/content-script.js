// /**
//  *
//  * @param {number} ms
//  * @returns promise
//  */
// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

window.onload = function () {
  init();
};

// Main Function
/**
 * check for the pathname and follow up functions execution
 */
function init() {
  try {
    let { pathname } = window.location;
    console.log(`pathname`, pathname);
    switch (pathname) {
      case "/sitepath": {
        chrome.storage.sync.get(["fixedDetails"], function (result) {
          if (result && result.fixedDetails) {
          }
        });

        break;
      }
      default:
        return false;
    }
  } catch (err) {
    let desc = `${err.toString()} in init() in Content Script`;
    console.log(desc);
  }
  // }
}

/**
 * This function populates the shipping details
 *  * @param {object} data
 */
const newfunc = (data) => {};
