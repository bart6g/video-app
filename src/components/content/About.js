import React from 'react'
import { AboutWrap, Container, ImgWrap, Info } from './contentElements'
import img from "../../images/application.svg"


const About = () => {
    return (
       <Container>
        <AboutWrap>
        <Info>
        <p>
        This application was written in React, inspired by recruiting task. The application uses YoutubeAPI and Axios to fetch data. In the initial state of the application there are three videos, user can add more or delete existing ones. Saving new movie will result saving all videos to the local storage of the browser. 
        VideoApp uses also ContextAPI to manage the state of the application. All the components were written with Styled Components.
        </p>
        </Info>
        <ImgWrap>
        <img src={img} alt="application"/>
        </ImgWrap>
        </AboutWrap>
        </Container>
        )
        }
        
        export default About
        

