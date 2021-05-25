import React, {useState, useEffect} from 'react';

export const useTime = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    // state update hune bitikai useEffect call hunchha
    useEffect(() => {
        var tick = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return function cleanup(){
            clearInterval(tick);
        }
    });
    return time;
}

// this block illustrates the reusability feature of useTime code
const Clock = () => {
    const time = useTime();
    return(
        time
    )
}

export default Clock;
