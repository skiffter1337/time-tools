import React, {useEffect, useMemo, useState} from 'react';
import s from './SpeakingClock.module.scss'
import {DigitalClock} from "./DigitalClock/DigitalClock";
import {AnalogClock} from "./AnalogClock/AnalogClock";
import Switch from "@material-ui/core/Switch";
import {useSelector} from "react-redux";
import {selectTheme} from "../App/app.selector";





export const SpeakingClock = () => {
    const theme = useSelector(selectTheme)
    const [currentTime, setCurrentTime] = useState(new Date())
    const [isAnalogClock, setIsAnalogClock] = useState(false)

    let time = useMemo(() => `${currentTime.getHours().toString().padStart(2, "0")}:${currentTime.getMinutes().toString().padStart(2, "0")}:${currentTime.getSeconds().toString().padStart(2, "0")}`, [currentTime])

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date())
            document.title = time
        }, 1000)

        return () => clearInterval(intervalId)
    }, [currentTime])

    const onSwitchMode = () => setIsAnalogClock(!isAnalogClock)


    return (
        <div className={`${s.speakingClock} ${theme === 'light' ? s.light : s.dark}`}>
            <div className={s.clockBlock}>

                <div className={s.clocks}>
                    {isAnalogClock
                        ?
                        <AnalogClock currentTime={currentTime}/>
                        :
                       <DigitalClock currentTime={time}/>
                    }
                </div>
                <div className={s.dateAndModeContainer}>
                    <div>
                        <span>
                            {`${currentTime.toLocaleString('en', {weekday: 'long'})} - ${currentTime.getDate()} ${currentTime.toLocaleString('en', {month: 'long'})} ${currentTime.getFullYear()}`}
                        </span>
                    </div>
                    <div>
                        Switch to change mode -
                        <Switch onChange={onSwitchMode} size={'small'} />
                    </div>
                </div>
            </div>
        </div>
    );
};
