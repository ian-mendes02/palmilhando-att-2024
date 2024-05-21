'use client';
import {Wrapper} from '@/lib/modules/layout-components';
import {useEffect, useMemo, useState} from 'react';
export default function Countdown({paused = false, timestamp = '2024-06-05T23:59:00.000-03:00', isMobile}) {

    const eventDate = useMemo(() => new Date(timestamp).getTime(), []);

    const [time, setTime] = useState({d: '00', h: '00', m: '00', s: '00'});

    function tick() {
        var now = (new Date).getTime();
        var del = eventDate - now;
        if (!paused && del > 0) {
            const _t = (n) => {
                if (n < 10)
                    n = '0' + n;
                return n;
            };
            var d = Math.floor(del / 86400000);
            var h = Math.floor((del % 86400000) / 3600000);
            var m = Math.floor((del % 3600000) / 60000);
            var s = Math.floor((del % 60000) / 1000);
            setTime({s: _t(s), m: _t(m), h: _t(h), d: _t(d)});
        }
    }

    useEffect(() => {
        const timer = setInterval(tick, 1000);
        return () => clearInterval(timer);
    }, []);

    const timer = useMemo(() => isMobile ? (
        <div id='countdown' className='fixed top-0 w-full h-20 bg-[var(--cor-4)] flex items-center border-b-2 border-sky-800 rounded-bl-3xl rounded-br-3xl z-50 slide-down overflow-clip'>
            <Wrapper className='flex-col justify-center items-center m-auto'>
                <span>
                    <span className='my-2 font-light text-sm'>Garanta seu ingresso no 1º lote</span>
                    <span className='font-extralight text-xs'>Tempo restante:</span>
                </span>
                <span className='text-lg font-bold'>{`${time.d}:${time.h}:${time.m}:${time.s}`}</span>
            </Wrapper>
        </div>
    ) : (
        <div id='countdown' className='fixed top-0 w-full h-20 bg-[var(--cor-4)] flex items-center border-b-2 border-sky-800 rounded-bl-3xl rounded-br-3xl z-50 slide-down overflow-hidden'>
            <Wrapper className='justify-center items-center m-auto'>
                <span className='text-center mx-4'>
                    <span className='font-bold my-1'>Garanta seu ingresso no 1º lote</span>
                    <span className='font-light text-xs'>Tempo restante:</span>
                </span>
                <div className='flex flex-col items-center justify-center w-20 h-16 rounded-2xl border border-sky-800 mx-1 bg-sky-950'>
                    <span className='text-xl font-extrabold'>{time.d}</span>
                    <span className='text-xs font-light'>DIAS</span>
                </div>
                <div className='flex flex-col items-center justify-center w-20 h-16 rounded-2xl border border-sky-800 mx-1 bg-sky-950'>
                    <span className='text-xl font-extrabold'>{time.h}</span>
                    <span className='text-xs font-light'>HORAS</span>
                </div>
                <div className='flex flex-col items-center justify-center w-20 h-16 rounded-2xl border border-sky-800 mx-1 bg-sky-950'>
                    <span className='text-xl font-extrabold'>{time.m}</span>
                    <span className='text-xs font-light'>MINUTOS</span>
                </div>
                <div className='flex flex-col items-center justify-center w-20 h-16 rounded-2xl border border-sky-800 mx-1 bg-sky-950'>
                    <span className='text-xl font-extrabold'>{time.s}</span>
                    <span className='text-xs font-light'>SEGUNDOS</span>
                </div>
            </Wrapper>
        </div>
    ), [isMobile, time]);

    return timer;
}