import React from 'react';
import MainTools from '../styled/skills/tools/mainTools';
import OrangeTitle from '../styled/personal/titles';
import { Skills, BrainImg, FistBlock, SkilImg } from '../styled/skills/tools/skills';

const brain = 'src/images/brain.png';
const emotional = 'src/images/emotional.png';
const tecnical = 'src/images/tecnical.png';

const Tools = () => (
    <MainTools> 
        <Skills>
            <OrangeTitle title="skills with the PC"></OrangeTitle>
            <SkilImg src={tecnical}/>
            <ul>
                <li>Javascript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>react</li>
                <li>vue</li>
                <li>hyperscript</li>
                <li>wordpress</li>
                <li>Jquery</li>                   
            </ul>
        </Skills>
        <FistBlock>
        <p>s k i l l s </p>
            <BrainImg src={brain}/>
        </FistBlock>  
            <Skills>
                <OrangeTitle title="skills with my heart"></OrangeTitle>
                <SkilImg src={emotional}/>
                <ul>
                    <li>Empathic</li>
                    <li>Positive</li>
                    <li>Musician</li>
                    <li>good at listening</li>
                    <li>love excercing</li>
                    <li>teaching skills</li>                
                </ul>   
            </Skills>   
    </MainTools>
);
export default Tools;