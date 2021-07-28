import React, {useState, useEffect} from "react";
import axios from 'axios';
import Chart from 'chart.js';
import styled from 'styled-components';
import MainChart from './MainChart.jsx';
import CurrencyPicker from './CurrencyPicker.jsx';
import WeekChart from './WeekChart.jsx';
import HourChart from './HourChart.jsx';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  margin-right: 5%;
`;

const MainTitleText = styled.div`
  font-weight: 700;
  font-size: 1.6em;
  margin-top: 3%;
`;

const BottomHalf = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SplitDiv = styled.div`
  width: 50%;
`;

function App () {
  const [price, setPrice] = useState(null);
  const [mainChartData, setMainChartData] = useState({})
  const [weekChartData, setWeekChartData] = useState({})
  const [hourChartData, setHourChartData] = useState({})

  useEffect(async () => {
    try {
      const {data} = await axios.get('/Bitcoin');
      setPrice(data.currentPrice)
      setMainChartData(data.historicalPrice)
      setWeekChartData(data.weekPrice)
      // setHourChartData(data.hourPrice)
    } catch (e) {
      console.log('ERROR IN USE EFFECT: ', e)
    }
  }, []);

  const updateWithNewCoinData = async (selection) => {
    try{
      // $('#mainChart').replaceWith('<canvas id="mainChart"></canvas>');
      // $('#weekChart').replaceWith('<canvas id="weekChart"></canvas>');
      // $('#hourChart').replaceWith('<canvas id="hourChart"></canvas>');

      const {data} = await axios.get(`${selection}`);
      setPrice(data.currentPrice)
      setMainChartData(data.historicalPrice)
      setWeekChartData(data.weekPrice)
      // setHourChartData(data.hourPrice)
    } catch (e) {
      console.log('ERROR IN NEW COIN DATA REQUEST', e)
    }
  }

  return (
    <MainContainer>
      <MainTitleText> Cryptocurrency Price Tracker ($USD)</MainTitleText>
      <CurrencyPicker price={price} updateWithNewCoinData={updateWithNewCoinData}/>
      <MainChart mainChartData={mainChartData}/>
      <BottomHalf>
          <SplitDiv>
            <WeekChart weekChartData={weekChartData}/>
          </SplitDiv>
          <SplitDiv>
            <HourChart hourChartData={hourChartData}/>
          </SplitDiv>
        </BottomHalf>
    </MainContainer>
  )
}

export default App;