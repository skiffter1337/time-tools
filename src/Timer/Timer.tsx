import React, {useEffect} from 'react';
import 'react-circular-progressbar/dist/styles.css';
import s from './Timer.module.scss'
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../App/store/store";
import {ChangeValueButtons} from "./SuperButton/ChangeValueButtons";
import {InitialStateType, timerActions} from "./timerSlice";
import {ControlButtons} from "./SuperButton/СontrolButtons";


export const Timer = () => {

    const dispatch = useDispatch()
    const timerState = useSelector<AppRootStateType, InitialStateType>(state => state.timer)
    let minutes = Math.floor(timerState.timeLeft / 60)
    let seconds = Math.floor((timerState.timeLeft - minutes * 60))


    useEffect(() => {
        let intervalId: NodeJS.Timeout | null = null;

        if (timerState.timerStatus === 1) {
            intervalId = setInterval(() => {
                dispatch(timerActions.setTimeLeft({timeLeft: timerState.timeLeft >= 1 ? timerState.timeLeft - 1 : 0}));
            }, 1000);
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [dispatch, timerState.timeLeft, timerState.timerStatus]);


    useEffect(() => {
        if (timerState.totalTime > 3600) dispatch(timerActions.setTotalTime({totalTime: 3600}))

        if (timerState.timeLeft >= 3600) dispatch(timerActions.setTimeLeft({timeLeft: 3600}))

        if (timerState.timeLeft <= 0) {
            dispatch(timerActions.setTimeLeft({timeLeft: 0}))
            dispatch(timerActions.setTotalTime({totalTime: 0}))
            dispatch(timerActions.setTimerStatus({timerStatus: 0}))
        }
    }, [dispatch, timerState.totalTime, timerState.timeLeft])


    const start = () => dispatch(timerActions.startTimer())
    const stop = () => dispatch(timerActions.setTimerStatus({timerStatus: 2}))
    const resume = () => dispatch(timerActions.setTimerStatus({timerStatus: 1}))

    const reset = () => {
        dispatch(timerActions.setTimerStatus({timerStatus: 0}))
        dispatch(timerActions.setTimeLeft({timeLeft: 0}))
    }

    const updateTimer = (seconds: number) => {
        dispatch(timerActions.setTimeLeft({timeLeft: timerState.timeLeft + seconds}))
        dispatch(timerActions.setTotalTime({totalTime: timerState.totalTime + seconds}))
    }

    const progressbarText = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
    const progressbarPercentage = timerState.timeLeft === 0 ? 0 : Math.round(timerState.timeLeft / timerState.totalTime * 100)

    return (
        <div className={s.timer}>
            <div className={s.timerBlock}>

                <div>
                    <CircularProgressbar value={progressbarPercentage} text={progressbarText} className={s.progressbar}
                                         styles={buildStyles({textColor: "#041e3a", pathColor: "#041e3a"})}/>
                </div>

                <div>
                    <div className={s.controlButtons}>
                        <ControlButtons callback={{start, stop, reset, resume}}/>
                    </div>
                    <div className={s.changeValueButtons}>
                        <ChangeValueButtons updateTimer={updateTimer}/>
                    </div>
                </div>

            </div>
        </div>
    );
};




