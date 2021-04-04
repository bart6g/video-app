import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

export const Title = styled.div`
  display: flex;

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
    transform: ${({ liked }) => (liked ? "translateX(0)" : "translateX(100%)")};
    width: 50%;
    height: 100%;
    top: 0;
    left: 0;
  }
`;
