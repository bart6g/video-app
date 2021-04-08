import styled, { keyframes, css } from "styled-components";

const loadPage = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  min-height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1300px;
  margin: 20px auto;
  margin-bottom: 50px;
  opacity: 1;
  transform: translateY(0);
  animation: ${({ animated }) =>
    animated
      ? css`
          ${loadPage} 1s
        `
      : ""};
`;

export const Title = styled.div`
  display: flex;
  margin: 30px 0;
  align-items: center;
  button {
    border-radius: 20px;
    margin: 0 20px;
    width: 160px;
    padding: 10px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    outline: none;
    border: none;
    background-color: #d4d1d1;
    cursor: pointer;
    span {
      pointer-events: none;
    }
  }

  .toggle {
    position: absolute;
    background-color: red;
    border-radius: 20px;
    transition: all 0.3s ease;
    transform: ${({ liked }) => (liked ? "translateX(100%)" : "translateX(0)")};
    width: 50%;
    height: 100%;
    top: 0;
    left: 0;
  }
`;

const loadWrapRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const loadWrapLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AboutWrap = styled.div`
  width: 100%;
  /* background-color: red; */
  height: 100%;
  padding: 30px;
  max-height: 600px;
  display: flex;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
  align-items: center;
  justify-content: space-around;
  animation: ${({ animatedRight }) =>
    animatedRight
      ? css`
          ${loadWrapRight} 1s
        `
      : css`
          ${loadWrapLeft} 1s
        `};
  @media screen and (max-width: 768px) {
    flex-direction: column;
    max-height: 100%;
  }
`;
export const Info = styled.div`
  padding: 0 10px;
  max-width: 450px;
  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
    max-width: 100%;
  }
  p {
    text-align: justify;
  }
  h2 {
    margin: 10px 0;
  }
  @media screen and (max-width: 350px) {
    h2 {
      font-size: 18px;
    }
  }
`;

export const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  min-width: 350px;
  padding: 0 15px;
  img {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    max-width: 400px;
  }
  @media screen and (max-width: 350px) {
img{
  width: 90%;
  margin: 0 auto;  
}
  }
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.3);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`


