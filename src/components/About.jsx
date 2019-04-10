import React from 'react';
import styled from 'styled-components';


const imgUrl = 'src/images/suefloripondia.png';

const AboutMain = styled.div`
    width: 40%;
    height: 90%;
    display:flex;
    flex-direction: column;
    align-items: center;
    //background: linear-gradient(45deg, rgba(254,203,163,0) 0%, rgba(254,203,163,0.4) 37%, rgba(0,128,128,0.92) 92%, rgba(0,128,128,1) 100%);
    background: linear-gradient(45deg, rgba(250,248,215,0.5) 0%, rgba(251,246,212,0.5) 20%, rgba(255,241,201,1) 100%);
`;
const AboutTitle= styled.div`
    font-family: 'Cedarville Cursive', cursive;
    color: #EA6BB2;
    font-size: 30px;
`;

const AboutText= styled.p`
    font-size: 18px;
    font-family: 'Nunito', sans-serif;
    color: #366165;
    padding: 1rem 8rem;
    text-align:center;
`;
const SelfPortrait = styled.img`
    width: 50%;
`;
const About = () => (
 <AboutMain className="About">
        < AboutTitle>Hello, nice to meet you!</ AboutTitle>
        <SelfPortrait src={imgUrl} />
        <AboutText>
            My name is Sue Herrera and into my veins there are variables and musical notes; 
            I'm a cellist and recently I started creating with a new ingredient: Code.
            I am training as a front-end, but in my sAboutTextare time I disguise myself as a teacher and crossfitter.
        </AboutText>
 </AboutMain>
);
export default About;