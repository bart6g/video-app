import React, { useState, useContext } from "react";
import { Box, ImgWrap, InfoWrap } from "./videoElements";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { VideoContext } from "../../context/videoContext";

const VideoBox = ({ id, snippet, statistics, index }) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const { thumbnails, title, channelTitle } = snippet;
  const { commentCount, viewCount } = statistics;

  const { videos, setVideos } = useContext(VideoContext);

  const handleChangeLike = (value) => {
    const prevVideos = [...videos];

    if (value === "liked") {
      setLiked(!liked);
      setDisliked(false);
    } else {
      setDisliked(!disliked);
      setLiked(false);
    }
  };

  return (
    <Box>
      <h2>{index + 1}</h2>
      <ImgWrap liked={liked ? 1 : 0} disliked={disliked ? 1 : 0}>
        <img src={thumbnails.medium.url} alt="" />
        <div className="like-stat">
          <p>
            {liked
              ? parseFloat(statistics.likeCount) + 1
              : statistics.likeCount}
          </p>
          <AiFillLike
            className="liked"
            onClick={() => handleChangeLike("liked")}
          />
          <AiFillDislike
            className="disliked"
            onClick={() => handleChangeLike("disliked")}
          />
          <p>
            {disliked
              ? parseFloat(statistics.dislikeCount) + 1
              : statistics.dislikeCount}
          </p>
        </div>
      </ImgWrap>

      <InfoWrap>
        <h3>{title}</h3>
        <p>{channelTitle}</p>
        <p>Views: {viewCount}</p>
        <p>Comments: {commentCount}</p>
      </InfoWrap>
      <div className="delete">
        <RiDeleteBin5Fill />
      </div>
      {/* <button onClick={() => console.log(snippet)}>Info</button>
      <button onClick={() => console.log(statistics)}>Stat</button> */}
    </Box>
  );
};

export default VideoBox;
