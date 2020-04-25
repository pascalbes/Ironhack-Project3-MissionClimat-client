/// BASIC
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";


/// PAGES
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact.jsx";
import Concept from "./views/Concept";
import Simulator from "./views/Simulator";
import Results from "./views/Results";
import NotFound from "./views/NotFound";
import api from "./api/APIHandler"
// import { Beforeunload , useBeforeunload } from 'react-beforeunload';

/// SNIPPETS
import Header from "./components/partials/Header";

/// STYLES
import "./styles/app.css";
import "./styles/reset.css";



function App() {


  // function deleteSheet(e) {
  //   //e.preventDefault();
  //   console.log(localStorage.getItem('idSheet'))
  //   if (localStorage.getItem('idSheet')) {
  //     var idSheet=localStorage.getItem('idSheet')
  //     localStorage.removeItem('idSheet')
  //     api.delete("/sheet/delete", idSheet)
  //     .then(res => {
  //       console.log("SHEET DELETED!", res)
  //     })
  //     .catch(err=>console.log(err))
  //   }
  //   return "kikou";
  // }

  // useBeforeunload((e) => deleteSheet(e))
  // window.addEventListener ("beforeunload", (e) => deleteSheet(e));

  return (
    <>
      {/* <Header /> */}
      <main id="content-main">
        <Switch>
          {/* BASIC */}
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} /> 
          {/* SIMULATOR */}
          <Route path="/concept" component={Concept} />
          <Route path="/simulator" component={Simulator} />        
          <Route path="/results" component={Results} />
          {/* NOT FOUND */}
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
    </>
  );
}

export default App;
