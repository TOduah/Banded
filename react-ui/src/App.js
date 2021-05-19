import trumpet from './images/trumpet.svg';
import bass_drum from './images/bass_drum.svg';
import guitar from './images/guitar.svg';
import saxophone from './images/saxophone.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import {Helmet} from 'react-helmet';
// import { useScript } from './hooks/useScript';
import showSlides from './components/slide'


function App() {
  // useScript("./components/slide.js");
  var slideIndex = 0;
  return (
    <div className="App"> 
      <Helmet>
        <script src="./components/slide.js" type="text/jsx" />
      </Helmet>
      <header className="App-header" >
        <div>
          <p> 
            Bander
          </p>
        </div>
        <div className="Slide-container">
          <div className="slide Fader">
            <img src={trumpet} className="App-logo" alt="logo" />
          </div>
          <div className="slide Fader">
            <img src={bass_drum} className="App-logo" alt="logo" />
          </div>
          <div className="slide Fader">
            <img src={guitar} className="App-logo" alt="logo" />
          </div>
          {/* <img src={saxophone} className="App-logo" alt="logo" /> */}
        </div>
        {slideIndex}
        {showSlides()}
      </header>
    </div>
  );
}

export default App;
