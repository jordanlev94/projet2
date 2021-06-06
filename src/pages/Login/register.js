var request = require("request");

export default function registerCB(Email, password, phone, firstName) {
  return new Promise(function (resolve, reject) {
    request(
      {
        method: "POST",
        url: "https://jquery-a7b1ae.appdrag.site/api/register",
        form: {
          Email: Email,
          password: password,
          firstName: firstName,
          phone: phone,
        },
      },
      function (err, httpResponse, body) {
        if (err != null) {
          resolve(err);
        } else {
          resolve(body);
        }
      }
    );
  });
}
// var result = await registerCB();
// console.log(result);
