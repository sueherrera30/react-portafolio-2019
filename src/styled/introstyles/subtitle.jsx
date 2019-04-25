import React from 'react';
import styled from 'styled-components';

const SubtitleStyle = styled.p `
    color: #77A295;
    margin: 0px;
    font-size: 20px;
    font-family: 'Nunito', sans-serif;
    text-align: center;
    display: inline-block;
`;

const Subtitle = ({text}) => <SubtitleStyle id="subtitleTyped">{ text }</SubtitleStyle>;

export default Subtitle;