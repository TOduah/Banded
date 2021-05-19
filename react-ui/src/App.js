import trumpet from './images/trumpet.svg';
import bass_drum from './images/bass_drum.svg';
import guitar from './images/guitar.svg';
import saxophone from './images/saxophone.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import {Helmet} from 'react-helmet';


function App() {

  return (
    <div className="App"> 
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
        <Helmet>
        <script src="./components/slide.js" type="text/jsx" />
      </Helmet>
      <script>
        {
          `var slideIndex = 0;
          showSlides();
          
          function showSlides() {
            var i;
            var slides = document.querySelectorAll(".slide");
            for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";  
            }
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}    
          
            slides[slideIndex-1].style.display = "block";  
          
            setTimeout(showSlides, 8000); 
          } `
        }
      </script>
      </header>
    </div>
  );
}

export default App;
