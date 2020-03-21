import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


let name = "Menno"
let defaultTextColor ='#666'

let defaultStyle = {
  color: defaultTextColor
};

class Agregate extends Component
{
  render(){
    return(
      <div style={{...defaultStyle, width: '40%', display:'inline-block'}}>
        <h2> Number | Text </h2>
      </div>
    );
  }
}

class Filter extends Component
{
  render(){
    return(
      <div style={{width: '40%'}}>
        <img/>
        <input type='text'/> 
      </div>
    );
  }
}
class Playlist extends Component
{
  render(){
    return(
      <div style={{...defaultStyle, width:'25%', display:'inline-block'}}>
        <img/>
        <h3> Playlist Name</h3>
        <ul><li>Song 1</li><li>Song 2</li><li>Song 3</li></ul>
      </div>
    );
  }
}

function App() {

  return (
    <div className="App">
        <h1>Title</h1>
        <Agregate/>
        <Agregate/>
        <Filter/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
    </div>
  );
}


export default App;