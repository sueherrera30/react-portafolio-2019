import React from 'react';
import styled from 'styled-components';

const InformationMain = styled.div`
width: 40%;
height: 90%;
display:flex;
flex-direction: column;
background: linear-gradient(45deg, rgba(255,225,194,1) 0%, rgba(255,237,207,1) 48%, rgba(255,243,213,1) 71%, rgba(255,252,222,0) 100%); 
`;
const Information = ({ children }) => (
    <InformationMain className="Information">
        { children }
    </InformationMain>     
)
export default Information;