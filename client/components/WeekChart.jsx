import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { createChartConfig, buildChart } from './chartConfig.js';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const TitleStyle = styled.div`
  display: flex;
  justify-content: center;
`;

const WeekChart = ({weekChartData}) => {
  const { dates, prices } = weekChartData;

  return (
    <div>
      <TitleStyle>Last Week</TitleStyle>
      <div id={'weekChartContainer'}>
        {dates && buildChart(dates, prices, 'weekChart', 'Last Week')}
        <canvas id='weekChart'></canvas>
      </div>
    </div>
  )
};

export default WeekChart;