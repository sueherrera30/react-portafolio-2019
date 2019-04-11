import React from 'react';
import styled from 'styled-components';

const OrangeTitle = styled.p`
    height: calc(100%/3);
    font-family: 'Cedarville Cursive', cursive;
    color: #FDD5B6;
    font-size: 25px;
    font-weight: normal;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const OrangeTitleComponent = ({ title }) => <OrangeTitle>{title}</OrangeTitle>

export default OrangeTitleComponent; 