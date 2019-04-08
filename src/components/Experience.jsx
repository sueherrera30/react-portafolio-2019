import React from 'react';
import styled from 'styled-components';

const imgCultivo = 'src/images/cultivo_logo.png';
const imgBlooders = 'src/images/logo_red.png';
const imgSynapbox = 'src/images/Synapbox_logo.png';

// Main container
const ExperienceMain = styled.div`
    height: 40%;
`;
//  title 
const ExperienceTitle = styled.p`
    height: calc(100%/3);
    font-family: 'Cedarville Cursive', cursive;
    color: #FDD5B6;
    font-size: 25px;
    font-weight: normal;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;
// images space 
const WorkPlaceContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    height: calc(100%/3);
`;
const WorkPlace = styled.div`
    width: calc(100%/3);
    text-align: center;
`;
const Cultivo = styled.img`
    width: 40%;
`;
const Blooders = styled.img`
    width: 60%;
   
`;
const  Synapbox = styled.img`
    width: 50%;
`;
// text space
const ExperienceInfoMain = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
`;
const ExperienceInfoText = styled.div`
    height: calc(100%/3);
    font-family: 'Nunito', sans-serif;
    color: #C8C038;
    font-size: 14px;
    h3,p {
        margin: 0;
        text-align:center;
    }
    h3 {
        color: #F7A7C8; 
    }
`;
// main component
const Experience = () => (
 <ExperienceMain className="Experience">
    <ExperienceTitle> Works related with code</ExperienceTitle>
    <WorkPlaceContainer>
        <WorkPlace >
             <Cultivo src={imgCultivo} />
        </WorkPlace >
        <WorkPlace >
            <Blooders src={imgBlooders} />
        </WorkPlace >
        <WorkPlace >
            <Synapbox src={imgSynapbox} />  
        </WorkPlace >    
    </WorkPlaceContainer>
    <ExperienceInfoMain>
        <ExperienceInfoText>
            <h3>front-end Jr.</h3>
            <p>sept 2017- july 2018</p>
        </ExperienceInfoText>
        <ExperienceInfoText>
            <h3>front-end Jr.</h3>
            <p>aug - oct 2018</p>
        </ExperienceInfoText>
        <ExperienceInfoText>
            <h3>operation developer</h3>
            <p>oct 2018 - now</p>
        </ExperienceInfoText>      
    </ExperienceInfoMain>
 </ExperienceMain>
);
export default Experience;