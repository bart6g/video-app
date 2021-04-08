import React, { useContext } from "react";
import { VideoContext } from "../../context/videoContext";
import { DeleteBox, ModalContainer } from "./modalElements";
import { AiOutlineClose } from "react-icons/ai";

const DeleteModal = ({ id, title, setModalDeleteOpen }) => {
  const { videos, setVideos, setIsBg } = useContext(VideoContext);

  const handleDelete = (id) => {
    const prevVideos = [...videos];
    const filtedVideos = prevVideos.filter((video) => video.id !== id);

    setVideos(filtedVideos);
    setModalDeleteOpen(false);
    setIsBg(false);
  };

  return (
    // <ModalContainer>
      <DeleteBox>
        <p>Are you sure you want to delete "{title}" from list?</p>
        <div className="buttons">
          <button onClick={() => handleDelete(id)}>Yes</button>
          <button onClick={() => {setModalDeleteOpen(false); setIsBg(false)}}>No</button>
        </div>
        <AiOutlineClose
          className="delete-button"
          onClick={() => {setModalDeleteOpen(false); setIsBg(false)}}
        />
      </DeleteBox>
    // </ModalContainer>
  );
};

export default DeleteModal;
