import React from "react";
import axios from 'axios';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {};
  }

  async componentDidMount () {
    try {
      const response = await axios.get('/testing');
      console.log('SUCCESS: ', response)
    } catch (e) {
      console.log('ERROR: ', e)
    }
  }

  render () {
    return (
      <div>HELLO WORLD</div>
    )
  }
}

export default App;