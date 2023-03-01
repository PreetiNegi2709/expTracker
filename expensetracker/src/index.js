import React from 'react';
// below importing smthg (ReactDOM obj) from reactdom 3rd party liabrary (which is 1 of dependencies in package.json)
// react and reactdom together form == react liabrary
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// createRoot is method from library ReactDOM = document.getElementById('root') ; main place where react app is rendered (provided)
const root = ReactDOM.createRoot(document.getElementById('root'));
// call .render method to tell react what to render in that div 
{/* <div id="root"></div> the content is replaced by ----- root.render(indide this) */}
root.render(
  <React.StrictMode>
    {/* <App/> is custom HTML element */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
