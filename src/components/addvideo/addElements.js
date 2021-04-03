import styled from "styled-components";

export const AddVideoContainer = styled.div`
  max-width: 1300px;
  margin: 20px auto;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 0;
  }

  p {
    color: ${({ success }) => (success ? "blue" : "red")};
  }
`;

export const Form = styled.form`
  width: 80%;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;

  label {
    position: relative;
    min-width: 350px;
    span {
      position: absolute;
      pointer-events: none;
      display: block;
      top: 15px;
      left: 20px;
      transition: all 0.3s ease;
    }
    input {
      width: 100%;
      height: 100%;
      padding: 15px 20px;
      outline: none;
      transition: all 0.3s ease;

      &:focus,
      &:valid {
        border: 2px solid gray;
        transition: all 0.3s ease;

        + .placeholder {
          transform: translateY(-27px);
          background-color: white;
          padding: 0 10px;
          font-weight: 600;
        }
      }
    }

    @media screen and (max-width: 650px) {
      width: 100%;
      padding: 0 20px;
    }
  }
  button {
    margin-top: 20px;
    padding: 10px 20px;
    border: none;
    outline: none;
    color: white;
    background-color: #ff0000;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    border-radius: 10px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
