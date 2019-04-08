import React from 'react';
import styled from 'styled-components';

const imgInba = 'src/images/inba.png';
const imgFam = 'src/images/fam.png';
const imgLaboratoria= 'src/images/laboratoria.png';

// Main container
const StudiesMain = styled.div`
    height: 40%;
`;
//  title 
const StudiesTitle = styled.p`
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
const SchoolsContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    height: calc(100%/3);
`;
const School = styled.div`
    width: calc(100%/3);
    text-align: center;
`;
const Inba= styled.img`
    width: 40%;
`;
const Fam = styled.img`
    width: 30%;
   
`;
const Laboratoria = styled.img`
    width: 40%;
`;
// text space
const SchoolTextMain = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
`;
const ContainerText = styled.div`
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

const Studies = () => (
    <StudiesMain>
         <StudiesTitle>Studies</StudiesTitle>
         <SchoolsContainer>
            <School>
                <Inba src={imgInba}/>  
            </School>
            <School>
                <Fam src={imgFam}/>   
            </School>
            <School>
                <Laboratoria src={imgLaboratoria}/>  
            </School>    
        </SchoolsContainer>

        <SchoolTextMain>
            <ContainerText>
                <h3>Violoncello</h3>
                <p>Inba</p>
            </ContainerText>
            <ContainerText>
                <h3>Music Education</h3>
                <p>Facultad de Música</p>
            </ContainerText>
            <ContainerText>
                <h3>Front-end training</h3>
                <p>Laboratoria</p>
            </ContainerText>      
        </SchoolTextMain>    
    </StudiesMain>
   );
   export default Studies;
