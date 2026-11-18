import icon from './logo.svg';
import './App.css';
import Home from './home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  let name = "Ajay";

  return (
    <>
    
    <div className="App">
      <header className="App-header">
        <img src={icon} className="App-logo" alt="icon" />
                <Home/>

        <p>
          {name} <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>
    
    </div>
    </>
  );
}

export default App;
