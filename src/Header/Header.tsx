import React from 'react';
import HOME from './../common/styles/icons/house-solid.svg'
import DARK_THEME from './../common/styles/icons/moon-solid.svg'
import LIGHT_THEME from './../common/styles/icons/sun-solid.svg'
import s from './Header.module.scss'
import {useNavigate} from "react-router-dom";

export const Header = () => {


    const navigate = useNavigate();

    const redirectHome = () => {
        navigate('/');
    };

    return (
        <div className={s.header}>
            <img src={HOME} className={s.home_icon} onClick={redirectHome}/>
            <img src={DARK_THEME} className={s.dark_theme_icon} onClick={redirectHome}/>
        </div>
    );
};

