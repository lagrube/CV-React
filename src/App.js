import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Skill from "./pages/Skill";

import "./styles/styles.scss";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/compétences" exact component={Skill} />
          <Route path="/contact" exact component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
