import trumpet from './images/trumpet.svg';
import bass_drum from './images/bass_drum.svg';
import guitar from './images/guitar.svg';
import saxophone from './images/saxophone.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import useScript from './hooks/useScript';
import ScriptTag from 'react-script-tag';

function App() {

  return (
    <div className="App"> 
      <ScriptTag type="text/babel" src="./components/slide.js" />
      <header className="App-header" >
        <div id="Fader">
          <img src={trumpet} className="App-logo" alt="logo" />
          <img src={bass_drum} className="App-logo" alt="logo" />
          <img src={guitar} className="App-logo" alt="logo" />
          <img src={saxophone} className="App-logo" alt="logo" />
        </div>
        <div>
          <p> 
            Bander
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
