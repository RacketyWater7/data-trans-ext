/**
 *
 * @param {number} ms
 * @returns promise
 */
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 *
 * @param {string} message
 * @returns object
 */
function options(message) {
  return {
    type: "basic",
    title: "Data Trans",
    message: message,
    iconUrl: "/images/48.png",
  };
}

/**
 * Notes:
 * The most used ones
 * 1- Walmart address to Pirateship address
 * 2- Amazon address to dropship.domyown.com + diypestcontrol.com + Pestrong + Pedchem
 *
 *
 * Sites to copy the data from:
 * seller.walmart.com
 * sellercentral.amazon.com
 * www.pestcontrolwholesale.com
 *
 * Sites to paste the data to:
 * diypestcontrol.com
 * dropship.domyown.com
 * ship.pirateship.com
 * www.pestrong.com
 * www.pedchem.com
 * */

// Main Function
/**
 * check for the pathname and follow up functions execution
 */
window.onload = function () {
  try {
    chrome.runtime.onMessage.addListener((request, sender, response) => {
      switch (request.messageType) {
        case "ACTION_SAVE_ADDRESS": {
          saveOrderAddress();
          break;
        }
        case "ACTION_WMART_TO_DIYPEST": {
          console.log("ACTION_WMART_TO_DIYPEST");
          pasteToDiypest("walmart_address");
          break;
        }
        case "ACTION_AMZ_TO_DIYPEST": {
          console.log("ACTION_AMZ_TO_DIYPEST");
          pasteToDiypest("amazon_address");
          break;
        }
        case "ACTION_WOOC_TO_DIYPEST": {
          console.log("ACTION_WOOC_TO_DIYPEST");
          pasteToDiypest("woocommerce_address");
          break;
        }
        case "ACTION_WMART_TO_DORSHIP": {
          console.log("ACTION_WMART_TO_DORSHIP");
          pasteToDorShip("walmart_address");
          break;
        }
        case "ACTION_AMZ_TO_DORSHIP": {
          console.log("ACTION_AMZ_TO_DORSHIP");
          pasteToDorShip("amazon_address");
          break;
        }
        case "ACTION_WOOC_TO_DORSHIP": {
          console.log("ACTION_WOOC_TO_DORSHIP");
          pasteToDorShip("woocommerce_address");
          break;
        }
        case "ACTION_WMART_TO_PESTRONG": {
          console.log("ACTION_WMART_TO_PESTRONG");
          pasteToPestStrong("walmart_address");
          break;
        }
        case "ACTION_AMZ_TO_PESTRONG": {
          console.log("ACTION_AMZ_TO_PESTRONG");
          pasteToPestStrong("amazon_address");
          break;
        }
        case "ACTION_WOOC_TO_PESTRONG": {
          console.log("ACTION_WOOC_TO_PESTRONG");
          pasteToPestStrong("woocommerce_address");
          break;
        }
        case "ACTION_WMART_TO_PEDCHEM": {
          console.log("ACTION_WMART_TO_PEDCHEM");
          pasteToPedChem("walmart_address");
          break;
        }
        case "ACTION_AMZ_TO_PEDCHEM": {
          console.log("ACTION_AMZ_TO_PEDCHEM");
          pasteToPedChem("amazon_address");
          break;
        }
        case "ACTION_WOOC_TO_PEDCHEM": {
          console.log("ACTION_WOOC_TO_PEDCHEM");
          pasteToPedChem("woocommerce_address");
          break;
        }

        default:
          return false;
      }
    });

    // let { hostname } = window.location;
    // console.log(`host`, hostname);
    // switch (hostname) {
    //   case "seller.walmart.com": {
    //     // chrome.storage.sync.get(["fixedDetails"], function (result) {
    //     //   if (result && result.fixedDetails) {
    //     //   }
    //     // });
    //     await sleep(2000);
    //     console.log("at walmart");
    //     let addressClass = document.getElementsByClassName("G42Nv")[1];
    //     let fullName = addressClass.firstChild.innerText;
    //     let fullAddress = addressClass.firstChild.nextElementSibling.innerText;
    //     console.log("fullName", fullName);
    //     console.log("fullAddress", fullAddress);
    //     fullAddress = fullAddress.split(",");
    //     // 221 Fairlamb Ave, Havertown, PA, 19083, USA
    //     let address = fullAddress[0];
    //     let city = fullAddress[1];
    //     let state = fullAddress[2];
    //     let zip = fullAddress[3];
    //     console.log("address", address);
    //     console.log("City", city);
    //     console.log("State", state);
    //     console.log("Zip", zip);

    //     break;
    //   }
    //   case "sellercentral.amazon.com": {
    //     // John Jensen
    //     // 6603 N IL ROUTE 2
    //     // OREGON, IL 61061-9327
    //     console.log("at amazon");
    //     sleep(2000);
    //     let fullAddress =
    //       document.getElementsByClassName("a-normal")[2].innerText;
    //     fullAddress = fullAddress.split(`\n`);
    //     let fullName = fullAddress[0];
    //     let address = fullAddress[1];
    //     let address2Bundle = fullAddress[2];
    //     // split numbers and letters in separate arrays
    //     let zip = address2Bundle.split(/[^0-9]/);
    //     zip = `${zip[zip.length - 2]}`;
    //     let state = address2Bundle.split(/[^a-zA-Z]/);
    //     console.log("preState:", state);
    //     state = state[2] === "" ? state[3] : state[2];
    //     address2Bundle = address2Bundle.split(",");
    //     let city = address2Bundle[0];
    //     // let state = address2Bundle[1].split(" ")[0];
    //     // let zip = address2Bundle[1].split(" ")[1];
    //     console.log("fullName", fullName);
    //     console.log("address", address);
    //     console.log("city", city);
    //     console.log("state", state);
    //     console.log("zip", zip);
    //     break;
    //   }
    //   case "www.pestcontrolwholesale.com": {
    //     if (window.location.hostname === "www.pestcontrolwholesale.com") {
    //       console.log("at pestcontrol");
    //       sleep(2000);

    //       let fullAddress =
    //         document.getElementsByClassName("address")[1].innerText;

    //       fullAddress = fullAddress ? fullAddress.split(`\n`) : [];
    //       console.log("fullAddress", fullAddress);
    //       let fullName, address2, address, addressBundle;
    //       if (fullAddress.length === 4) {
    //         fullName = fullAddress[0];
    //         address2 = fullAddress[1];
    //         address = fullAddress[2];
    //         addressBundle = fullAddress[3];
    //       } else {
    //         fullName = fullAddress[0];
    //         address = fullAddress[1];
    //         addressBundle = fullAddress[2];
    //       }
    //       console.log("addressBundle", addressBundle);
    //       try {
    //         let city = addressBundle.split(",")[0];

    //         let state = addressBundle.split(",")[1].split(" ")[1];
    //         let zip = addressBundle.split(",")[1].split(" ")[2];
    //         console.log("fullName", fullName);
    //         console.log("address", address);
    //         console.log("address2", address2);
    //         console.log("city", city);
    //         console.log("state", state);
    //         console.log("zip", zip);
    //       } catch (error) {
    //         console.log("I'm probably on the wrong page");
    //       }
    //     }

    //     break;
    //   }
    //   case "dropship.domyown.com": {
    //     console.log("at dropship");
    //     sleep(2000);
    //     try {
    //       let fullName = "John Jensen";
    //       let address = "6603 N IL ROUTE 2";
    //       let address2 = "OREGON, IL 61061-9327";
    //       let city = "OREGON";
    //       let state = "Illinois";
    //       let zip = "61061-9327";
    //       zip = zip.split("-")[0];
    //       document.getElementsByName("delivery_name")[0].value = fullName;
    //       document.getElementsByName("delivery_street_address")[0].value =
    //         address;
    //       document.getElementsByName("delivery_street_address_2")[0].value =
    //         address2;

    //       document.getElementsByName("delivery_city")[0].value = city;
    //       let deliveryState = document.getElementsByName("delivery_state")[0];
    //       document.getElementsByName("delivery_postcode")[0].value = zip;

    //       if (deliveryState) {
    //         for (let i = 0; i < deliveryState.options.length; i++) {
    //           if (deliveryState.options[i].text.includes(state)) {
    //             deliveryState.selectedIndex = i;
    //             break;
    //           }
    //         }
    //       }
    //     } catch (error) {
    //       console.log("Problem in dropship", error);
    //     }
    //     break;
    //   }
    //   case "diypestcontrol.com": {
    //     console.log("at diypestcontrol");
    //
    //     break;
    //   }
    //   case "www.pestrong.com": {
    //     console.log("at peststrong");
    //     sleep(2000);
    //     try {
    //       let fullName = "John Jensen";
    //       let firstName = fullName.split(" ")[0];
    //       let lastName = fullName.split(" ")[1];
    //       let address = "6603 N IL ROUTE 2";
    //       let address2 = "OREGON, IL 61061-9327";
    //       let city = "OREGON";
    //       let state = "Alabama";
    //       let zip = "61061-9327";
    //       zip = zip.split("-")[0];
    //       document.getElementById("firstname").value = firstName;
    //       document.getElementById("lastname").value = lastName;
    //       document.getElementById("address1").value = address;
    //       document.getElementById("address2").value = address2;

    //       document.getElementById("city").value = city;
    //       sleep(2000);

    //       let deliveryState = document.getElementsByName("id_state")[0];
    //       document.getElementById("postcode").value = zip;

    //       if (deliveryState) {
    //         for (let i = 0; i < deliveryState.options.length; i++) {
    //           console.log("state: ", state);
    //           if (deliveryState.options[i].text.includes(state)) {
    //             deliveryState.selectedIndex = i;
    //             break;
    //           }
    //         }
    //       }
    //     } catch (error) {
    //       console.log("Problem in diypestcontrol", error);
    //     }
    //     break;
    //   }
    //   case "www.pedchem.com": {
    //     console.log("at pedchem");
    //     sleep(2000);
    //     try {
    //       let fullName = "John Jensen";
    //       let firstName = fullName.split(" ")[0];
    //       let lastName = fullName.split(" ")[1];
    //       let address = "6603 N IL ROUTE 2";
    //       let address2 = "OREGON, IL 61061-9327";
    //       let city = "OREGON";
    //       let state = "Alabama";
    //       let zip = "61061-9327";
    //       zip = zip.split("-")[0];
    //       document.getElementsByName("firstName")[0].value = firstName;
    //       document.getElementsByName("lastName")[0].value = lastName;
    //       document.getElementsByName("address1")[0].value = address;
    //       document.getElementsByName("address2")[0].value = address2;

    //       document.getElementsByName("city")[0].value = city;

    //       let deliveryState = document.getElementsByName("zone")[0];
    //       document.getElementsByName("postalCode")[0].value = zip;

    //       if (deliveryState) {
    //         for (let i = 0; i < deliveryState.options.length; i++) {
    //           console.log("state: ", state);
    //           if (deliveryState.options[i].text.includes(state)) {
    //             deliveryState.selectedIndex = i;
    //             break;
    //           }
    //         }
    //       }
    //     } catch (error) {
    //       console.log("Problem in diypestcontrol", error);
    //     }
    //     break;
    //   }
    //   default:
    //     return false;
    // }
  } catch (err) {
    let desc = `${err.toString()} in init() in Content Script`;
    console.log(desc);
  }
  // }
};
/**
 * This function pastes the address on dorship
 * @param {string} storageName
 */
