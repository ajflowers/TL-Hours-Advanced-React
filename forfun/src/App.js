import React from 'react';
import axios from 'axios';
import './App.css';
import Players from './components/Players'

class App extends React.Component {
  state = {
    data: []
  }

  componentDidMount() {
    this.getData()    
  }

  componentDidUpdate() {
    console.log(this.state.data)
  }

  getData = () => {
    axios.get('http://localhost:5000/api/players')
      .then(res => this.setState({data:res.data}))
      .catch(err => console.log(err))
  }

  
  render(){
    console.log(this.state.data)
    return (
      <div className="App">
        <Players players={this.state.data} />
      </div>
    );
  }
}

export default App;
