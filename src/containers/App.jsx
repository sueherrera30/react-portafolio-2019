import React from 'react';
import Main from '../components/Main';
import Personal from '../components/Personal';
import Skills from '../components/Skills';
import About from '../components/About';
import Experience from '../components/Experience';
import Studies from '../components/Studies';
import Social from '../components/Social';
import Tools from '../components/Tools';
import Works from '../components/Works';

const App = () => {
    return(
        <Main>
            <About></About>
            <Personal>
                <Experience></Experience>
                <Studies></Studies>
                <Social></Social>
            </Personal>
            <Skills>
                <Tools></Tools>
                <Works></Works>
            </Skills>
        </Main>  
    )
}
export default App;