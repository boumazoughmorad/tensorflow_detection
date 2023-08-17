import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Facemesh from './Facemesh'
import reportWebVitals from './reportWebVitals';
import HandPoseDetection from './HandPoseDetection';
import PosentRealtime from './PosenetRealtime';
import RealTimeBodySegmentation from "./RealTimeBodySegmentation";
import GestureRecognition from "./GestureRecognition"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Facemesh/> */}
     {/* <HandPoseDetection/> */}
     {/* <PosentRealtime/> */}
     {/* <RealTimeBodySegmentation/> */}
     <GestureRecognition/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
