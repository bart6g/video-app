import React from "react";
import { ListModalContainer } from "./modalElements";

const ListModal = ({ modalListOpen, modalListText }) => {
  return (
    <ListModalContainer modalListOpen={modalListOpen}>
      {modalListText}
    </ListModalContainer>
  );
};

export default ListModal;
