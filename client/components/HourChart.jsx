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

const HourChart = ({hourChartData}) => {
  const { dates, prices } = hourChartData;

  return (
    <div>
      <TitleStyle>Last Hour</TitleStyle>
      <div id={'hourChartContainer'}>
        {dates && buildChart(dates, prices, 'hourChart', 'Last Hour')}
        <canvas id='hourChart'></canvas>
      </div>
    </div>
  )
};

export default HourChart;