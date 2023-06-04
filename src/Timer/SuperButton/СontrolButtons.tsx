import React from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../App/store/store";
import {SuperButton} from "./SuperButton";



type ControlButtonsType = {
    callback: {
        start: () => void,
        stop: () => void,
        reset: () => void,
        resume: () => void
    }
}

type TimerControlButtonsConfigType = {
    [key: number]: TimerControlButtonConfigType[]
}
type TimerControlButtonConfigType = {
    text: string
    callback: () => void
}

export const ControlButtons: React.FC<ControlButtonsType> = ({callback}) => {

    const timeLeft = useSelector<AppRootStateType, number>(state => state.timer.timeLeft)
    const timerStatus = useSelector<AppRootStateType, number>(state => state.timer.timerStatus)

    const timerControlButtonsConfig: TimerControlButtonsConfigType = {
        0: [
            {text: "Start", callback: callback.start},
            {text: "Reset", callback: callback.reset},
        ],
        1: [
            {text: "Stop", callback: callback.stop},
            {text: "Reset", callback: callback.reset},
        ],
        2: [
            {text: "Resume", callback: callback.resume},
            {text: "Reset", callback: callback.reset},
        ]
    }

        const controlButtons = timerControlButtonsConfig[timerStatus].map(({text, callback}, index) =>
            <SuperButton
                callback={callback} key={index} disabled={timeLeft <= 0} xType={"control"}>{text}</SuperButton>)

    return <> {controlButtons}</>
};
