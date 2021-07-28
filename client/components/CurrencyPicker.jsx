import React, {useState, useEffect} from "react";
import axios from 'axios';
import styled from 'styled-components';

const SelectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5%;
  margin-bottom: 2%;
`;

const GreenText = styled.div`
  color: #48bd29;
  font-weight: 700;
  font-size: 2em;
`;

const BitcoinText = styled.div`
  color: ${props => (props.selected === 'Bitcoin') ? '#48bd29' : '#8f8d85'};
  font-weight: ${props => (props.selected === 'Bitcoin') ? 700 : 400};
`;

const EtherText = styled.div`
  color: ${props => (props.selected === 'Ether') ? '#48bd29' : '#8f8d85'};
  font-weight: ${props => (props.selected === 'Ether') ? 700 : 400};
`;

const LitecoinText = styled.div`
  color: ${props => (props.selected === 'Litecoin') ? '#48bd29' : '#8f8d85'};
  font-weight: ${props => (props.selected === 'Litecoin') ? 700 : 400};
`;

function CurrencyPicker ({price, updateWithNewCoinData}) {
  const [selected, setSelected] = useState('Bitcoin');

  const updateSelected = (e) => {
    e.preventDefault();
    setSelected(e.target.innerText)
    updateWithNewCoinData(e.target.innerText)
  };

  return (
    <SelectionContainer>
        <BitcoinText onClick={updateSelected} selected={selected}>Bitcoin</BitcoinText>
        <EtherText onClick={updateSelected} selected={selected}>Ether</EtherText>
        <LitecoinText onClick={updateSelected} selected={selected}>Litecoin</LitecoinText>
        <div>
          Current Price:
          <GreenText>{price}</GreenText>
        </div>
      </SelectionContainer>
  )
}

export default CurrencyPicker;