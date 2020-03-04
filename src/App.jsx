/// BASIC
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import { ProtectedRoute } from "./auth/ProtectedRoute";


/// PAGES
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact.jsx";
import Concept from "./views/Concept";
import Simulator from "./views/Simulator";
import Results from "./views/Results";
import Dashboard from "./views/Dashboard";
import Signin from "./views/Signin";
import Signup from "./views/Signup";
import NotFound from "./views/NotFound";
import api from "./api/APIHandler"
// import { Beforeunload , useBeforeunload } from 'react-beforeunload';

/// SNIPPETS
import Header from "./components/partials/Header";

/// STYLES
import "./styles/app.css";
import "./styles/reset.css";
import UserContext from "./auth/UserContext"



function App() {

const [currentUser,setCurrentUser] = useState(null);

const UserContextValue = {
  currentUser, 
  setCurrentUser
}


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
    <UserContext.Provider value={UserContextValue}>
      <Header />
      <main id="content-main">
        <Switch>
          {/* BASIC */}
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} /> 
          {/* SIMULATOR */}
          <Route path="/concept" component={Concept} />
          <Route path="/simulator/favorites/:urlParams" component={Simulator} />
          <Route path="/simulator" component={Simulator} />        
          <Route path="/results" component={Results} />
          {/* AUTH */}
          <ProtectedRoute path="/dashboard" component={Dashboard} />
          {/* <Route path="/dashboard" component={Dashboard} /> */}
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          {/* NOT FOUND */}
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
</UserContext.Provider>
  );
}

export default App;
