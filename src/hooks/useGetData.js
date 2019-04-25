import { useState, useEffect } from 'react';
const information = '../src/information.json'

// 1. Creating general function 
const useGetData = () => {
    // 2. using hook that will manage the state(right now it's empty)
    const [myData, setData] = useState([]);
    // 3.using second hook to do the fetch, it works as the life stycle. 
    useEffect(() => {
        fetch(information)
        //  4. call up information and changing to a json object.
        .then(res => res.json())
        // 5. adding received data with the function.
        .then(data => setData(data))
    },[])
    return myData;
}

export default useGetData;