import React, { Component } from "react";

import HomePage from "./Containers/HomePage/HomePage";

import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
  }
}

export default App;
