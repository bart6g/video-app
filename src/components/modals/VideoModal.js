import React from "react";
import { ModalContainer, VideoBox } from "./modalElements";
import { AiOutlineClose } from "react-icons/ai";

const VideoModal = ({ title, id, setModalVideoOpen }) => {
  return (
    <ModalContainer darker={true}>
      <VideoBox>
        <AiOutlineClose
          className="big-cross"
          onClick={() => setModalVideoOpen(false)}
        />
        <h3>{title}</h3>
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </VideoBox>
    </ModalContainer>
  );
};

export default VideoModal;
