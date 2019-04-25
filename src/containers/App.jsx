import React from 'react';
import Main from '../components/Main';
import Intro from '../components/Intro';
import Personal from '../components/Personal';
import Skills from '../components/Skills';
import About from '../components/About';
import Experience from '../components/Experience';
import Studies from '../components/Studies';
import Social from '../components/Social';
import Tools from '../components/Tools';
import Works from '../components/Works';
import Information from '../components/Information';
import useGetData from '../hooks/useGetData';

const App = () => {
   const data = useGetData();
   console.log(data);
    return (
            <>
                <Intro></Intro>
                <Personal>
                    <About></About>
                    <Information>
                        <Experience></Experience>
                        <Studies></Studies>
                    </Information>
                </Personal>
                <Skills>
                    <Tools></Tools>
                </Skills>
                <Works></Works>
                <Social></Social>             
            </>          
    )
}
export default App;