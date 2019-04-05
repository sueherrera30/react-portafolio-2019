import React from 'react';
import styled from 'styled-components';


const StudiesMain = styled.div`
    height: calc(100%/3);
    background-color: pink;
`;

const Studies = () => (
 <StudiesMain className="Studies">
     <div className="Studies-container">
         Hello
     </div>
 </StudiesMain>
);
export default Studies;