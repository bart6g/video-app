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
  z-index: 5;
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

export const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  background-color: ${({ darker }) =>
    darker ? "rgba(0, 0, 0, 0.6)" : "rgba(0, 0, 0, 0.2)"};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 10;


  .big-cross {
    font-size: 40px;
    color: white;
    position: absolute;
    top: 30px;
    right: 30px;
  }
`;

export const DeleteBox = styled.div`
  background-color: #ff0000;
  max-width: 500px;
  min-height: 140px;
  padding: 20px 40px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  /* left: 200px; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;

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
  @media screen and (max-width:650px){
    width: 100%;
  }
`;

export const VideoBox = styled.div`
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  .big-cross {
    position: absolute;
    top: 30px;
    right: 30px;
    font-size: 30px;
    color: black;
    /* color: white; */
    cursor: pointer;
  }
  h3 {
    padding: 30px;
  }
  iframe {
    width: 80%;
    height: 400px;
    margin-bottom: 50px;

    @media screen and (max-width: 500px) {
      height: 300px;
    }
  }
  @media screen and (max-width: 630px) {
    width: 90vw;
    
    h3 {
      margin-right: 40px;
    }
  }
`;
