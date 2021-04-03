import React, { useState, useContext } from "react";
import { Box, ImgWrap, InfoWrap } from "./videoElements";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { VideoContext } from "../../context/videoContext";
import DeleteModal from "../modals/DeleteModal";
import ListModal from "../modals/ListModal";

const VideoBox = ({ id, snippet, statistics, index, list }) => {
  const [liked, setLiked] = useState(list.like);
  const [disliked, setDisliked] = useState(list.dislike);
  const [modalListOpen, setModalListOpen] = useState(false);
  const [modalListText, setModalListText] = useState("");
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);

  const { thumbnails, title, channelTitle } = snippet;
  const { commentCount, viewCount } = statistics;

  const { videos, setVideos } = useContext(VideoContext);

  const handleChangeLike = (value, id) => {
    const prevVideos = [...videos];
    const index = prevVideos.findIndex((video) => video.id === id);

    if (value === "liked") {
      setLiked(!liked);
      setDisliked(false);
      prevVideos[index].list.like = !liked;
      prevVideos[index].list.dislike = false;
      if (!liked) {
        setModalListText("Added to liked videos!");
        setModalListOpen(true);

        setTimeout(() => {
          setModalListOpen(false);
        }, 2000);
      }
    } else {
      setDisliked(!disliked);
      setLiked(false);
      prevVideos[index].list.dislike = !disliked;
      prevVideos[index].list.like = false;

      if (!disliked) {
        setModalListText("Added to disliked videos!");
        setModalListOpen(true);
        setTimeout(() => {
          setModalListOpen(false);
        }, 2000);
      }
    }
    setVideos(prevVideos);
  };

  return (
    <>
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
              onClick={() => handleChangeLike("liked", id)}
            />
            <AiFillDislike
              className="disliked"
              onClick={() => handleChangeLike("disliked", id)}
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
          <RiDeleteBin5Fill onClick={() => setModalDeleteOpen(true)} />
        </div>
        <ListModal
          modalListOpen={modalListOpen}
          modalListText={modalListText}
        />
      </Box>
      {modalDeleteOpen ? (
        <DeleteModal
          id={id}
          title={title}
          setModalDeleteOpen={setModalDeleteOpen}
        />
      ) : null}
    </>
  );
};

export default VideoBox;
