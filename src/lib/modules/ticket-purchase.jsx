'use client';
import {Container, Wrapper, Loading, Grid} from '@/lib/modules/layout-components';
import {useEffect, useMemo, useState, useRef} from 'react';
import {List} from '@/lib/modules/ui-components';
import {TEInput} from 'tw-elements-react';
import {log} from './utils';
import '$/css/globals.css';

function EventoIngressos() {

    const [showValidationPrompt, setShowValidationPrompt] = useState(false);
    const [requireValidation, setRequireValidation] = useState(true);
    const [showDiscountInfo, setShowDiscountInfo] = useState(false);
    const [discountMessage, setDiscountMessage] = useState(null);
    const [displayMessage, setDisplayMessage] = useState(null);
    const [validDiscount, setValidDiscount] = useState(false);
    const [ajaxResponse, setAjaxResponse] = useState(null);
    const [buttonText, setButtonText] = useState('ENVIAR');
    const [userEmail, setUserEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [userIP, setUserIP] = useState(null);

    const API_URL = process.env.NEXT_PUBLIC_API_URL_PROD;

    const price = useMemo(() => {
        return {
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
    }, []);

    const link = useMemo(() => {
        return {
            vip: 'https://secure.doppus.com/pay/PBOJJ9ZMBOJJ9ZG9Z3555',
            online: 'https://secure.doppus.com/pay/PBOJJ9ZMBOJJ9ZG9Z3O55',
            presencial: {
                discount: 'https://secure.doppus.com/pay/PBOJJ9ZMBOJJ9ZG9ZH000',
                default: 'https://secure.doppus.com/pay/PBOJJ9ZMBOJJ9ZG9Z355J'
            }
        };
    }, []);

    const loteAtual = "lote1";

    const statusMessage = useMemo(() => {
        return {
            error_no_input: <span className='text-red-500 text-center'>Parece que há campos em branco, tente novamente.</span>,
            server_error: <span className='text-orange-500 text-center font-light text-sm'>Servidor indisponível no momento, tente novamente mais tarde.</span>,
        };
    }, []);

    const messageRef = useRef(null);

    async function userAjax(action, data) {
        log('Fetching data from server...', "info");
        await fetch(API_URL + "evento2024/integration/", {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                action: action,
                data: data
            })
        })
            .then((res) => res.json())
            .then((json) => setAjaxResponse(json))
            .catch((reason) => log(reason));
    }

    async function handleValidation() {
        if (userEmail == '' || userName == '') {
            setDisplayMessage(statusMessage.error_no_input);
            return;
        }
        var usrdata = {
            user_mail: userEmail,
            user_name: userName,
            user_ip: userIP
        };
        userAjax("verify_user", usrdata);
        setDisplayMessage(null);
        setButtonText(<Loading width={24} />);
    }

    async function getIP() {
        await fetch('https://api.ipify.org/?format=json')
            .then((res) => res.json())
            .then((ip) => setUserIP(ip.ip));
    }

    /* useEffect(() => {
        getIP();
        var user = JSON.parse(localStorage.getItem("validated_user"));
        if (user && requireValidation) {
            var usrdata = {
                user_mail: user.user_mail,
                user_name: user.user_name,
                user_ip: user.user_ip
            };
            userAjax("verify_user", usrdata);
        } else {
            setShowValidationPrompt(true);
        };
    }, []); */

    useEffect(() => {
        if (userIP) {
            const body = JSON.stringify({action: "page_view", data: {user_ip: userIP}});
            const xhr = new XMLHttpRequest();
            xhr.open("POST", API_URL + "evento2024/integration/");
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(body);
        } else getIP()
    }, [userIP]);

    useEffect(() => {
        if (requireValidation && ajaxResponse) {
           // log(ajaxResponse);
            setValidDiscount(ajaxResponse.discount_elegible);
            if (ajaxResponse.valid_member)
                setDiscountMessage("Desconto Palmilhando®");
            else if (ajaxResponse.valid_atendee)
                setDiscountMessage("Desconto Participante 2023");
            else
                setDiscountMessage(null);
            log("Verification complete.", "success");
            /* if (!localStorage.getItem("validated_user")) {
                localStorage.setItem("validated_user", JSON.stringify({
                    user_mail: userEmail,
                    user_name: userName,
                    user_ip: userIP
                }));
            } */
            setRequireValidation(false);
        }
        setButtonText("ENVIAR");
    }, [ajaxResponse]);

    useEffect(() => {
        const handleClickOutside = (e) =>
            !messageRef.current?.contains(e.target)
                ? setShowDiscountInfo(false)
                : null;
        if (showDiscountInfo) document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [showDiscountInfo]);

    useEffect(
        () => setDisplayMessage(null), [userName, userEmail]
    );

    const Ingressos = () => (
        <Grid className='grid-cols-3 max-[820px]:!grid-cols-1 w-full gap-4'>

            <Container id="online" className='w-full relative'>
                <div className="flex flex-col items-center p-4 border-t-2 border-sky-600 rounded-2xl bg-sky-900 shadow-lg h-max w-full relative">
                    <Grid className="w-full mb-4 grid-cols-2">
                        <Wrapper className='items-center justify-start flex-nowrap'>
                            <div className='w-10 h-10 mr-2 bg-primary-500 rounded-full flex items-center justify-center shadow-md'>
                                <i className="fa-solid fa-globe text-2xl text-sky-100" aria-hidden="true"></i>
                            </div>
                            <h2 className='text-sky-100 font-bold' style={{fontSize: '150%'}}>ONLINE</h2>
                        </Wrapper>
                        <span className='bg-sky-100 rounded-full text-sky-800 px-4 py-1 h-fit w-fit justify-self-end max-[1024px]:my-4 text-center'>PREÇO ÚNICO</span>
                    </Grid>
                    <Container className='p-8 rounded-lg border-2 border-sky-700 items-center'>
                        <List className='text-left checklist'>
                            <li className='include'>Acesso ao evento AO VIVO</li>
                            <li className='include'>3 meses de acesso ao conteúdo gravado, planilhas e material de apoio</li>
                        </List>
                        <div className="divider"></div>
                        <h1 className='text-4xl font-semibold my-4'>R$249,90</h1>
                        <a
                            href={link.online}
                            className='font-bold text-xl max-[1024px]:text-base shadow-md w-fit py-2 px-4 rounded-full max-[820px]:max-w-[340px] bg-primary-500 hover:brightness-95 duration-200 my-4 text-center'>
                            GARANTA SUA VAGA
                        </a>
                    </Container>
                </div>
            </Container>

            <Container id="presencial" className='w-full relative'>
                <div className="flex flex-col p-4 border-t-2 border-sky-800 rounded-2xl bg-primary-900 shadow-xl h-max w-full overflow-hidden">
                    <Grid className="w-full mb-4 grid-cols-2">
                        <Wrapper className='items-center justify-start flex-nowrap'>
                            <div className='w-10 h-10 min-w-10 mr-2 bg-primary-500 rounded-full flex items-center justify-center shadow-md'>
                                <i className="fa-solid fa-ticket text-2xl text-sky-100" aria-hidden="true"></i>
                            </div>
                            <h2 className='text-sky-100 font-bold' style={{fontSize: '150%'}}>PRESENCIAL</h2>
                        </Wrapper>
                        <span className='bg-sky-100 rounded-full text-sky-800 px-4 py-1 h-fit w-fit justify-self-end max-[1024px]:my-4'>1º LOTE</span>
                    </Grid>
                    <Grid className='grid-cols-2 w-[200%]'>
                        {!showValidationPrompt ? (
                            <Container className='p-4 rounded-lg border-2 border-sky-900 items-center w-full'>
                                <List className='text-left checklist p-2 mb-2'>
                                    <li className='include'>Acesso presencial ao evento</li>
                                    <li className='include'>3 meses de acesso ao conteúdo gravado, planilhas e material de apoio</li>
                                    <li className='include'>Kit de brindes para participantes</li>
                                    <li className='include'>Happy hour</li>
                                </List>
                                <div className="divider"></div>
                                <div className='w-full my-4 text-center'>
                                    <span>
                                        <span className='text-3xl font-semibold'>R${price[loteAtual].base}</span>
                                        <span>Preço padrão</span>
                                    </span>
                                    <br />
                                    <span>
                                        <span className='text-3xl font-semibold grad-text'>R${price[loteAtual].discount}</span>
                                        <span className="inline-flex items-center relative">
                                            <span className='grad-text'>Desconto exclusivo</span>
                                            <i
                                                className="fa-solid fa-circle-question ml-2 cursor-pointer text-orange-400"
                                                onMouseEnter={() => setShowDiscountInfo(true)}
                                                onMouseLeave={() => setShowDiscountInfo(false)}
                                                aria-hidden="true"
                                            ></i>
                                            {showDiscountInfo &&
                                                <span ref={messageRef} className='bg-slate-900 bg-opacity-95 backdrop-blur-sm absolute w-64 h-max bottom-8 left-[calc(-50%-12px)] translate-x-1/2 text-left text-sm p-6 rounded-lg shadow-md z-50 max-[820px]:-left-full'>
                                                    Membros do Palmilhando® e participantes do evento Palmilhas e Ciência Aplicada 2023 recebem um desconto especial na reserva dos ingressos.
                                                    Selecione a opção de garantir seu desconto abaixo para confirmarmos sua assinatura ou presença e garantir seu desconto exclusivo!
                                                </span>
                                            }
                                        </span>
                                    </span>
                                </div>
                                {/* <span className='text-center grad-text font-bold'>{discountMessage}</span> */}
                                <a
                                    href={validDiscount ? link.presencial.discount : link.presencial.default}
                                    className='font-bold text-xl max-[1024px]:text-base shadow-md w-full py-2 rounded-full bg-primary-500 hover:brightness-95 duration-200 my-2 text-center'>
                                    RESERVE SUA VAGA</a>
                                <a
                                    className='font-bold text-xl max-[1024px]:text-base shadow-md w-full py-2 rounded-full bg-cyan-700 hover:brightness-95 duration-200 my-2 text-center cursor-pointer'
                                    onClick={() => setShowValidationPrompt(true)}
                                >GARANTA SEU DESCONTO</a>
                            </Container>
                        ) : (
                            <Container className='items-center rounded-lg border-2 border-sky-900 w-full'>
                                <Container className='w-full p-8'>
                                    <Container className='text-center items-center w-[96%]'>
                                        <h2 className='grad-text font-bold mb-2 relative z-40'>GARANTA SEU DESCONTO</h2>
                                        <p className='text-xs font-light'>Informe seus dados para que possamos confirmar sua assinatura ou participação e disponibilizar seu desconto exclusivo!</p>
                                    </Container>
                                    <div className="divider"></div>
                                    <form id='compra-ingresso' onSubmit={(e) => e.preventDefault()}>
                                        <Container>
                                            <Container className="my-2">
                                                <TEInput type="text" id="user_name" defaultValue={userName} onChange={(e) => setUserName(e.target.value)} label='Nome completo' className='text-white !outline-none'></TEInput>
                                            </Container>
                                            <Container className='my-2'>
                                                <TEInput type='email' id='user_email' defaultValue={userEmail} onChange={(e) => setUserEmail(e.target.value)} label='Email' className='text-white !outline-none'></TEInput>
                                            </Container>
                                        </Container>
                                        <button
                                            onClick={() => requireValidation? handleValidation() : null}
                                            className='block font-semibold text-lg shadow-md w-full py-2 px-8 rounded-full max-[820px]:max-w-[340px] bg-primary-500 hover:brightness-95 duration-200 my-4 text-center mx-auto relative h-12'>
                                            {requireValidation ? buttonText : <i className="fa-solid fa-check" aria-hidden="true"></i>}
                                        </button>
                                        {!requireValidation && <a
                                            href={link.presencial.discount}
                                            className='block font-semibold text-lg shadow-md w-full py-2 px-8 rounded-full max-[820px]:max-w-[340px] bg-primary-500 hover:brightness-95 duration-200 my-4 text-center mx-auto relative h-12'>
                                            RESERVE SUA VAGA
                                        </a>}
                                        <span onClick={() => setShowValidationPrompt(!1)} className='underline underline-offset-2 text-center cursor-pointer'>Voltar</span>
                                        <div className='my-2'>
                                            {displayMessage}
                                        </div>
                                    </form>
                                </Container>
                            </Container>
                        )}
                    </Grid>
                </div>
            </Container>

            <Container id="vip" className='w-full relative'>
                <div className="flex flex-col items-center p-4 border-t-2 border-sky-800 rounded-2xl bg-[#121e31] shadow-lg h-max w-full relative brightness-90 opacity-50 grayscale">
                    <Grid className="w-full mb-4 grid-cols-2">
                        <Wrapper className='items-center justify-start flex-nowrap'>
                            <div className='w-10 h-10 min-w-10 mr-2 bg-sky-100 rounded-full flex items-center justify-center shadow-md'>
                                <i className="fa-solid fa-gem text-2xl grad-text" aria-hidden="true"></i>
                            </div>
                            <h2 className='grad-text font-bold min-w-max' style={{fontSize: '150%'}}>ACESSO VIP</h2>
                        </Wrapper>
                        <span className='bg-sky-100 rounded-full text-sky-800 px-4 py-1 h-fit w-min max-[1024px]:my-4 justify-self-end'>ESGOTADO</span>
                    </Grid>
                    <Container className='p-8 rounded-lg border-2 border-sky-900 items-center'>
                        <List className='text-left checklist select-none'>
                            <li className='include'>Acesso presencial ao evento</li>
                            <li className='include'>3 meses de acesso ao conteúdo gravado, planilhas e material de apoio</li>
                            <li className='include'>Kit de brindes para participantes</li>
                            <li className='include'>Happy hour</li>
                            <li className='include'>Curso prático pré-evento com o André e o Clayton</li>
                        </List>
                        <div className="divider"></div>
                        <h1 className='text-4xl font-semibold my-4'>R$1200,00</h1>
                        <span className='text-center text-sm font-light'>ESGOTADO</span>
                    </Container>
                </div>
            </Container>

        </Grid>
    );

    return (
        <div>
            <h2 className='grad-text font-bold mb-2 relative text-center'>GARANTA SUA PARTICIPAÇÃO</h2>
            <div className='relative z-10 my-8'>
                <Ingressos />
            </div>
        </div>
    );
}

export {EventoIngressos};