const express = require('express');
const cors = require('cors');
const axios = require('axios');

const { cryptoCompare } = require('../token.js');
const {
  usdEndpoint,
  euroEndpoint,
  gbpEndpoint,
  historicalEndpoint,
  currentPrice,
  dateRangeEndpoint,
  listOfSupported,
  crypto} = require('./endpoints.js');

const PORT = 5000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/usdPrice', async (req, res) => {
  try {
    const response = await Promise.all([axios.get(usdEndpoint), axios.get(historicalEndpoint)]);
    console.log('RESPONSE FROM BITCOIN:', response);
    res.send(200)
  } catch (e) {
    console.log('ERROR HITTING ENDPOINT:', e);
    res.send(404)
  }
})

app.listen(PORT, () => {
  console.log(`CONNECTED AT PORT: ${PORT}`)
});