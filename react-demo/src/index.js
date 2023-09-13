import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
let a = 10;
let b = 1000;
let c = 0;
let d;
let aa = true ? 1 : 0
const cc = 1;
cc += 1;
console.log(cc)
root.render(
    <React.StrictMode>
        <App a={'xxx' + 'cccc' + 'root'} />
        <div>
            {console.log(will)}
            <div>cccc </div>
        </div>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
