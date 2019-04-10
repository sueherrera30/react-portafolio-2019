import React from 'react'; 
import styled from 'styled-components';

const MainImageContainerStyle = styled.div`
display: flex;
width: 100%;
justify-content: space-around;
align-items: center;
height: calc(100%/3);
`;
const ImageContainerStyle = styled.div`
    width: calc(100%/3);
    text-align: center;
`;
const SingleImageStyle = styled.img`
    width: 45%;
`;
const SingleImage = ({src}) => <SingleImageStyle src={src}></SingleImageStyle>;

const ImageContainer = ({children}) => <ImageContainerStyle>{ children }</ImageContainerStyle>;

const MainImageContainer = ({children}) => <MainImageContainerStyle> { children } </MainImageContainerStyle>

export {
    MainImageContainer,
    ImageContainer,
    SingleImage
}



   
