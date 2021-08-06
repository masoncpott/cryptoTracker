import React from 'react';
import styled from 'styled-components';
import { chartOptions } from './chartConfig.js';
import { Chart, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';


const TitleStyle = styled.div`
  display: flex;
  justify-content: center;
`;

const WeekChart = ({weekChartData}) => {
  const { dates, prices } = weekChartData;
  const state = {
    labels: dates,
    datasets: [
      {
        lineTension: 0,
        borderColor: '#48bd29',
        borderWidth: 2,
        data: prices
      }
    ]
  };

  return (
    <div>
      <TitleStyle>Last Week</TitleStyle>
      <div id={'weekChartContainer'}>
        <Line
          data={state}
          options={chartOptions}
        />
      </div>
    </div>
  )
};

export default WeekChart;