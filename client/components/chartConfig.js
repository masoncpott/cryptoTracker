const chartOptions = {
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
};

module.exports = { chartOptions };