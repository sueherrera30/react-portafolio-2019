import React from 'react';
import styled from 'styled-components';

const imgUrl = 'src/images/marcoFlorar3.png';
const IntroStyle = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;
const Title = styled.p`
    font-family: 'Cedarville Cursive', cursive;
    color: #EA6BB2;
    font-size: 70px;
    margin: 0px;
    @media (max-width: 700px) {
        font-size: 30px;
      }
`;
const Subtitle = styled.p `
    color: #77A295;
    margin: 0px;
    font-size: 20px;
    font-family: 'Nunito', sans-serif;
`;
const TitleImage = styled.img `
    width: 40%;
`;
const Intro = () =>(
    <IntroStyle>
        <div className="Intro-container">
            <Title>Sue Herrera</Title>
            <Subtitle>Front end in construction</Subtitle>
            <TitleImage src={imgUrl} />
        </div>
    </IntroStyle>
);
export default Intro;


