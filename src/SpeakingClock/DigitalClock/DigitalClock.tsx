import React from 'react';
import s from './DigitalClock.module.scss'
import {useSelector} from "react-redux";
import {selectTheme} from "../../App/app.selector";


type DigitalClockType = {
    currentTime: string
}
export const DigitalClock = (props: DigitalClockType) => {
    const theme = useSelector(selectTheme)
    return (
        <div>
            <span className={`${s.digitalClockTime} ${theme === 'light' ? s.light : s.dark}`}>{props.currentTime}</span>
        </div>
    );
};

