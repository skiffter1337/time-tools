import React from 'react';
import ReactTypingEffect from "react-typing-effect";
import {quotes} from "../trash/quotes";
import s from './Main.module.scss'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectTheme} from "../App/app.selector";




export const Main = () => {
    const theme = useSelector(selectTheme)


    console.log(theme)
    return (
        <div className={`${s.main_container} ${theme === 'light' ? s.light : s.dark}`} >
            <div className={`${s.quotes} ${theme === 'light' ? s.light : s.dark}`}>
                <ReactTypingEffect text={quotes} speed={100} eraseSpeed={50}/>
            </div>
            <div className={`${s.links} ${theme === 'light' ? s.light : s.dark}`}>
                <NavLink to='/stopwatch' className={`${s.link} ${theme === 'light' ? s.light : s.dark}`}>
                    Stopwatch
                </NavLink>
                <NavLink to='/timer' className={`${s.link} ${theme === 'light' ? s.light : s.dark}`}>
                    Timer
                </NavLink>
                <NavLink to='/speaking-clock' className={`${s.link} ${theme === 'light' ? s.light : s.dark}`}>
                    Speaking clock
                </NavLink>
            </div>
        </div>
    );
};
