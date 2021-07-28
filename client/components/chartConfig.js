const { Chart, registerables } = require('chart.js');

const createChartConfig = (dataToRender, xAxisLabels, titleLabel) => {
  const configObject = {
    type: "line",
    data: {
      labels: xAxisLabels, //x-axis labels
      datasets: [
        {
          label: titleLabel, //label of key at the top
          data: dataToRender, //data to display
          backgroundColor: '#48bd29', //color of the datapoints
          borderColor: '#48bd29', //color of the line
        }
      ]
    },
    options: {
      plugins: {
        legend: {
          display: false
        }
      },
      elements: {
        point: {
          borderWidth: 0,
          radius: 0,
        }
      },
      scales: {
        xAxes: {
          grid: {
            color: '#4f4c44', //vertical grid line color
            tickColor: '#4f4c44',
            borderColor: '#6c0d0a', //horizontal bottom line

          },
          ticks: {
            color: '#e5e4e2',
            backdropColor: 'yellow',
            textStrokeColor: 'yellow',
            color: '#8f8d85',
            font: 'Orbitron'
          }
        },
        yAxes: {
          grid: {
            color: '#4f4c44'
          },
          ticks: {
            color: '#8f8d85'
          }
        }
      }
    }
  };

  return configObject;
};

const buildChart = (passedDates, passedPrices, passedID, chartTitle) => {
  const context = document.getElementById(passedID);
  new Chart(context, createChartConfig(passedPrices, passedDates, chartTitle));
};

module.exports = {createChartConfig, buildChart}