import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import AboutUs from "./views/AboutUs";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={AboutUs} />
      </Switch>
    </div>
  );
}

export default App;
