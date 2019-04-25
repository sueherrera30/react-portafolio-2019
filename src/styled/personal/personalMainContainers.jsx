import React from 'React';
import styled from  'styled-components';

const MainSectionstyle = styled.div`
width: 40%;
height: 90%;
display:flex;
flex-direction: column;
background: linear-gradient(45deg, rgba(255,225,194,1) 0%, rgba(255,237,207,1) 48%, rgba(255,243,213,1) 71%, rgba(255,252,222,0) 100%); 
`;

const GeneralPersonalStyle = styled.div`
    width:100%;
    height: 100vh;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const PersonalSectionStyle = styled.div`
    height: 40%;
`;

const GeneralPersonal = ({children}) => (<GeneralPersonalStyle>{ children } </GeneralPersonalStyle>);

const MainPersonalSection = ({children}) => (<MainSectionstyle>{ children } </MainSectionstyle>);

const PersonalSection = ({children}) => (<PersonalSectionStyle>{ children } </PersonalSectionStyle>);


export {
    MainPersonalSection,
    PersonalSection,
    GeneralPersonal,
};