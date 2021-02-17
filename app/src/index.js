import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import Generate from './Generate';
import NaviBar from './NaviBar';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <NaviBar /> 
    {/* <Home /> */}
    < Generate / >
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();