import React, { Component } from 'react';
import Logo from './logo.svg';
import './App.css';

let name = "Menno"

let serverData = {}; // aanmaken data iets..
let fakeServerData ={
  user: {
    name: 'Menno'
  }
};

let defaultStyle = {
  color: '#fff'
};

class Agregate extends Component{
  render(){
    return(
      <div style={{...defaultStyle, width: '40%', display:'inline-block'}}>
        <h2> Number | Text </h2>
      </div>
    );
  }
}

class Filter extends Component{
  render(){
    return(
    <div style={{width: '40%'}}>
        <img/>
        <input type='text'/> 
      </div>
    );
  }
}

class Playlist extends Component{
  render(){
    return(
      <div className='Playlist'>
        <h3><img src={Logo} className='Logo' width='20px' height='20px' alt='titel'/>Playlist Name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    );
  }
}

class App extends Component{ // base class
  constructor(){ //dit deel is nodig als een soort startscript
    super(); 
    this.state = {serverData}
  }
  componentDidMount(){ //dit deel is nodig als een eenmalig doorlopen indien geladen
    this.setState({serverData: fakeServerData});
  }
  render(){
  return (
    <div className="App">
        <h1 style={defaultStyle}>
        {this.state.serverData.user && 
        this.state.serverData.user.name}'s whicked playlist</h1>
        <Agregate/>
        <Agregate/>
        <Filter/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
    </div>
    );
  }
}

export default App;