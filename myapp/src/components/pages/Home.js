import React, { Component } from "react";
import Navbar from "../layouts/Navbar";
import Carousel from "../layouts/Carousel";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>Home Page</h1>
        <Carousel />
      </div>
    );
  }
}

export default Home;
