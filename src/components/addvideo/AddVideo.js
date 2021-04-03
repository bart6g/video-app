import React, { useState, useContext } from "react";
import getVideoId from "get-video-id";
import { fetchData } from "../../api/fetchData";
import { VideoContext } from "../../context/videoContext";
import { AddVideoContainer, Form } from "./addElements";

const AddVideo = () => {
  const { videos, setVideos } = useContext(VideoContext);
  const [message, setMessage] = useState({ success: null, message: "" });
  const [videoText, setVideoText] = useState("");
  const addVideo = (e) => {
    e.preventDefault();
    let string = videoText ? videoText : "wrong";
    let obj = getVideoId(string);

    if (obj.id === null) {
      return setMessage({
        success: false,
        message: "No video with such id or link on youtube's platform",
      });
    }
    fetchData(obj.id, videos, setVideos, setMessage);

    setTimeout(() => {
      setMessage({ success: null, message: "" });
      setVideoText("");
    }, 5000);
  };

  return (
    <AddVideoContainer success={message.success}>
      <Form success={message.success}>
        <label>
          <input
            type="text"
            value={videoText}
            onChange={(e) => setVideoText(e.target.value)}
            required
          />
          <span className="placeholder">Video URL or ID</span>
        </label>
        <button onClick={(e) => addVideo(e)}>Add video</button>
      </Form>
      <div>
        <p>{message.message}</p>
      </div>
    </AddVideoContainer>
  );
};

export default AddVideo;
