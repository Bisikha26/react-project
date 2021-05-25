import React, {useState, useEffect} from 'react';
import { toTwoDigit } from '../utils/time';

export const Timer = () => {
    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(false);
    const toggleRun = () => {
        setTimerOn(!timerOn);
        // This is same as - setTimerOn ? true : false;
    }

    const hour = parseInt(time / (60*60));
    const minute = parseInt ((time-hour * 60 * 60) / 60);
    const second = time - hour * 60 * 60 - minute * 60;

    useEffect(() => {
        if(timerOn) {
            setTimeout(() => {
                setTime(time + 1);
            }, 1000);
        } 
        },[time, timerOn])

    return (
        <div>
           <div style={{fontSize: "150px"}}>{toTwoDigit(hour)}:{toTwoDigit(minute)}:{toTwoDigit(second)}</div>
            <button onClick={() => {
                toggleRun();
            }}>Run</button>
        </div>
    )
} 

export default Timer;