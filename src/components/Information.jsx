import React from 'react';
import { MainPersonalSection } from '../styled/personal/personalMainContainers';

const Information = ({ children }) => (
    <MainPersonalSection>
        { children }
    </MainPersonalSection>     
)
export default Information;