const pasteToDorShip = async (storageName) => {
  try {
    await sleep(1000);
    try {
      chrome.storage.sync.get(storageName, (result) => {
        let data;
        data = result[storageName];
        console.log("inside data: ", data, "result: ", result);
        let fullName = data.fullName;
        let address = data.address;
        let address2 = data.address2 ? data.address2 : "";
        let city = data.city;
        let state = getStateAbriviaiton(data.state);
        let zip = data.zip;
        document.getElementsByName("delivery_name")[0].value = fullName;
        document.getElementsByName("delivery_street_address")[0].value =
          address;
        document.getElementsByName("delivery_street_address_2")[0].value =
          address2;

        document.getElementsByName("delivery_city")[0].value = city;
        let deliveryState = document.getElementsByName("delivery_state")[0];
        document.getElementsByName("delivery_postcode")[0].value = zip;

        if (deliveryState) {
          for (let i = 0; i < deliveryState.options.length; i++) {
            if (deliveryState.options[i].text.includes(state)) {
              deliveryState.selectedIndex = i;
              break;
            }
          }
        }
      });
    } catch (error) {
      console.log("Problem in dorship", error);
    }
  } catch (err) {
    let desc = `${err.toString()} in pasteToDorShip() in Content Script`;
    console.log(desc);
  }
};
/**
 * This function pastes the address on pestrong
 * @param {string} storageName
 */
