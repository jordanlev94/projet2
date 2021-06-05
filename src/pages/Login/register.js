var request = require("request");

export default function registerCB(email, password, phone, fName) {
  return new Promise(function (resolve, reject) {
    request(
      {
        method: "POST",
        url: "https://crm-002b48.appdrag.site/api/register",
        form: { email: email, password: password, phone: phone, fName: fName },
      },
      function (err, httpResponse, body) {
        if (err != null) {
          resolve(err);
          alert("Veuillez bien vérifiez vos données");
          console.log(err);
        } else {
          if (resolve.form === null) {
            console.log("errrrrrr");
          } else {
            resolve(body);
            console.log(body);
          }
        }
      }
    );
  });
}
// var result = registerCB();
// console.log(result);
