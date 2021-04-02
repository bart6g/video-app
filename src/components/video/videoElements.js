import styled, { keyframes, css } from "styled-components";

export const VideosContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Box = styled.div`
  margin: 10px auto;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  display: flex;
  align-items: center;
  position: relative;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f3f3f3;

    .delete {
      visibility: visible;
    }
  }

  h2 {
    padding-left: 10px;
  }

  .delete {
    position: absolute;
    right: 30px;
    font-size: 30px;
    color: #909090;
    visibility: hidden;
    cursor: pointer;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;

    .delete {
      top: 50%;
    }
  }
`;

export const ImgWrap = styled.div`
  max-width: 350px;
  padding: 10px;
  img {
    width: 100%;
    min-width: 250px;
  }

  .like-stat {
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      margin: 0 10px;
      font-size: 22px;
      color: #909090;
      cursor: pointer;
      transition: all 0.3s ease;
    }
  }

  .liked {
    color: ${({ liked }) => (liked ? "#3b5998 !important" : "#909090")};
  }

  .disliked {
    color: ${({ disliked }) => (disliked ? "#c4302b !important" : "#909090")};
  }

  @media screen and (max-width: 768px) {
    img {
      width: 250px;
      padding: 10px;
    }
  }
`;

export const InfoWrap = styled.div`
  max-width: 300px;
  padding: 20px;

  @media screen and (max-width: 600px) {
    h3 {
      font-size: 14px;
    }
  }
`;

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
export const ListModal = styled.div`
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