const pasteToPestStrong = async (storageName) => {
  try {
    await sleep(1000);
    try {
      chrome.storage.sync.get(storageName, (result) => {
        let data;
        data = result[storageName];
        console.log("inside data: ", data, "result: ", result);
        let fullName = data.fullName;
        fullName = fullName.split(" ");
        console.log("fullName: ", fullName);
        let firstName, lastName;
        if (fullName.length > 2) {
          firstName = fullName[0];
          lastName = fullName[1] + " " + fullName[2];
        } else {
          firstName = fullName[0];
          lastName = fullName[1];
        }
        let address = data.address;
        let address2 = data.address2 ? data.address2 : "";
        let city = data.city;
        let state = getStateAbriviaiton(data.state);
        let zip = data.zip;
        document.getElementById("firstname").value = firstName;
        document.getElementById("lastname").value = lastName;
        document.getElementById("address1").value = address;
        document.getElementById("address2").value = address2;

        document.getElementById("city").value = city;
        sleep(2000);

        let deliveryState = document.getElementsByName("id_state")[0];
        document.getElementById("postcode").value = zip;

        if (deliveryState) {
          for (let i = 0; i < deliveryState.options.length; i++) {
            console.log("state: ", state);
            if (deliveryState.options[i].text.includes(state)) {
              deliveryState.selectedIndex = i;
              break;
            }
          }
        }
      });
    } catch (error) {
      console.log("Problem in pestrong", error);
    }
  } catch (err) {
    let desc = `${err.toString()} in pasteToPestStrong() in Content Script`;
    console.log(desc);
  }
};
/**
 * This function pastes the address on pedchem
 * @param {string} storageName
 */
