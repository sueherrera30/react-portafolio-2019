import React from 'react'; 
import styled from 'styled-components';

const SingleImagestyle = styled.img `
    width: 50%;
    display: block;
    margin: 0 auto;
`;

const SingleImage = ({src}) => <SingleImagestyle src={src}></SingleImagestyle>;


export default SingleImage;



   
