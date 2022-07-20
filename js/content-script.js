/**
 *
 * @param {number} ms
 * @returns promise
 */
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

window.onload = function () {
  init();
};

/**
 * Sites to copy the data from:
 * seller.walmart.com
 * sellercentral.amazon.com
 * www.pestcontrolwholesale.com
 *
 * Sites to paste the data to:
 * diypestcontrol.com
 * dropship.domyown.com
 * ship.pirateship.com
 * ww.pestrong.com
 * ww.pedchem.com
 * */

// Main Function
/**
 * check for the pathname and follow up functions execution
 */
async function init() {
  try {
    let { hostname } = window.location;
    console.log(`host`, hostname);
    switch (hostname) {
      case "seller.walmart.com": {
        // chrome.storage.sync.get(["fixedDetails"], function (result) {
        //   if (result && result.fixedDetails) {
        //   }
        // });
        await sleep(2000);
        console.log("at wallmart");
        let addressClass = document.getElementsByClassName("G42Nv")[1];
        let fullName = addressClass.firstChild.innerText;
        let fullAddress = addressClass.firstChild.nextElementSibling.innerText;
        console.log("fullName", fullName);
        console.log("fullAddress", fullAddress);
        fullAddress = fullAddress.split(",");
        // 221 Fairlamb Ave, Havertown, PA, 19083, USA
        let address = fullAddress[0];
        let city = fullAddress[1];
        let state = fullAddress[2];
        let zip = fullAddress[3];
        console.log("address", address);
        console.log("City", city);
        console.log("State", state);
        console.log("Zip", zip);

        break;
      }
      case "sellercentral.amazon.com": {
        // John Jensen
        // 6603 N IL ROUTE 2
        // OREGON, IL 61061-9327
        console.log("at amazon");
        sleep(2000);
        let fullAddress =
          document.getElementsByClassName("a-normal")[2].innerText;
        fullAddress = fullAddress.split(`\n`);
        let fullName = fullAddress[0];
        let address = fullAddress[1];
        let address2Bundle = fullAddress[2];
        // split numbers and letters in separate arrays
        let zip = address2Bundle.split(/[^0-9]/);
        zip = `${zip[zip.length - 1]}-${zip[zip.length - 2]}`;
        let state = address2Bundle.split(/[^a-zA-Z]/);
        state = state[2];
        address2Bundle = address2Bundle.split(",");
        let city = address2Bundle[0];
        // let state = address2Bundle[1].split(" ")[0];
        // let zip = address2Bundle[1].split(" ")[1];
        console.log("fullName", fullName);
        console.log("address", address);
        console.log("city", city);
        console.log("state", state);
        console.log("zip", zip);
        break;
      }
      case "www.pestcontrolwholesale.com": {
        if (window.location.hostname === "www.pestcontrolwholesale.com") {
          console.log("at pestcontrol");
          sleep(2000);
          let fullAddress =
            document.getElementsByClassName("address")[1].innerText;
          fullAddress = fullAddress.split(`\n`);
          let fullName = fullAddress[0];
          let address2 = fullAddress[1];
          let address = fullAddress[2];
          let addressBundle = fullAddress[3];
          let city = addressBundle.split(",")[0];
          let state = addressBundle.split(",")[1].split(" ")[1];
          let zip = addressBundle.split(",")[1].split(" ")[2];
          console.log("fullName", fullName);
          console.log("address", address);
          console.log("address2", address2);
          console.log("city", city);
          console.log("state", state);
          console.log("zip", zip);
        }

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
  statesArr.forEach((obj) => {
    if (obj.name === state) {
      return obj.abbreviation;
    }
  });
  return state;
}
