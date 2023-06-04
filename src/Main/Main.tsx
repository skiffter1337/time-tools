import React from 'react';
import ReactTypingEffect from "react-typing-effect";
import {quotes} from "../quotes";
import s from './Main.module.scss'
import {NavLink} from "react-router-dom";


export const Main = () => {
    return (
        <div className={s.main_container}>
            <div className={s.quotes}>
                <ReactTypingEffect text={quotes} speed={100} eraseSpeed={50}/>
            </div>
            <div className={s.links}>
                <NavLink to='/timer' className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : s.link}>
                    Timer
                </NavLink>
                <NavLink to='/stopwatch' className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : s.link}>
                    Stopwatch
                </NavLink>
                <NavLink to='/speaking-clock' className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : s.link}>
                    Speaking clock
                </NavLink>
            </div>
        </div>
    );
};
