import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/css/bootstrap.css'
import './assets/css/font-awesome.css'
import './assets/css/style.css'
import './assets/css/slick.css'
import './assets/css/nouislider.css'
import './assets/css/jquery.fancybox.css'
import './assets/css/default-theme.css'
import './assets/css/plugins.css'



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
