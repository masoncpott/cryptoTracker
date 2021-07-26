import React, {useState, useEffect} from "react";
import axios from 'axios';

function App () {
  const [selected, setSelected] = useState('');

  useEffect(async () => {
    try {
      const response = await axios.get('/usdPrice');
      console.log('RESPONSE FROM SERVER:', response);
    } catch (e) {
      console.log('ERROR: ', e)
    }
  }, []);

  return (
    <div>HELLO WORLD</div>
  )
}

export default App;