import React from 'react';
import { ReactComponent as DarkThemeIcon }  from './../common/styles/icons/moon-solid.svg'
import { ReactComponent as LightThemeIcon } from './../common/styles/icons/sun-solid.svg'
import { ReactComponent as HomeIcon } from './../common/styles/icons/house-solid.svg'
import s from './Header.module.scss'
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {appActions} from "../App/app.slice";
import {selectTheme} from "../App/app.selector";


export const Header = () => {
    const navigate = useNavigate();


    const dispatch = useDispatch()
    const theme = useSelector(selectTheme)


    const toggleTheme = () => dispatch(appActions.setTheme(theme === 'light' ? {theme: 'dark'} : {theme: 'light'}))

    console.log(theme)


    const redirectHome = () => {
        navigate('/');
    };

    return (
        <div className={`${s.header} ${theme === 'light' ? s.light : s.dark}`}>

            <HomeIcon className={`${s.home_icon} ${theme === 'light' ? s.light : s.dark}`} onClick={redirectHome}/>
            {theme === 'light'
                ?  <DarkThemeIcon className={`${s.theme_icon} ${theme === 'light' ? s.light : s.dark}`} onClick={toggleTheme}/>
                :  <LightThemeIcon className={`${s.theme_icon} ${theme === 'light' ? s.light : s.dark}`} onClick={toggleTheme}/>
            }
        </div>
    );
};


