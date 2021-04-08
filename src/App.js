import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/content/Home";
import About from "./components/content/About";
import VideoList from "./components/content/VideoList";
import { initialData } from "./initData";
import { VideoContext } from "./context/videoContext";
import { Background } from "./components/content/contentElements";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [videoList, setVideoList] = useState([]);
  const [isBg, setIsBg] = useState(false);

  useEffect(() => {
    const localVideos = JSON.parse(localStorage.getItem("videos"));
    // console.log(localVideos);
    if (!localVideos) {
      setVideos(initialData);
    } else {
      setVideos(localVideos);
    }
  }, []);
  return (
    <Router>
      <Navbar />
      <VideoContext.Provider
        value={{ videos, setVideos, videoList, setVideoList, setIsBg }}
      >
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
