import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import Routes from './Routes'
import './App.css';


class App extends Component {
  
  render() {
    return (
      <div className="App">
      <BrowserRouter>
     <Routes/>
     </BrowserRouter>
      </div>
    );
  }
}

export default App
