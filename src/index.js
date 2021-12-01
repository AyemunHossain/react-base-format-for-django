import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const mainRoutes = (
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<App />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
ReactDOM.render(mainRoutes, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


{/*  */}