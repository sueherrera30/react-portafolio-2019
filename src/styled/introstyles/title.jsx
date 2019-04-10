import React from 'react';
import styled from 'styled-components';

const TitleStyle = styled.p`
    font-family: 'Cedarville Cursive', cursive;
    color: #EA6BB2;
    font-size: 70px;
    margin: 0px;
    @media (max-width: 700px) {
    font-size: 30px;
    }
`;

const Title = ({text}) => <TitleStyle>{ text }</TitleStyle>;

export default Title;