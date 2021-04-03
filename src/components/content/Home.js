import React, { useState, useEffect } from "react";
import getVideoId from "get-video-id";
import { Container } from "./contentElements";
import { fetchData } from "../../api/fetchData";
import VideoBox from "../video/VideoBox";
import { VideosContainer } from "../video/videoElements";
import { VideoContext } from "../../context/videoContext";
const Home = () => {
  const [text, setText] = useState("");
  const [videos, setVideos] = useState([]);
  const [message, setMessage] = useState({ success: false, message: "" });
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    setVideoList(
      videos.map(({ id, snippet, statistics, list }, index) => (
        <VideoBox
          id={id}
          key={id}
          snippet={snippet}
          statistics={statistics}
          index={index}
          list={list}
        />
      ))
    );
  }, [videos]);

  const addVideo = (e) => {
    e.preventDefault();

    let obj = getVideoId(text);

    if (obj.id === null) {
      return setMessage({
        success: false,
        message: "No video with such id or link on youtube's platform",
      });
    }
    fetchData(obj.id, videos, setVideos, setMessage);
  };
  return (
    <Container>
      <form>
        <label>
          Video
          <input type="text" onChange={(e) => setText(e.target.value)} />
          <button onClick={(e) => addVideo(e)}>Add</button>
        </label>
      </form>
      <div>
        <p>{message.message}</p>
      </div>

      <VideoContext.Provider value={{ videos, setVideos }}>
        <VideosContainer>{videoList ? videoList : null}</VideosContainer>
      </VideoContext.Provider>
    </Container>
  );
};

export default Home;
