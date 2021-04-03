import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/content/Home";
import About from "./components/content/About";
import VideoList from "./components/content/VideoList";

import { VideoContext } from "./context/videoContext";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [videoList, setVideoList] = useState([]);

  return (
    <Router>
      <Navbar />
      <VideoContext.Provider value={{ videos, setVideos, videoList, setVideoList }}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/list" component={VideoList} />
        </Switch>
      </VideoContext.Provider>

      <Footer />
    </Router>
  );
};

export default App;
