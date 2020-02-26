/// BASIC
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

/// PAGES
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Dashboard from "./views/Dashboard";
import Signin from "./views/Signin";
import Signup from "./views/Signup";
import NotFound from "./views/NotFound";

/// SNIPPETS
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
