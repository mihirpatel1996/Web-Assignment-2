import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "..//node_modules/bootstrap/dist/css/bootstrap.min.css";
//import Carousel from "..//node_modules/react-bootstrap/Carousel";
//import react dom router
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import "./components/layouts/Carousel";

import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Product from "./components/pages/Product";
import Contact from "./components/pages/Contact";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
        <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Navbar />
        <Carousel />
      </div>
    );
  }
}

export default App;