const pasteToPedChem = async (storageName) => {
  try {
    await sleep(1000);
    try {
      chrome.storage.sync.get(storageName, (result) => {
        let data;
        data = result[storageName];
        console.log("inside data: ", data, "result: ", result);
        let fullName = data.fullName;
        fullName = fullName.split(" ");
        console.log("fullName: ", fullName);
        let firstName, lastName;
        if (fullName.length > 2) {
          firstName = fullName[0];
          lastName = fullName[1] + " " + fullName[2];
        } else {
          firstName = fullName[0];
          lastName = fullName[1];
        }

        let address = data.address;
        let address2 = data.address2 ? data.address2 : "";
        let city = data.city;
        let state = getStateAbriviaiton(data.state);
        console.log("new state: ", state);
        let zip = data.zip;
        document.getElementsByName("firstName")[0].value = firstName;
        document.getElementsByName("lastName")[0].value = lastName;
        document.getElementsByName("address1")[0].value = address;
        document.getElementsByName("address2")[0].value = address2;

        document.getElementsByName("city")[0].value = city;

        let deliveryState = document.getElementsByName("zone")[0];
        document.getElementsByName("postalCode")[0].value = zip;

        if (deliveryState) {
          for (let i = 0; i < deliveryState.options.length; i++) {
            console.log("state: ", state);
            if (deliveryState.options[i].text.includes(state)) {
              deliveryState.selectedIndex = i;
              break;
            }
          }
        }
      });
    } catch (error) {
      console.log("Problem in pedchem", error);
    }
  } catch (err) {
    let desc = `${err.toString()} in pasteToPedchem() in Content Script`;
    console.log(desc);
  }
};

/**
 * This function pastes the address on diypestcontrol.com
 * @param {string} storageName
 */
