import styled, { keyframes } from "styled-components";

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
  animation: ${loadPage} 1s;
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

export const AboutWrap = styled.div`
  width: 100%;
  /* background-color: red; */
  padding: 30px;
  max-height: 600px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width:768px){
    flex-direction: column;
  }
`
export const Info = styled.div`
padding: 0 10px;
max-width: 450px;
@media screen and (max-width:768px){
    margin-bottom: 20px;
  }
p{
  text-align: justify;
}
`

export const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  img{
    width: 100%;
  }

  @media screen and (max-width:768px){
    max-width: 400px;
  }
`


