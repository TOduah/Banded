import trumpet from './images/trumpet.svg';
import './App.css';

const centerIndex = Math.round(images.length / 2);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={trumpet} className="App-logo" alt="logo" />
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
