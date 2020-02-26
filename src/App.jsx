/// BASIC
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

/// PAGES
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact.jsx";
import Info from "./views/Info";
import Simulator from "./views/Simulator";
import Results from "./views/Results";
import Dashboard from "./views/Dashboard";
import Signin from "./views/Signin";
import Signup from "./views/Signup";
import NotFound from "./views/NotFound";

/// SNIPPETS
import Header from "./components/partials/Header";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main id="content-main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/info" component={Info} />
          <Route path="/simulator" component={Simulator} />
          <Route path="/results" component={Results} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
