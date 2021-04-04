import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;

  background-color: #000;
  color: white;
`;
export const ColumnWrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 20px 50px;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

export const Column = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  h3 {
    font-weight: 400;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      opacity: 0.7;
      transform: translateY(-5px);
    }
  }

  li {
    font-weight: 200;
    font-size: 14px;
    padding: 5px 0;
    cursor: pointer;
    transition: all 0.3s ease;
    list-style-type: none;
    &:hover {
      opacity: 0.7;
      transform: translateY(-5px);
    }
  }

  .media {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
  }

  a {
    border-radius: 50%;
    width: 35px;
    height: 35px;
    margin-right: 5px;
    background-color: white;
    color: #0d174a;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;

    transition: all 0.3s ease;
    z-index: 2;
    &:hover {
      opacity: 0.7;
      transform: translateY(-5px);
    }
  }
`;