const pasteToDiypest = async (storageName) => {
  try {
    await sleep(1000);
    try {
      chrome.storage.sync.get(storageName, (result) => {
        let data;
        data = result[storageName];
        console.log("inside data: ", data, "result: ", result);
        let fullName = data.fullName;
        fullName = fullName.split(" ");
        console.log("fullName: ", fullName);
        let firstName, lastName;
        if (fullName.length > 2) {
          firstName = fullName[0];
          lastName = fullName[1] + " " + fullName[2];
        } else {
          firstName = fullName[0];
          lastName = fullName[1];
        }

        let address = data.address;
        let address2 = data.address2 ? data.address2 : "";
        let city = data.city;
        let state = getStateAbriviaiton(data.state);
        console.log("new state: ", state);
        let zip = data.zip;
        // zip = zip.split("-")[0];
        document.getElementById("firstname").value = firstName;
        document.getElementById("lastname").value = lastName;
        document.getElementById("street_1").value = address;
        document.getElementById("street_2").value = address2;

        document.getElementById("city").value = city;
        let deliveryState = document.getElementsByName("region_id")[0];
        document.getElementById("zip").value = zip;

        if (deliveryState) {
          for (let i = 0; i < deliveryState.options.length; i++) {
            console.log("state: ", state);
            if (deliveryState.options[i].text.includes(state)) {
              deliveryState.selectedIndex = i;
              break;
            }
          }
        }
      });
    } catch (error) {
      console.log("Problem in diypestcontrol", error);
    }
  } catch (err) {
    let desc = `${err.toString()} in pasteToDiyPest() in Content Script`;
    console.log(desc);
  }
};
/**
 * This function saves the order address
 */
