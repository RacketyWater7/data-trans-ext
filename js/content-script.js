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
    console.log("extension started");
    function doc_keyUp(e) {
      if (e.altKey && e.shiftKey && e.key === "S") {
        console.log("ctrl+down arrow");
        saveOrderAddress();
      }
      if (e.altKey && e.key === "1") {
        console.log("ctrl+1");
        pasteToDiypest("walmart_address");
      }
      if (e.altKey && e.key === "2") {
        console.log("ctrl+2");
        pasteToDiypest("amazon_address");
      }
      if (e.altKey && e.key === "3") {
        console.log("ctrl+3");
        pasteToDiypest("woocommerce_address");
      }
      if (e.altKey && e.key === "4") {
        console.log("ctrl+4");
        pasteToDorShip("walmart_address");
      }
      if (e.altKey && e.key === "5") {
        console.log("cltrl+5");
        pasteToDorShip("amazon_address");
      }
      if (e.altKey && e.key === "6") {
        console.log("ctrl+6");
        pasteToDorShip("woocommerce_address");
      }
      if (e.altKey && e.key === "7") {
        console.log("ctrl+7");
        pasteToPestStrong("walmart_address");
      }
      if (e.altKey && e.key === "8") {
        console.log("ctrl+8");
        pasteToPestStrong("amazon_address");
      }
      if (e.altKey && e.key === "9") {
        console.log("ctrl+9");
        pasteToPestStrong("woocommerce_address");
      }
      if (e.altKey && e.key === "r") {
        console.log("ctrl+r");
        pasteToPedChem("walmart_address");
      }
      if (e.altKey && e.key === "t") {
        console.log("ctrl+t");
        pasteToPedChem("amazon_address");
      }
      if (e.altKey && e.key === "y") {
        console.log("ctrl+y");
        pasteToPedChem("woocommerce_address");
      }
      if (e.altKey && e.key === "u") {
        console.log("alt+u");
        pasteToPirateship("walmart_address");
      }
      if (e.altKey && e.key === "i") {
        console.log("alt+i");
        pasteToPirateship("amazon_address");
      }
      if (e.altKey && e.key === "o") {
        console.log("alt+o");
        pasteToPirateship("woocommerce_address");
      }
    }
    // register the handler
    document.addEventListener("keyup", doc_keyUp, false);
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
        case "ACTION_WMART_TO_PIRATESHIP": {
          console.log("ACTION_WMART_TO_PIRATESHIP");
          pasteToPirateship("walmart_address");
          break;
        }
        case "ACTION_AMZ_TO_PIRATESHIP": {
          console.log("ACTION_AMZ_TO_PIRATESHIP");
          pasteToPirateship("amazon_address");
          break;
        }
        case "ACTION_WOOC_TO_PIRATESHIP": {
          console.log("ACTION_WOOC_TO_PIRATESHIP");
          pasteToPirateship("woocommerce_address");
          break;
        }

        default:
          return false;
      }
    });
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
              console.log("state found: ", state);

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
          const getLastName = () => {
            let lastN = "";
            for (let i = 1; i < fullName.length; i++) {
              lastN += fullName[i] + " ";
            }
            return lastN;
          };
          lastName = getLastName();
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
          const getLastName = () => {
            let lastN = "";
            for (let i = 1; i < fullName.length; i++) {
              lastN += fullName[i] + " ";
            }
            return lastN;
          };
          lastName = getLastName();
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
 * This function pastes the address on pedchem
 * @param {string} storageName
 */
