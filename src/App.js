import trumpet from './images/trumpet.svg';
import './App.css';
import ImageSequence from 'react-native-image-sequence-2';

const images = [
  require('./images/trumpet.svg'),
  require('./images/bass_drum.svg'),
  require('./images/clarinet.svg'),
  require('./images/guitar.svg'),
  require('./images/french_horn.svg'),
  require('./images/micro2.svg'),
  require('./images/saxophone.svg'),
  require('./images/violin.svg')
]
const centerIndex = Math.round(images.length / 2);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={trumpet} className="App-logo" alt="logo" /> */}
        <ImageSequence
          images={images}
          startFrameIndex={centerIndex}
          style={{width: 50, height: 50}}
          framesPerSecond={24}
          loop={true}
        />
        <p>
          Bander
        </p>
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
}

export default App;
