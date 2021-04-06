import React from "react";
import { AboutWrap, Container, ImgWrap, Info } from "./contentElements";
import img from "../../images/application.svg";
import img2 from "../../images/developer.svg";

const About = () => {
  return (
    <Container>
      <AboutWrap animatedRight={true}>
        <Info>
          <h2>About the application</h2>
          <p>
            This application was written in React, inspired by recruiting task.
            The application uses YoutubeAPI and Axios to fetch data. In the
            initial state of the application there are three videos, user can
            add more or delete existing ones. Saving new movie will result
            saving all videos to the local storage of the browser. VideoApp uses
            also ContextAPI to manage the state of the application. All the
            components were written with Styled Components. All the parts are
            interactive except the footer, where only the Github icon leads to
            the developer's page.
          </p>
        </Info>
        <ImgWrap>
          <img src={img} alt="application" />
        </ImgWrap>
      </AboutWrap>
      <AboutWrap imgStart={true} animatedRight={false}>
        <Info>
          <h2>About the developer</h2>
          <p>
            I'm Bartosz, a junior front-end developer, looking for an
            opportunity to gain my first commercial experience. I'm keen on
            learning. React, but I will also enthusiastically learn new
            technologies. Currently, I'm finishing my master's degree in
            computer science at the University of Science and Technology in
            Cracow. My master's thesis will be based on MERN stack and will use
            numerical methods.
          </p>
        </Info>
        <ImgWrap>
          <img src={img2} alt="application" />
        </ImgWrap>
      </AboutWrap>
    </Container>
  );
};

export default About;
