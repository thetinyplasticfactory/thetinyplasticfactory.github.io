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
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/newlanding" element={<Landing />} />

        <Route path="/story" element={<Story />} />

        <Route path="/whatwedo" element={<WhatWeDo />} />

        <Route path="/collection" element={<Collection />} />

        <Route path="/manufacturing" element={<Manufacturing />} />

        <Route path="/products" element={<Products />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
