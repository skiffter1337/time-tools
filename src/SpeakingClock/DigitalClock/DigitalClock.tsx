import React from 'react';
import s from './../SpeakingClock.module.scss'


type DigitalClockType = {
    currentTime: string
}
export const DigitalClock = (props: DigitalClockType) => {
    return (
        <div>
            <span className={s.digitalClockTime}>{props.currentTime}</span>
        </div>
    );
};

