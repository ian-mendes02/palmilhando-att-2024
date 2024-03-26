'use client';
import {useEffect, useRef, useMemo, useState} from 'react';
import {Section, Content, Content_Default, Container, Wrapper, Badge} from '@/lib/modules/layout-components';
import {Button, List, Collapsible} from '@/lib/modules/ui-components';
import ValidationForm from './validation-form-2';
import '../../../public/css/globals.css';


export default function Main() {

    const defaultOccupation = '?';

    const defaultText = 'Teremos mais informações sobre esse palestrante em breve. Fique ligado!';

    //states

    const [viewportWidth, setViewportWidth] = useState(null);

    const [isPlaying, setIsPlaying] = useState(false);

    //hooks

    const isMobile = useMemo(() => {
        return viewportWidth <= 820;
    }, [viewportWidth]);

    const ASSET_PREFIX = useMemo(() => {
        return process.env.NEXT_PUBLIC_ASSET_PREFIX_GLOBAL;
    }, []);

    const defaultUserProfile = useMemo(() => {
        return ASSET_PREFIX + 'img/default_user.jpg';
    }, []);

    const iframeRef = useRef(null);

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
        const handleClickOutside = (event) => {
            if (iframeRef.current && !iframeRef.current.contains(event.target)) {
                setIsPlaying(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    //components

    const Schedule = (props) => {
        const DefaultHeader = () => {
            return (
                <tr className='cor-5 scale-[102%] shadow-md rounded-lg'>
                    <th colSpan='3' className='w-[25%] bg-[linear-gradient(60deg,#d6edff,#ffffff)] p-6 rounded-lg'><span className='flex justify-between items-center text-xl font-bold'>{props.title}<span className='text-xl font-bold'>&#43;</span></span></th>
                </tr>
            );
        };
        const TableHeader = () => {
            return (
                <tr className='cor-5 rounded-lg shadow-md scale-[102%]'>
                    <th className='w-[25%] bg-[#d6edff] p-4 rounded-tl-lg rounded-bl-lg max-[820px]:hidden'>HORÁRIO</th>
                    <th className='w-[25%] bg-[#d6edff] p-4 rounded-tl-lg rounded-bl-lg min-[820px]:hidden'><img src={ASSET_PREFIX + 'img/svg/clock.svg'} width='24px' height='24px' alt='' draggable='false' className='m-auto' /></th>
                    <th className='bg-[#d6edff] p-6 max-[820px]:hidden'>TEMA</th>
                    <th className='bg-[#d6edff] p-6 min-[820px]:hidden'><img src={ASSET_PREFIX + 'img/svg/bulb.svg'} width='24px' height='24px' alt='' draggable='false' className='m-auto' /></th>
                    <th className='w-[25%] bg-[#d6edff] p-4 rounded-tr-lg rounded-br-lg max-[820px]:hidden'>PALESTRANTE</th>
                    <th className='w-[25%] bg-[#d6edff] p-4 rounded-tr-lg rounded-br-lg min-[820px]:hidden'><img src={ASSET_PREFIX + 'img/svg/talk.svg'} width='24px' height='24px' alt='' draggable='false' className='m-auto' /></th>
                </tr>
            );
        };
        const [titleContent, setTitleContent] = useState(<DefaultHeader />);
        const scheduleRef = useRef(null);
        const toggle_collapse = (container) => {
            function toggleExpand(content) {
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                    setTitleContent(<DefaultHeader />);
                } else {
                    content.style.maxHeight = (content.scrollHeight * 3) + 'px';
                    setTitleContent(<TableHeader />);
                }
            }
            container.nextElementSibling.classList.toggle('active');
            toggleExpand(container.nextElementSibling);
        };
        return (
            <div className='schedule mx-auto my-8 w-[80%] max-[820px]:w-full select-none p-2' id={props.id}>
                <table
                    className='table-fixed border-collapse w-full cursor-pointer hover:brightness-110 duration-100 ease max-[820px]:text-xs'
                    ref={scheduleRef}
                    onClick={() => toggle_collapse(scheduleRef.current)}
                >
                    <thead>{titleContent}</thead>
                </table>
                <div className='max-h-0 overflow-hidden duration-500 ease w-full'>
                    <table className='content w-full border-collapse max-[820px]:text-xs'>
                        <tbody>{props.children}</tbody>
                    </table>
                </div>
            </div>
        );
    };

    const IframeContent = () => {
        return <iframe src='https://www.youtube.com/embed/4Q2rD4ZH31M?si=DcurTOerXO3Rtc8o&autoplay=1&rel=0' allow='autoplay; picture-in-picture; web-share' allowFullScreen className='outline-none w-full h-full rounded-md'></iframe>;
    };

    const Thumbnail = () => {
        return (
            <div className='w-full h-full' onClick={() => setIsPlaying(true)}>
                <img src={ASSET_PREFIX + 'img/thumbnail_video_apresentacao.webp'} alt='' draggable='false' className='w-full h-auto rounded-lg' />
                <img src={ASSET_PREFIX + 'img/svg/play_button.svg'} width={64} height={64} alt='' draggable='false' className='absolute-center opacity-80 hover:opacity-100 duration-200 ease' />
            </div>
        );
    };

    const Palestrante = ({children = null, src = undefined, name = undefined, occupation = undefined}) => {
        const [isActive, setIsActive] = useState(false);
        const [maxHeight, setMaxHeight] = useState(96);
        const containerRef = useRef(null);
        const padding = 16;

        useEffect(() => {
            var content = containerRef.current.children;
            var titleHeight = content[0].clientHeight;
            var descriptionHeight = content[1].clientHeight;
            var totalHeight = titleHeight + descriptionHeight + padding;
            isActive ? setMaxHeight(totalHeight) : setMaxHeight(titleHeight + padding);
        }, [isActive]);

        return (
            <div className='m-2 w-80'>
                <div
                    className='p-2 rounded-lg shadow-md bg-[linear-gradient(60deg,#d6edff,#ffffff)] light hover:scale-105 hover:brightness-95 duration-200 ease-out w-full h-full overflow-hidden'
                    onClick={() => setIsActive(!isActive)}
                    style={{height: maxHeight}}
                >
                    <div className="flex flex-col justify-between relative duration-300 ease-out" ref={containerRef}>
                        <div className='speaker-header w-full flex items-center justify-start px-2'>
                            <div className='speaker-profile w-20 aspect-square left-0 bottom-0 rounded-full mr-4'>
                                <img
                                    src={src || defaultUserProfile}
                                    className='w-full h-full rounded-[inherit]'
                                    alt=''
                                    draggable='false'
                                />
                            </div>
                            <div className='speaker-title'>
                                <h2 className='font-semibold text-xl'>{name}</h2>
                                <h3 className='italic opacity-80 text-sm'>{occupation || defaultOccupation}</h3>
                            </div>
                        </div>
                        <div className='speaker-description duration-300 ease-out p-2'>
                            <div className="divider left"></div>
                            <div>{children || defaultText}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const Depoimento = ({children = null, src = undefined, title = undefined, occupation = undefined}) => {
        return (
            <div className='m-2 w-96 text-white'>
                <div className='p-4 rounded-xl shadow-md bg-[linear-gradient(60deg,var(--cor-4),var(--cor-5))] w-full h-full border-b-8 border-t border-b-[#0e1b2c] border-t-cyan-200'>
                    <div className="flex flex-col justify-between">
                        <div className='depoimento-header w-full flex items-center justify-start p-4'>
                            <div className='depoimento-profile w-20 aspect-square left-0 bottom-0 rounded-full mr-4'>
                                <img src={src || defaultUserProfile} className='w-full h-full rounded-[inherit]' alt='' draggable='false' />
                            </div>
                            <div className='depoimento-title'>
                                <h2 className='font-semibold text-xl'>{title}</h2>
                                <h3 className='italic opacity-80'>{occupation || defaultOccupation}</h3>
                            </div>
                        </div>
                        <div className='depoimento-description'>
                            <div className="divider left"></div>
                            <p>{children || defaultText}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const Atividade = ({children, img, name, description, link}) => {
        return (
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
                            {link && <a href={link} className='text-white !underline'>Saiba mais <i className="fa-solid fa-arrow-up-right-from-square text-xs" aria-hidden="true"></i></a>}
                        </Container>
                    </div>
                </div>
            </div>
        );
    };

    //handler functions


    function $(el) {return document.querySelector(el);};

    //main

    return (
        <div>

            <div className='absolute top-0 left-0 w-screen h-auto overflow-clip mix-blend-soft-light bg-fade-bottom'>
                <img src={ASSET_PREFIX + 'img/[evento]_header_bg.webp'} alt='' draggable='false' className='w-full h-auto' />
            </div>

            {!isMobile && (<Section id='topnav' className='py-8'>
                <Content>
                    <Content_Default className='flex justify-between'>
                        <Container className='h-8 w-auto max-[820px]:mx-auto max-[820px]:h-12'>
                            <img src={ASSET_PREFIX + 'img/svg/logo_palmilhando.svg'} alt='' draggable='false' className='h-full w-auto' />
                        </Container>
                        <Wrapper id='navlinks' className='max-[820px]:hidden'>
                            <List className='flex items-center'>
                                <li className='font-bold my-auto'>HOME</li>
                                <li className='font-bold my-auto'>ASSINE O PALIMILHANDO</li>
                                <li className='font-bold my-auto'>CONTATO</li>
                                <li>
                                    <span
                                        className='font-bold bg-[linear-gradient(to_right,var(--grad-1))] bg-[length:150%] rounded-full shadow-md m-auto p-3 cursor-pointer hover:brightness-110 hover:scale-[102%] duration-200'
                                        onClick={() => $('#evt-valor').scrollIntoView({block: 'center'})}
                                    >GARANTA SEU LUGAR</span>
                                </li>
                            </List>
                        </Wrapper>
                    </Content_Default>
                </Content>
            </Section>)}

            <Section id='evt-header' className='min-[821px]:pt-4 max-[820px]:pb-0'>
                <Content>
                    <Content_Default className='flex justify-center items-end max-[820px]:text-center max-[820px]:flex-col max-[820px]:items-center'>
                        <Container className='h-full w-[32rem] max-[820px]:w-[80%] max-[426px]:w-full p-8 max-[820px]:p-2'>
                            <Container>
                                <img src={ASSET_PREFIX + 'img/svg/encontro_logo_3.svg'} alt='' draggable='false' />
                            </Container>
                            <div className="divider left max-[820px]:hidden"></div>
                            <div className="divider min-[821px]:hidden"></div>
                            <Container>
                                <p className='text-xl'>Viva a experiência do empreendedorismo e da prática baseada em evidência para se destacar no mercado de trabalho.</p>
                            </Container>
                            <Container>
                                <Wrapper className="items-center flex-nowrap w-max m-2">
                                    <div className='w-12 h-12 mr-4 bg-sky-900 rounded-full flex items-center justify-center shadow-md'>
                                        <img src={ASSET_PREFIX + 'img/svg/map_pin.svg'} alt='' draggable='false' className='w-[40%]' />
                                    </div>
                                    <h2 className='font-extralight max-[820px]:text-base'>São José dos Campos - SP</h2>
                                </Wrapper>
                                <Wrapper className="items-center flex-nowrap w-max m-2">
                                    <div className='w-12 h-12 mr-4 bg-sky-900 rounded-full flex items-center justify-center shadow-md'>
                                        <img src={ASSET_PREFIX + 'img/svg/calendar.svg'} alt='' draggable='false' className='w-1/2' />
                                    </div>
                                    <h2 className='font-extralight max-[820px]:text-base'>13 e 14 de Setembro</h2>
                                </Wrapper>
                                <Button className='my-4 w-full' onClick={() => $('#evt-valor').scrollIntoView({block: 'center'})}>GARANTA SUA VAGA</Button>
                            </Container>
                        </Container>
                        <Container className='h-full w-[50%] max-[820px]:!w-full p-8 max-[820px]:p-2'>
                            <p className='text-center text-sm'>CONFIRA AQUI COMO FOI NOSSO ÚLTIMO ENCONTRO</p>
                            <br />
                            <div className='w-full aspect-video relative shadow-md rounded-lg cursor-pointer bg-sky-700' ref={iframeRef}>
                                {isPlaying ? <IframeContent /> : <Thumbnail />}
                            </div>
                        </Container>
                    </Content_Default>
                </Content>
            </Section>

            <Section id='evt-info'>
                <Content>
                    <Content_Default>
                        <Container>
                            <h1 className='text-3xl text-left w-9/12 mx-8 max-[820px]:text-xl max-[820px]:text-center max-[820px]:!w-full max-[820px]:mx-auto font-bold grad-text my-4 px-4'>NÓS QUEREMOS TE FAZER UM CONVITE</h1>
                            <div className="divider"></div>
                        </Container>
                        <Wrapper className='flex-nowrap max-[820px]:flex-col mb-8 justify-evenly'>
                            <Container className='p-4 w-[36rem] max-[820px]:w-full'>
                                <p>O evento anual <mark className='cor-2 font-semibold'>Palmilhas e Ciência Aplicada</mark> foi pensado exclusivamente para que profissionais e estudantes da saúde possam se dedicar à utilização de <mark className="cor-2 font-semibold">ciência na prática de palmilhas</mark> e ao desenvolvimento dos negócios na área de saúde.</p>
                                <br />
                                <p>São <mark className="cor-2 font-semibold">dois dias inteiros em contato direto com grandes profissionais do mercado</mark>, para trocar informações, ter uma experiência única e levar consigo muito conteúdo, lembranças e novas expectativas profissionais.</p>
                                <br />
                                <p>É para quem quer <mark className="cor-2 font-semibold">alcançar mais</mark>. Não só em relação à prescrição e confecção de palmilhas, mas também sobre como <mark className="cor-2 font-semibold">ter um negócio estruturado e utilizar as palmilhas como parte importante no faturamento de clínicas e consultórios</mark>.</p>
                            </Container>
                            <Container className='p-4 w-[36rem] max-[820px]:w-full'>
                                <p>O mercado está mudando e atualmente existem dois tipos de profissionais da saúde: os que buscam <mark className="cor-2 font-semibold">se desenvolver tanto tecnicamente quanto em questão empresarial</mark> e os que <mark className="cor-2 font-semibold">acham que está tudo bem continuar como está</mark>. E eu tenho uma notícia: <mark className="cor-2 font-semibold">o segundo tipo vai desaparecer em alguns anos.</mark></p>
                                <br />
                                <p>Por isso, quero que você entenda que <mark className="cor-2 font-semibold">não existe concorrência para quem decide ser bom.</mark></p>
                            </Container>
                        </Wrapper>
                    </Content_Default>
                </Content>
            </Section>

            <Section className='bg-[radial-gradient(circle_at_center,#1E3050,#121e31)] border-t border-white z-20 shadow-lg'>
                <Content>
                    <Content_Default>
                        <Container>
                            <h2 className='text-3xl text-left w-9/12 mx-8 max-[820px]:text-xl max-[820px]:!text-center max-[820px]:!w-full max-[820px]:mx-auto font-bold grad-text my-4 px-4'>PROFISSIONAL DA SAÚDE, QUANTO VOCÊ TEM INVESTIDO NO SEU CONHECIMENTO?</h2>
                            <div className="divider"></div>
                        </Container>
                        <Wrapper className='flex-nowrap max-[820px]:flex-col justify-evenly'>
                            <Container className='p-4 w-[36rem] max-[820px]:w-full'>
                                <p>Investir no conhecimento é uma das chances para mudar o mundo, especialmente o seu e de seus pacientes. <mark className="cor-2 font-semibold">Ele é capaz de elevar a sensibilidade das pessoas quanto à identificação resolução de problemas</mark>.</p>
                                <br />
                                <p>Além disso, é o responsável por promover constantes mudanças positivas na qualidade de vida das pessoas. <mark className="cor-2 font-semibold">Pense: como eram os tratamentos em 2004 e agora em 2024?</mark></p>
                            </Container>
                            <Container className='p-4 w-[36rem] max-[820px]:w-full'>
                                <p>Entretanto, <mark className="cor-2 font-semibold">ele não é estático</mark>. Com o passar do tempo, fruto de novas descobertas e novos acontecimentos, toda a construção teórica que se tinha antes, vai se transformando.</p>
                                <br />
                                <p>Sendo assim, <mark className="cor-2 font-semibold">é imprescindível que profissionais invistam o seu tempo em estudar e trocar experiências</mark>.</p>
                            </Container>
                        </Wrapper>
                        <button
                            className='font-bold text-xl max-[820px]:text-base shadow-md w-fit py-4 px-16 mx-auto mt-8 rounded-lg max-[820px]:max-w-[340px] grad-alt hover:scale-105 hover:brightness-105 duration-200'
                            onClick={() => $('#evt-valor').scrollIntoView({block: `${viewportWidth <= 820 ? 'start' : 'center'}`})}>
                            QUERO INVESTIR NO MEU CONHECIMENTO
                        </button>
                    </Content_Default>
                </Content>
            </Section>

            <Section id="evt-prof" className='bg-[radial-gradient(circle_at_center,#ffffff,rgb(241_245_249))] cor-4'>
                <Content>
                    <Content_Default>
                        <Container className="text-center mx-auto w-9/12 max-[820px]:!w-full mb-8">
                            <h1 className='font-bold text-3xl cor-5 mb-2 max-[820px]:!text-2xl'>A PROFISSIONALIZAÇÃO É O ÚNICO CAMINHO</h1>
                            <h2 className='mx-auto w-9/12 max-[820px]:!w-full text-base font-light'>Não importa o seu tempo de mercado: o <mark className="cor-1">Encontro Anual Palmilhas e Ciência Aplicada</mark> é o lugar perfeito para você ter ainda mais resultados.</h2>
                        </Container>
                        <Wrapper className='flex-nowrap max-[820px]:flex-col items-center justify-center light'>
                            <Container className='w-80 m-2 p-2 rounded-lg shadow-md bg-[linear-gradient(60deg,#d6edff,#ffffff)] hover:scale-105 duration-200 ease-out'>
                                <span className='flex w-full justify-between items-center font-bold cor-1 text-lg'>
                                    <h2>Se é iniciante</h2>
                                    <i className="fa-solid fa-seedling text-3xl grad-text" aria-hidden="true"></i>
                                </span>
                                <div className="divider left"></div>
                                <p className='cor-5'>Vai descobrir como ser um profissional acima da média desde o início da jornada</p>
                            </Container>
                            <Container className='w-80 m-2 p-2 rounded-lg shadow-md bg-[linear-gradient(60deg,#d6edff,#ffffff)] hover:scale-105 duration-200 ease-out'>
                                <span className='flex w-full justify-between items-center font-bold cor-1 text-lg'>
                                    <h2>Se já executa</h2>
                                    <i className="fa-solid fa-gears text-3xl grad-text" aria-hidden="true"></i>
                                </span>
                                <div className="divider left"></div>
                                <p className='cor-5'>Vai conhecer novas formas de melhorar ainda mais seu trabalho e poder cobrar mais pelo seu serviço</p>
                            </Container>
                            <Container className='w-80 m-2 p-2 rounded-lg shadow-md bg-[linear-gradient(60deg,#d6edff,#ffffff)] hover:scale-105 duration-200 ease-out'>
                                <span className='flex w-full justify-between items-center font-bold cor-1 text-lg'>
                                    <h2>Se já é avançado</h2>
                                    <i className="fa-solid fa-rocket text-3xl grad-text" aria-hidden="true"></i>
                                </span>
                                <div className="divider left"></div>
                                <p className='cor-5'>Vai aumentar o seu networking, fazer parcerias e ter contato com grandes profissionais do país.</p>
                            </Container>
                        </Wrapper>
                    </Content_Default>
                </Content>
            </Section>

            <Section id='evt-local' className='min-[821px]:!py-0 max-[820px]:py-16 border-b-2 border-white bg-[linear-gradient(45deg,var(--cor-4),var(--cor-5))] duration-200 ease-out overflow-hidden'>
                <Content className='relative z-20'>
                    <Content_Default>
                        <Wrapper className='!flex-nowrap max-[820px]:flex-col justify-start items-center h-[420px] max-[820px]:h-auto w-9/12 max-[820px]:!w-full mx-auto'>
                            <Container className='w-[32rem] max-[820px]:w-full p-4'>
                                <Container className='mb-2'>
                                    <h2 className='grad-text font-bold text-3xl mb-2'>QUANDO E ONDE?</h2>
                                    <div className="divider left"></div>
                                </Container>
                                <Wrapper className="items-center flex-nowrap w-max m-2 max-[820px]:w-full">
                                    {!isMobile && (
                                        <div className='w-12 h-12 mr-4 bg-[var(--cor-1)] rounded-full flex items-center justify-center shadow-md'>
                                            <img src={ASSET_PREFIX + 'img/svg/calendar.svg'} alt='' draggable='false' className='w-1/2' />
                                        </div>
                                    )}
                                    <h2 className='font-extralight text-base'>
                                        {isMobile && <i className="fa-solid fa-calendar-days mr-2" aria-hidden="true"></i>}
                                        <strong>13 e 14 de Setembro</strong><br />
                                        Sexta-feira e sábado
                                    </h2>
                                </Wrapper>
                                <Wrapper className="items-center flex-nowrap w-max m-2 max-[820px]:w-full">
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
                                        <span className='inline underline font-light cursor-pointer text-sm' onClick={() => $('#evt-como-chegar').scrollIntoView({block: 'center'})}>Como chegar?</span>
                                    </h2>
                                </Wrapper>
                            </Container>
                            <Container className='w-[32rem] p-4 aspect-video max-[820px]:w-full max-[820px]:p-0 relative'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14668.122128172752!2d-45.90516370000002!3d-23.205557899999988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc3589bc020f0d%3A0x96bc968352c2c899!2sMercure%20Sao%20Jose%20dos%20Campos!5e0!3m2!1sen!2sbr!4v1710790411443!5m2!1sen!2sbr" className='outline-none border-none w-full h-full absolute rounded-lg' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </Container>
                        </Wrapper>
                    </Content_Default>
                </Content>
            </Section>

            <Section id='evt-palestrantes' className='shadow-lg bg-[radial-gradient(circle_at_center,#ffffff,rgb(241_245_249))] cor-4 max-[820px]:!py-4 light'>
                <Content>
                    <Content_Default>
                        <Container className='w-9/12 max-[820px]:!w-full my-4 px-4 mx-auto'>
                            <h2 className='text-2xl text-center max-[820px]:text-xl font-bold grad-text mb-2'> CONHEÇA OS PALESTRANTES DE 2024</h2>
                            <p className='text-center text-sm'>Clique em um palestrante para ver mais informações</p>
                            <div className="divider"></div>
                        </Container>
                        <Wrapper className='items-center justify-center'>
                            <Palestrante src={ASSET_PREFIX + 'img/palestrantes-2024/andre-mendes.webp'} name='André Mendes' occupation='Avaliação e raciocínio'>
                                <p>Fisioterapeuta, especialista em Fisioterapia Ortopédica, Mestre e doutorando em Fisioterapia, sócio fundador da Podoshop e do Palmilhando. Autor do livro Palmilhas Terapêuticas: ciência e prática clínica.</p>
                            </Palestrante>

                            <Palestrante src={ASSET_PREFIX + 'img/palestrantes-2024/felipe-barcelos.webp'} name='Felipe Barcelos' occupation='Pediatria'>
                                <p>Médico ortopedista com subespecialização em ortopedia pediátrica e doenças neuromusculares pelo Ensino Einstein. Médico do corpo clínico do Hospital Israelita Albert Einstein.</p>
                            </Palestrante>

                            <Palestrante /* src={ASSET_PREFIX + 'img/palestrantes-2024/brenda-braga.webp'} */ name='Brenda Braga' occupation='Pediatria'>
                                <p>Fisioterapeuta ortesista, especialista em órteses suropodálicas. Empreendedora e sócia da Gente Miúda Kids Shoes.</p>
                            </Palestrante>

                            <Palestrante /* src={ASSET_PREFIX + 'img/palestrantes-2024/maria-lucoveis.webp'} */ name='Maria Lucóveis' occupation='Pés em risco'>
                                <p>Fisioterapeuta e Enfermeira Estomaterapeuta, Mestre em Ciências pela Universidade Federal de São Paulo, Master em pé diabético pela Universidad Complutense de Madrid, Doutoranda em Ciências da Reabilitação pela Universidade de São Paulo. Sociaproprietária da Bem Estar dos Pés- Serviços de Enfermagem.</p>
                            </Palestrante>

                            <Palestrante src={ASSET_PREFIX + 'img/palestrantes-2024/leonardo-signorini.webp'} name='Leonardo Signorini' occupation='Esportes'>
                                <p>Fisioterapeuta, especialista em Fisioterapia Ortopédica e Esportiva. Dono da Dr pés palmilhas.</p>
                            </Palestrante>

                            <Palestrante src={ASSET_PREFIX + 'img/palestrantes-2024/george-sabino.webp'} name='George Sabino' occupation='Esportes'>
                                <p>Fisioterapeuta, Doutor em Ciências da Reabilitação UFMG, Pós doutorando em Ciências da Saúde CMMG. Sócio fundador da Propulsão.</p>
                            </Palestrante>

                            <Palestrante src={ASSET_PREFIX + 'img/palestrantes-2024/natalia-faro.webp'} name='Natália Faro' occupation='Empreendedorismo'>
                                <p>Fisioterapeuta, empreendedora há 15 anos, influenciadora e fundadora da Verticalle - Palmilhas. Experiência de 7 anos com palmilhas personalizadas e criadora das palmilhas dupla face para saltos.</p>
                            </Palestrante>

                            <Palestrante src={ASSET_PREFIX + 'img/palestrantes-2024/mariana-pereira.webp'} name='Mariana Pereira' occupation='Marketing e Estratégia'>
                                <p>Estrategista digital e copywriter da Podoshop e do Palmilhando.</p>
                            </Palestrante>

                            <Palestrante src={ASSET_PREFIX + 'img/palestrantes-2024/jordache-murta.webp'} name='Jordache Murta' occupation='Marketing e Estratégia'>
                                <p>Publicitário, especialista em marketing digital. Há 20 anos trabalhando com marketing, atua em estratégias digitais para construção de autoridade, vendas e captação de novos clientes de forma orgânica.</p>
                            </Palestrante>

                            <Palestrante src={ASSET_PREFIX + 'img/palestrantes-2024/myrlla-moreira.webp'} name='Myrlla Moreira' occupation='Financeiro'>
                                <p>Fisioterapeuta formada há 11 anos, empreendedora, especialista em coluna vertebral pela Santa Casa de São Paulo. Criadora do curso on-line de capacitação Escoliose na Prática.</p>
                            </Palestrante>

                            <Palestrante src={ASSET_PREFIX + 'img/palestrantes-2024/clayton-fuzetti.webp'} name='Clayton Fuzetti' occupation='Negócios'>
                                <p>Fisioterapeuta, especialista em Fisioterapia Ortopédica, MBA em gestão empresarial. Sócio fundador da Podoshop e do Palmilhando.</p>
                            </Palestrante>
                        </Wrapper>
                    </Content_Default>
                </Content>
            </Section>

            <Section id='evt-valor' className='bg-[var(--cor-4)] overflow-clip'>

                <Content>
                    <Content_Default>
                        <Wrapper className='w-full items-center justify-center'>
                            <Container className='w-[426px] max-[426px]:w-full h-[512px] relative pt-16 mx-auto max-[820px]:mx-0 rounded-lg shadow-lg border border-cyan-100 bg-[color:#0e1b2c] bg-opacity-75 backdrop-blur-xl' id='location-info'>

                                <Badge className='border-2 border-cyan-100 !bg-[color:#0e1b2c]' width={20}>
                                    <img src={ASSET_PREFIX + 'img/svg/ticket.svg'} alt='' draggable='false' className='w-full aspect-square' />
                                </Badge>

                                <ValidationForm />

                            </Container>
                        </Wrapper>
                    </Content_Default>
                </Content>
            </Section>

            <Section id='evt-hoteis-parceiros' className='shadow-lg bg-[radial-gradient(circle_at_center,var(--cor-4),#0e1b2c)] cor-4 max-[820px]:!py-4 bg-[size:200%]'>
                <Content>
                    <Content_Default>

                    </Content_Default>
                </Content>
            </Section>

            <Section id='evt-como-chegar'>
                <Content>
                    <Content_Default>
                        <Container className='my-4'>
                            <h1>Como chegar?</h1>
                            <div className="divider left max-[820px]:hidden"></div>
                            <div className="divider min-[821px]:hidden"></div>
                        </Container>
                        <List className='check-light'>
                            <li>Aeroporto de São José dos Campos (a partir de 27 de março)</li>
                            <li>Aeroporto de Guarulhos</li>
                            <li>Rodoviária de São José dos Campos</li>
                            <li>Acesso pela via Dutra</li>
                        </List>
                    </Content_Default>
                </Content>
            </Section>

            <Section id='evt-o-que-fazer'>
                <Content>
                    <Content_Default>
                        <Container>
                            <h1>O que fazer na região?</h1>
                            <div className="divider left max-[820px]:hidden"></div>
                            <div className="divider min-[821px]:hidden"></div>
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
                    </Content_Default>
                </Content>
            </Section>

            <Section id='faq' className='bg-[linear-gradient(#0c6b96,#1E3050)]'>
                <Content>
                    <Content_Default className='flex justify-evenly max-[820px]:flex-col'>
                        <Container className='w-[30%] max-[820px]:!w-[90%] max-[820px]:mx-auto max-[820px]:mb-8 max-[820px]:text-center'>
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
                                <p>Dias 13 e 14 de setembro de 2024.</p>
                            </Collapsible>
                            <Collapsible title='Onde será o evento?'>
                                <p>
                                    O evento será realizado no Hotel Mercure São José dos Campos, na torre II.
                                    <br /><br />
                                    Endereço: Avenida Dr - Av. Jorge Zarur, 81 - Torre II - Jardim Apolo, São José dos Campos -
                                    SP, 12243-081
                                </p>
                            </Collapsible>
                            <Collapsible title='Para quem é o evento?'>
                                <p>Para profissionais da saúde que desejam ter uma experiência incrível e ter acesso a todo o conhecimento necessário para se destacar como profissional.</p>
                            </Collapsible>
                            <Collapsible title='Como recebo meu ingresso?'>
                                <p>O ingresso será enviado para o seu e-mail. Será necessário que você mostre seu ingresso na entrada do evento. Por isso, no momento da compra, informe um e-mail ao qual você tenha acesso. Você poderá apresentar o seu ingresso de forma impressa ou digital, por meio de um print.</p>
                            </Collapsible>
                            <button
                                className='font-bold text-xl max-[820px]:text-base shadow-md w-fit py-4 px-16 mx-auto mt-8 rounded-lg max-[820px]:max-w-[340px] grad-alt hover:scale-105 hover:brightness-105 duration-200'
                                onClick={() => $('#evt-valor').scrollIntoView({block: `${viewportWidth <= 820 ? 'start' : 'center'}`})}>
                                QUERO GARANTIR MEU INGRESSO
                            </button>
                        </Container>
                    </Content_Default>
                </Content>
            </Section>
        </div>
    );
}