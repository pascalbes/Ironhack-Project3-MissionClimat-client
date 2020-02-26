/// BASIC
import React, { Fragment } from "react";
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

/// STYLES
import "./styles/app.css"


function App() {
  return (
    <Fragment>
      <Header />
      <main id="content-main" className="flex-item flex-column">
        <Switch>
          {/* BASIC */}
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} /> 
          {/* SIMULATOR */}
          <Route path="/info" component={Info} />
          <Route path="/simulator" component={Simulator} />
          <Route path="/results" component={Results} />
          {/* AUTH */}
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          {/* NOT FOUND */}
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
    </Fragment>
  );
}

export default App;
