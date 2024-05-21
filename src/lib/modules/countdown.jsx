'use client';
import {Wrapper, Grid} from '@/lib/modules/layout-components';
import {useEffect, useMemo, useState} from 'react';
export default function Countdown({paused = false, timestamp = '2024-06-05T23:59:00.000-03:00', isMobile = false}) {

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

    const timer = useMemo(() => (
        <div id='countdown' className='fixed top-0 w-full max-[820px]:!h-32 h-20 bg-[var(--cor-4)] flex items-center border-b-2 border-sky-800 rounded-bl-3xl rounded-br-3xl z-50 slide-down overflow-hidden'>
            <Grid className='justify-center items-center m-auto grid-cols-2 max-[820px]:!grid-cols-1 h-full gap-1'>
                <span className='text-center mx-4'>
                    <span className='font-bold my-1'>Garanta seu ingresso no 1º lote</span>
                    <span className='font-light text-xs'>Tempo restante:</span>
                </span>
                <Grid className="grid-cols-4">
                    <div className='flex flex-col items-center justify-center w-20 h-16 max-[820px]:!w-[4.5rem] max-[820px]:!h-[3.5rem] rounded-2xl border border-sky-800 mx-1 bg-sky-950'>
                        <span className='text-xl font-extrabold max-[820px]:!text-lg'>{time.d}</span>
                        <span className='text-xs font-light'>DIAS</span>
                    </div>
                    <div className='flex flex-col items-center justify-center w-20 h-16 max-[820px]:!w-[4.5rem] max-[820px]:!h-[3.5rem] rounded-2xl border border-sky-800 mx-1 bg-sky-950'>
                        <span className='text-xl font-extrabold max-[820px]:!text-lg'>{time.h}</span>
                        <span className='text-xs font-light'>HORAS</span>
                    </div>
                    <div className='flex flex-col items-center justify-center w-20 h-16 max-[820px]:!w-[4.5rem] max-[820px]:!h-[3.5rem] rounded-2xl border border-sky-800 mx-1 bg-sky-950'>
                        <span className='text-xl font-extrabold max-[820px]:!text-lg'>{time.m}</span>
                        <span className='text-xs font-light'>MINUTOS</span>
                    </div>
                    <div className='flex flex-col items-center justify-center w-20 h-16 max-[820px]:!w-[4.5rem] max-[820px]:!h-[3.5rem] rounded-2xl border border-sky-800 mx-1 bg-sky-950'>
                        <span className='text-xl font-extrabold max-[820px]:!text-lg'>{time.s}</span>
                        <span className='text-xs font-light'>SEGUNDOS</span>
                    </div>
                </Grid>
            </Grid>
        </div>
    ), [isMobile, time]);

    return timer;
}