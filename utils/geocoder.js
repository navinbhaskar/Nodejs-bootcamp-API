const NodeGeocoder = require('node-geocoder');
const options = {
  provider: process.env.GEOCODER_PROVIDER,
  httpAdapter: 'https',
  apiKey: process.env.GEOCOADER_API_KEY,
  formatter: null
}

const geocoader = NodeGeocoder(options);

module.exports = geocoader;
