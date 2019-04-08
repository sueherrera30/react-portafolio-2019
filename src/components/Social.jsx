import React from 'react';
import styled from 'styled-components';
import { FaWhatsapp, FaGithub, FaFacebookF, FaLinkedinIn,FaInstagram } from 'react-icons/fa';
import { IconContext } from "react-icons";

const SocialMain = styled.div`
    height: 20%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;  
`;
const Social = () => (
  
        <SocialMain>
            <IconContext.Provider value={{ color: '#EA6BB2', size: '2rem'}}>
                <FaGithub></FaGithub>
                <FaLinkedinIn></FaLinkedinIn>
                <FaWhatsapp></FaWhatsapp>
            </IconContext.Provider>    
        </SocialMain>
);
export default Social;


            
            
           