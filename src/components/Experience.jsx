import React from 'react';
import styled from 'styled-components';

const imgCultivo = 'src/images/cultivo_logo.png';
const imgBlooders = 'src/images/logo_red.png';
const imgSynapbox = 'src/images/Synapbox_logo.png';

const ExperienceMain = styled.div`
    height: calc(100%/3);
    //font-family: 'Cedarville Cursive', cursive;
    font-family: 'Nunito', sans-serif;
    color: white;
    text-align:center;
    font-size: 12px;
`;
const WorkPlaces = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    height: 100%;
`;
const Cultivo = styled.img`
    width: 120px;
`;
const Blooders = styled.img`
    width: 180px;
`;
const  Synapbox = styled.img`
    width: 180px;
`;

const Experience = () => (
 <ExperienceMain className="Experience">
    <h1>I have worked in :</h1>
    <WorkPlaces>
        <Cultivo src={imgCultivo} />
        <Blooders src={imgBlooders} />
        <Synapbox src={imgSynapbox} />
    </WorkPlaces>
    

 </ExperienceMain>
);
export default Experience;