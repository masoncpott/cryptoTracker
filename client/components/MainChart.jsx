
import React from "react";
import { chartOptions } from './chartConfig.js';
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

const MainChart = ({mainChartData}) => {
  const { dates, prices } = mainChartData;
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
      <TitleStyle>Last 30 Days</TitleStyle>
      <MainChartContainer id={'mainChartContainer'}>
        <Line
          data={state}
          options={chartOptions}
        />
      </MainChartContainer>
    </div>
  )
};


export default MainChart;