'use client';
import {Section, Content, Content_Default, Container, Wrapper, Loading} from '@/lib/modules/layout-components';
import {List, Collapsible} from '@/lib/modules/ui-components';
import {EventoIngressos} from '@/lib/modules/ticket-purchase';
import CountdownMobile from '@/lib/modules/countdown-mobile';
import {useEffect, useRef, useMemo, useState} from 'react';
import EventCountdown from '@/lib/modules/countdown-timer';
import {_log} from '@/lib/modules/debug';
import '../../../public/css/globals.css';

export default function Main() {
    const DEV = useMemo(() => {
        return process.env.NEXT_PUBLIC_DEV_ENV == 'true';
    }, []);

    const [pageLoading, setPageLoading] = useState(true);

    // Dismisses loading screen once all other elements have been processed
    useEffect(() => {
        setPageLoading(false);
    }, []);
    
    return (
        <div className='bg-[radial-gradient(circle_at_center,#1E3050,#121e31)]'>

            {pageLoading && <div className='fixed w-screen h-screen bg-primary-900 z-[999]'><Loading width={32} /></div>}

        </div>
    )
}