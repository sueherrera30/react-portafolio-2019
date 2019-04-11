import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {SocialMain, SocialList, SingleSocial,github,facebook,mail, linkedin,SocialIcon,} from '../styled/social/icons';

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


            
            
           