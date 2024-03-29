'use client';
import {Wrapper} from '@/lib/modules/layout-components';
import {useEffect, useMemo, useState} from 'react';
import '../../../public/css/globals.css';

export default function CountdownMobile({paused = false}) {

    //Data do evento
    const eventDate = useMemo(() => {
        return new Date('2024-03-31T23:59:00.000-03:00').getTime();
    }, []);

    //Armazena o tempo restante dividido em partes
    const [time, setTime] = useState({d: '00', h: '00', m: '00', s: '00'});

    useEffect(() => {
        //Roda o cronômetro 1 vez por segundo
        const timer = !paused && setInterval(() => {
            const _t = (n) => {
                if (n < 10) {n = '0' + n;}
                return n;
            };
            var now = new Date().getTime();
            var del = eventDate - now;
            del == 0 && clearInterval(timer);
            var d = Math.floor(del / 86400000);
            var h = Math.floor((del % 86400000) / 3600000);
            var m = Math.floor((del % 3600000) / 60000);
            var s = Math.floor((del % 60000) / 1000);
            setTime({s: _t(s), m: _t(m), h: _t(h), d: _t(d)});
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div id='countdown' className='fixed top-0 w-full h-20 bg-[var(--cor-4)] flex items-center border-b-2 border-sky-800 rounded-bl-3xl rounded-br-3xl z-50 slide-down overflow-clip'>
            <Wrapper className='flex-col justify-center items-center m-auto'>
                <span className='my-2 font-light text-sm'>A pré-venda acaba em:</span>
                <span className='text-lg font-bold'>{`${time.d}:${time.h}:${time.m}:${time.s}`}</span>
            </Wrapper>
        </div>
    );
}