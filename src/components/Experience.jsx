import React from 'react';
import styled from 'styled-components';
import OrangETitle from '../styled/titles';
import { ContainerPersonalText, PersonalTextMain} from '../styled/containerPersonalText';
import { PersonalH3 } from '../styled/personalH3';
import { MainImageContainer,ImageContainer, SingleImage } from '../styled/imagesContainers';
import PersonalSection from '../styled/personalMainContainers';

const imgCultivo = 'src/images/cultivo_logo.png';
const imgBlooders = 'src/images/logo_red.png';
const imgSynapbox = 'src/images/Synapbox_logo.png';

const Experience = () => (
 <PersonalSection>
     <OrangETitle title="Works related with code"></OrangETitle>
    <MainImageContainer>
        <ImageContainer ><SingleImage src={imgCultivo} /></ImageContainer >
        <ImageContainer ><SingleImage src={imgBlooders} /></ImageContainer >
        <ImageContainer ><SingleImage src={imgSynapbox} /></ImageContainer >    
    </MainImageContainer>
    <PersonalTextMain>
        <ContainerPersonalText><PersonalH3 text="Front-end Jr."></PersonalH3></ContainerPersonalText>
        <ContainerPersonalText> <PersonalH3 text="Front-end Jr."></PersonalH3> </ContainerPersonalText>
        <ContainerPersonalText> <PersonalH3 text="Operation developer"></PersonalH3></ContainerPersonalText> 
    </PersonalTextMain>
 </PersonalSection>
);

export default Experience;