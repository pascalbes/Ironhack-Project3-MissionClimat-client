/// BASIC
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

/// PAGES
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact.jsx";
import Contribuer from "./views/Contribuer.jsx";
import Concept from "./views/Concept";
import Simulator from "./views/Simulator";
import Results from "./views/Results";
import NotFound from "./views/NotFound";

/// STYLES
import "./styles/app.css";
import "./styles/reset.css";

/// GOOGLE ANALYTICS
import ReactGA from 'react-ga';

ReactGA.initialize(process.env.GAID, {
  debug: true
  // gaOptions: { cookieDomain: 'auto' }
})

ReactGA.set({
  userId: "556632325",
  // any data that is relevant to the user session
  // that you would like to track with google analytics
})

const history = createBrowserHistory();
history.listen(location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

function App() {

  useEffect(() => {
    
    ReactGA.pageview(window.location.pathname);

    ReactGA.event({
      category: "test",
      action: "test",
      label: 'test'
    });

  }, [])

  ReactGA.event({
    category: "test2",
    action: "test",
    label: 'test'
  });


  


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
          <Route path="/contribuer" component={Contribuer} /> 
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
