'use client';
import {useEffect, useRef, useMemo, useState} from 'react';
import {Section, Content, Content_Default, Container, Wrapper, Loading} from '@/lib/modules/layout-components';
import {FloatingButton, ButtonContainer} from '@/lib/modules/floating-button';
import {List, Collapsible} from '@/lib/modules/ui-components';
import EventCountdown from '@/lib/modules/countdown-timer';
import CountdownMobile from '@/lib/modules/countdown-mobile';
import {TEInput} from 'tw-elements-react';
import '../../../public/css/globals.css';
import {_log} from '@/lib/modules/debug';


export default function Main() {

    const [pageLoading, setPageLoading] = useState(true);

    // Placeholder text for testing

    const debug = true;

    const remainingTickets = 10;

    const defaultOccupation = '?';

    const defaultText = 'Teremos mais informações em breve. Fique ligado!';

    const price = {
        lote1: {
            base: "590,00",
            discount: "450,00"
        },
        lote2: {
            base: "550,00",
            discount: "690,00"
        },
        lote3: {
            base: "790,00",
            discount: "650,00"
        }
    };

    const loteAtual = "lote1";

    const link = {
        discount: 'https://secure.doppus.com/pay/PBOJJ9ZMBOJJ9ZG9ZH000',
        default: 'https://secure.doppus.com/pay/PBOJJ9ZMBOJJ9ZG9Z355J'
    };

    const statusMessage = {
        error_no_input: <span className='text-red-500 text-center'>Parece que há campos em branco, tente novamente.</span>,
        server_error: <span className='text-orange-500 text-center font-light text-sm'>Servidor indisponível no momento, tente novamente mais tarde.</span>,
    };

    // states

    // const [isPlaying, setIsPlaying] = useState(false);

    // Stores viewport data for responsive features
    const [viewportWidth, setViewportWidth] = useState(null);

    const [validDiscount, setValidDiscount] = useState();

    const [requireValidation, setRequireValidation] = useState(true);

    const [showValidationPrompt, setShowValidationPrompt] = useState(false);

    const [discountMessage, setDiscountMessage] = useState(null);

    const [fullscreenContent, setFullscreenContent] = useState(null);

    const [modalActive, setModalActive] = useState(false);

    const [userName, setUserName] = useState('');

    const [userEmail, setUserEmail] = useState('');

    const [buttonText, setButtonText] = useState('ENVIAR');

    const [displayMessage, setDisplayMessage] = useState(null);

    // hooks

    /**
     * Determines if browser client is mobile based on viewport dimensions.
     * Updates on window resize.
     */
    const isMobile = useMemo(() => {
        return viewportWidth <= 820;
    }, [viewportWidth]);

    /**
     * Global asset prefix.
     * Can be changed in `.env`.
     */
    const ASSET_PREFIX = useMemo(() => {
        return process.env.NEXT_PUBLIC_ASSET_PREFIX_GLOBAL;
    }, []);

    // Placeholder user image
    const defaultUserProfile = useMemo(() => {
        return ASSET_PREFIX + 'img/default_user.jpg';
    }, []);

    const containerRef = useRef(null);

    const contentRef = useRef(null);

    // Google tag manager
    useEffect(() => {
        !function(e, t, a, n, g) {e[n] = e[n] || [], e[n].push({"gtm.start": (new Date).getTime(), event: "gtm.js"}); var m = t.getElementsByTagName(a)[0], r = t.createElement(a); r.async = !0, r.src = "https://www.googletagmanager.com/gtm.js?id=GTM-5TTGRP4", m.parentNode.insertBefore(r, m);}(window, document, "script", "dataLayer");
        document.title = 'Evento Palmilhas e Ciência Aplicada 2024';
    }, []);

    // Update viewport data on window resize
    useEffect(() => {
        function vw() {
            setViewportWidth(window.visualViewport.width);
        } vw();
        window.visualViewport.addEventListener('resize', vw);
        return () => window.visualViewport.removeEventListener('resize', vw);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (contentRef.current && !contentRef.current.contains(event.target)) {setModalActive(false);}
        };
        const preventScroll = (e) => {
            e.preventDefault();
        };
        if (modalActive) {
            document.getElementById('evento-video').pause();
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('wheel', preventScroll, {passive: false});
            document.addEventListener('touchmove', preventScroll, {passive: false});
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
                document.removeEventListener('wheel', preventScroll, {passive: false});
                document.removeEventListener('touchmove', preventScroll, {passive: false});
            };
        } else {
            document.getElementById('evento-video').play();
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('wheel', preventScroll, {passive: false});
            document.removeEventListener('touchmove', preventScroll, {passive: false});
        }
    }, [modalActive]);

    useEffect(() => {setDisplayMessage(null);}, [userName, userEmail]);

    useEffect(() => {
        var user = JSON.parse(localStorage.getItem("validated_user"));
        if (user) {
            setRequireValidation(false);
            setValidDiscount(user.discount_elegible);
            if (user.discount_elegible && user.valid_member) {
                setDiscountMessage("Desconto Palmilhando®");
            } else if (user.discount_elegible && user.valid_atendee) {
                setDiscountMessage("Desconto participante 2023");
            }
        } else {
            setShowValidationPrompt(true)
        }
    }, []);

    // components

    /* const Schedule = (props) => {
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
    }; */

    const VideoEvento = () => {
        return <iframe src='https://www.youtube.com/embed/4Q2rD4ZH31M?si=DcurTOerXO3Rtc8o&autoplay=1&rel=0' allow='autoplay; picture-in-picture; web-share' allowFullScreen className='outline-none aspect-video w-full max-[820px]:w-screen rounded-lg relative z-50'></iframe>;
    };

    /* const Depoimento = ({children = null, src = undefined, title = undefined, occupation = undefined}) => {
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
        }; */

    const Fullscreen = () => {
        return (
            <div className='bg-[rgb(0,0,0,0.5)] backdrop-blur-lg fixed z-[999] top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center px-32 py-[2.5%] max-[820px]:p-0' ref={containerRef}>
                <div className='w-full h-full flex items-center justify-center relative'>
                    <div className='h-auto w-full absolute-center' ref={contentRef}>
                        <div className='w-12 h-12 absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 max-[820px]:-translate-x-1/2 max-[820px]:-translate-y-full'>
                            <span className='w-full text-right cursor-pointer' onClick={() => setModalActive(false)}><i className="fa-regular fa-circle-xmark text-2xl" aria-hidden="true"></i></span>
                        </div>
                        <Loading width={32} />
                        {fullscreenContent}
                    </div>
                </div>
            </div>
        );
    };

    const Vantagem = ({children, icon}) => {
        return (
            <Container className='w-64 min-h-[10rem] m-2 p-4 rounded-3xl shadow-md bg-[var(--cor-4)] border-t-2 border-sky-900'>
                <Container className='items-center justify-start text-center'>
                    <div className='flex justify-center items-center bg-[var(--cor-1)] rounded-full w-12 h-12'>
                        <i className={icon} style={{fontSize: '1.5rem'}} aria-hidden="true"></i>
                    </div>
                    <div className="mt-4">{children}</div>
                </Container>
            </Container>
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
            <div className='m-2 w-96'>
                <div
                    className='p-2 rounded-2xl shadow-md bg-[#121e31] border-t-2 border-sky-900 hover:scale-105 hover:brightness-95 duration-200 ease-out w-full h-full overflow-hidden'
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

    const Atividade = ({children, img, name, description, link}) => {
        /* function toggleModal() {
            const content = <iframe src={link} className='w-full h-full rounded-[inherit]'></iframe>;
            setFullscreenContent(content);
            setModalActive(true);
        } */
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
                            {link && <a href={link} target='_blank' className='text-white !underline cursor-pointer'> Saiba mais <i className="fa-solid fa-arrow-up-right-from-square text-xs" aria-hidden="true"></i></a>}
                        </Container>
                    </div>
                </div>
            </div>
        );
    };

    const Ingressos = () => {
        return (
            <Wrapper className='flex-nowrap max-[820px]:flex-col'>

                <Container className='w-[28rem] max-[820px]:w-[80%] max-[426px]:w-full m-2 max-[820px]:mx-0'>
                    <div className="flex flex-col items-center p-4 border-t-2 border-sky-600 rounded-2xl bg-sky-900 shadow-lg h-max w-full relative">
                        <Wrapper className="flex-nowrap items-center justify-between w-full mb-4 max-[1024px]:flex-col max-[1024px]:items-start">
                            <Wrapper className='items-center justify-start flex-nowrap'>
                                <div className='w-10 h-10 mr-2 bg-primary-500 rounded-full flex items-center justify-center shadow-md'>
                                    <i className="fa-solid fa-globe text-2xl text-sky-100" aria-hidden="true"></i>
                                </div>
                                <h2 className='text-sky-100 font-bold' style={{fontSize: '150%'}}>ONLINE</h2>
                            </Wrapper>
                            <span className='bg-sky-100 rounded-full text-sky-800 px-4 py-1 h-fit max-[1024px]:my-4'>PREÇO ÚNICO</span>
                        </Wrapper>
                        <Container className='p-8 rounded-lg border-2 border-sky-700 items-center'>
                            <List className='text-left checklist'>
                                <li className='include'>Acesso ao evento AO VIVO</li>
                                <li className='include'>3 meses de acesso ao conteúdo gravado, planilhas e material de apoio</li>
                            </List>
                            <div className="divider"></div>
                            <h1 className='text-4xl font-semibold my-4'>R$249,90</h1>
                            <a
                                href='https://secure.doppus.com/pay/PBOJJ9ZMBOJJ9ZG9Z3O55'
                                className='font-bold text-xl max-[1024px]:text-base shadow-md w-fit py-2 px-4 rounded-full max-[820px]:max-w-[340px] bg-primary-500 hover:brightness-95 duration-200 my-4 text-center'>
                                GARANTA SUA VAGA
                            </a>
                        </Container>
                    </div>
                </Container>

                <Container className='w-[28rem] max-[820px]:w-[80%] max-[426px]:w-full m-2 relative max-[820px]:mx-0'>
                    <div className="flex flex-col items-center p-4 border-t-2 border-sky-800 rounded-2xl bg-primary-900 shadow-xl h-max w-full">
                        <Wrapper className="flex-nowrap items-center justify-between w-full mb-4 max-[1024px]:flex-col max-[1024px]:items-start">
                            <Wrapper className='items-center justify-start flex-nowrap'>
                                <div className='w-10 h-10 mr-2 bg-primary-500 rounded-full flex items-center justify-center shadow-md'>
                                    <i className="fa-solid fa-ticket text-2xl text-sky-100" aria-hidden="true"></i>
                                </div>
                                <h2 className='text-sky-100 font-bold' style={{fontSize: '150%'}}>PRESENCIAL</h2>
                            </Wrapper>
                            <span className='bg-sky-100 rounded-full text-sky-800 px-4 py-1 h-fit max-[1024px]:my-4'>1º LOTE</span>
                        </Wrapper>
                        <Container className='p-8 rounded-lg border-2 border-sky-900 items-center'>
                            <List className='text-left checklist'>
                                <li className='include'>Acesso presencial ao evento</li>
                                <li className='include'>3 meses de acesso ao conteúdo gravado, planilhas e material de apoio</li>
                                <li className='include'>Kit de brindes para participantes</li>
                                <li className='include'>Happy hour</li>
                            </List>
                            <div className="divider"></div>
                            {validDiscount
                                ? (
                                    <span className='inline-flex my-4 flex-col items-center'>
                                        <h1 className='text-2xl mr-2 line-through font-light'>R${price[loteAtual].base}</h1>
                                        <h1 className='text-4xl font-semibold grad-text grad-slide'>R${price[loteAtual].discount}</h1>
                                    </span>
                                )
                                : (
                                    <span className='my-4'>
                                        <h1 className='text-4xl font-semibold my-4'>R${price[loteAtual].base}</h1>
                                    </span>
                                )
                            }
                            <span className='text-center grad-text font-bold'>{discountMessage}</span>
                            <a
                                href={validDiscount ? link.discount : link.default}
                                className='font-bold text-xl max-[1024px]:text-base shadow-md w-fit py-2 px-4 rounded-full max-[820px]:max-w-[340px] bg-primary-500 hover:brightness-95 duration-200 my-4 text-center'>
                                GARANTA SUA VAGA
                            </a>
                        </Container>
                    </div>
                </Container>

                <Container className='w-[28rem] max-[820px]:w-[80%] max-[426px]:w-full m-2 max-[820px]:mx-0'>
                    <div className="flex flex-col items-center p-4 border-t-2 border-sky-800 rounded-2xl bg-[#121e31] shadow-lg h-max w-full relative">
                        <Wrapper className="flex-nowrap items-center justify-between w-full mb-4 max-[1024px]:flex-col max-[1024px]:items-start">
                            <Wrapper className='items-center justify-start flex-nowrap'>
                                <div className='w-10 h-10 mr-2 bg-sky-100 rounded-full flex items-center justify-center shadow-md'>
                                    <i className="fa-solid fa-gem text-2xl grad-text grad-slide" aria-hidden="true"></i>
                                </div>
                                <h2 className='grad-text grad slide font-bold' style={{fontSize: '150%'}}>ACESSO VIP</h2>
                            </Wrapper>
                            <span className='bg-sky-100 rounded-full text-sky-800 px-4 py-1 h-fit max-[1024px]:my-4'>PREÇO ÚNICO</span>
                        </Wrapper>
                        <Container className='p-8 rounded-lg border-2 border-sky-900 items-center'>
                            <List className='text-left checklist'>
                                <li className='include'>Acesso presencial ao evento</li>
                                <li className='include'>3 meses de acesso ao conteúdo gravado, planilhas e material de apoio</li>
                                <li className='include'>Kit de brindes para participantes</li>
                                <li className='include'>Happy hour</li>
                                <li className='include'><strong className='grad-text'>BÔNUS:</strong> Curso prático pré-evento com o André e o Clayton</li>
                            </List>
                            <div className="divider"></div>
                            <h1 className='text-4xl font-semibold my-4'>R$1200,00</h1>
                            <span className='text-center text-sm font-light'>Vagas restantes: {remainingTickets}/10</span>
                            <a
                                href='https://secure.doppus.com/pay/CBOJJ9ZF90J5BOK324999'
                                className='font-bold text-xl max-[1024px]:text-base shadow-md w-fit py-2 px-4 rounded-full max-[820px]:max-w-[340px] bg-primary-500 hover:brightness-95 duration-200 my-4 text-center'>
                                GARANTA SUA VAGA
                            </a>
                        </Container>
                    </div>
                </Container>

            </Wrapper>
        );
    };

    // handler functions

    const $ = el => document.querySelector(el);

    function toggleFullscreen(content) {
        setFullscreenContent(content);
        setModalActive(true);
    }

    async function handleVerification() {

        //Exits if name or email are blank

        if (userEmail == '' || userName == '') {
            setDisplayMessage(statusMessage.error_no_input);
            return;
        }

        try {
            setDisplayMessage(null);
            setButtonText(<Loading width={24} />);

            _log('Fetching user validation...', debug, "info");

            const validation = await fetch('https://palmilhasterapeuticas.com.br/evento2024/validation/validation.php', {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({
                    email: userEmail,
                    name: userName
                })
            })
                .then((res) => {return res.text();})

                .then((data) => {return JSON.parse(data);})

                .catch((reason) => {
                    setDisplayMessage(statusMessage.server_error);
                    _log(`Error: Unable to complete verification. \n ${reason}`, debug, "error");
                    return null;
                });

            validation && _log(validation, debug);

            if (validation && validation.membership_status && validation.atendee_status) {

                const membership_status = validation.membership_status;

                const atendee_status = validation.atendee_status;

                _log(`User member status: ${membership_status.is_valid} \nCode '${membership_status.status_message}';\nUser atendee status: ${atendee_status.is_valid} \nCode '${atendee_status.status_message}'`, debug, "info");

                setValidDiscount(membership_status.is_valid || atendee_status.is_valid);

                setRequireValidation(false);

                localStorage.setItem("validated_user", JSON.stringify({
                    discount_elegible: (membership_status.is_valid || atendee_status.is_valid),
                    valid_member: membership_status.is_valid,
                    valid_atendee: atendee_status.is_valid,
                    user_mail: userEmail,
                    user_name: userName
                }));

                if (membership_status.is_valid) {
                    setDiscountMessage("Desconto Palmilhando®");
                } else if (atendee_status.is_valid) {
                    setDiscountMessage("Desconto participante 2023");
                } else {
                    setDiscountMessage(null);
                }

                _log("Verification complete.", debug, "success");
            }

        } finally {
            setButtonText("ENVIAR");
        }
    }

    useEffect(() => {
        setPageLoading(false)
    },[])

    // main

    return (
        <div className='bg-[radial-gradient(circle_at_center,#1E3050,#121e31)]'>

            {pageLoading && <div className='fixed w-screen h-screen bg-primary-900 z-[999]'><Loading width={32} /></div>}

            <ButtonContainer buttonSize={56}>
                <FloatingButton link='https://wa.me//5512982628132' color='#25d366'>
                    <i className="fa-brands fa-whatsapp" aria-hidden='true'></i>
                </FloatingButton>
            </ButtonContainer>

            {!isMobile ? <EventCountdown /> : <CountdownMobile />}

            <Section id='evt-header' className='pt-24 pb-12 h-[90vh] max-[1024px]:h-[100vh] max-[820px]:h-[90vh] flex items-center overflow-hidden bg-[var(--cor-4)]'>

                <div className='absolute top-0 left-0 w-screen h-auto overflow-clip mix-blend-soft-light opacity-75 z-10 max-[820px]:h-full'>
                    <video autoPlay muted playsInline loop className='inline-block align-baseline w-full relative bottom-12 max-[820px]:bottom-0 max-[820px]:h-full max-[820px]:w-full object-cover bg-cover'>
                        <source src={ASSET_PREFIX + 'img/evt_banner.webm'} />
                    </video>
                </div>

                <Content className='relative z-20'>
                    <Content_Default className='flex flex-col justify-center items-center text-center'>
                        <Container className='h-full w-[48rem] max-[1024px]:w-[80%] max-[426px]:w-full items-center justify-center'>
                            <Container className='w-9/12'>
                                <img src={ASSET_PREFIX + 'img/svg/encontro_logo_3.svg'} alt='' draggable='false' />
                            </Container>
                            <div className="divider"></div>
                            <Container className='my-4'>
                                <p className='text-xl'>Viva a experiência do empreendedorismo e da prática baseada em evidência para se destacar no mercado de trabalho.</p>
                            </Container>
                            <Wrapper className='flex-nowrap max-[820px]:flex-col'>
                                <Wrapper className="items-center flex-nowrap w-max m-2">
                                    <div className='w-8 h-8 mr-4 bg-[var(--cor-1)] rounded-full flex items-center justify-center shadow-md'>
                                        <img src={ASSET_PREFIX + 'img/svg/calendar.svg'} alt='' draggable='false' className='w-1/2' />
                                    </div>
                                    <h2 className='font-light text-base'>13 e 14 de Setembro</h2>
                                </Wrapper>
                                <Wrapper className="items-center flex-nowrap w-max m-2">
                                    <div className='w-8 h-8 mr-4 bg-[var(--cor-1)] rounded-full flex items-center justify-center shadow-md'>
                                        <img src={ASSET_PREFIX + 'img/svg/map_pin.svg'} alt='' draggable='false' className='w-[40%]' />
                                    </div>
                                    <h2 className='font-light text-base'>Mercure São José dos Campos</h2>
                                </Wrapper>
                            </Wrapper>
                            <button
                                className='font-bold text-2xl max-[820px]:text-base shadow-md w-fit py-4 px-16 rounded-full max-[820px]:max-w-[340px] grad-alt hover:scale-105 hover:brightness-105 duration-200 my-4'
                                onClick={() => showValidationPrompt ? $('#compra-ingresso').scrollIntoView({block: 'center'}) : $('#evt-valor').scrollIntoView({block: 'start'})}>
                                GARANTA SUA VAGA
                            </button>
                        </Container>
                    </Content_Default>
                </Content>
            </Section>

            <Section id="evt-vantagens" className='border-t-2 border-sky-800 bg-[#121e31] py-4'>
                <Content>
                    <Content_Default>
                        <Wrapper className='flex-nowrap max-[820px]:flex-col items-center justify-center'>

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

                        </Wrapper>
                    </Content_Default>
                </Content>
            </Section>

            <div className='bg-[radial-gradient(circle_at_center,#1E3050,#121e31)] border-t-2 border-sky-800 z-20 shadow-lg'>
                <Section id="evt-prof">
                    <Content>
                        <Content_Default>
                            <Container className="text-center mx-auto w-9/12 max-[820px]:!w-full mb-8">
                                <h1 className='font-bold text-3xl grad-text mb-2 max-[820px]:!text-2xl'>A PROFISSIONALIZAÇÃO É O ÚNICO CAMINHO</h1>
                                <h2 className='mx-auto w-9/12 max-[820px]:!w-full text-base font-light'>Não importa o seu tempo de mercado: o <mark className="cor-7">Encontro Anual Palmilhas e Ciência Aplicada</mark> é o lugar perfeito para você ter ainda mais resultados.</h2>
                            </Container>
                            <Wrapper className='flex-nowrap max-[820px]:flex-col items-center justify-center'>
                                <Container className='w-96 min-h-40 m-2 p-4 rounded-3xl shadow-md bg-[#121e31] border-t-2 border-sky-900 max-[820px]:w-[96%]'>
                                    <span className='flex w-full justify-between items-center font-bold grad-text text-lg'>
                                        <h2>Se é iniciante</h2>
                                        <i className="fa-solid fa-seedling text-3xl grad-text" aria-hidden="true"></i>
                                    </span>
                                    <div className="divider left"></div>
                                    <p>Vai descobrir como ser um profissional acima da média desde o início da jornada</p>
                                </Container>
                                <Container className='w-96 min-h-40 m-2 p-4 rounded-3xl shadow-md bg-[#121e31] border-t-2 border-sky-900 max-[820px]:w-[96%]'>
                                    <span className='flex w-full justify-between items-center font-bold grad-text text-lg'>
                                        <h2>Se já tem experiência</h2>
                                        <i className="fa-solid fa-gears text-3xl grad-text" aria-hidden="true"></i>
                                    </span>
                                    <div className="divider left"></div>
                                    <p>Vai conhecer novas formas de melhorar ainda mais seu trabalho e poder cobrar mais pelo seu serviço</p>
                                </Container>
                                <Container className='w-96 min-h-40 m-2 p-4 rounded-3xl shadow-md bg-[#121e31] border-t-2 border-sky-900 max-[820px]:w-[96%]'>
                                    <span className='flex w-full justify-between items-center font-bold grad-text text-lg'>
                                        <h2>Se já é avançado</h2>
                                        <i className="fa-solid fa-rocket text-3xl grad-text" aria-hidden="true"></i>
                                    </span>
                                    <div className="divider left"></div>
                                    <p>Vai aumentar o seu networking, fazer parcerias e ter contato com grandes profissionais do país.</p>
                                </Container>
                            </Wrapper>
                        </Content_Default>
                    </Content>
                </Section>

                {/* <Section id='evt-info' className='border-t border-sky-300 bg-[radial-gradient(circle_at_center,#1E3050,#121e31)]'>
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
                </Section> */}

                {/* <Section id='evt-investir'>
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
                                onClick={() => $('#compra-ingresso').scrollIntoView({block: `${viewportWidth <= 820 ? 'start' : 'center'}`})}>
                                QUERO INVESTIR NO MEU CONHECIMENTO
                            </button>
                        </Content_Default>
                    </Content>
                </Section> */}
            </div>

            <Section id='evt-local' className='min-[821px]:!py-0 max-[820px]:py-16 bg-[linear-gradient(45deg,var(--cor-4),var(--cor-5))] duration-200 ease-out overflow-hidden'>
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
                                    </h2>
                                </Wrapper>
                                <Wrapper className='flex-nowrap items-center w-max m-2 max-[820px]:w-full'>
                                    <div className='w-12 h-12 aspect-square left-0 bottom-0 rounded-full mr-4'>
                                        <img src={ASSET_PREFIX + 'img/mercure.webp'} className='w-full h-full rounded-[inherit]' alt='' draggable='false' />
                                    </div>
                                    <div>
                                        <h2 className="font-extralight text-base">
                                            <strong>Em parceria com:</strong><br />
                                            Hotel Mercure São José dos Campos
                                        </h2>
                                        <span className='inline underline font-light cursor-pointer text-sm' onClick={() => $('#evt-como-chegar').scrollIntoView({block: 'center'})}>Como chegar?</span>
                                    </div>
                                </Wrapper>
                            </Container>
                            <Container className='w-[32rem] p-4 aspect-video max-[820px]:w-full max-[820px]:p-0 relative'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14668.122128172752!2d-45.90516370000002!3d-23.205557899999988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc3589bc020f0d%3A0x96bc968352c2c899!2sMercure%20Sao%20Jose%20dos%20Campos!5e0!3m2!1sen!2sbr!4v1710790411443!5m2!1sen!2sbr" className='outline-none border-none w-full h-full absolute rounded-lg' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </Container>
                        </Wrapper>
                    </Content_Default>
                </Content>
            </Section>

            <Section id='evt-palestrantes' className='shadow-lg bg-[radial-gradient(circle_at_center,#1E3050,#121e31)] max-[820px]:!py-4 border-y-2 border-sky-800 chuva-palmilhas overflow-hidden rounded-bl-3xl rounded-br-3xl'>
                <Content className='relative z-20'>
                    <Content_Default>
                        <Container className='w-9/12 max-[820px]:!w-full my-4 px-4 mx-auto'>
                            <h2 className='text-2xl text-center max-[820px]:text-xl font-bold grad-text mb-2'>CONHEÇA OS PALESTRANTES DE 2024</h2>
                            <p className='text-center text-sm'>Selecione um palestrante para ver mais informações</p>
                            <div className="divider"></div>
                        </Container>
                        <Wrapper className='items-start justify-center'>
                            <Palestrante src={ASSET_PREFIX + 'img/palestrantes-2024/andre-mendes.webp'} name='André Mendes' occupation='Avaliação e raciocínio'>
                                <p className='text-sm' style={{lineHeight: '24px'}}>Fisioterapeuta, especialista em Fisioterapia Ortopédica, Mestre e doutorando em Fisioterapia, sócio fundador da Podoshop e do Palmilhando. Autor do livro Palmilhas Terapêuticas: ciência e prática clínica.</p>
                            </Palestrante>

                            <Palestrante src={ASSET_PREFIX + 'img/palestrantes-2024/felipe-barcelos.webp'} name='Felipe Barcelos' occupation='Pediatria'>
                                <p className='text-sm' style={{lineHeight: '24px'}}>Médico ortopedista com subespecialização em ortopedia pediátrica e doenças neuromusculares pelo Ensino Einstein. Médico do corpo clínico do Hospital Israelita Albert Einstein.</p>
                            </Palestrante>

                            <Palestrante src={ASSET_PREFIX + 'img/palestrantes-2024/brenda-braga.webp'} name='Brenda Braga' occupation='Pediatria'>
                                <p className='text-sm' style={{lineHeight: '24px'}}>Fisioterapeuta ortesista, especialista em órteses suropodálicas. Empreendedora e sócia da Gente Miúda Kids Shoes.</p>
                            </Palestrante>

                            <Palestrante src={ASSET_PREFIX + 'img/palestrantes-2024/maria-lucoveis.webp'} name='Maria Lucóveis' occupation='Pés em risco'>
                                <p className='text-sm' style={{lineHeight: '24px'}}>Fisioterapeuta e Enfermeira Estomaterapeuta, Mestre em Ciências pela Universidade Federal de São Paulo, Master em pé diabético pela <i>Universidad Complutense de Madrid</i>, doutoranda em Ciências da Reabilitação pela Universidade de São Paulo. Socia proprietária da Bem Estar dos Pés - Serviços de Enfermagem.</p>
                            </Palestrante>

                            <Palestrante src={ASSET_PREFIX + 'img/palestrantes-2024/leonardo-signorini.webp'} name='Leonardo Signorini' occupation='Esportes'>
                                <p className='text-sm' style={{lineHeight: '24px'}}>Fisioterapeuta, especialista em Fisioterapia Ortopédica e Esportiva. Dono da Dr pés palmilhas.</p>
                            </Palestrante>

                            <Palestrante src={ASSET_PREFIX + 'img/palestrantes-2024/george-sabino.webp'} name='George Sabino' occupation='Esportes'>
                                <p className='text-sm' style={{lineHeight: '24px'}}>Fisioterapeuta, Doutor em Ciências da Reabilitação UFMG, Pós doutorando em Ciências da Saúde CMMG. Sócio fundador da Propulsão.</p>
                            </Palestrante>

                            <Palestrante src={ASSET_PREFIX + 'img/palestrantes-2024/natalia-faro.webp'} name='Natália Faro' occupation='Empreendedorismo'>
                                <p className='text-sm' style={{lineHeight: '24px'}}>Fisioterapeuta, empreendedora há 15 anos, influenciadora e fundadora da Verticalle - Palmilhas. Experiência de 7 anos com palmilhas personalizadas e criadora das palmilhas dupla face para saltos.</p>
                            </Palestrante>

                            <Palestrante src={ASSET_PREFIX + 'img/palestrantes-2024/mariana-pereira.webp'} name='Mariana Pereira' occupation='Marketing e Estratégia'>
                                <p className='text-sm' style={{lineHeight: '24px'}}>Estrategista digital e copywriter da Podoshop e do Palmilhando.</p>
                            </Palestrante>

                            <Palestrante src={ASSET_PREFIX + 'img/palestrantes-2024/jordache-murta.webp'} name='Jordache Murta' occupation='Marketing e Estratégia'>
                                <p className='text-sm' style={{lineHeight: '24px'}}>Publicitário, especialista em marketing digital. Há 20 anos trabalhando com marketing, atua em estratégias digitais para construção de autoridade, vendas e captação de novos clientes de forma orgânica.</p>
                            </Palestrante>

                            <Palestrante src={ASSET_PREFIX + 'img/palestrantes-2024/myrlla-moreira.webp'} name='Myrlla Moreira' occupation='Financeiro'>
                                <p className='text-sm' style={{lineHeight: '24px'}}>Fisioterapeuta formada há 11 anos, empreendedora, especialista em coluna vertebral pela Santa Casa de São Paulo. Criadora do curso on-line de capacitação Escoliose na Prática.</p>
                            </Palestrante>

                            <Palestrante src={ASSET_PREFIX + 'img/palestrantes-2024/clayton-fuzetti.webp'} name='Clayton Fuzetti' occupation='Negócios'>
                                <p className='text-sm' style={{lineHeight: '24px'}}>Fisioterapeuta, especialista em Fisioterapia Ortopédica, MBA em gestão empresarial. Sócio fundador da Podoshop e do Palmilhando.</p>
                            </Palestrante>
                        </Wrapper>
                    </Content_Default>
                </Content>
            </Section>

            <h1 className='grad-text text-center font-normal my-8'>Confira como foi nosso último encontro</h1>

            <Section id='evt-video' className='pt-24 pb-12 h-[90vh] max-[1024px]:h-[100vh] max-[820px]:h-[90vh] flex items-center overflow-hidden shadow-xl'>
                <div className='cursor-pointer' onClick={() => toggleFullscreen(<VideoEvento />)}>
                    {!modalActive && <div className='absolute-center w-20 h-20 z-30'>
                        <img src={ASSET_PREFIX + 'img/svg/play_button.svg'} alt='' draggable='false' className='w-full h-full' />
                    </div>}
                    <div className='absolute top-0 left-0 w-screen h-auto overflow-clip mix-blend-soft-light opacity-75 z-10 max-[820px]:h-full'>
                        <video id='evento-video' autoPlay muted playsInline loop className='inline-block align-baseline w-full max-[820px]:h-full max-[820px]:w-full object-cover bg-cover'>
                            <source src={ASSET_PREFIX + 'img/evt_banner.webm'} />
                        </video>
                    </div>
                </div>

                {modalActive && <Fullscreen>{fullscreenContent}</Fullscreen>}

            </Section>

            <Section id='evt-valor'>
                <Content>
                    <Content_Default>
                        {requireValidation && <div className='absolute top-0 left-0 w-full h-full backdrop-blur-md backdrop-brightness-75 z-30 flex items-center justify-center'>
                            {showValidationPrompt ? <Container className='rounded-2xl shadow-xl bg-[linear-gradient(65deg,#0b131f,#121e31)] bg-[size:300%] bg-right-top border-t-2 border-sky-800 w-[32rem] h-96 max-[820px]:h-[28rem] max-[820px]:w-[96%] p-8'>
                                <Container className='text-center items-center w-[96%]'>
                                    <h2 className='grad-text font-bold mb-2 relative z-40'>GARANTA SUA PARTICIPAÇÃO</h2>
                                    <p className='text-sm font-light'>Informe seus dados para liberar as opções de compra.</p>
                                </Container>
                                <div className="divider"></div>
                                <form id='compra-ingresso' onSubmit={(e) => e.preventDefault()}>
                                    <Container className='px-4'>
                                        <Container className="my-2">
                                            <TEInput type="text" id="user_name" onChange={(e) => setUserName(e.target.value)} label='Nome completo' className='text-white !outline-none'></TEInput>
                                        </Container>
                                        <Container className='my-2'>
                                            <TEInput type='email' id='user_email' onChange={(e) => setUserEmail(e.target.value)} label='Email' className='text-white !outline-none'></TEInput>
                                        </Container>
                                    </Container>
                                    <button
                                        onClick={handleVerification}
                                        className='font-semibold text-lg shadow-md w-[80%] py-2 px-8 rounded-full max-[820px]:max-w-[340px] bg-primary-500 hover:brightness-95 duration-200 my-4 text-center mx-auto relative h-12'>
                                        {buttonText}
                                    </button>
                                    <div className='my-2'>{displayMessage}</div>
                                </form>
                            </Container>
                            : <Loading width={64}/>}
                        </div>}
                        <div className='relative z-10'>
                            <Ingressos />
                        </div>
                    </Content_Default>
                </Content>
            </Section>

            <Section id='evt-como-chegar' className='border-y-2 border-sky-800 bg-[#121e31]'>
                <Content>
                    <Content_Default>
                        <Container className='my-4'>
                            <h1 className='grad-text font-normal'>Como chegar?</h1>
                            <div className="divider left max-[820px]:hidden"></div>
                            <div className="divider min-[821px]:hidden"></div>
                        </Container>
                        <List className='checklist'>
                            <li className='include'>Aeroporto de São José dos Campos (a partir de 27 de março)</li>
                            <li className='include'>Aeroporto de Guarulhos</li>
                            <li className='include'>Rodoviária de São José dos Campos</li>
                            <li className='include'>Acesso pela via Dutra</li>
                        </List>
                    </Content_Default>
                </Content>
            </Section>

            <Section id='evt-o-que-fazer'>
                <Content className='relative z-30'>
                    <Content_Default>
                        <Container>
                            <h1 className='grad-text font-normal text-center'>O que fazer na região?</h1>
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
                    </Content_Default>
                </Content>
            </Section>

            <Section id='faq'>
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
                                className='font-bold text-xl max-[820px]:text-base shadow-md w-fit py-4 px-16 mx-auto mt-8 rounded-full max-[820px]:max-w-[340px] grad-alt hover:scale-105 hover:brightness-105 duration-200'
                                onClick={() => showValidationPrompt ? $('#compra-ingresso').scrollIntoView({block: 'center'}) : $('#evt-valor').scrollIntoView({block: 'start'})}>
                                QUERO GARANTIR MEU INGRESSO
                            </button>
                        </Container>
                    </Content_Default>
                </Content>
            </Section>

            <Section id='evt-footer'>
                <div className='w-36 m-auto text-center'>
                    <img src={ASSET_PREFIX + 'img/svg/logo_palmilhando.svg'} alt='' draggable='false' />
                </div>
            </Section>

        </div>
    );
}