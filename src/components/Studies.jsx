import React from 'react';
import styled from 'styled-components';
import OrangeTitle from '../styled/personal/titles';
import { ContainerPersonalText, PersonalTextMain} from '../styled/personal/containerPersonalText';
import { H3Pink } from '../styled/personal/personalH3';
import { MainImageContainer,ImageContainer, SingleImage } from '../styled/personal/imagesContainers';
import { PersonalSection } from '../styled/personal/personalMainContainers';

const imgInba = 'src/images/inba.png';
const imgFam = 'src/images/fam.png';
const imgLaboratoria= 'src/images/laboratoria.png';

const Studies = () => (
    <PersonalSection>
        <OrangeTitle title="Studies"></OrangeTitle>
         <MainImageContainer>
            <ImageContainer>
                <SingleImage src={imgInba}/>  
            </ImageContainer>
            <ImageContainer>
                <SingleImage src={imgFam}/>   
            </ImageContainer>
            <ImageContainer>
                <SingleImage src={imgLaboratoria}/>  
            </ImageContainer>    
        </MainImageContainer>
         <PersonalTextMain>
            <ContainerPersonalText><H3Pink role="Violoncello"></H3Pink></ContainerPersonalText>
            <ContainerPersonalText><H3Pink role="Music Education"></H3Pink></ContainerPersonalText>
            <ContainerPersonalText><H3Pink role="Front-end training"></H3Pink> </ContainerPersonalText>  
        </PersonalTextMain>   
    </PersonalSection>
   );
   export default Studies;
