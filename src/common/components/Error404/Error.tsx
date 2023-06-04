import React from 'react';
import s from './Error.module.scss'

export const Error = () => {
    return (
        <div className={s.error}>
            <span>404</span>
            <span>Page not found</span>
        </div>
    );
};
