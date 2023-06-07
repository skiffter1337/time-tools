import React, {ReactNode} from 'react';
import s from '../Timer.module.scss'
import {useSelector} from "react-redux";
import {selectTheme} from "../../App/app.selector";

type SuperButtonType = {
    callback: () => void
    children: ReactNode
    disabled?: boolean
    xType?: string
}

export const SuperButton: React.FC<SuperButtonType> = (props) => {
    const {callback, children, xType} = props
    const theme = useSelector(selectTheme)

    const finalClassname =  `${xType === "control" 
        ? `${s.controlButton} ${theme === 'light' ? s.light : s.dark}` 
        : `${s.changeValueButton} ${theme === 'light' ? s.light : s.dark}`}`
    const onClickHandler = () => callback()

    return <button onClick={onClickHandler} disabled={props.disabled} className={finalClassname}>{children}</button>
};
