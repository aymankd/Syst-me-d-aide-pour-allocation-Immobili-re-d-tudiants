import React, { Component } from "react";
import { BrowserRouter as Router,
  Route,
  Switch,
  Links,
  Redirect
  } from "react-router-dom";

//pages
import NavBare from './Pages/NavBare';
import HomeA from './Pages/HomeA';



function App() {
  return (
    <div className="App">
        <Router>
          <NavBare/>
          <Route exact path="/" component = {HomeA} /> 
        </Router>
    </div>
  );
}

export default App;