const saveOrderAddress = async () => {
  let { hostname } = window.location;
  switch (hostname) {
    case "seller.walmart.com": {
      await sleep(1000);
      try {
        console.log("copying walmart address");
        let addressClass = document.getElementsByClassName("G42Nv")[1];
        let fullName = addressClass.firstChild.innerText;
        let fullAddress = addressClass.firstChild.nextElementSibling.innerText;
        fullAddress = fullAddress.split(",");
        // 221 Fairlamb Ave, Havertown, PA, 19083, USA
        let address = fullAddress[0];
        let city = fullAddress[fullAddress.length - 4].split(" ")[1];
        let state = fullAddress[fullAddress.length - 3].split(" ")[1];
        let zip = fullAddress[fullAddress.length - 2].split(" ")[1];

        const walmart_address = {
          fullName,
          address,
          city,
          state,
          zip,
        };
        console.log("walmart_address: ", walmart_address);
        try {
          chrome.storage.sync.set(
            {
              walmart_address: walmart_address,
            },
            function () {
              console.log("Walmart address is saved");
              chrome.runtime.sendMessage({
                data: options("Walmart address is saved successfully"),
                type: "SHOW_NOTIFICATION",
              });
            }
          );
        } catch (err) {
          console.log("Error in saving walmart address", err);
          chrome.runtime.sendMessage({
            data: options("Error in saving walmart address"),
            type: "SHOW_NOTIFICATION",
          });
        }
      } catch (error) {
        console.log("error while saving walmart address: ", error);
      }

      break;
    }
    case "sellercentral.amazon.com": {
      try {
        // John Jensen
        // 6603 N IL ROUTE 2
        // OREGON, IL 61061-9327
        console.log("copying amazon address");
        await sleep(1000);
        let fullAddress =
          document.getElementsByClassName("a-normal")[2].innerText;
        fullAddress = fullAddress.split(`\n`);
        let fullName = fullAddress[0];
        let address = fullAddress[1];
        let address2Bundle = fullAddress[2];
        let zip = address2Bundle.split(/[^0-9]/);
        zip = `${zip[zip.length - 2]}`;
        let state = address2Bundle.split(/[^a-zA-Z]/);
        console.log("preState:", state);
        state = state[2] === "" ? state[3] : state[2];
        address2Bundle = address2Bundle.split(",");
        let city = address2Bundle[0];
        // let state = address2Bundle[1].split(" ")[0];
        // let zip = address2Bundle[1].split(" ")[1];

        // console.log("fullName", fullName);
        // console.log("address", address);
        // console.log("city", city);
        // console.log("state", state);
        // console.log("zip", zip);
        const amazon_address = {
          fullName,
          address,
          city,
          state,
          zip,
        };
        console.log("amazon_address: ", amazon_address);
        try {
          chrome.storage.sync.set(
            {
              amazon_address: amazon_address,
            },
            function () {
              console.log("Amazon address is saved");
              chrome.runtime.sendMessage({
                data: options("Amazon address is saved successfully"),
                type: "SHOW_NOTIFICATION",
              });
            }
          );
        } catch (err) {
          console.log("Error in saving amazon address", err);
          chrome.runtime.sendMessage({
            data: options("Error in saving amazon address"),
            type: "SHOW_NOTIFICATION",
          });
        }
      } catch (error) {
        console.log("error while saving amazon address: ", error);
      }
      break;
    }
    case "www.pestcontrolwholesale.com": {
      console.log("at pestcontrol");
      await sleep(1000);

      let fullAddress = document.getElementsByClassName("address")[1].innerText;

      fullAddress = fullAddress ? fullAddress.split(`\n`) : [];
      let fullName, address2, address, addressBundle;
      if (fullAddress.length === 4) {
        fullName = fullAddress[0];
        address2 = fullAddress[1];
        address = fullAddress[2];
        addressBundle = fullAddress[3];
      } else {
        fullName = fullAddress[0];
        address = fullAddress[1];
        addressBundle = fullAddress[2];
      }
      try {
        let city = addressBundle.split(",")[0];

        let state = addressBundle.split(",")[1].split(" ")[1];
        let zip = addressBundle.split(",")[1].split(" ")[2];
        // console.log("fullName", fullName);
        // console.log("address", address);
        // console.log("address2", address2);
        // console.log("city", city);
        // console.log("state", state);
        // console.log("zip", zip);
        let woocommerce_address;
        if (address2) {
          woocommerce_address = {
            fullName,
            address,
            address2,
            city,
            state,
            zip,
          };
        } else {
          woocommerce_address = {
            fullName,
            address,
            city,
            state,
            zip,
          };
        }
        console.log("woocommerce_address: ", woocommerce_address);

        try {
          chrome.storage.sync.set(
            {
              woocommerce_address: woocommerce_address,
            },
            function () {
              console.log("Woocommerce address is saved");
              chrome.runtime.sendMessage({
                data: options("Woocommerce address is saved successfully"),
                type: "SHOW_NOTIFICATION",
              });
            }
          );
        } catch (err) {
          console.log("Error in saving woocommerce address", err);
          chrome.runtime.sendMessage({
            data: options("Error in saving woocommerce address"),
            type: "SHOW_NOTIFICATION",
          });
        }
      } catch (error) {
        console.log("error in saving pestControl address", error);
      }
      break;
    }
    default: {
      chrome.runtime.sendMessage(
        {
          data: options("Invalid website address"),
          type: "SHOW_NOTIFICATION",
        },
        function (response) {
          console.log(response);
        }
      );
    }
  }
};

