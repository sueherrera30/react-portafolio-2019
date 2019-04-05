import React from 'react';
import styled from 'styled-components';

const InformationMain = styled.div`
width: 50%;
height: 100vh;
display:flex;
flex-direction: column;
`;
const Information = ({ children }) => (
    <InformationMain className="Information">
        { children }
    </InformationMain>     
)
export default Information;