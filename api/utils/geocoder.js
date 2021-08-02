const NodeGeocoder = require("node-geocoder");

const geocoder = NodeGeocoder({
  provider: process.env.GEOCODER_PROVIDER,
  httpAdapter: "https",
  apiKey: process.env.GEOCODER_API_KEY,
  formatter: null,
});

module.exports = geocoder;
