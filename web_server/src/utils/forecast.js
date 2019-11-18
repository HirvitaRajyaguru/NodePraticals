const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.darksky.net/forecast/4fb3c60836f6d20facdd43fe663b4f9d/" +
    latitude +
    " , " +
    longitude;

  // 'https://api.darksky.net/forecast/6f02e60e249e5e921d56cbcbc8a4cfaf/37.8267,-122.4233
  // https://api.darksky.net/forecast/4fb3c60836f6d20facdd43fe663b4f9d/

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather services", undefined);
    }
    //        else if(body.error){
    //          callback('Unable to find Location', undefined)
    //        }
    else {
      callback(
        undefined,
        " It is currently  " +
          body.currently +
          " degress out. There is a " +
          body.currently +
          " % chance of rain."
      );
    }
  });
};

module.exports = forecast;
