import React from 'react';
import styled from 'styled-components';

const StylePersonalText = styled.div`
    font-family: 'Nunito', sans-serif;
    color: #C8C038;
    font-size: 12px;
    width: calc(100%/3);
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const PersonalTextMainstyle = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
`;
const PersonalTextMain = ({ children }) => <PersonalTextMainstyle> { children } </PersonalTextMainstyle>;

const ContainerPersonalText = ({ children }) => <StylePersonalText> { children } </StylePersonalText>;

export {
    PersonalTextMain,
    ContainerPersonalText,
} 