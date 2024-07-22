//import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React from "react";
import ReactDOM  from "react-dom/client";
// import Assignment from "./Assignment";
//  import Two from "./Two";
// import Fifth from "./Fourth"
//import Fifth from "./Fifth";
 import Review from "./Review";
const rootElement = document.getElementById('root')
const rootRef=ReactDOM.createRoot(rootElement);
rootRef.render(<Review/>)