
import React from "react";
import axios from 'axios';
import { createChartConfig, buildChart } from './chartConfig.js';
import { Chart, registerables } from 'chart.js';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';

const MainChartContainer = styled.div`
  display: flex;
  margin-bottom: 5%;
`;

const TitleStyle = styled.div`
  display: flex;
  justify-content: center;
`;

// Chart.register(...registerables);



const MainChart = ({mainChartData}) => {
  const { dates, prices } = mainChartData;
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
      <TitleStyle>Last 30 Days</TitleStyle>
      <MainChartContainer id={'mainChartContainer'}>
        <Line
          data={state}
          options={chartOptions}
        />
      </MainChartContainer>
    </div>
  )
}


export default MainChart;