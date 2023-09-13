import logo from './logo.svg';
import './App.css';
import { useReducer       } from 'react';

function App() {
    let a = 10;
    let b = 1000
    let c = 0;
    const d = 100;
    d += 100;





    console.log(will);
    const [] = useReducer(a, b, c);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                      Edit <code>src/App.js</code> and save to reload.
                    <div>div</div>
                    <div>div2</div>
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
    );
}

export default App;
