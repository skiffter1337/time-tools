import React from 'react';
import s from './SuperButton.module.scss'
import {useSelector} from "react-redux";
import {selectTheme} from "../../App/app.selector";

type SuperButtonPropsType = {
    children: React.ReactNode
    callback: ()=>void
}

export const SuperButton: React.FC<SuperButtonPropsType> = (props) => {
    const {children, callback} = props
    const theme = useSelector(selectTheme)
    const onClickHandler = () => callback()

    return <button onClick={onClickHandler} className={`${s.button} ${theme === 'light' ? s.light : s.dark}`}>{children}</button>
};
