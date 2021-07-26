const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { formatDatesArray, formatUnixDates, extractPrices } = require('./helpers.js');
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
  const priceInformation = {};
  try {
    const [{data:{bpi:{USD: {rate}}}}, {data:{bpi}}] = await Promise.all([axios.get(usdEndpoint), axios.get(historicalEndpoint)]);

    priceInformation.currentPrice = rate;
    priceInformation.historicalPrice = {
      dates: formatDatesArray(Object.keys(bpi)),
      prices: Object.values(bpi)
    };

    const arrayLength = Object.keys(bpi).length;
    priceInformation.weekPrice = {
      dates: formatDatesArray(Object.keys(bpi).slice(arrayLength - 8), arrayLength),
      prices: Object.values(bpi).slice(arrayLength - 8, arrayLength)
    };

    res.status(200).send(priceInformation);
  } catch (e) {
    res.send(500)
  }
});

app.get('/Bitcoin', async (req, res) => {
  const priceInformation = {};
  try{
    const response = await axios.get(crypto.btc.pastMonth)
    const priceData = response.data.Data.Data;

    priceInformation.historicalPrice = {
      dates: formatUnixDates(priceData),
      prices: extractPrices(priceData)
    };

    priceInformation.weekPrice = {
      dates: formatUnixDates(priceData.slice(priceData.length - 8, priceData.length)),
      prices: extractPrices(priceData.slice(priceData.length - 8, priceData.length))
    }

    const { data:{Data: {Data}} } = await axios.get(crypto.btc.pastHour);
    priceInformation.currentPrice = Data[Data.length-1].close;
    priceInformation.hourPrice = {
      dates: formatUnixDates(Data),
      prices: extractPrices(Data)
    };

    res.status(200).send(priceInformation)
  } catch (e) {
    console.log('ERROR: ', e);
    res.status(500);
  }
});

app.get('/Ether', async (req, res) => {
  const priceInformation = {};
  try{
    const response = await axios.get(crypto.eth.pastMonth)
    const priceData = response.data.Data.Data;

    priceInformation.historicalPrice = {
      dates: formatUnixDates(priceData),
      prices: extractPrices(priceData)
    };

    priceInformation.weekPrice = {
      dates: formatUnixDates(priceData.slice(priceData.length - 8, priceData.length)),
      prices: extractPrices(priceData.slice(priceData.length - 8, priceData.length))
    }

    const { data:{Data: {Data}} } = await axios.get(crypto.eth.pastHour);
    priceInformation.currentPrice = Data[Data.length-1].close;
    priceInformation.hourPrice = {
      dates: formatUnixDates(Data),
      prices: extractPrices(Data)
    };

    res.status(200).send(priceInformation)
  } catch (e) {
    console.log('ERROR: ', e);
    res.status(500);
  }
});

app.get('/Litecoin', async (req, res) => {
  const priceInformation = {};
  try{
    const response = await axios.get(crypto.ltc.pastMonth)
    const priceData = response.data.Data.Data;

    priceInformation.historicalPrice = {
      dates: formatUnixDates(priceData),
      prices: extractPrices(priceData)
    };

    priceInformation.weekPrice = {
      dates: formatUnixDates(priceData.slice(priceData.length - 8, priceData.length)),
      prices: extractPrices(priceData.slice(priceData.length - 8, priceData.length))
    }

    const { data:{Data: {Data}} } = await axios.get(crypto.ltc.pastHour);
    priceInformation.currentPrice = Data[Data.length-1].close;
    priceInformation.hourPrice = {
      dates: formatUnixDates(Data),
      prices: extractPrices(Data)
    };

    res.status(200).send(priceInformation)
  } catch (e) {
    console.log('ERROR: ', e);
    res.status(500);
  }
});

app.listen(PORT, () => {
  console.log(`CONNECTED AT PORT: ${PORT}`)
});