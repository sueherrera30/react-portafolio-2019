import React from 'react';
import OrangETitle from '../styled/personal/titles';
import { ContainerPersonalText, PersonalTextMain} from '../styled/personal/containerPersonalText';
import { PersonalH3 } from '../styled/personal/personalH3';
import { MainImageContainer,ImageContainer, SingleImage } from '../styled/personal/imagesContainers';
import { PersonalSection } from '../styled/personal/personalMainContainers';

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