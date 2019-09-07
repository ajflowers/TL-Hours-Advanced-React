import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = {
    data: []
  }

  componentDidMount() {
    this.getData()
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
        <header className="App-header">
       
        </header>
      </div>
    );
  }
}

export default App;
