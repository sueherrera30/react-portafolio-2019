import React from 'react'; 
import styled from 'styled-components';

const SingleImageStyle = styled.img`
    width: 50%;
`;
const SingleImage = ({src}) => <SingleImageStyle src={src}></SingleImageStyle>;


export default SingleImage;



   
