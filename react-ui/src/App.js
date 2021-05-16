import trumpet from './images/trumpet.svg';
import bass_drum from './images/bass_drum.svg';
import guiatr from './images/guitar.svg';
import saxophone from './images/saxophone.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
// import { useTransition, animated, config } from 'react-spring'

// const slides = [
//   { id: 0, url: './images/trumpet.svg' },
//   { id: 1, url: './images/bass_drum.svg' },
//   { id: 2, url: './images/clarinet.svg' },
//   { id: 3, url: './images/french_horn.svg' },
// ]

function App() {
  // const [index, set] = useState(0)
  // const transitions = useTransition(slides[index], item => item.id, {
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 },
  //   config: config.molasses,
  // })
  // useEffect(() => void setInterval(() => set(state => (state + 1) % 4), 2000), [])
  return (
    <div className="App"> 
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
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
  // return transitions.map(({ item, props, key }) => (
    
  //   <animated.div
  //   key={key}
  //   class="App-logo"
  //   style={{ ...props, backgroundImage: `url(${item.url})` }}
  // />
    
  // ));
}

export default App;
