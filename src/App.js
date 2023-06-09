import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import EvenMore from "./pages/NewPage";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/evenmore" element={<EvenMore />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