function getStateAbriviaiton(state) {
  let statesArr = [
    {
      name: "Alabama",
      abbreviation: "AL",
    },
    {
      name: "Alaska",
      abbreviation: "AK",
    },
    {
      name: "American Samoa",
      abbreviation: "AS",
    },
    {
      name: "Arizona",
      abbreviation: "AZ",
    },
    {
      name: "Arkansas",
      abbreviation: "AR",
    },
    {
      name: "Armed Forces Africa",
      abbreviation: "AE",
    },
    {
      name: "Armed Forces Americas",
      abbreviation: "AA",
    },
    {
      name: "Armed Forces Canada",
      abbreviation: "AE",
    },
    {
      name: "Armed Forces Europe",
      abbreviation: "AE",
    },
    {
      name: "Armed Forces Middle East",
      abbreviation: "AE",
    },
    {
      name: "Armed Forces Pacific",
      abbreviation: "AP",
    },
    {
      name: "California",
      abbreviation: "CA",
    },
    {
      name: "Colorado",
      abbreviation: "CO",
    },
    {
      name: "Connecticut",
      abbreviation: "CT",
    },
    {
      name: "Delaware",
      abbreviation: "DE",
    },
    {
      name: "District Of Columbia",
      abbreviation: "DC",
    },
    {
      name: "Federated States Of Micronesia",
      abbreviation: "FM",
    },
    {
      name: "Florida",
      abbreviation: "FL",
    },
    {
      name: "Georgia",
      abbreviation: "GA",
    },
    {
      name: "Guam",
      abbreviation: "GU",
    },
    {
      name: "Hawaii",
      abbreviation: "HI",
    },
    {
      name: "Idaho",
      abbreviation: "ID",
    },
    {
      name: "Illinois",
      abbreviation: "IL",
    },
    {
      name: "Indiana",
      abbreviation: "IN",
    },
    {
      name: "Iowa",
      abbreviation: "IA",
    },
    {
      name: "Kansas",
      abbreviation: "KS",
    },
    {
      name: "Kentucky",
      abbreviation: "KY",
    },
    {
      name: "Louisiana",
      abbreviation: "LA",
    },
    {
      name: "Maine",
      abbreviation: "ME",
    },
    {
      name: "Marshall Islands",
      abbreviation: "MH",
    },
    {
      name: "Maryland",
      abbreviation: "MD",
    },
    {
      name: "Massachusetts",
      abbreviation: "MA",
    },
    {
      name: "Michigan",
      abbreviation: "MI",
    },
    {
      name: "Minnesota",
      abbreviation: "MN",
    },
    {
      name: "Mississippi",
      abbreviation: "MS",
    },
    {
      name: "Missouri",
      abbreviation: "MO",
    },
    {
      name: "Montana",
      abbreviation: "MT",
    },
    {
      name: "Nebraska",
      abbreviation: "NE",
    },
    {
      name: "Nevada",
      abbreviation: "NV",
    },
    {
      name: "New Hampshire",
      abbreviation: "NH",
    },
    {
      name: "New Jersey",
      abbreviation: "NJ",
    },
    {
      name: "New Mexico",
      abbreviation: "NM",
    },
    {
      name: "New York",
      abbreviation: "NY",
    },
    {
      name: "North Carolina",
      abbreviation: "NC",
    },
    {
      name: "North Dakota",
      abbreviation: "ND",
    },
    {
      name: "Northern Mariana Islands",
      abbreviation: "MP",
    },
    {
      name: "Ohio",
      abbreviation: "OH",
    },
    {
      name: "Oklahoma",
      abbreviation: "OK",
    },
    {
      name: "Oregon",
      abbreviation: "OR",
    },
    {
      name: "Palau",
      abbreviation: "PW",
    },
    {
      name: "Pennsylvania",
      abbreviation: "PA",
    },
    {
      name: "Puerto Rico",
      abbreviation: "PR",
    },
    {
      name: "Rhode Island",
      abbreviation: "RI",
    },
    {
      name: "South Carolina",
      abbreviation: "SC",
    },
    {
      name: "South Dakota",
      abbreviation: "SD",
    },
    {
      name: "Tennessee",
      abbreviation: "TN",
    },
    {
      name: "Texas",
      abbreviation: "TX",
    },
    {
      name: "Utah",
      abbreviation: "UT",
    },
    {
      name: "Vermont",
      abbreviation: "VT",
    },
    {
      name: "Virgin Islands",
      abbreviation: "VI",
    },
    {
      name: "Virginia",
      abbreviation: "VA",
    },
    {
      name: "Washington",
      abbreviation: "WA",
    },
    {
      name: "West Virginia",
      abbreviation: "WV",
    },
    {
      name: "Wisconsin",
      abbreviation: "WI",
    },
    {
      name: "Wyoming",
      abbreviation: "WY",
    },
  ];

  let nam;
  statesArr.forEach((obj) => {
    if (obj.abbreviation === state) {
      nam = obj.name;
      return obj.name;
    }
  });
  let abbr;
  statesArr.forEach((obj) => {
    if (obj.name === state) {
      abbr = obj.abbreviation;
      return obj.abbreviation;
    }
  });
  if (nam) {
    return nam;
  }
  if (abbr) {
    return abbr;
  }
}
