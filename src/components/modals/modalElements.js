import styled, { css, keyframes } from "styled-components";

const listModalOpen = keyframes`
  from{
    transform: translateY(300px);
  }
  to{
    transform: translateY(0);
  }
`;
const listModalClose = keyframes`
  from{
    transform: translateY(0);
  }
  to{
    transform: translateY(300px);
  }
`;
export const ListModalContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 80px;
  width: 240px;
  margin: 12px;
  padding: 8px 24px;
  background-color: #323232;
  color: white;
  /* transform: translateY(300px); */
  transition: all 0.3s ease;
  transform: ${({ modalListOpen }) =>
    modalListOpen ? "translateY(0)" : "translateY(300px)"};
  animation: ${({ modalListOpen }) =>
    modalListOpen
      ? css`
          ${listModalOpen} 1s
        `
      : css`
          ${listModalClose} 1s
        `};
`;

export const DeleteModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 10;
`;

export const DeleteBox = styled.div`
  background-color: #ff0000;
  width: 450px;
  min-height: 140px;
  padding: 20px 40px;
  position: relative;
  color: white;

  h4 {
    padding-right: 15px;
  }
  .buttons {
    margin: 10px 0;
    padding-top: 10px;

    button {
      padding: 5px 20px;
      margin-right: 10px;
      background-color: transparent;
      outline: none;
      border: 2px solid white;
      color: white;
      transition: all 0.3s ease;
      cursor: pointer;
      &:hover {
        transform: translateY(-5px);
        opacity: 0.7;
      }
    }
  }
  .delete-button {
    position: absolute;
    top: 18px;
    right: 18px;
    font-size: 25px;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      transform: translateY(-5px);
      opacity: 0.7;
    }
  }
`;