const pasteToPirateship = async (storageName) => {
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
        console.log("new state: ", state);
        let zip = data.zip;
        document.getElementById("shipment-full-name").value = fullName;
        document.getElementById("shipment-address1").value = address;
        document.getElementById("shipment-address2").value = address2;
        document.getElementById("shipment-city").value = city;

        document.getElementById("shipment-zip").value = zip;
        document.getElementById("shipment-region-id").value = state;
      });
    } catch (error) {
      console.log("Problem in pirateship", error);
    }
  } catch (err) {
    let desc = `${err.toString()} in pasteToPirateship() in Content Script`;
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
          const getLastName = () => {
            let lastN = "";
            for (let i = 1; i < fullName.length; i++) {
              lastN += fullName[i] + " ";
            }
            return lastN;
          };
          lastName = getLastName();
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

        // let fullAddress = addressClass.firstChild.nextElementSibling.innerText;
        // fullAddress = fullAddress.split(",");
        let address2 = "";
        // // 221 Fairlamb Ave, Havertown, PA, 19083, USA
        // // 1290 Morrow Rd, Apt 27, Medford, OR, 97504, USA
        // if (fullAddress.length > 5) {
        //   for (let i = 1; i < fullAddress.length - 4; i++) {
        //     address2 =
        //       address2 !== undefined
        //         ? address2 + ", " + fullAddress[i]
        //         : fullAddress[i];
        //   }
        // }
        let address = addressClass.firstChild.nextElementSibling.innerText;
        let addressBundle =
          addressClass.firstChild.nextElementSibling.nextElementSibling
            .innerText;
        let city = addressBundle.split(",")[0];

        let state = addressBundle.split(",")[1].split(" ")[1];
        let zip = addressBundle.split(",")[1].split(" ")[2];
        // let city = fullAddress[fullAddress.length - 4];
        // let state = fullAddress[fullAddress.length - 3].split(" ")[1];
        // let zip = fullAddress[fullAddress.length - 2].split(" ")[1];

        const walmart_address = {
          fullName,
          address,
          address2,
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
        let address2Bundle, address2;
        if (fullAddress.length >= 7) {
          address2Bundle = fullAddress[3];
          address2 = fullAddress[2];
        } else {
          address2Bundle = fullAddress[2];
          address2 = "";
        }
        let fullName = fullAddress[0];
        let address = fullAddress[1];

        let zip = address2Bundle.split(/[^0-9]/);
        if (zip[zip.length - 2] === "") {
          zip = zip[zip.length - 1];
        } else {
          zip = `${zip[zip.length - 2]}`;
        }
        console.log("zip: ", zip);

        let state = address2Bundle.split(/[^a-zA-Z]/);
        let derivedState = undefined;
        console.log("preState:", state);
        let stateStartIndex;
        for (let i = 0; i < state.length; i++) {
          if (state[i] === "") {
            stateStartIndex = i + 1;
            break;
          }
        }
        for (let i = stateStartIndex; i < state.length; i++) {
          if (state[i] === "") {
            break;
          }
          derivedState =
            derivedState !== undefined
              ? derivedState + " " + state[i]
              : state[i];
        }
        address2Bundle = address2Bundle.split(",");
        let city = address2Bundle[0];
        const amazon_address = {
          fullName,
          address,
          address2,
          city,
          state: derivedState,
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
      if (fullAddress.length < 4) {
        fullName = fullAddress[0];
        address = fullAddress[1];
        addressBundle = fullAddress[fullAddress.length - 1];
      } else if (fullAddress.length === 4) {
        fullName = fullAddress[0];
        address2 = fullAddress[1];
        address = fullAddress[2];
        addressBundle = fullAddress[3];
      } else {
        fullName = fullAddress[0];
        address2 = fullAddress[1];
        address = fullAddress[2];
        addressBundle = fullAddress[fullAddress.length - 1];
      }
      try {
        let city = addressBundle.split(",")[0];

        let state = addressBundle.split(",")[1].split(" ")[1];
        let zip = addressBundle.split(",")[1].split(" ")[2];
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
    if (obj.abbreviation.toLowerCase() == state.toLowerCase()) {
      nam = obj.name;
      return obj.name;
    }
  });
  let abbr;
  statesArr.forEach((obj) => {
    if (obj.name.toLowerCase() == state.toLowerCase()) {
      abbr = obj.name;
      return obj.name;
    }
  });
  if (nam) {
    return nam;
  }
  if (abbr) {
    return abbr;
  }
}
