import React from 'react';
import styled from 'styled-components';

const SkillsMain = styled.div`
    height: 100vh;
    width:100%;
    display: flex;
    background: -webkit-linear-gradient(#fff, rgba(220, 214, 108, 0.4));
`;

const Skills = ({children}) => (
 <SkillsMain>
     {children}
 </SkillsMain>
);
export default Skills;