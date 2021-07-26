
import React from "react";
import axios from 'axios';
import { createChartConfig, buildChart } from './chartConfig.js';
import { Chart, registerables } from 'chart.js';
import styled from 'styled-components';

const MainChartContainer = styled.div`
  display: flex;
  margin-bottom: 5%;
`;

const TitleStyle = styled.div`
  display: flex;
  justify-content: center;
`;

Chart.register(...registerables);



const MainChart = ({mainChartData}) => {
  const { dates, prices } = mainChartData;

  return (
    <div>
      <TitleStyle>Last 30 Days</TitleStyle>
      <MainChartContainer id={'mainChartContainer'}>
        {dates && buildChart(dates, prices, 'mainChart', 'Last Month')}
        <canvas id='mainChart'></canvas>
      </MainChartContainer>
    </div>
  )
}


export default MainChart;