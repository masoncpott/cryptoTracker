////////CRYPTO COMPARE ENDPOINTS////////
const { cryptoCompare } = require('../token.js');

const crypto = {
  btc: {
    current: `https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR&api_key=${cryptoCompare}`,
    pastMonth: `https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=30&api_key=${cryptoCompare}`,
    pastDay: `https://min-api.cryptocompare.com/data/v2/histohour?fsym=BTC&tsym=USD&limit=24&api_key=${cryptoCompare}`,
    pastHour: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=USD&limit=60&api_key=${cryptoCompare}`,
  },
  eth: {
    current: `https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,JPY,EUR?api_key=${cryptoCompare}`,
    pastMonth: `https://min-api.cryptocompare.com/data/v2/histoday?fsym=ETH&tsym=USD&limit=30&api_key=${cryptoCompare}`,
    pastDay: `https://min-api.cryptocompare.com/data/v2/histohour?fsym=ETH&tsym=USD&limit=24&api_key=${cryptoCompare}`,
    pastHour: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=ETH&tsym=USD&limit=60&api_key=${cryptoCompare}`,
  },
  ltc: {
    current: `https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=USD,JPY,EUR&api_key=${cryptoCompare}`,
    pastMonth: `https://min-api.cryptocompare.com/data/v2/histoday?fsym=LTC&tsym=USD&limit=30&api_key=${cryptoCompare}`,
    pastDay: `https://min-api.cryptocompare.com/data/v2/histohour?fsym=LTC&tsym=USD&limit=24&api_key=${cryptoCompare}`,
    pastHour: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=LTC&tsym=USD&limit=60&api_key=${cryptoCompare}`,
  },
  all: {
    current: `https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD,JPY,EUR&api_key=${cryptoCompare}`
  }
};

//endpoint for BTC in USD:
const usdEndpoint = 'https://api.coindesk.com/v1/bpi/currentprice/USD.json';

//endpoint for euro
const euroEndpoint = 'https://api.coindesk.com/v1/bpi/currentprice/EUR.json';

//endpoint for GBP
const gbpEndpoint = 'https://api.coindesk.com/v1/bpi/currentprice/GBP.json';

//endpoint for BTC historical price
const historicalEndpoint = 'https://api.coindesk.com/v1/bpi/historical/close.json';

//endpoint for current price in USD, EURO, GBP
const currentPrice = 'https://api.coindesk.com/v1/bpi/currentprice.json';

//fixed date range, returns in USD
const dateRangeEndpoint = 'https://api.coindesk.com/v1/bpi/historical/close.json?start=2021-04-22&end=2021-04-29';

//returns an array of all supported currencies and countries
const listOfSupported = 'https://api.coindesk.com/v1/bpi/supported-currencies.json';

module.exports = {usdEndpoint, euroEndpoint, gbpEndpoint, historicalEndpoint, currentPrice, dateRangeEndpoint, listOfSupported, crypto};