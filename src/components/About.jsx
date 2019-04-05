import React from 'react';
import styled from 'styled-components';


const imgUrl = 'src/images/suefloripondia.png';

const AboutMain = styled.div`
    width: 50%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
            My name is Sue Herrera and within my veins there are variables and musical notes; 
            I'm a cellist and recently I started creating with a new ingredient: Code.
            I am training as a front-end, but in my sAboutTextare time I disguise myself as a teacher and crossfitter.
        </AboutText>
 </AboutMain>
);
export default About;