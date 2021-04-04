import React, { useState, useEffect, useContext } from "react";
import { VideoContext } from "../../context/videoContext";
import { VideosContainer } from "../video/videoElements";
import { Container, Title } from "./contentElements";
import VideoBox from "../video/VideoBox";

const VideoList = () => {
  const { videos } = useContext(VideoContext);
  const [likedVideos, setLikedVideos] = useState([]);
  const [dislikedVideos, setDislikedVideos] = useState([]);

  const [liked, setLiked] = useState(true);

  useEffect(() => {
    const filtredLikedVideos = videos
      ? [...videos]
          .filter((video) => video.list.like === liked)
          .map(({ id, snippet, statistics, list }, index) => (
            <VideoBox
              id={id}
              key={id}
              snippet={snippet}
              statistics={statistics}
              index={index}
              list={list}
            />
          ))
      : null;
    const filtredDislikedVideos = videos
      ? [...videos]
          .filter((video) => video.list.dislike === true)
          .map(({ id, snippet, statistics, list }, index) => (
            <VideoBox
              id={id}
              key={id}
              snippet={snippet}
              statistics={statistics}
              index={index}
              list={list}
            />
          ))
      : null;
    setLikedVideos(filtredLikedVideos);
    setDislikedVideos(filtredDislikedVideos);
  }, [videos]);

  return (
    <Container>
      <Title liked={liked ? 1 : 0}>
        List of
        <button onClick={() => setLiked(!liked)}>
          <span>Liked</span>
          <span>Disliked</span>
          <span className="toggle"></span>
        </button>
        videos
      </Title>
      <VideosContainer>{liked ? likedVideos : dislikedVideos}</VideosContainer>
    </Container>
  );
};

export default VideoList;
