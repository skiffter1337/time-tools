import React from 'react';
import ReactTypingEffect from "react-typing-effect";
import {quotes} from "../quotes";
import s from './Main.module.scss'


export const Main = () => {
    return (
        <div className={s.main_container}>
            <div className={s.quotes}>
                <ReactTypingEffect text={quotes} speed={100} eraseSpeed={50}/>
            </div>
            <div className={s.links}>
                <span className={s.link}>Timer</span>
                <span className={s.link}>Stopwatch</span>
                <span className={s.link}>Speaking clock</span>
            </div>
        </div>
    );
};
