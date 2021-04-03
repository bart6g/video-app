import React, { useContext, useState } from "react";
import { VideoContext } from "../../context/videoContext";
import { DeleteBox, DeleteModalContainer } from "./modalElements";
import { AiOutlineClose } from "react-icons/ai";

const DeleteModal = ({ id, title, setModalDeleteOpen }) => {
  const { videos, setVideos } = useContext(VideoContext);

  const handleDelete = (id) => {
    const prevVideos = [...videos];
    const filtedVideos = prevVideos.filter((video) => video.id !== id);

    setVideos(filtedVideos);
    setModalDeleteOpen(false);
  };

  return (
    <DeleteModalContainer>
      <DeleteBox>
        <h4>Are you sure you want to delete "{title}" from list?</h4>
        <div className="buttons">
          <button onClick={() => handleDelete(id)}>Yes</button>
          <button onClick={() => setModalDeleteOpen(false)}>No</button>
        </div>
        <AiOutlineClose
          className="delete-button"
          onClick={() => setModalDeleteOpen(false)}
        />
      </DeleteBox>
    </DeleteModalContainer>
  );
};

export default DeleteModal;