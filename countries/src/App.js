import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import AllCountries from './components/AllCountries';


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header/>
        <Route exact path="/" component={AllCountries}/>

        
      </div>
    </BrowserRouter>
  );
}

export default App;
