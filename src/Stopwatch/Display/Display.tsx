import React from 'react';
import s from "./Display.module.scss"
import {TimeType} from "../stopwatchSlice";


type DisplayPropsType = {
    time: TimeType
}

export const Display: React.FC<DisplayPropsType> = (props) => {
    const {time} = props
    let timeClasses = s.time
    return (
        <div>
            <span className={timeClasses}>{time.h >= 10 ? time.h : "0" + time.h}</span>{" : "}
            <span className={timeClasses}>{time.m >= 10 ? time.m : "0" + time.m}</span>{" : "}
            <span className={timeClasses}>{time.s >= 10 ? time.s : "0" + time.s}</span>{" : "}
            <span className={timeClasses}>{time.ms >= 10 ? time.ms : "0" + time.ms}</span>
        </div>
    );
};
