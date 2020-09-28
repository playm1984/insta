import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    mass: []
  }


  componentDidMount(){
    fetch('https://boiling-refuge-66454.herokuapp.com/images')
    .then(res => res.json())
    .then(res => console.log(res))
    .then(res => this.setState({
      mass: res
    })
    )
  }
  

  render(){
    
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
