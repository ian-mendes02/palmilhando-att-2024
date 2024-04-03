'use client';
import {Container, Wrapper, Loading} from '@/lib/modules/layout-components';
import {useEffect, useMemo, useState} from 'react';
import {List} from '@/lib/modules/ui-components';
import {TEInput} from 'tw-elements-react';
import '../../../public/css/globals.css';
import {_log} from './debug';

function EventoIngressos() {

    const DEV = useMemo(() => {
        return process.env.NEXT_PUBLIC_DEV_ENV == 'true';
    }, []);

    const API_URL = useMemo(() => {
        return DEV ? process.env.NEXT_PUBLIC_API_URL_DEV : process.env.NEXT_PUBLIC_API_URL_PROD;
    }, []);

    const debug = DEV;

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
        vip: 'https://secure.doppus.com/pay/PBOJJ9ZMBOJJ9ZG9Z3555',
        online: 'https://secure.doppus.com/pay/PBOJJ9ZMBOJJ9ZG9Z3O55',
        presencial: {
            discount: 'https://secure.doppus.com/pay/PBOJJ9ZMBOJJ9ZG9ZH000',
            default: 'https://secure.doppus.com/pay/PBOJJ9ZMBOJJ9ZG9Z355J'
        }
    };

    const statusMessage = {
        error_no_input: <span className='text-red-500 text-center'>Parece que há campos em branco, tente novamente.</span>,
        server_error: <span className='text-orange-500 text-center font-light text-sm'>Servidor indisponível no momento, tente novamente mais tarde.</span>,
    };

    // States

    const [userName, setUserName] = useState('');

    const [userEmail, setUserEmail] = useState('');

    const [validDiscount, setValidDiscount] = useState(false);

    const [requireValidation, setRequireValidation] = useState(true);

    const [showValidationPrompt, setShowValidationPrompt] = useState(false);

    const [discountMessage, setDiscountMessage] = useState(null);

    const [buttonText, setButtonText] = useState('ENVIAR');

    const [displayMessage, setDisplayMessage] = useState(null);

    const [userIP, setUserIP] = useState(null);

    /**
     * Stores ajax validation response
     */
    const [ajaxResponse, setAjaxResponse] = useState(null);

    /**
     * Fetch user validation from server
     */
    async function userAjax(action, data) {
        _log('Fetching data from server...', debug, "info");
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
            .catch((reason) => _log(reason, debug));
    }

    /**
     * Handle form submission
     */
    async function handleValidation() {
        //Exits if name or email are blank
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

    /**
     * Fetch client IP address from ipfy.org
     */
    async function getIP() {
        await fetch('https://api.ipify.org/?format=json')
            .then((res) => res.json())
            .then((ip) => setUserIP(ip.ip));
    }

    // Hooks

    /**
     * Verify user data from localStorage if available
     */
    useEffect(() => {
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
    }, []);

    useEffect(() => {
        if (userIP) {
            const body = JSON.stringify({action: "page_view",data: {user_ip: userIP}});
            const xhr = new XMLHttpRequest();
            xhr.open("POST", API_URL + "evento2024/integration/");
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(body);
        }
    }, [userIP]);

    /**
    * Process ajax response once available
    */
    useEffect(() => {
        if (requireValidation && ajaxResponse) {
            _log(ajaxResponse, debug);
            setValidDiscount(ajaxResponse.discount_elegible);
            if (ajaxResponse.valid_member) {
                setDiscountMessage("Desconto Palmilhando®");
            } else if (ajaxResponse.valid_atendee) {
                setDiscountMessage("Desconto Participante 2023");
            } else {
                setDiscountMessage(null);
            }
            _log("Verification complete.", debug, "success");
            if (!localStorage.getItem("validated_user")) {
                localStorage.setItem("validated_user", JSON.stringify({
                    user_mail: userEmail,
                    user_name: userName,
                    user_ip: userIP
                }));
            }
            setRequireValidation(false);
        }
        setButtonText("ENVIAR");
    }, [ajaxResponse]);

    /**
    * Clears warning message if input value is changed
    */
    useEffect(() => {
        setDisplayMessage(null);
    }, [userName, userEmail]);

    // Components

    const Ingressos = () => {
        return (
            <Wrapper className='flex-nowrap max-[820px]:flex-col'>

                <Container id="online" className='w-[28rem] max-[820px]:w-[80%] max-[426px]:w-full m-2 max-[820px]:mx-0'>
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
                                href={link.online}
                                className='font-bold text-xl max-[1024px]:text-base shadow-md w-fit py-2 px-4 rounded-full max-[820px]:max-w-[340px] bg-primary-500 hover:brightness-95 duration-200 my-4 text-center'>
                                GARANTA SUA VAGA
                            </a>
                        </Container>
                    </div>
                </Container>

                <Container id="presencial" className='w-[28rem] max-[820px]:w-[80%] max-[426px]:w-full m-2 relative max-[820px]:mx-0'>
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
                                href={validDiscount ? link.presencial.discount : link.presencial.default}
                                className='font-bold text-xl max-[1024px]:text-base shadow-md w-fit py-2 px-4 rounded-full max-[820px]:max-w-[340px] bg-primary-500 hover:brightness-95 duration-200 my-4 text-center'>
                                GARANTA SUA VAGA
                            </a>
                        </Container>
                    </div>
                </Container>

                <Container id="vip" className='w-[28rem] max-[820px]:w-[80%] max-[426px]:w-full m-2 max-[820px]:mx-0'>
                    <div className="flex flex-col items-center p-4 border-t-2 border-sky-800 rounded-2xl bg-[#121e31] shadow-lg h-max w-full relative brightness-90 opacity-50 grayscale">
                        <Wrapper className="flex-nowrap items-center justify-between w-full mb-4 max-[1024px]:flex-col max-[1024px]:items-start">
                            <Wrapper className='items-center justify-start flex-nowrap'>
                                <div className='w-10 h-10 mr-2 bg-sky-100 rounded-full flex items-center justify-center shadow-md'>
                                    <i className="fa-solid fa-gem text-2xl grad-text" aria-hidden="true"></i>
                                </div>
                                <h2 className='grad-text font-bold' style={{fontSize: '150%'}}>ACESSO VIP</h2>
                            </Wrapper>
                            <span className='bg-sky-100 rounded-full text-sky-800 px-4 py-1 h-fit max-[1024px]:my-4'>ESGOTADO</span>
                        </Wrapper>
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
                            {/*                             <a
                                className='font-bold text-xl max-[1024px]:text-base shadow-md w-fit py-2 px-4 rounded-full max-[820px]:max-w-[340px] bg-primary-500 my-4 text-center pointer-events-none select-none'>
                                GARANTA SUA VAGA
                            </a> */}
                        </Container>
                    </div>
                </Container>

            </Wrapper>
        );
    };

    return (
        <div className='overflow-hidden' style={{height: requireValidation ? '30rem' : '100%'}}    >
            {requireValidation &&
                <div className='absolute top-0 left-0 w-full h-full backdrop-blur-md backdrop-brightness-75 z-30 flex items-center justify-center'>
                    {!showValidationPrompt
                        ? <Loading width={64} />
                        : (
                            <Container className='rounded-2xl shadow-xl bg-[linear-gradient(65deg,#0b131f,#121e31)] bg-[size:300%] bg-right-top border-t-2 border-sky-800 w-[32rem] h-96 max-[820px]:h-[28rem] max-[820px]:w-[96%] p-8'>
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
                                        onClick={handleValidation}
                                        className='font-semibold text-lg shadow-md w-[80%] py-2 px-8 rounded-full max-[820px]:max-w-[340px] bg-primary-500 hover:brightness-95 duration-200 my-4 text-center mx-auto relative h-12'>
                                        {buttonText}
                                    </button>
                                    <div className='my-2'>{displayMessage}</div>
                                </form>
                            </Container>
                        )
                    }

                </div>
            }
            {!requireValidation && <h2 className='grad-text font-bold mb-2 relative text-center'>GARANTA SUA PARTICIPAÇÃO</h2>}
            <div className='relative z-10'><Ingressos /></div>
        </div>
    );
}

export {EventoIngressos};