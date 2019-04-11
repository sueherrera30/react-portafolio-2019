import React from 'react';
import MainAbout from '../styled/aboutSection/main';
import SingleImage from '../styled/aboutSection/image';
import AboutText from '../styled/aboutSection/text';
import AboutTitle from '../styled/aboutSection/title';

const imgUrl = 'src/images/suefloripondia.png';

const About = () => (
    <MainAbout>
       <AboutTitle title="Hello, nice to meet you!"></AboutTitle>
       <SingleImage src={imgUrl}></SingleImage>
       <AboutText text="My name is Sue Herrera and into my veins there are variables and musical notes; I'm a cellist and recently I started creating with a new ingredient: Code. I am training as a front-end, but in my sAboutTextare time I disguise myself as a teacher and crossfitter."></AboutText>
    </MainAbout>
);
export default About;