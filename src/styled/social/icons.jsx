import React from 'react';
import styled from 'styled-components';

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
const github = {
    color: "#fcb576",
    transform: "rotate(30deg)",
    fontSize: "5rem",
}

const linkedin = {
    color: "#446d6f",
    transform: "rotate(-30deg)",
    fontSize: "3rem",
}

const facebook = {
    color: "#99bd95",
    transform: "rotate(-20deg)",
    fontSize: "2rem",
}

const mail = {
    color: "papayawhip",
    transform: "rotate(35deg)",
    fontSize: "2rem",
}

const SocialIcon = styled.i`
    color: ${props => props.theme.color};
    transform: ${props => props.theme.transform};
    font-size: ${props => props.theme.fontSize};
`;

export {
    SocialMain,
    SocialList,
    SingleSocial,
    github,
    facebook,
    mail,
    linkedin,
    SocialIcon,
}