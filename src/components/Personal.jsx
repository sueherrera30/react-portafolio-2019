import React from 'react';
import styled from 'styled-components';

const PersonalMain = styled.div`
    height: 100vh;
    width:100%;
    display: flex;
    //background: linear-gradient(45deg, rgba(254,203,163,0) 0%, rgba(254,203,163,0.4) 37%, rgba(0,128,128,0.92) 92%, rgba(0,128,128,1) 100%);
    background: linear-gradient(45deg, rgba(255,225,194,1) 0%, rgba(255,237,207,1) 48%, rgba(255,243,213,1) 71%, rgba(255,252,222,0) 100%); 
`;
const Personal = ( { children }) => (
 <PersonalMain className="Personal">
      { children }
 </PersonalMain>
);
export default Personal;