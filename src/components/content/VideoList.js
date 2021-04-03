import React, {useState, useEffect,useContext} from "react";
import {VideoContext} from "../../context/videoContext"
import { VideosContainer } from "../video/videoElements";
import { Container, Title } from "./contentElements";

const VideoList = () => {

  const { videoList} = useContext(VideoContext);
  const [likedVideos, setLikedVideos] = useState([]);
  const [dislikedVideos, setDislikedVideos] = useState([]);

  const [liked, setLiked] = useState(true);

  useEffect(() => {
    const filtredLikedVideos = [...videoList].filter(video => video.props.list.like === liked );
    const filtredDislikedVideos = [...videoList].filter(video=>video.props.list.dislike === true);
    setLikedVideos(filtredLikedVideos)
    setDislikedVideos(filtredDislikedVideos)

  }, [videoList])

  return (
  <Container>
    <Title liked={liked ? 1 : 0}>
    List of 
      <button onClick={()=>setLiked(!liked)}>
        <span>Liked</span> 
        <span>Disliked</span> 
        <span className="toggle" ></span>
      </button>
videos
    </Title>
    <VideosContainer>
      {liked ? likedVideos : dislikedVideos}
    </VideosContainer>
  </Container>
  );
};

export default VideoList;
