'use client';
//import {FloatingButton, ButtonContainer} from '@/lib/modules/floating-button';
import Countdown from '@/lib/modules/countdown';
import {Section, Content, ContentDefault, Container, Wrapper, Loading, Grid} from '@/lib/modules/layout-components';
import {List, Collapsible} from '@/lib/modules/ui-components';
import {EventoIngressos} from '@/lib/modules/ticket-purchase';
import {useEffect, useRef, useMemo, useState} from 'react';
import '$/css/carousel.css';
import {scrollToTop} from '@/lib/modules/utils';

export default function Main() {

    const $ = (el) => document.querySelector(el);

    const [pageLoading, setPageLoading] = useState(true);
    const [viewportWidth, setViewportWidth] = useState(null);
    const [fullscreenContent, setFullscreenContent] = useState(null);
    const [modalActive, setModalActive] = useState(false);

    const isMobile = useMemo(() => viewportWidth <= 820, [viewportWidth]);
    const ASSET_PREFIX = useMemo(() => process.env.NEXT_PUBLIC_DEV_ENV == 'true' ? "/" : process.env.NEXT_PUBLIC_ASSET_PREFIX_GLOBAL, []);
    const defaultUserProfile = useMemo(() => ASSET_PREFIX + 'img/default_user.jpg', []);

    const defaultText = 'Teremos mais informações em breve. Fique ligado!';
    const defaultOccupation = '?';

    const containerRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        !function(e, t, a, n, g) {e[n] = e[n] || [], e[n].push({"gtm.start": (new Date).getTime(), event: "gtm.js"}); var m = t.getElementsByTagName(a)[0], r = t.createElement(a); r.async = !0, r.src = "https://www.googletagmanager.com/gtm.js?id=GTM-5TTGRP4", m.parentNode.insertBefore(r, m);}(window, document, "script", "dataLayer");
        document.title = 'Evento Palmilhas e Ciência Aplicada 2024';
    }, []);

    useEffect(() => {
        function vw() {
            setViewportWidth(window.visualViewport.width);
        } vw();
        window.visualViewport.addEventListener('resize', vw);
        return () => window.visualViewport.removeEventListener('resize', vw);
    }, []);

    useEffect(() => {
        const scrollEvents = ['wheel', 'scroll', 'keydown'];
        const scrollKeys = ["Space", "ArrowUp", "ArrowDown"];
        const handleClickOutside = (e) =>
            !contentRef.current?.contains(e.target)
                ? setModalActive(false)
                : null;
        const preventScroll = (e) => {
            if (scrollEvents.includes(e.type)) {
                if (e.type === 'keydown') {
                    if (e.code === 'Escape')
                        setModalActive(false);
                    else if (scrollKeys.includes(e.code))
                        e.preventDefault();
                } else e.preventDefault();
            }
        };
        if (modalActive) {
            document.addEventListener('mousedown', handleClickOutside);
            scrollEvents.forEach((event) => document.addEventListener(event, preventScroll, {passive: false}));
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            scrollEvents.forEach((event) => document.removeEventListener(event, preventScroll, {passive: false}));
        };
    }, [modalActive]);

    const VideoEvento = useMemo(
        () => <iframe src='https://www.youtube.com/embed/4Q2rD4ZH31M?si=DcurTOerXO3Rtc8o&autoplay=1&rel=0' allow='autoplay; picture-in-picture; web-share' allowFullScreen className='outline-none aspect-video w-full max-[820px]:!w-screen rounded-lg relative z-50'></iframe>, []
    );

    const Fullscreen = () => (
        <div className='bg-[rgb(0,0,0,0.5)] backdrop-blur-lg fixed z-[999] top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center px-32 py-[2.5%] max-[820px]:!p-0' ref={containerRef}>
            <div className='w-full h-full flex items-center justify-center relative'>
                <div className='h-auto w-full relative' ref={contentRef}>
                    <div className='w-12 h-12 absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 max-[820px]:!-translate-x-1/2 max-[820px]:!-translate-y-full'>
                        <span className='w-full text-right cursor-pointer' onClick={() => setModalActive(false)}><i className="fa-regular fa-circle-xmark text-2xl" aria-hidden="true"></i></span>
                    </div>
                    <Loading width={32} />
                    {fullscreenContent}
                </div>
            </div>
        </div>
    );

    const Vantagem = ({children, icon}) => (
        <Container className='w-full h-36 rounded-3xl p-4 shadow-md bg-[var(--cor-4)] border-t-2 border-sky-900'>
            <Container className='items-center justify-start text-center'>
                <div className='flex justify-center items-center bg-[var(--cor-1)] rounded-full w-12 h-12'>
                    <i className={icon} style={{fontSize: '1.5rem'}} aria-hidden="true"></i>
                </div>
                <div className="mt-4">{children}</div>
            </Container>
        </Container>
    );

    const Palestrante = ({
        children = defaultText,
        src = defaultUserProfile,
        name = 'Palestrante não confirmado',
        occupation = defaultOccupation,
        theme = 'Tema da palestra'
    }) => {
        const [isActive, setIsActive] = useState(false);
        const [maxHeight, setMaxHeight] = useState(96);
        const containerRef = useRef(null);
        const padding = 16;

        useEffect(() => {
            var content = containerRef.current.children;
            var titleHeight = content[0].clientHeight;
            var descriptionHeight = content[1].clientHeight;
            var totalHeight = titleHeight + descriptionHeight + padding;
            isActive
                ? setMaxHeight(totalHeight)
                : setMaxHeight(titleHeight + padding);
        }, [isActive]);

        return (
            <div className='w-full flex items-start justify-center'>
                <div
                    className='p-2 rounded-2xl shadow-md bg-[#121e31] border-t-2 border-sky-900 hover:scale-[101%] hover:brightness-95 duration-200 ease-out w-full h-full overflow-hidden cursor-pointer'
                    onClick={() => setIsActive(!isActive)}
                    style={{height: maxHeight}}
                >
                    <div className="flex flex-col justify-between relative duration-300 ease-out" ref={containerRef}>
                        <div className='speaker-header w-full flex items-center justify-start p-2 max-[820px]:!p-0'>
                            <div
                                className='speaker-profile w-24 min-w-24 aspect-square left-0 bottom-0 rounded-full mr-4 bg-center bg-cover'
                                style={{backgroundImage: `url('${src}')`}}
                            ></div>
                            <div className='speaker-title'>
                                <h2 className='font-bold text-lg mb-1 max-[820px]:!text-base'>{theme}</h2>
                                <h2 className='font-normal text-sm'>{name}</h2>
                                <h3 className='italic opacity-80 text-xs'>{occupation}</h3>
                            </div>
                        </div>
                        <div className='speaker-description duration-300 ease-out p-2'>
                            <div className="divider left"></div>
                            <div>{children}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const Atividade = ({children, img, name, description, link}) => (
        <div className='m-2 w-96 text-white'>
            <div className='p-4 rounded-xl shadow-md bg-[linear-gradient(60deg,var(--cor-4),var(--cor-5))] w-full h-full border-b-8 border-t border-b-[#0e1b2c] border-t-cyan-200'>
                <div className="flex flex-col justify-between">
                    <div className='atividade-header w-full flex items-center justify-start'>
                        <div className='atividade-profile w-24 h-24 aspect-square mr-4'>
                            <img src={img} className='w-full h-full aspect-square rounded-lg' width={200} height={200} alt='' draggable='false' />
                        </div>
                        <div className='atividade-title'>
                            <h2 className='font-semibold text-xl'>{name}</h2>
                            <h3 className='italic opacity-80'>{description}</h3>
                        </div>
                    </div>
                    <Container className='justify-between h-full'>
                        <div className="divider left"></div>
                        {children}
                        <br />
                        {link && <a href={link} target='_blank' className='text-white !underline cursor-pointer'> Saiba mais <i className="fa-solid fa-arrow-up-right-from-square text-xs" aria-hidden="true"></i></a>}
                    </Container>
                </div>
            </div>
        </div>
    );

    const Checkout = () => (
        <div
            className='block w-max py-4 px-8 my-8 mx-auto rounded-full shadow-lg bg-sky-700 grad-alt cursor-pointer hover:brightness-105 hover:-scale-y-[5px] duration-150 ease-out'
            onClick={() => scrollToTop('#evt-valor')}
        ><span className='m-auto text-center text-white font-bold'>QUERO GARANTIR MINHA VAGA</span></div>
    );

    function toggleFullscreen(content) {
        setFullscreenContent(content);
        setModalActive(true);
    }

    useEffect(() => setPageLoading(false), []);

    return (
        <main className='bg-[radial-gradient(circle_at_center,#1E3050,#121e31)]'>

            {pageLoading && (
                <div className='fixed w-screen h-screen bg-primary-900 z-[999]'>
                    <Loading width={32} />
                </div>
            )}

            <Countdown isMobile={isMobile}/>

            <Section id='evt-header' className='pt-24 pb-12 h-[576px] max-[820px]:!h-[90vh] flex items-center overflow-hidden bg-[var(--cor-4)]'>

                <div className='absolute top-0 left-0 w-screen h-auto overflow-clip mix-blend-soft-light opacity-75 z-10 max-[820px]:!h-full'>
                    <video autoPlay muted playsInline loop className='inline-block align-baseline w-full relative max-[820px]:!h-full max-[820px]:!w-full object-cover bg-cover'>
                        <source src={ASSET_PREFIX + 'img/evt_banner.webm'} />
                    </video>
                </div>

                <Content className='relative z-20'>
                    <ContentDefault className='flex flex-col justify-center items-center text-center'>
                        <Container className='h-full w-[48rem] max-[1024px]:w-[80%] max-[426px]:w-full items-center justify-center'>
                            <Container className='w-1/2'>
                                <img src={ASSET_PREFIX + 'img/svg/encontro_logo_3.svg'} alt='' draggable='false' />
                            </Container>
                            <div className="divider"></div>
                            <Container className='my-4'>
                                <p className='text-3xl'>Viva a experiência do empreendedorismo e da prática baseada em evidência para se destacar no mercado de trabalho.</p>
                            </Container>
                            <Wrapper className='flex-nowrap max-[820px]:!flex-col'>
                                <Wrapper className="items-center flex-nowrap w-max m-2">
                                    <div className='w-8 h-8 mr-4 bg-[var(--cor-1)] rounded-full flex items-center justify-center shadow-md'>
                                        <img src={ASSET_PREFIX + 'img/svg/calendar.svg'} alt='' draggable='false' className='w-1/2' />
                                    </div>
                                    <h2 className='font-light text-base text-left'>13 e 14 de Setembro <br />das 8h às 18h</h2>
                                </Wrapper>
                                <Wrapper className="items-center flex-nowrap w-max m-2">
                                    <div className='w-8 h-8 mr-4 bg-[var(--cor-1)] rounded-full flex items-center justify-center shadow-md'>
                                        <img src={ASSET_PREFIX + 'img/svg/map_pin.svg'} alt='' draggable='false' className='w-[40%]' />
                                    </div>
                                    <h2 className='font-light text-base'>Mercure São José dos Campos</h2>
                                </Wrapper>
                            </Wrapper>
                            <button
                                className='font-bold text-2xl max-[820px]:!text-base shadow-md w-fit py-4 px-16 rounded-full max-[820px]:!max-w-[340px] grad-alt hover:scale-105 hover:brightness-105 duration-200 my-4'
                                onClick={() => $('#evt-valor').scrollIntoView({block: 'start'})}>
                                GARANTA SUA VAGA
                            </button>
                        </Container>
                    </ContentDefault>
                </Content>
            </Section>

            <Section id="evt-vantagens" className='border-t-2 border-sky-800 bg-[#121e31] py-4'>
                <Content>
                    <ContentDefault>
                        <Grid className='grid-rows-1 grid-cols-4 max-[820px]:!grid-rows-4 max-[820px]:!grid-cols-1 gap-4'>
                            <Vantagem icon='fa-regular fa-clock'>
                                <p className='text-sm'><strong className='grad-text'>19 horas</strong> de atividades e palestras</p>
                            </Vantagem>

                            <Vantagem icon='fa-solid fa-users'>
                                <p className='text-sm'><strong className='grad-text'>Networking</strong> com clínicos de todo o país</p>
                            </Vantagem>

                            <Vantagem icon='fa-solid fa-rocket'>
                                <p className='text-sm'>Conteúdo para <strong className='grad-text'>todos os níveis de experiência</strong></p>
                            </Vantagem>

                            <Vantagem icon='fa-solid fa-user-graduate'>
                                <p className='text-sm'>Palestras e mentorias com <strong className='grad-text'>grandes profissionais do mercado</strong></p>
                            </Vantagem>
                        </Grid>
                    </ContentDefault>
                </Content>
            </Section>

            <Section id="evt-prof" className='bg-[radial-gradient(circle_at_center,#1E3050,#121e31)] border-t-2 border-sky-800 z-20 shadow-lg'>
                <Content>
                    <ContentDefault>
                        <Container className="text-center mx-auto w-9/12 max-[820px]:!w-full mb-8">
                            <h1 className='font-bold text-3xl grad-text mb-2 max-[820px]:!text-2xl'>A PROFISSIONALIZAÇÃO É O ÚNICO CAMINHO</h1>
                            <h2 className='mx-auto w-9/12 max-[820px]:!w-full text-base font-light'>Não importa o seu tempo de mercado: o <mark className="cor-7">Encontro Anual Palmilhas e Ciência Aplicada</mark> é o lugar perfeito para você ter ainda mais resultados.</h2>
                        </Container>
                        <Wrapper className='flex-nowrap max-[820px]:!flex-col items-center justify-center'>
                            <Container className='w-96 min-h-40 m-2 p-4 rounded-3xl shadow-md bg-[#121e31] border-t-2 border-sky-900 max-[820px]:!w-[96%]'>
                                <span className='flex w-full justify-between items-center font-bold grad-text text-lg'>
                                    <h2>Se é iniciante</h2>
                                    <i className="fa-solid fa-seedling text-3xl grad-text" aria-hidden="true"></i>
                                </span>
                                <div className="divider left"></div>
                                <p>Vai descobrir como ser um profissional acima da média desde o início da jornada</p>
                            </Container>
                            <Container className='w-96 min-h-40 m-2 p-4 rounded-3xl shadow-md bg-[#121e31] border-t-2 border-sky-900 max-[820px]:!w-[96%]'>
                                <span className='flex w-full justify-between items-center font-bold grad-text text-lg'>
                                    <h2>Se já tem experiência</h2>
                                    <i className="fa-solid fa-gears text-3xl grad-text" aria-hidden="true"></i>
                                </span>
                                <div className="divider left"></div>
                                <p>Vai conhecer novas formas de melhorar ainda mais seu trabalho e poder cobrar mais pelo seu serviço</p>
                            </Container>
                            <Container className='w-96 min-h-40 m-2 p-4 rounded-3xl shadow-md bg-[#121e31] border-t-2 border-sky-900 max-[820px]:!w-[96%]'>
                                <span className='flex w-full justify-between items-center font-bold grad-text text-lg'>
                                    <h2>Se já é avançado</h2>
                                    <i className="fa-solid fa-rocket text-3xl grad-text" aria-hidden="true"></i>
                                </span>
                                <div className="divider left"></div>
                                <p>Vai aumentar o seu networking, fazer parcerias e ter contato com grandes profissionais do país.</p>
                            </Container>
                        </Wrapper>
                    </ContentDefault>
                </Content>
            </Section>

            <Section id='evt-local' className='max-[820px]:!py-16 bg-[linear-gradient(45deg,var(--cor-4),var(--cor-5))] duration-200 ease-out overflow-hidden'>
                <Content className='relative z-20'>
                    <ContentDefault>
                        <Wrapper className='!flex-nowrap max-[820px]:!flex-col justify-start items-center h-[420px] max-[820px]:!h-auto w-9/12 max-[820px]:!w-full mx-auto'>
                            <Container className='w-[32rem] max-[820px]:!w-full p-4'>
                                <Container className='mb-2'>
                                    <h2 className='grad-text font-bold text-3xl mb-2'>ONDE E QUANDO?</h2>
                                    <div className="divider left"></div>
                                </Container>
                                <Wrapper className="items-center flex-nowrap w-max m-2 max-[820px]:!w-full">
                                    {!isMobile && (
                                        <div className='w-12 h-12 mr-4 bg-[var(--cor-1)] rounded-full flex items-center justify-center shadow-md'>
                                            <img src={ASSET_PREFIX + 'img/svg/calendar.svg'} alt='' draggable='false' className='w-1/2' />
                                        </div>
                                    )}
                                    <h2 className='font-extralight text-base'>
                                        {isMobile && <i className="fa-solid fa-calendar-days mr-2" aria-hidden="true"></i>}
                                        <strong>13 e 14 de Setembro</strong><br />
                                        Sexta-feira e sábado<br/>
                                        Das 8h às 18h
                                    </h2>
                                </Wrapper>
                                <Wrapper className="items-center flex-nowrap w-max m-2 max-[820px]:!w-full">
                                    {!isMobile && (
                                        <div className='w-12 h-12 mr-4 bg-[var(--cor-1)] rounded-full flex items-center justify-center shadow-md'>
                                            <img src={ASSET_PREFIX + 'img/svg/map_pin.svg'} alt='' draggable='false' className='w-[40%]' />
                                        </div>
                                    )}
                                    <h2 className='font-extralight text-base'>
                                        {isMobile && <i className="fa-solid fa-location-dot mr-2" aria-hidden="true"></i>}
                                        <strong>Hotel Mercure São José dos Campos - Torre II</strong><br />
                                        Av. Jorge Zarur, 81, Jardim Apolo <br />
                                        São José dos Campos, SP - 12243-081 <br />
                                    </h2>
                                </Wrapper>
                                <Wrapper className='flex-nowrap items-center w-max m-2 max-[820px]:!w-full'>
                                    <div className="relative w-16 h-12 aspect-square">
                                        <div className='absolute h-2/3 aspect-square left-0 top-0 rounded-full mr-4 bg-center bg-cover' style={{backgroundImage: `url(${ASSET_PREFIX + 'img/mercure.webp'})`}}></div>
                                        <div className='absolute h-2/3 aspect-square right-0 bottom-0 mr-4 bg-center bg-cover' style={{backgroundImage: `url(${ASSET_PREFIX + 'img/png/logo_ibis.png'})`}}></div>
                                    </div>
                                    <div>
                                        <div className='mb-2'>
                                            <h2 className="font-extralight text-base m-0"><strong>Em parceria com:</strong></h2>
                                            <span className="font-extralight text-base">Mercure São José dos Campos<br /> 20% OFF</span>
                                            <span className="font-extralight text-base">Ibis São José dos Campos<br /> 15% OFF</span>
                                        </div>
                                        <a className='inline !underline font-light cursor-pointer text-sm' href='mailto:h5168-re@accor.com?subject=Reserva%20de%20estadia%20-%20Palmilhas%20%26%20Ci%C3%AAncia%20Aplicada%202024'>Clique aqui para fazer sua reserva por email</a>
                                    </div>
                                </Wrapper>
                            </Container>
                            <Container className='w-[32rem] p-4 aspect-video max-[820px]:!w-full max-[820px]:!p-0 relative'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14668.122128172752!2d-45.90516370000002!3d-23.205557899999988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc3589bc020f0d%3A0x96bc968352c2c899!2sMercure%20Sao%20Jose%20dos%20Campos!5e0!3m2!1sen!2sbr!4v1710790411443!5m2!1sen!2sbr" className='outline-none border-none w-full h-full absolute rounded-lg' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </Container>
                        </Wrapper>
                        <Checkout/>
                    </ContentDefault>
                </Content>
            </Section>

            <Section id='evt-palestrantes' className='shadow-lg bg-[radial-gradient(circle_at_center,#1E3050,#121e31)] max-[820px]:!py-4 border-y-2 border-sky-800 chuva-palmilhas overflow-hidden rounded-bl-3xl rounded-br-3xl'>
                <Content className='relative z-20'>
                    <ContentDefault>
                        <Container className='w-9/12 max-[820px]:!w-full my-4 px-4 mx-auto'>
                            <h2 className='text-2xl text-center max-[820px]:!text-xl font-bold grad-text mb-2'>CONHEÇA OS PALESTRANTES DE 2024</h2>
                            <p className='text-center text-sm'>Selecione um palestrante para ver mais informações</p>
                            <div className="divider"></div>
                        </Container>
                        <Container className='items-center justify-center'>

                            <Container className='mt-4 items-center'>
                                <h2 className='grad-text text-center font-semibold text-lg'>Ciência Aplicada</h2>
                                <Grid className='mt-4 mx-auto grid-cols-2 max-[820px]:!grid-cols-1 w-full gap-4'>
                                    <Palestrante
                                        src={ASSET_PREFIX + 'img/palestrantes-2024/andre-mendes.webp'}
                                        name='André Mendes'
                                        occupation='Fisioterapeuta'
                                        theme='Vamos pensar juntos: Um guia para o raciocínio clínico'
                                    >
                                        <p className='text-sm' style={{lineHeight: '24px'}}>Fisioterapeuta, especialista em Fisioterapia Ortopédica, Mestre e doutorando em Fisioterapia, sócio fundador da Podoshop e do Palmilhando. Autor do livro Palmilhas Terapêuticas: ciência e prática clínica.</p>
                                    </Palestrante>
                                    <Palestrante
                                        src={ASSET_PREFIX + 'img/palestrantes-2024/felipe-barcelos.webp'}
                                        name='Felipe Barcelos'
                                        occupation='Médico Ortopedista'
                                        theme='O pé da criança com doenças neuromusculares'
                                    >
                                        <p className='text-sm' style={{lineHeight: '24px'}}>Médico ortopedista com subespecialização em ortopedia pediátrica e doenças neuromusculares pelo Ensino Einstein. Médico do corpo clínico do Hospital Israelita Albert Einstein.</p>
                                    </Palestrante>
                                    <Palestrante
                                        src={ASSET_PREFIX + 'img/palestrantes-2024/maria-lucoveis.webp'}
                                        name='Maria Lucóveis'
                                        occupation='Enfermeira e fisioterapeuta'
                                        theme='Recomendação de recursos offloading para pés de risco'
                                    >
                                        <p className='text-sm' style={{lineHeight: '24px'}}>Fisioterapeuta e Enfermeira Estomaterapeuta, Mestre em Ciências pela Universidade Federal de São Paulo, Master em pé diabético pela <i>Universidad Complutense de Madrid</i>, doutoranda em Ciências da Reabilitação pela Universidade de São Paulo. Socia proprietária da Bem Estar dos Pés - Serviços de Enfermagem.</p>
                                    </Palestrante>
                                    <Palestrante
                                        src={ASSET_PREFIX + 'img/palestrantes-2024/george-sabino.webp'}
                                        name='George Sabino'
                                        occupation='Fisioterapeuta'
                                        theme='Utilização de I.A. nas avaliações clínicas do pé e da marcha'
                                    >
                                        <p className='text-sm' style={{lineHeight: '24px'}}>Fisioterapeuta, Doutor em Ciências da Reabilitação UFMG, Pós doutorando em Ciências da Saúde CMMG. Sócio fundador da Propulsão.</p>
                                    </Palestrante>
                                    <Palestrante
                                        src={ASSET_PREFIX + 'img/palestrantes-2024/brenda-braga.webp'}
                                        name='Brenda Braga'
                                        occupation='Fisioterapeuta'
                                        theme='A influência dos calçados infantis na saúde dos pés'
                                    >
                                        <p className='text-sm' style={{lineHeight: '24px'}}>Fisioterapeuta ortesista, especialista em órteses suropodálicas. Empreendedora e sócia da Gente Miúda Kids Shoes.</p>
                                    </Palestrante>
                                    <Palestrante
                                        src={ASSET_PREFIX + 'img/palestrantes-2024/leonardo-signorini.webp'}
                                        name='Leonardo Signorini'
                                        occupation='Fisioterapeuta'
                                        theme='As palmilhas no futebol profissional'
                                    >
                                        <p className='text-sm' style={{lineHeight: '24px'}}>Fisioterapeuta, especialista em Fisioterapia Ortopédica e Esportiva. Dono da Dr. Pés palmilhas.</p>
                                    </Palestrante>
                                </Grid>
                            </Container>

                            <Container className='mt-8'>
                                <h2 className='grad-text text-center font-semibold text-lg'>Empreendedorismo</h2>
                                <Grid className='mt-4 mx-auto grid-cols-2 max-[820px]:!grid-cols-1 w-full gap-4'>
                                    <Palestrante
                                        src={ASSET_PREFIX + 'img/palestrantes-2024/mariana-pereira.webp'}
                                        name='Mariana Pereira'
                                        occupation='Copywriter'
                                        theme='Consciência, dores e desejos do cliente'
                                    >
                                        <p className='text-sm' style={{lineHeight: '24px'}}>Estrategista digital e copywriter da Podoshop e do Palmilhando.</p>
                                    </Palestrante>
                                    <Palestrante
                                        src={ASSET_PREFIX + 'img/palestrantes-2024/jordache-murta.webp'}
                                        name='Jordache Murta'
                                        occupation='Publicitário'
                                        theme='Estratégias para construir a sua autoridade no digital'
                                    >
                                        <p className='text-sm' style={{lineHeight: '24px'}}>Publicitário, especialista em marketing digital. Há 20 anos trabalhando com marketing, atua em estratégias digitais para construção de autoridade, vendas e captação de novos clientes de forma orgânica.</p>
                                    </Palestrante>
                                    <Palestrante
                                        src={ASSET_PREFIX + 'img/palestrantes-2024/natalia-faro.webp'}
                                        name='Natália Faro'
                                        occupation='Fisioterapeuta'
                                        theme='Ecossistema empreendedor: Como fomentar seu crescimento'
                                    >
                                        <p className='text-sm' style={{lineHeight: '24px'}}>Fisioterapeuta, empreendedora há 15 anos, influenciadora e fundadora da Verticalle - Palmilhas. Experiência de 7 anos com palmilhas personalizadas e criadora das palmilhas dupla face para saltos.</p>
                                    </Palestrante>
                                    <Palestrante
                                        src={ASSET_PREFIX + 'img/palestrantes-2024/myrlla-moreira.webp'}
                                        name='Myrlla Moreira'
                                        occupation='Fisioterapeuta'
                                        theme='Como ser um profissional de referência e ter um consultório de sucesso'
                                    >
                                        <p className='text-sm' style={{lineHeight: '24px'}}>Fisioterapeuta formada há 11 anos, empreendedora, especialista em coluna vertebral pela Santa Casa de São Paulo. Criadora do curso on-line de capacitação Escoliose na Prática.</p>
                                    </Palestrante>
                                    <Palestrante
                                        src={ASSET_PREFIX + 'img/palestrantes-2024/clayton-fuzetti.webp'}
                                        name='Clayton Fuzetti'
                                        occupation='Fisioterapeuta e CEO da Podoshop®'
                                        theme='Planejando as finanças do seu futuro'
                                    >
                                        <p className='text-sm' style={{lineHeight: '24px'}}>Fisioterapeuta, especialista em Fisioterapia Ortopédica, MBA em gestão empresarial. Sócio fundador da Podoshop e do Palmilhando.</p>
                                    </Palestrante>
                                </Grid>
                            </Container>

                        </Container>
                    </ContentDefault>
                </Content>
            </Section>

            <Section id='evt-video' className='shadow-xl !py-0'>
                <div className='my-8'>
                    <h1 className='grad-text text-center font-semibold text-lg'>Confira como foi nosso último encontro</h1>
                </div>
                <div className='relative pt-24 h-[576px] max-[820px]:!h-[90vh] flex items-center overflow-hidden'>
                    <div className='cursor-pointer' onClick={() => toggleFullscreen(VideoEvento)}>
                        {!modalActive && <div className='absolute-center w-20 h-20 z-30'>
                            <img src={ASSET_PREFIX + 'img/svg/play_button.svg'} alt='' draggable='false' className='w-full h-full' />
                        </div>}
                        <div className='absolute top-0 left-0 w-screen h-auto overflow-clip mix-blend-soft-light opacity-75 z-10 max-[820px]:!h-full'>
                            <video id='evento-video' autoPlay muted playsInline loop className='inline-block align-baseline w-full max-[820px]:!h-full max-[820px]:!w-full object-cover bg-cover'>
                                <source src={ASSET_PREFIX + 'img/evt_banner.webm'} />
                            </video>
                        </div>
                    </div>
                </div>
                {modalActive && <Fullscreen>{fullscreenContent}</Fullscreen>}
            </Section>

            <Section id='evt-valor'>
                <Content>
                    <ContentDefault>
                        <EventoIngressos />
                    </ContentDefault>
                </Content>
            </Section>

            <Section id='evt-como-chegar' className='border-y-2 border-sky-800 bg-[#121e31]'>
                <Content>
                    <ContentDefault>
                        <Container className='my-4'>
                            <h1 className='grad-text font-semibold text-lg'>Como chegar até o local do evento?</h1>
                            <p className='text-xs opacity-50 italic my-4  max-[820px]:!text-center'>Tempos aproximados e sujeitos a variação.</p>
                            <div className="divider left max-[820px]:!hidden"></div>
                            <div className="divider min-[821px]:hidden"></div>
                        </Container>
                        <Grid className='grid-cols-2 max-[820px]:!grid-cols-1'>
                            <List className='checklist ml-8'>
                                <li className='include text-lg font-semibold'> - Aeroporto de São José dos Campos <br />
                                    <span className="inline-flex items-center mt-2">
                                        <span className='font-bold text-center m-2 border border-sky-500 rounded-xl p-2 w-24 h-fit'><i aria-hidden="true" className="fa-solid fa-car"></i><br />20min</span>
                                    </span>
                                </li>
                                <li className='include text-lg font-semibold'> - Aeroporto de Guarulhos <br />
                                    <span className="inline-flex items-center mt-2">
                                        <span className='font-bold text-center m-2 border border-sky-500 rounded-xl p-2 w-24 h-fit'><i aria-hidden="true" className="fa-solid fa-car"></i><br />1h</span>
                                        <span className='font-bold text-center m-2 border border-sky-500 rounded-xl p-2 w-24 h-fit'><i aria-hidden="true" className="fa-solid fa-bus"></i><br />1h15min</span>
                                    </span>
                                </li>
                                <li className='include text-lg font-semibold'> - Rodoviária de São José dos Campos <br />
                                    <span className="inline-flex items-center mt-2">
                                        <span className='font-bold text-center m-2 border border-sky-500 rounded-xl p-2 w-24 h-fit'><i aria-hidden="true" className="fa-solid fa-car"></i><br />10min</span>
                                        <span className='font-bold text-center m-2 border border-sky-500 rounded-xl p-2 w-24 h-fit'><i aria-hidden="true" className="fa-solid fa-bus"></i><br />30min</span>
                                    </span>
                                </li>
                                <li className='include text-lg font-semibold'> - Acesso pela via Dutra</li>
                            </List>
                            <Container className='w-full aspect-video max-[820px]:!p-0 relative my-auto max-[820px]:!mt-8'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14668.122128172752!2d-45.90516370000002!3d-23.205557899999988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc3589bc020f0d%3A0x96bc968352c2c899!2sMercure%20Sao%20Jose%20dos%20Campos!5e0!3m2!1sen!2sbr!4v1710790411443!5m2!1sen!2sbr" className='outline-none border-none w-full h-full absolute rounded-lg' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </Container>
                        </Grid>
                        <Checkout/>
                    </ContentDefault>
                </Content>
            </Section>

            <Section id='evt-o-que-fazer'>
                <Content className='relative z-30'>
                    <ContentDefault>
                        <Container>
                            <h1 className='grad-text font-semibold text-lg text-center'>O que fazer na região?</h1>
                            <div className="divider"></div>
                        </Container>
                        <Wrapper className='items-center justify-center'>
                            <Atividade
                                img={ASSET_PREFIX + 'img/atividades/thermas-do-vale.webp'}
                                name='THERMAS DO VALE'
                                description='Parque aquático'
                                link='https://www.thermasdovale.com.br/'>
                                <p className='text-sm italic min-h-36'>"O Thermas do Vale está localizado a 90km de São Paulo - SP. O lindo Parque Aquático conta com 13 piscinas e diversas atrações em um espaço repleto de natureza preservada."</p>
                            </Atividade>

                            <Atividade
                                img={ASSET_PREFIX + 'img/atividades/vicentina-aranha.webp'}
                                name='PARQUE VICENTINA ARANHA'
                                description='Parque municipal'
                                link='https://www.sjc.sp.gov.br/servicos/esporte-e-qualidade-de-vida/parques/vicentina-aranha/'>
                                <p className="text-sm italic min-h-36">"O Parque Vicentina Aranha abrange uma área de 80 mil metros quadrados. O espaço foi aberto para a prática de caminhada em um extenso bosque. O parque é separado em canteiros com paisagismo e canteiros com bosque e algumas espécies raras e centenárias."</p>
                            </Atividade>

                            <Atividade
                                img={ASSET_PREFIX + 'img/atividades/parque-da-cidade.webp'}
                                name='PARQUE DA CIDADE'
                                description='Parque municipal'
                                link='https://www.sjc.sp.gov.br/servicos/esporte-e-qualidade-de-vida/parques/parque-da-cidade/'>
                                <p className='text-sm italic min-h-36'>"O Parque Municipal Roberto Burle Marx, mais conhecido como "Parque da Cidade", ocupa uma área de cerca de um milhão de metros quadrados. Este vasto perímetro abriga jardins, palmeiras imperiais, lagos, ilhas artificiais, bosques e alamedas."</p>
                            </Atividade>

                            <Atividade
                                img={ASSET_PREFIX + 'img/atividades/santo-antonio-do-pinhal.webp'}
                                name='SANTO ANTÔNIO DO PINHAL'
                                description='Cidade turística'
                                link='https://www.santoantoniodopinhal.sp.gov.br/a-cidade/guia-turistico-pdf'>
                                <p className='text-sm italic min-h-36'>"Quem ama natureza e procura paz e tranquilidade, encontra em Santo Antônio do Pinhal o local ideal para passar momentos agradáveis. Venha respirar o ar puro da montanha e aproveitar da hospitalidade encantadora."</p>
                            </Atividade>

                            <Atividade
                                img={ASSET_PREFIX + 'img/atividades/santuario-aparecida.webp'}
                                name='SANTUÁRIO NACIONAL DE APARECIDA'
                                description='Templo religioso'
                                link='https://www.aparecida.sp.gov.br/portal/turismo/0/9/2696/santuario-nacional'>
                                <p className="text-sm italic min-h-36">"Considerada a maior Igreja Mariana do mundo, o Santuário Nacional de Nossa Senhora da Conceição Aparecida é conhecido pela grandiosidade de sua obra. No local encontra-se a Imagem original de Nossa Senhora Aparecida encontrada por pescadores nas águas do Rio Paraíba do Sul em 1717."</p>
                            </Atividade>

                            <Atividade
                                img={ASSET_PREFIX + 'img/atividades/campos-do-jordao.webp'}
                                name='CAMPOS DO JORDÃO'
                                description='Cidade turística'
                                link='https://www.camposdojordao.sp.gov.br/'>
                                <p className="text-sm italic min-h-36">"Localizada na Serra da Mantiqueira no estado de São Paulo, é o município mais elevado do país, com 1628 metros de altitude. A cidade é conhecida por sua arquitetura tipicamente suíça e é um dos principais destinos de inverno do Brasil."</p>
                            </Atividade>

                        </Wrapper>
                    </ContentDefault>
                </Content>
            </Section>

            <Section id='faq'>
                <Content>
                    <ContentDefault className='flex justify-evenly max-[820px]:!flex-col'>
                        <Container className='w-[30%] max-[820px]:!w-[90%] max-[820px]:!mx-auto max-[820px]:!mb-8 max-[820px]:!text-center'>
                            <h2 className='font-semibold text-xl'>Ficou com alguma dúvida?</h2>
                            <div className="divider left"></div>
                            <p>Confira aqui as respostas para as dúvidas mais frequentes, ou entre em contato conosco via Whatsapp</p>
                            <a href="https://wa.me//5512982628132" className='flex items-center justify-evenly py-4 my-4 px-8 border border-cyan-200 rounded-xl hover:backdrop-brightness-110 ease-out duration-200 cursor-pointer decoration-[none] text-white'>
                                <img src={ASSET_PREFIX + 'img/svg/whatsapp-green.svg'} alt="" draggable='false' width='32px' height='32px' className='mr-2' />
                                <p className='w-full'>ATENDIMENTO POR <mark className="cor-3">WHATSAPP</mark></p>
                            </a>
                        </Container>
                        <Container className='w-[70%] max-[820px]:!w-full ml-8 max-[820px]:!ml-0'>
                            <Collapsible title='Quando vai ser o evento?'>
                                <p>Dias 13 e 14 de setembro de 2024. Em ambos os dias, as atividades acontecerão das 8h às 18h.</p>
                            </Collapsible>
                            <Collapsible title='Onde será o evento?'>
                                <p>
                                    O evento será realizado no Hotel Mercure São José dos Campos, na torre II.
                                    <br /><br />
                                    Endereço: Avenida Dr - Av. Jorge Zarur, 81 - Torre II - Jardim Apolo, São José dos Campos - SP, 12243-081
                                </p>
                            </Collapsible>
                            <Collapsible title='Para quem é o evento?'>
                                <p>Para profissionais da saúde que desejam ter uma experiência incrível e ter acesso a todo o conhecimento necessário para se destacar como profissional.</p>
                            </Collapsible>
                            <Collapsible title='Como recebo meu ingresso?'>
                                <p>O ingresso será enviado para o seu e-mail. Será necessário que você mostre seu ingresso na entrada do evento. Por isso, no momento da compra, informe um e-mail ao qual você tenha acesso. Você poderá apresentar o seu ingresso de forma impressa ou digital, por meio de um print.</p>
                            </Collapsible>
                            <Checkout/>
                        </Container>
                    </ContentDefault>
                </Content>
            </Section>

            <Section id='evt-footer'>
                <div className='w-36 m-auto text-center'>
                    <img src={ASSET_PREFIX + 'img/svg/logo_palmilhando.svg'} alt='' draggable='false' />
                </div>
            </Section>

        </main>
    );
}