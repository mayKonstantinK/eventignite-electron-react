import React, { Component } from 'react';
import '../styles/App.css';
import MapComponent from '../components/MapComponent';

class App extends Component {
  render() {
    return (
      <div className="App" style={{width: "100%",height:"100%"}}>
        <MapComponent />
      </div>
    );
  }
}

export default App;
