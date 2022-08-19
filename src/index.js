import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// styles for this kit
import './assets/css/bootstrap.min.css';
import './assets/css/slick.css';
import './assets/css/magnific-popup.css';
import './assets/css/animate.min.css';
import './assets/css/font-awesome.min.css';
import './assets/css/style.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
