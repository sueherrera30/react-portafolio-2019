import React from 'react';
import styled from 'styled-components';

const MainComponentstyle = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: -webkit-linear-gradient(#fce8d4, #fff);
`;

const MainComponent = ({ children }) => (<MainComponentstyle> { children } </MainComponentstyle>)

export {
    MainComponent,
}