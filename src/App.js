import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/content/Home";
import About from "./components/content/About";
import VideoList from "./components/content/VideoList";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/list" component={VideoList} />
      </Switch>

      <Footer />
    </Router>
  );
};

export default App;
