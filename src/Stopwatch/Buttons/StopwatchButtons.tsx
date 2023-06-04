import React from 'react';
import {StopWatchStatus} from "../stopwatchSlice";
import { SuperButton } from './SuperButton';


type StopWatchButtonsType = {
    start: () => void
    restart: () => void
    stop: () => void
    status: StopWatchStatus
}


type ButtonsConfigType = {
    [key: number]: ButtonConfigType[]
}
type ButtonConfigType = {
    text: String
    callback: () => void
}

export const StopwatchButtons = (props: StopWatchButtonsType) => {


    const buttonsConfigs: ButtonsConfigType = {
        0: [
            {text: "Start", callback: props.start},
            {text: "Reset", callback: props.restart}
        ],
        1: [
            {text: "Stop", callback: props.stop},
            {text: "Reset", callback: props.restart}
        ],
        2: [
            {text: "Resume", callback: props.start},
            {text: "Reset", callback: props.restart}
        ]
    };
    const buttons = buttonsConfigs[props.status].map(({text, callback}, index) => (
        <SuperButton callback={callback} key={index}>{text}</SuperButton>));

    return (
        <>
            {buttons}
        </>
    );
};

