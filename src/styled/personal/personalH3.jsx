import React from 'react';
import styled from 'styled-components';

const PersonalH3Style = styled.h3`
    margin: 0;
    text-align:center;
    color: #C8C038;
`;

const H3PinkStyle = styled(PersonalH3Style)`
  color: #F7A7C8;;
`;

const H3Pink = ({ role }) => <H3PinkStyle> { role } </H3PinkStyle>;
const PersonalH3 = ({ text }) => <PersonalH3Style> { text } </PersonalH3Style>;


export { H3Pink,
    PersonalH3,
};

