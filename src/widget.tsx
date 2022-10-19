import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Widget from './ChampselectInlineWidget/ChampselectInlineWidget';

const champselectInlineWidget = document.getElementById('champselect-inline-widget')

ReactDOM.render(
  <React.StrictMode>
    <Widget appName={champselectInlineWidget?.getAttribute('data-slug') || ''} />
  </React.StrictMode>,
  champselectInlineWidget
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
