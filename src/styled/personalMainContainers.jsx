import React from 'React';
import styled from  'styled-components';

const PersonalSectionStyle = styled.div`
    height: 40%;
`;

const PersonalSection = ({children}) => <PersonalSectionStyle>{ children }</PersonalSectionStyle>;

export default PersonalSection;