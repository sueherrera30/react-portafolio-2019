import React from 'react';
import styled from 'styled-components';

const PersonalMain = styled.div`
    width:100%;
    height: 100vh;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;
const Personal = ( { children }) => (
 <PersonalMain className="Personal">
      { children }
 </PersonalMain>
);
export default Personal;