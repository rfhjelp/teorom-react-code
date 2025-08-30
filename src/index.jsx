import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import generalText from "./data/generalText.json"

const root = ReactDOM.createRoot(document.getElementById('root'));

// IMPORTANT MESSAGE (below) / IMPORTANT MESSAGE (below) / IMPORTANT MESSAGE (below)
// IMPORTANT MESSAGE (below) / IMPORTANT MESSAGE (below) / IMPORTANT MESSAGE (below)
// IMPORTANT MESSAGE (below) / IMPORTANT MESSAGE (below) / IMPORTANT MESSAGE (below)

const ASAPMessage = generalText.ASAPMessage;
const GeneralMessage = generalText.GeneralMessage;

// IMPORTANT MESSAGE (above) / IMPORTANT MESSAGE (above) / IMPORTANT MESSAGE (above)
// IMPORTANT MESSAGE (above) / IMPORTANT MESSAGE (above) / IMPORTANT MESSAGE (above)
// IMPORTANT MESSAGE (above) / IMPORTANT MESSAGE (above) / IMPORTANT MESSAGE (above)


root.render(
  <React.StrictMode>
    <App ASAPMessage={ASAPMessage} GeneralMessage={GeneralMessage} />
  </React.StrictMode>
);
