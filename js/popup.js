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
    let { hostname } = window.location;
    switch (hostname) {
      case "seller.walmart.com": {
        (async function () {
          await sleep(1000);
          try {
            console.log("copying wallmart address");
            let addressClass = document.getElementsByClassName("G42Nv")[1];
            let fullName = addressClass.firstChild.innerText;
            let fullAddress =
              addressClass.firstChild.nextElementSibling.innerText;
            fullAddress = fullAddress.split(",");
            // 221 Fairlamb Ave, Havertown, PA, 19083, USA
            let address = fullAddress[0];
            let city = fullAddress[1];
            let state = fullAddress[2];
            let zip = fullAddress[3];

            const wallmart_address = {
              fullName,
              address,
              city,
              state,
              zip,
            };
            chrome.storage.sync.set(
              {
                wallmart_address: wallmart_address,
              },
              function () {
                console.log("Wallmart address is saved");
                chrome.notifications.create(
                  options("Wallmart Address saved successfully")
                );
              }
            );
          } catch (error) {
            console.log("error while saving walmart address: ", error);
          }
        })();

        break;
      }
      case "sellercentral.amazon.com": {
        (async function () {
          try {
            // John Jensen
            // 6603 N IL ROUTE 2
            // OREGON, IL 61061-9327
            console.log("copying amazon address");
            sleep(1000);
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
            chrome.storage.sync.set(
              {
                amazon_address: amazon_address,
              },
              function () {
                console.log("Amazon address is saved");
                chrome.notifications.create(
                  options("Amazon Address saved successfully")
                );
              }
            );
          } catch (error) {
            console.log("error while saving amazon address: ", error);
          }
        })();
        break;
      }
      case "www.pestcontrolwholesale.com": {
        (async function () {
          console.log("at pestcontrol");
          sleep(1000);

          let fullAddress =
            document.getElementsByClassName("address")[1].innerText;

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

            chrome.storage.sync.set(
              {
                woocommerce_address: woocommerce_address,
              },
              function () {
                console.log("Woocommerce address is saved");
                chrome.notifications.create(
                  options("Woocommerce Address saved successfully")
                );
              }
            );
          } catch (error) {
            console.log("error in saving pestControl address", error);
          }
        })();
        break;
      }
      default: {
        chrome.notifications.create(options("Invalid website address"));
      }
    }
  });
}
