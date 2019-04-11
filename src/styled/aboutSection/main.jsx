import React from 'react';
import styled from 'styled-components';

const MainAboutStyle = styled.div`
    width: 40%;
    height: 90%;
    display:flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(45deg, rgba(250,248,215,0.5) 0%, rgba(251,246,212,0.5) 20%, rgba(255,241,201,1) 100%);
`;
const MainAbout = ({children}) => <MainAboutStyle>{children}</MainAboutStyle>;

export default MainAbout;
