'use client';
import {useMemo, Children} from 'react';

const FloatingButton = ({color, children, link, key}) => {
    return (
        <a
            className='flex w-full h-full button-float justify-center items-center rounded-full shadow-lg hover:brightness-105 hover:scale-105 duration-100 ease-out cursor-pointer text-white text-center outline-none'
            style={{backgroundColor: color, textDecoration: 'none'}}
            href={link}
            key={key}>
            {children}
        </a>
    );
};

const ButtonContainer = ({children, buttonSize}) => {
    const container_h = useMemo(() => {
        return (buttonSize + 6) * Children.count(children);
    }, []);
    return (
        <div className='flex flex-col justify-between fixed bottom-4 right-4 z-50' style={{width: buttonSize + 'px', height: container_h + 'px'}}>
            {Children.map(children, (c) => <div
                key={c.key}
                style={{
                    width: buttonSize + 'px',
                    height: buttonSize + 'px',
                    fontSize: buttonSize / 2 + 'px',
                }}>
                {c}
            </div>)}
        </div>
    );
};

export {FloatingButton, ButtonContainer};