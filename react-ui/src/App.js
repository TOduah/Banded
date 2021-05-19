import trumpet from './images/trumpet.svg';
import bass_drum from './images/bass_drum.svg';
import guitar from './images/guitar.svg';
import saxophone from './images/saxophone.svg';
import './App.css';
// import React, { useState, useEffect } from 'react'
import React, { Component } from 'react'
import {Helmet} from 'react-helmet';
// import { useScript } from './hooks/useScript';
import showSlides from './components/slide'


class App extends Component {
  // useScript("./components/slide.js");
  // var slideIndex = 0;
  constructor() {
    super();
    this.state = {
      slideIndex: 1,
      images: [
        trumpet,
        bass_drum,
        guitar
      ] 
    };
  }

  plusDivs(n) {
    const { images, slideIndex } = this.state;
    if(n<0){
      if(slideIndex>0){
        this.setState((prevState)=>({
          slideIndex : prevState.slideIndex - 1
        }));
      } else {
        this.setState(()=>({
          slideIndex:images.length-1
        }))
      }
    }
    if(n>0){
      if(slideIndex<images.length-1){
        this.setState((prevState)=>({
          slideIndex : prevState.slideIndex +1
        }))
      } else {
        this.setState(()=>({
          slideIndex : 0
        }))
      }
    }
  }
  render(){
    const { images, slideIndex } = this.state;
    var interval = window.setInterval(function(){
      this.plusDivs(1)
    }, 4000);
    // {interval()}
    return (
      <div className="App"> 
        {/* <Helmet>
          <script src="./components/slide.js" type="text/jsx" />
        </Helmet> */}
        <header className="App-header" >
          <div>
            <p> 
              Bander
            </p>
          </div>
          <div className="Slide-container">
            <div className="slide Fader">
              <img src={images[slideIndex]} className="App-logo" alt="logo" />
              {interval()}
              {/* <button onClick={() => this.plusDivs(1)}>Next</button> */}
            </div>
            {/* <div className="slide Fader">
              <img src={bass_drum} className="App-logo" alt="logo" />
            </div>
            <div className="slide Fader">
              <img src={guitar} className="App-logo" alt="logo" />
            </div> */}
            {/* <img src={saxophone} className="App-logo" alt="logo" /> */}
          </div>
          {/* {showSlides()} */}
        </header>
      </div>
    );
  }
}

export default App;
