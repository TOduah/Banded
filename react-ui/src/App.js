import trumpet from './images/trumpet.svg';
import './App.css';
import { useTransition, animated, config } from 'react-spring'

const slides = [
  { id: 0, url: './images/trumpet.svg' },
  { id: 1, url: './images/bass_drum.svg' },
  { id: 2, url: './images/clarinet.svg' },
  { id: 3, url: './images/french_horn.svg' },
]

function App() {
  const [index, set] = useState(0)
  const transitions = useTransition(slides[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })
  useEffect(() => void setInterval(() => set(state => (state + 1) % 4), 2000), [])
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={trumpet} className="App-logo" alt="logo" />
  //       <p> 
  //         Bander
  //       </p>
  //       {/* <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a> */}
  //     </header>
  //   </div>
  // );
  return transitions.map(({ item, props, key }) => (
    
      // key={key}
      <div className="App">
        key={key}
  //     <header className="App-header">
  //       <img src={item.url} className="App-logo" alt="logo" />
  //       <p> 
  //         Bander
  //       </p>
  //       {/* <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a> */}
  //     </header>
  //   </div>
      // class="bg"
      // style={{ ...props, backgroundImage: `url(https://images.unsplash.com/${item.url}&auto=format&fit=crop)` }}
    
  ));
}

export default App;
