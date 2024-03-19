'use client';
import {useEffect, useRef, useMemo, useState} from 'react';
import {Section, Content, Content_Default, Container, Wrapper, Badge, Loading} from '@/lib/modules/layout-components';
import {Button, List, Collapsible} from '@/lib/modules/ui-components';
import {validateAtendee, validateMember} from '@/lib/modules/validate-purchase';
import {TEInput} from 'tw-elements-react';

export default function Main() {

    //literals

    const defaultUser = 'Fulano da Silva';

    const defaultOccupation = 'Clínico Fisioterapeuta';

    const defaultText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit auctor purus ut tincidunt. Cras porta, odio id sodales scelerisque, nulla enim blandit lacus, vitae tincidunt purus urna et ipsum';

    //states

    const [requireValidation, setRequireValidation] = useState(false);

    const [isMember, setIsMember] = useState(false);

    const [isReturning, setIsReturning] = useState(false);

    const [userName, setUserName] = useState('');

    const [userEmail, setUserEmail] = useState('');

    const [displayMessage, setDisplayMessage] = useState(null);

    const [buttonText, setButtonText] = useState('ENVIAR');

    const [purchaseLink, setPurchaseLink] = useState('');

    const [showPurchaseLink, setShowPurchaseLink] = useState(false);

    const [validationPending, setValidationPending] = useState(true);

    const [mapVisible, setMapVisible] = useState(false);

    const [viewportWidth, setViewportWidth] = useState(null);

    const [isPlaying, setIsPlaying] = useState(false);

    const [showForm, setShowForm] = useState(false);

    //hooks

    const isMobile = useMemo(() => {return viewportWidth <= 820;}, [viewportWidth]);

    const defaultUserProfile = useMemo(() => {
        return process.env.NEXT_PUBLIC_ASSET_PREFIX_GLOBAL + 'img/default_user.jpg';
    }, []);

    const iframeRef = useRef(null);

    const statusMessage = {
        error_no_input: <span className='text-red-500 text-center'>Parece que há campos em branco, tente novamente.</span>,
        user_not_found: <span className='text-white text-center font-light text-sm'>Ops! Não encontramos nenhum registro com esse endereço de email. Confira se o endereço informado está correto e tente novamente, ou <a href="" className='!underline'>entre em contato conosco</a>.</span>,
        is_member: <span className='grad-text text-center'>Confirmamos sua assinatura do Palmilhando®! Clique no link acima para adquirir seu ingresso com um desconto exclusivo.</span>,
        is_atendee: <span className='text-white text-center'>Confirmamos sua presença no Encontro de 2023! Clique no link acima para adquirir seu ingresso com um desconto exclusivo.</span>,
        server_error: <span className='text-orange-500 text-center font-light text-sm'>Servidor indisponível no momento, tente novamente mais tarde.</span>,
        default: <span className='text-white text-center'>Obrigado! Clique no link acima para continuar.</span>,
    };

    const link = {
        discount: '',
        default: ''
    };

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
        setRequireValidation(isMember || isReturning);
        resetModal();
    }, [isMember, isReturning]);

    useEffect(() => {resetModal();}, [userName, userEmail]);

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

    const Map = () => {
        return (
            <div className='rounded-lg w-full h-full relative'>
                <Loading />
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14668.122128172752!2d-45.90516370000002!3d-23.205557899999988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc3589bc020f0d%3A0x96bc968352c2c899!2sMercure%20Sao%20Jose%20dos%20Campos!5e0!3m2!1sen!2sbr!4v1710790411443!5m2!1sen!2sbr" className='outline-none border-none w-full h-full absolute rounded-[inherit]' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        );
    };

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
                    <th className='w-[25%] bg-[#d6edff] p-4 rounded-tl-lg rounded-bl-lg min-[820px]:hidden'><img src={process.env.NEXT_PUBLIC_ASSET_PREFIX_GLOBAL + '/img/svg/clock.svg'} width='24px' height='24px' alt='' draggable='false' className='m-auto' /></th>
                    <th className='bg-[#d6edff] p-6 max-[820px]:hidden'>TEMA</th>
                    <th className='bg-[#d6edff] p-6 min-[820px]:hidden'><img src={process.env.NEXT_PUBLIC_ASSET_PREFIX_GLOBAL + '/img/svg/bulb.svg'} width='24px' height='24px' alt='' draggable='false' className='m-auto' /></th>
                    <th className='w-[25%] bg-[#d6edff] p-4 rounded-tr-lg rounded-br-lg max-[820px]:hidden'>PALESTRANTE</th>
                    <th className='w-[25%] bg-[#d6edff] p-4 rounded-tr-lg rounded-br-lg min-[820px]:hidden'><img src={process.env.NEXT_PUBLIC_ASSET_PREFIX_GLOBAL + '/img/svg/talk.svg'} width='24px' height='24px' alt='' draggable='false' className='m-auto' /></th>
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
        if (window.visualViewport.width <= 820) {
            return (
                <iframe src='https://www.youtube.com/embed/ELc7U9NgONY?si=IrU_5yk4GizQ202H&autoplay=1&rel=0' allow='autoplay; picture-in-picture; web-share' allowFullScreen className='outline-none w-full h-full rounded-md'></iframe>
            );
        } else {
            return (
                <iframe src='https://www.youtube.com/embed/JUh_rvkemmU?si=fKzdc98EAPiegzfl&autoplay=1&rel=0' allow='autoplay; picture-in-picture; web-share' allowFullScreen className='outline-none w-full h-full rounded-md'></iframe>
            );
        }
    };

    const Thumbnail = () => {
        return (
            <div className='w-full h-full' onClick={() => setIsPlaying(true)}>
                <img src={process.env.NEXT_PUBLIC_ASSET_PREFIX_GLOBAL + '/img/thumbnail_video_apresentacao.webp'} alt='' draggable='false' className='w-full h-auto rounded-lg' />
                <img src={process.env.NEXT_PUBLIC_ASSET_PREFIX_GLOBAL + '/img/svg/play_button.svg'} width={64} height={64} alt='' draggable='false' className='absolute-center opacity-80 hover:opacity-100 duration-200 ease' />
            </div>
        );
    };

    const Palestrante = ({children = null, src = undefined, title = undefined, occupation = undefined}) => {
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
                                <h2 className='font-semibold text-xl'>{title || defaultUser}</h2>
                                <h3 className='italic opacity-80'>{occupation || defaultOccupation}</h3>
                            </div>
                        </div>
                        <div className='speaker-description duration-300 ease-out'>
                            <div className="divider left"></div>
                            <p>{children || defaultText}</p>
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
                                <h2 className='font-semibold text-xl'>{title || defaultUser}</h2>
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

    //handler functions

    async function handleVerification() {
        if (userEmail == '' || userName == '') {
            setDisplayMessage(statusMessage.error_no_input);
            return;
        } else {
            if (requireValidation) {
                try {
                    setDisplayMessage(null);
                    setButtonText(<img src={process.env.NEXT_PUBLIC_ASSET_PREFIX_GLOBAL + '/img/gif/loading.gif'} alt='' draggable='false' width={32} height={32} className='mx-auto' />);
                    var validAtendee = isReturning && await validateAtendee(userEmail);
                    var validMember = isMember && await validateMember(userEmail);
                    if (validMember) {
                        setDisplayMessage(statusMessage.is_member);
                    } else if (validAtendee) {
                        setDisplayMessage(statusMessage.is_atendee);
                    } else {
                        setDisplayMessage(statusMessage.user_not_found);
                    };
                    if (validMember || validAtendee) {
                        setPurchaseLink(link.discount);
                        setValidationPending(false);
                        setShowPurchaseLink(true);
                    }
                } catch {
                    console.log('erro: falha na comunicação com o servidor');
                    setDisplayMessage(statusMessage.server_error);
                } finally {
                    setButtonText('ENVIAR');
                }
            } else {
                setDisplayMessage(statusMessage.default);
                setPurchaseLink(link.default);
                setShowPurchaseLink(true);
            }
        }

    }

    function resetModal() {
        setShowPurchaseLink(false);
        setDisplayMessage(null);
        if (!validationPending) {
            setValidationPending(true);
        }
    }

    function toggleForm() {
        const purchase = document.getElementById('buy-tickets');
        const form = document.getElementById('verification');
        if (!showForm) {
            purchase.classList.add('slide-out');

        } else {
            form.classList.add('slide-in');
        }
        setShowForm(!showForm);
    }

    function $(el) {return document.querySelector(el);};

    //main

    return (
        <div>

            <div className='absolute top-0 left-0 w-screen h-auto overflow-clip mix-blend-soft-light bg-fade-bottom'>
                <img src={process.env.NEXT_PUBLIC_ASSET_PREFIX_GLOBAL + '/img/[evento]_header_bg.webp'} alt='' draggable='false' className='w-full h-auto' />
            </div>

            {!isMobile && (<Section id='topnav' className='py-8'>
                <Content>
                    <Content_Default className='flex justify-between'>
                        <Container className='h-8 w-auto max-[820px]:mx-auto max-[820px]:h-12'>
                            <img src={process.env.NEXT_PUBLIC_ASSET_PREFIX_GLOBAL + '/img/svg/logo_palmilhando.svg'} alt='' draggable='false' className='h-full w-auto' />
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
                                <img src={process.env.NEXT_PUBLIC_ASSET_PREFIX_GLOBAL + '/img/svg/encontro_logo_3.svg'} alt='' draggable='false' />
                            </Container>
                            <div className="divider left max-[820px]:hidden"></div>
                            <div className="divider min-[821px]:hidden"></div>
                            <Container>
                                <p className='text-xl'>Viva a experiência do empreendedorismo e da prática baseada em evidência para se destacar no mercado de trabalho.</p>
                            </Container>
                            <Container>
                                <Wrapper className="items-center flex-nowrap w-max m-2">
                                    <div className='w-12 h-12 mr-4 bg-sky-900 rounded-full flex items-center justify-center shadow-md'>
                                        <img src={process.env.NEXT_PUBLIC_ASSET_PREFIX_GLOBAL + '/img/svg/map_pin.svg'} alt='' draggable='false' className='w-[40%]' />
                                    </div>
                                    <h2 className='font-extralight max-[820px]:text-base'>São José dos Campos - SP</h2>
                                </Wrapper>
                                <Wrapper className="items-center flex-nowrap w-max m-2">
                                    <div className='w-12 h-12 mr-4 bg-sky-900 rounded-full flex items-center justify-center shadow-md'>
                                        <img src={process.env.NEXT_PUBLIC_ASSET_PREFIX_GLOBAL + '/img/svg/calendar.svg'} alt='' draggable='false' className='w-1/2' />
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
                            <h2 className='mx-auto w-9/12 max-[820px]:!w-full'>Não importa o seu tempo de mercado: o <mark className="cor-1">Encontro Anual Palmilhas e Ciência Aplicada</mark> é o lugar perfeito para você ter ainda mais resultados.</h2>
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
                                            <img src={process.env.NEXT_PUBLIC_ASSET_PREFIX_GLOBAL + '/img/svg/calendar.svg'} alt='' draggable='false' className='w-1/2' />
                                        </div>
                                    )}
                                    <h2 className='font-extralight max-[820px]:text-base'>
                                        {isMobile && <i className="fa-solid fa-calendar-days mr-2" aria-hidden="true"></i>}
                                        <strong>13 e 14 de Setembro</strong><br />
                                        Sexta-feira e sábado
                                    </h2>
                                </Wrapper>
                                <Wrapper className="items-center flex-nowrap w-max m-2 max-[820px]:w-full">
                                    {!isMobile && (
                                        <div className='w-12 h-12 mr-4 bg-[var(--cor-1)] rounded-full flex items-center justify-center shadow-md'>
                                            <img src={process.env.NEXT_PUBLIC_ASSET_PREFIX_GLOBAL + '/img/svg/map_pin.svg'} alt='' draggable='false' className='w-[40%]' />
                                        </div>
                                    )}
                                    <h2 className='font-extralight max-[820px]:text-base'>
                                        {isMobile && <i className="fa-solid fa-location-dot mr-2" aria-hidden="true"></i>}
                                        <strong>Hotel Mercure São José dos Campos - Torre II</strong><br />
                                        Av. Jorge Zarur, 81, Jardim Apolo <br />
                                        São José dos Campos, SP - 12243-081 <br />
                                        <span className='inline underline font-light cursor-pointer text-sm' onClick={() => setMapVisible(!mapVisible)}>{!mapVisible ? 'Ver no mapa' : 'Ocultar o mapa'}</span>
                                    </h2>
                                </Wrapper>
                            </Container>
                            <Container className={mapVisible
                                ? 'w-[32rem] p-4 aspect-video max-[820px]:w-full max-[820px]:p-0 relative'
                                : 'hidden'
                            }>{mapVisible && <Map />}</Container>
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
                            <Palestrante></Palestrante>
                            <Palestrante></Palestrante>
                            <Palestrante></Palestrante>
                            <Palestrante></Palestrante>
                            <Palestrante></Palestrante>
                            <Palestrante></Palestrante>
                            <Palestrante></Palestrante>
                            <Palestrante></Palestrante>
                            <Palestrante></Palestrante>
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
                                    <img src={process.env.NEXT_PUBLIC_ASSET_PREFIX_GLOBAL + '/img/svg/ticket.svg'} alt='' draggable='false' className='w-full aspect-square' />
                                </Badge>
                                <div className='w-full h-full overflow-hidden'>
                                    <div className='flex justify-between w-[200%] duration-300 ease-out' style={{transform: !showForm ? 'translateX(0)' : 'translateX(-50%)'}}>
                                        <Container className='w-1/2 m-2 px-2 items-center'>
                                            <Container id="buy-tickets" className='w-full items-center'>
                                                <Container className='w-9/12 max-[820px]:!w-full'>
                                                    <h1 className='text-center grad-text text-xl font-bold'>GARANTA SEU INGRESSO</h1>
                                                    <p className='text-center text-sm font-extralight my-2'>Os ingressos do primeiro lote são limitados, garanta já o seu!</p>
                                                    <div className="divider"></div>
                                                </Container>
                                                <Container className='w-9/12 max-[820px]:!w-full text-center items-center my-4'>
                                                    <h1 className='font-bold text-3xl'>R$ XXX <sup><small>,XX</small></sup></h1>
                                                    <h3 className='italic text-sm font-extralight'>Em até 12x no cartão de crédito</h3>
                                                </Container>
                                                <List className="check-light w-9/12 max-[820px]:!w-[96%]">
                                                    <li>Acesso presencial aos dois dias do evento</li>
                                                    <li>Kit de boas vindas</li>
                                                    <li>Happy hour</li>
                                                </List>
                                                <Button className='w-fit mx-auto my-8 p-16' onClick={() => toggleForm()}>RESERVAR MINHA VAGA</Button>
                                            </Container>
                                        </Container>
                                        <Container className='w-1/2 m-2 px-2 items-center'>
                                            <Container id="verification" className='w-full'>
                                                <h1 className='text-center grad-text text-xl font-bold'>RESERVE SUA VAGA</h1>
                                                <p className='text-center text-sm font-extralight my-2'>Preencha os campos a seguir para liberar o link de compra</p>
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
                                                    {validationPending &&
                                                        <Container className='px-4 w-full items-center'>
                                                            <Wrapper className='items-center my-2 flex-nowrap w-full'>
                                                                <input type="checkbox" checked={isMember} className='scale-125 cursor-pointer' onChange={() => setIsMember(!isMember)} />
                                                                <label className='ml-2 cursor-pointer' onClick={() => setIsMember(!isMember)}>Sou assinante do Palmilhando®</label>
                                                            </Wrapper>
                                                            <Wrapper className='items-center my-2 flex-nowrap w-full'>
                                                                <input type="checkbox" checked={isReturning} className='scale-125 cursor-pointer' onChange={() => setIsReturning(!isReturning)} />
                                                                <label className='ml-2 cursor-pointer' onClick={() => setIsReturning(!isReturning)}>Participei do Encontro 2023</label>
                                                            </Wrapper>
                                                        </Container>
                                                    }
                                                    <Container className='items-center'>
                                                        {validationPending && <Button className='my-4 w-9/12' onClick={() => handleVerification()}>{buttonText}</Button>}
                                                        {showPurchaseLink && <a href={purchaseLink} className='w-9/12'><Button className='my-4 w-full flex items-center justify-center'>
                                                            <span>CONTINUAR</span>
                                                            <img src={process.env.NEXT_PUBLIC_ASSET_PREFIX_GLOBAL + '/img/svg/external-link.svg'} alt='' draggable='false' className='w-4 mx-2' />
                                                        </Button>
                                                        </a>}
                                                        {displayMessage}
                                                    </Container>
                                                </form>
                                                <span className='mx-auto underline font-semibold cursor-pointer opacity-50' onClick={() => toggleForm()}>Voltar</span>
                                            </Container>
                                        </Container>
                                    </div>
                                </div>
                            </Container>
                        </Wrapper>
                    </Content_Default>
                </Content>
            </Section>

            <Section id='evt-depoimentos' className='shadow-lg bg-[radial-gradient(circle_at_center,var(--cor-4),#0e1b2c)] cor-4 max-[820px]:!py-4 bg-[size:200%]'>
                <Content>
                    <Content_Default>
                        <Container className='w-9/12 max-[820px]:!w-full my-4 px-4 mx-auto'>
                            <h2 className='text-2xl text-center max-[820px]:text-xl font-bold grad-text mb-2'>Confira alguns depoimentos de quem já viveu essa experiência:</h2>
                            <div className="divider"></div>
                        </Container>
                        <Wrapper className='items-start justify-center'>
                            <Depoimento></Depoimento>
                            <Depoimento></Depoimento>
                            <Depoimento></Depoimento>
                        </Wrapper>
                    </Content_Default>
                </Content>
            </Section>

            <div className='bg-[linear-gradient(#0c6b96,#1E3050)]'>
                <Section id='faq'>
                    <Content>
                        <Content_Default className='flex justify-evenly max-[820px]:flex-col'>
                            <Container className='w-[30%] max-[820px]:!w-[90%] max-[820px]:mx-auto max-[820px]:mb-8 max-[820px]:text-center'>
                                <h2 className='font-semibold text-xl'>Ficou com alguma dúvida?</h2>
                                <div className="divider left"></div>
                                <p>Confira aqui as respostas para as dúvidas mais frequentes, ou entre em contato conosco via Whatsapp</p>
                                <a href="https://wa.me//5512982628132" className='flex items-center justify-evenly py-4 my-4 px-8 border border-cyan-200 rounded-xl hover:backdrop-brightness-110 ease-out duration-200 cursor-pointer decoration-[none] text-white'>
                                    <img src={process.env.NEXT_PUBLIC_ASSET_PREFIX_PALMILHANDO + 'img/svg/whatsapp-green.svg'} alt="" draggable='false' width='32px' height='32px' className='mr-2' />
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
        </div>
    );
}