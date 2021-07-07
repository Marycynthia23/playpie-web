import React from "react";
import Home from "./Homepage";
import About from "./About";
import Fans from "./Fans";
import faqs from "./faqs";
import Artists from "./Artists";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>  
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/fans" component={Fans} />
          <Route path="/faqs" component={faqs} />
          <Route path="/artists" component={Artists} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
