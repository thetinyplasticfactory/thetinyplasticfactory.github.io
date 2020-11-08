import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { Story } from "./containers/Story";
import { Landing } from "./containers/Landing";
import { Collection } from "./containers/Collection";
import { Contact } from "./containers/Contact";
import { Manufacturing } from "./containers/Manufacturing";
import { Products } from "./containers/Products";
import { WhatWeDo } from "./containers/WhatWeDo";

import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch, useParams } from "react-router-dom";

// function BlogPost() {
//   let { slug } = useParams();
//   return <div>Now showing post {slug}</div>;
// }

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/newlanding">
          <Landing />
        </Route>
        <Route path="/story">
          <Story />
        </Route>
        <Route path="/whatwedo">
          <WhatWeDo />
        </Route>
        <Route path="/collection">
          <Collection />
        </Route>
        <Route path="/manufacturing">
          <Manufacturing />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
