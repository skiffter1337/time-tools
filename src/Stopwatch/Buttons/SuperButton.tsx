import React from 'react';
import s from './SuperButton.module.scss'

type SuperButtonPropsType = {
    children: React.ReactNode
    callback: ()=>void
}

export const SuperButton: React.FC<SuperButtonPropsType> = (props) => {
    const {children, callback} = props

    const onClickHandler = () => callback()

    return <button onClick={onClickHandler} className={s.button}>{children}</button>
};
