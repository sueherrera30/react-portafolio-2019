import React from 'react';
import styled from 'styled-components';

const AboutTextStyle= styled.p`
    font-size: 18px;
    font-family: 'Nunito', sans-serif;
    color: #366165;
    padding: 1rem 8rem;
    text-align:center;
`;
const AboutText = ({text}) => <AboutTextStyle>{text}</AboutTextStyle>

export default AboutText; 