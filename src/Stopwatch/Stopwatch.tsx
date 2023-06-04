import React, {useEffect, useState} from 'react';

import s from "./Stopwatch.module.scss"
import {KeyboardEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import {stopWatchActions, StopWatchStatus, TimeType} from "./stopwatchSlice";
import {Display} from "./Display/Display";
import {AppRootStateType} from "../App/store/store";
import {StopwatchButtons} from "./Buttons/StopwatchButtons";


export const Stopwatch = () => {

    const dispatch = useDispatch()
    const time = useSelector<AppRootStateType, TimeType>(state => state.stopwatch.time)
    const status = useSelector<AppRootStateType, number>(state => state.stopwatch.status)
    const showHotKeys = useSelector<AppRootStateType, boolean>(state => state.stopwatch.showHotkey)

    useEffect(() => {
        const storedStopWatchTime = localStorage.getItem('stopwatchTime');
        if (storedStopWatchTime) {

            const parsedTime = JSON.parse(storedStopWatchTime);
            dispatch(stopWatchActions.setTime({time: parsedTime}));
        }
    }, [dispatch])

    const stopwatchTime = `${time.h.toString().padStart(2, "0")}:${time.m.toString().padStart(2, "0")}:${time.s.toString().padStart(2, "0")}:${time.ms.toString().padStart(2, "0")}`
    useEffect(() => {status === 0 ? document.title = "Stopwatch" : document.title = stopwatchTime}, [stopwatchTime, status])

    useEffect(() => {localStorage.setItem('stopwatchTime', JSON.stringify(time))}, [time])

    const [intervalId, setIntervalId] = useState(setInterval(() => {}, 10))



    const onKeyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "space") {
            start()
        } else if (e.code === "KeyR") {
            restart()
        }
    }

    let updatedH = time.h, updatedM = time.m, updatedS = time.s, updatedMS = time.ms
    const run = () => {
        if (updatedM === 60) {
            updatedH++
            updatedM = 0
        }
        if (updatedS === 60) {
            updatedM++
            updatedS = 0
        }
        if (updatedMS === 100) {
            updatedS++
            updatedMS = 0
        }
        updatedMS++
        dispatch(stopWatchActions.setTime({time: {ms: updatedMS, s: updatedS, m: updatedM, h: updatedH}}))
    }

    const start = () => {
        run()
        setIntervalId(setInterval(run, 10))
        dispatch(stopWatchActions.setStatus({status: StopWatchStatus.Activated}))
        dispatch(stopWatchActions.showHotKeys({showHotKeys: true}))
    }
    const restart = () => {
        clearInterval(intervalId)
        dispatch(stopWatchActions.setStatus({status: StopWatchStatus.Deactivated}))
        dispatch(stopWatchActions.setTime({time: {ms: 0, s: 0, m: 0, h: 0}}))
    }
    const stop = () => {
        clearInterval(intervalId)
        dispatch(stopWatchActions.setStatus({status: StopWatchStatus.Paused}))
    }

    const hotkeys = showHotKeys ? <span className={s.hotkeyInfo}>SPACE - start/stop, R - reset</span> : ""

    return (
        <div className={s.stopwatch} onKeyDown={onKeyDownHandler} tabIndex={0}>
            <div className={s.stopwatchBlock}>
                <Display time={time}/>
                <div className={s.buttons}>
                    <StopwatchButtons start={start} restart={restart} stop={stop} status={status}/>
                </div>
                {hotkeys}
            </div>
        </div>
    );
};
