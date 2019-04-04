import React, { useState } from 'react';

const ButtonHooks = () => {
    const [active,setActive] = useState(true);
    const handleButton = () => {
        setActive(!active);
    }
    return(
        <>
            <button onClick= {handleButton}>¡dale aqui!</button>
            {
                active && <h2>Hola nueva tecnología</h2>
            }    
        </> 
    )  
}
export default ButtonHooks;
