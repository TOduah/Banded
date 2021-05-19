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


function App() {
  // useScript("./components/slide.js");
  // var slideIndex = 0;
  // constructor() {
  //   super();
  //   this.state = {
  //     slideIndex: 1,
  //     images: [
  //       trumpet,
  //       bass_drum,
  //       guitar
  //     ] 
  //   };
  // }

  // plusDivs() {
  //   const { images, slideIndex } = this.state;
  //   // if(n<0){
  //     if(slideIndex>0){
  //       this.setState((prevState)=>({
  //         slideIndex : prevState.slideIndex - 1
  //       }));
  //     } else {
  //       this.setState(()=>({
  //         slideIndex:images.length-1
  //       }))
  //     }
 
  // }
  // render(){
  //   const { images, slideIndex } = this.state;

    return (
      <div className="App"> 
      {/* {setTimeout(() => this.plusDivs(), 4000)} */}

        <header className="App-header" >
          <div>
            <p> 
              Bander
            </p>
          </div>
          <div id="Fader">
            <img src={trumpet} className="App-logo" alt="logo" />
            <img src={bass_drum} className="App-logo" alt="logo" />
            <img src={guitar} className="App-logo" alt="logo" />

              {/* {setTimeout(() => this.plusDivs(), 4000)} */}
              {/* <button onClick={() => this.plusDivs(1)}>Next</button> */}
          </div>
        </header>
      </div>
    );
  }


export default App;
