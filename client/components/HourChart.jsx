import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { createChartConfig, buildChart } from './chartConfig.js';
import { Chart, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
// Chart.register(...registerables);

const TitleStyle = styled.div`
  display: flex;
  justify-content: center;
`;

const HourChart = ({hourChartData}) => {
  const { dates, prices } = hourChartData;

  const state = {
    labels: dates,
    datasets: [
      {
      label: 'Rainfall',
      fill: false,
      lineTension: 0,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
        data: prices
      }
    ]
  };

  const chartOptions = {

  }
  return (
    <div>
      <TitleStyle>Last Hour</TitleStyle>
      <div id={'hourChartContainer'}>
        <Line
          data={state}
          options={chartOptions}
        />
      </div>
    </div>
  )
};

export default HourChart;