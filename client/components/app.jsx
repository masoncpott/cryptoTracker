import React, {useState, useEffect} from "react";
import axios from 'axios';
import Chart from 'chart.js';
import styled from 'styled-components';
// import MainChart from './MainChart.jsx';
import CurrencyPicker from './CurrencyPicker.jsx';

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

function App () {
  const [price, setPrice] = useState(null);
  const [mainChartData, setMainChartData] = useState({})
  const [weekChartData, setweekChartData] = useState({})
  const [hourChartData, sethourChartData] = useState({})

  useEffect(async () => {
    try {
      const response = await axios.get('/usdPrice');
      console.log('RESPONSE FROM SERVER:', response);
    } catch (e) {
      console.log('ERROR: ', e)
    }
  }, []);

  return (
    <MainContainer>
      <MainTitleText> Cryptocurrency Price Tracker ($USD)</MainTitleText>
      <CurrencyPicker />
      {/* <MainChart /> */}
    </MainContainer>
  )
}

export default App;