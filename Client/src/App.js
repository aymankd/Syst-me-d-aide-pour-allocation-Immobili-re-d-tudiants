import React/*, { Component }*/ from "react";
import { BrowserRouter as Router,
  Route,
  //Switch,
  //Links,
  //Redirect
  } from "react-router-dom";

//pages
import NavBare from './Pages/NavBare';
import HomeA from './Pages/HomeA';
import ResultPage from './Pages/ResultPage';


function App() {
  return (
    <div className="App">
        <Router>
          <NavBare/>
          <Route exact path="/" component = {HomeA} /> 
          <Route exact path="/ResultPage" component = {ResultPage} /> 
        </Router>
    </div>
  );
}

export default App;
