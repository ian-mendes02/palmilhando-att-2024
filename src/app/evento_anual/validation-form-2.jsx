'use client';
import {Container, Wrapper} from '@/lib/modules/layout-components';
import {Button, List} from '@/lib/modules/ui-components';
import {useEffect, useState} from 'react';
import {TEInput} from 'tw-elements-react';

export default function ValidationForm() {

    const ASSET_PREFIX = process.env.NEXT_PUBLIC_ASSET_PREFIX_GLOBAL;

    const statusMessage = {
        error_no_input: <span className='text-red-500 text-center'>Parece que há campos em branco, tente novamente.</span>,
        user_not_found: <span className='text-white text-center font-light text-sm'>Ops! Não encontramos nenhum registro com esse endereço de email. Confira se o endereço informado está correto e tente novamente, ou <a href="" className='!underline'>entre em contato conosco</a>.</span>,
        is_member: <span className='grad-text text-center'>Confirmamos sua assinatura do Palmilhando®! Clique no link acima para adquirir seu ingresso com um desconto exclusivo.</span>,
        is_atendee: <span className='text-white text-center'>Confirmamos sua presença no Encontro de 2023! Clique no link acima para adquirir seu ingresso com um desconto exclusivo.</span>,
        default_error: <span className='text-orange-500 text-center'>Ocorreu um erro na verificação, tente novamente mais tarde.</span>,
        server_error: <span className='text-orange-500 text-center font-light text-sm'>Servidor indisponível no momento, tente novamente mais tarde.</span>,
        default: <span className='text-white text-center'>Obrigado! Clique no link acima para continuar.</span>,
    };

    const link = {
        discount: '',
        default: ''
    };

    const [showForm, setShowForm] = useState(false);

    const [userName, setUserName] = useState('');

    const [userEmail, setUserEmail] = useState('');

    const [displayMessage, setDisplayMessage] = useState(null);

    const [buttonText, setButtonText] = useState('ENVIAR');

    const [purchaseLink, setPurchaseLink] = useState('');

    const [showPurchaseLink, setShowPurchaseLink] = useState(false);

    const [validationPending, setValidationPending] = useState(true);

    useEffect(() => {
        resetModal();
    }, [userName, userEmail]);

    async function handleVerification() {

        if (userEmail == '' || userName == '') {
            setDisplayMessage(statusMessage.error_no_input);
            return;
        } else {
            try {
                setDisplayMessage(null);
                setButtonText(<img src={ASSET_PREFIX + 'img/gif/loading.gif'} alt='' draggable='false' width={32} height={32} className='mx-auto' />);

                //console.log('Fetching user verification...');

                const validation = await fetch(`http://localhost:8081/projects/palmilhando-jan-2024/src/lib/modules/validation/validation.php`, {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({email: userEmail, name: userName})
                }).then((res) => {
                    return res.text()
                }).then((data) => {
                    return JSON.parse(data)
                }) 
                .catch((reason) => {
                    console.log('Error: Unable to complete verification.');
                    console.log(reason);
                    setDisplayMessage(statusMessage.default_error);
                });

                //console.log(validation);

                const membership_status = validation.membership_status;
                
                const atendee_status = validation.atendee_status;

                //console.log(`User member status: ${membership_status.is_valid} - (Code '${membership_status.status_message}')`);

                //console.log(`User atendee status: ${atendee_status.is_valid} - (Code '${atendee_status.status_message}')`);

                if (membership_status.is_valid) {
                    setDisplayMessage(statusMessage.is_member);
                } else if (atendee_status.is_valid) {
                    setDisplayMessage(statusMessage.is_atendee);
                } else {
                    setDisplayMessage(statusMessage.default);
                };

                if (membership_status.is_valid || atendee_status.is_valid) {
                    setPurchaseLink(link.discount);
                } else {
                    setShowPurchaseLink(link.default);
                };

                setValidationPending(false);

                setShowPurchaseLink(true);

                //console.log("Verification complete.");
            } finally {
                setButtonText("ENVIAR");
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
        document.getElementById("user_name").value = '';
        document.getElementById("user_email").value = '';
        resetModal()
    }

    return (
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
                            {/* validationPending &&
                                <Container className='px-4 w-full items-center'>
                                    <Wrapper className='items-center my-2 flex-nowrap w-full'>
                                        <input type="checkbox" checked={isMember} className='scale-125 cursor-pointer' onChange={() => setIsMember(!isMember)} />
                                        <label className='ml-2 cursor-pointer' onClick={() => setIsMember(!isMember)}>Sou assinante do Palmilhando®</label>
                                    </Wrapper>
                                    <Wrapper className='items-center my-2 flex-nowrap w-full'>
                                        <input type="checkbox" checked={isReturning} className='scale-125 cursor-pointer' onChange={() => setIsReturning(!isReturning)} />
                                        <label className='ml-2 cursor-pointer' onClick={() => setIsReturning(!isReturning)}>Participei do Encontro 2023</label>
                                    </Wrapper>
                                </Container> */
                            }
                            <Container className='items-center'>
                                {validationPending && <Button className='my-4 w-9/12' onClick={() => handleVerification()}>{buttonText}</Button>}
                                {showPurchaseLink && <a href={purchaseLink} className='w-9/12'><Button className='my-4 w-full flex items-center justify-center'>
                                    <span>CONTINUAR</span>
                                    <img src={ASSET_PREFIX + 'img/svg/external-link.svg'} alt='' draggable='false' className='w-4 mx-2' />
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
    );

}