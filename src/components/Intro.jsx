import React from 'react';
import styled from 'styled-components';
import { MainComponent } from '../styled/introstyles/containers';
import Title from '../styled/introstyles/title';
import Subtitle from '../styled/introstyles/subtitle';
import SingleImage from '../styled/introstyles/image';

const imgUrl = 'src/images/marcoFlorar3.png';

const Intro = () =>(
    <MainComponent>
        <div className="Intro-container">
            <Title text= "Sue Herrera"></Title>
            <Subtitle></Subtitle>
            <SingleImage src={imgUrl} />
        </div>
    </MainComponent>
);
export default Intro;


