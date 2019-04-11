import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const github = {
    color: "#fcb576",
    transform: "rotate(30deg)",
}

const linkedin = {
    color: "#446d6f",
    transform: "rotate(-30deg)",
}

const facebook = {
    color: "#99bd95",
    transform: "rotate(-20deg)",
}

const mail = {
    color: "papayawhip",
    transform: "rotate(35deg)",
}
const SocialMain = styled.div`
    width: 100%;
    background-color: rgba(54, 95, 100, 0.3);
    height: 100px;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    li {
        list-style-type: none;
    }
`;

const SocialList = styled.ul`
    width: 50%; 
    display: flex;
    justify-content: space-around;
    align-items: center;
    li {
        list-style-type: none;
    }
`;


const SingleSocial = styled.a`
    text-decoration: none;
    font-size: 2rem;
`;

const SocialIcon = styled.i`
    color: ${props => props.theme.color};
    transform: ${props => props.theme.transform}
`;
const getStyle = (name) => {
     if(name == 'github' ) return github;
     if(name == 'linkedin' ) return linkedin;
     if(name == 'facebook' ) return facebook;
     if(name == 'mail' ) return mail;
}

const Social = () => ( 
    <SocialMain>
         <SocialList>  
            <li>
            <SingleSocial href="">
                <ThemeProvider theme = {getStyle('facebook')}>
                    <SocialIcon className={`fab fa-${'facebook-f'}`} /> 
                </ThemeProvider> 
            </SingleSocial>
            </li> 

            <li>
            <SingleSocial href="">
                <ThemeProvider theme = {getStyle('github')}>
                    <SocialIcon className={`fab fa-${'github'}`} /> 
                </ThemeProvider> 
            </SingleSocial>
            </li> 

            <li>
            <SingleSocial href="">
                <ThemeProvider theme = {getStyle('linkedin')}>
                    <SocialIcon className={`fab fa-${'linkedin-in'}`} /> 
                </ThemeProvider> 
            </SingleSocial>
            </li> 

            <li>
            <SingleSocial href="">
                <ThemeProvider theme = {getStyle('mail')}>
                    <SocialIcon className={`fas fa-${'envelope'}`} /> 
                </ThemeProvider> 
            </SingleSocial>
            </li> 
        </SocialList>
    </SocialMain>
       
);
export default Social;


            
            
           