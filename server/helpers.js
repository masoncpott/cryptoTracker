const moment = require('moment');

const formatDatesArray = (datesArray) => {
  const formattedDates = datesArray.map(date => {
    return moment(date).format('MMM DD');
  });
  return formattedDates;
};

const formatUnixDates = (arrayOfPriceDataObjects) => {
  const formattedDates = arrayOfPriceDataObjects.map(priceData => {
    return moment.unix(priceData.time).format('MMM DD');
  });
  return formattedDates;
};

const unixDateParser = (unixDate) => {
  const parsedDate = moment.unix(unixDate).format('MMM DD');
  return parsedDate;
};

const extractPrices = (arrayOfPriceDataObjects) => {
  const prices = arrayOfPriceDataObjects.map(priceData => {
    return priceData.close;
  });
  return prices;
}

module.exports = {formatDatesArray, formatUnixDates, extractPrices};