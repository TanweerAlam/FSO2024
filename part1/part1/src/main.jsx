// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

// ********************eg. 2***************************

// import ReactDOM from 'react-dom/client';

// import App from './App';

// const rootElement = document.getElementById('root');

// let counter = 1;

// // const refresh = () => ReactDOM.createRoot(rootElement).render(<App counter={counter}/>);

// // refresh()
// // counter += 1
// // refresh()
// // counter += 1
// // refresh()

// // setInterval(() => {
// //     refresh()
// //     counter += 1
// // }, 1000)

// ReactDOM.createRoot(rootElement).render(<App counter={counter}/>);

// *********************eg. 3***************************

import ReactDOM from 'react-dom/client'

import App from "./App"

ReactDOM.createRoot(document.getElementById("root")).render(<App />)
