import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Widget from './ChampselectInlineWidget/ChampselectInlineWidget';

const champselectInlineWidget = document.getElementById('champselect-inline-widget')
const root = document.getElementById('root')

if (champselectInlineWidget) {
  ReactDOM.render(
    <React.StrictMode>
      <Widget appName={champselectInlineWidget?.getAttribute('data-slug') || ''} />
    </React.StrictMode>,
    champselectInlineWidget
  );
} else {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    root
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
