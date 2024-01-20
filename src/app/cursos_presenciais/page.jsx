'use client';
import {Section, Content, Content_Default, Container, Wrapper, Badge} from '@/lib/modules/layout-components';
import {Button, List} from '@/lib/modules/ui-components';
import React from 'react';
import Carousel from '@/lib/modules/carousel';
export default function Page() {

    function $(el) {
        return document.querySelector(el);
    }

    const [option, setOption] = React.useState('select');
    const [optionData, setOptionData] = React.useState({
        cityName: '',
        location: '',
        purchaseLink: ''
    });

    React.useEffect(()=> {
        !function(e,t,a,n,g){e[n] = e[n] || [], e[n].push({"gtm.start": (new Date).getTime(), event: "gtm.js"});var m=t.getElementsByTagName(a)[0],r=t.createElement(a);r.async=!0,r.src="https://www.googletagmanager.com/gtm.js?id=GTM-5TTGRP4",m.parentNode.insertBefore(r,m)}(window,document,"script","dataLayer");
        document.title = 'Cursos Presenciais | Palmilhas Terapêuticas';
    },[])

    React.useEffect(() => {
        switch (option) {
            case "select":
                setOptionData({
                    cityName: '',
                    location: '',
                    purchaseLink: ''
                });
                break;
            case "sao_jose_dos_campos":
                setOptionData({
                    cityName: 'São José dos Campos - SP',
                    location: '[ local do evento ]',
                    eventDuration: '23 e 24 de Fevereiro',
                    purchaseLink: 'https://www.sympla.com.br/curso-presencial-de-palmilhas-terapeuticas__2299829'
                });
                break;
            case "curitiba":
                setOptionData({
                    cityName: 'Curitiba - PR',
                    location: '[ local do evento ]',
                    eventDuration: '15 e 16 de Março',
                    purchaseLink: 'https://www.sympla.com.br/curso-presencial-de-palmilhas-terapeuticas__2299832'
                });
                break;
            case "belo_horizonte":
                setOptionData({
                    cityName: 'Belo Horizonte - MG',
                    location: '[ local do evento ]',
                    eventDuration: '5 e 6 de Abril',
                    purchaseLink: 'https://wa.me/553181075257'
                });
                break;
            case "porto_alegre":
                setOptionData({
                    cityName: 'Porto Alegre - RS',
                    location: '[ local do evento ]',
                    eventDuration: '18 e 19 de Maio',
                    purchaseLink: ''
                });
                break;
        }
    }, [option]);

    const upcomingLocation = {
        cityName: 'São José dos Campos - SP',
        location: '[ local do evento ]',
        eventDuration: '23 e 24 de Fevereiro',
    };

    return (
        <div>
            <div className='bg-[linear-gradient(#0a0a0a,#1E3050)]'>
                <Section id="cp-header" className='h-[512px] flex flex-col justify-center pb-0 pt-0'>
                    <Content className='relative z-10'>
                        <Content_Default>
                            <Wrapper className='pt-8'>
                                <Container className='w-[32rem] max-[1024px]:w-96 max-[820px]:w-full px-8 mb-8 max-[820px]:text-center'>
                                    <img src='/img/svg/logo_cursos_presenciais.svg' alt='' draggable='false' />
                                    <br />
                                    <p>
                                        O curso de Palmilhas Terapêuticas é uma experiência completa para quem quer aprender a avaliar, prescrever e confeccionar palmilhas terapêuticas.
                                    </p>
                                    <br />
                                    <p>
                                        Dois dias intensos de teoria e muita prática de avaliação e confecção de palmilhas com diferentes técnicas de moldagem e configurações de elementos.
                                    </p>
                                    <br />
                                    <Button onClick={() => document.getElementById('cp-investimento').scrollIntoView({block: 'start'})}>GARANTA JÁ A SUA VAGA!</Button>
                                </Container>
                            </Wrapper>
                        </Content_Default>
                    </Content>
                </Section>
                <Section id="cp-proposta" className='pt-0'>
                    <Content>
                    </Content>
                </Section>
            </div>

            <Section id='cp-conteudo' className='bg-[linear-gradient(#0c6b96,transparent)] pb-0'>
                <Content>
                    <Content_Default>
                        <div className="w-full text-center">
                            <h1 className='grad-text mx-auto my-4'>CONTEÚDO DO CURSO</h1>
                            <p className='font-extralight w-1/2 mx-auto max-[820px]:w-full'>Confira aqui tudo o que você vai aprender sobre prescrição, confecção e aplicação de palmilhas terapêuticas:</p>
                        </div>
                        <br />
                        <div className="divider max-[820px]:mb-8"></div>
                        <Wrapper className='items-center justify-evenly'>
                            <Container className='w-full'>
                                <Carousel isInfinite withIndicator visibleItemsCount={1}>
                                    <div className='w-full h-auto'><img src='/img/[cursos_presenciais]_palmilha_1.webp' alt='' draggable='false' className='w-3/4 max-[820px]:w-full h-auto m-auto' /></div>
                                    <div className='w-full h-auto'><img src='/img/[cursos_presenciais]_palmilha_2.webp' alt='' draggable='false' className='w-3/4 max-[820px]:w-full h-auto m-auto' /></div>
                                    <div className='w-full h-auto'><img src='/img/[cursos_presenciais]_palmilha_3.webp' alt='' draggable='false' className='w-3/4 max-[820px]:w-full h-auto m-auto' /></div>
                                    <div className='w-full h-auto'><img src='/img/[cursos_presenciais]_palmilha_4.webp' alt='' draggable='false' className='w-3/4 max-[820px]:w-full h-auto m-auto' /></div>
                                </Carousel>
                            </Container>
                        </Wrapper>
                        <Wrapper className='justify-evenly items-center'>
                            <Container className='w-[40%] max-[820px]:w-[80%] max-[426px]:w-[96%] m-4'>
                                <h2 className='grad-text'>Além da confecção de palmilhas, ainda teremos:</h2>
                                <div className="divider left"></div>
                                <br />
                                <List className="chain">
                                    <li>Anatomia e biomecânica para a prescrição de palmilhas</li>
                                    <li>Prescrição de palmilhas para as diferentes queixas dos pés (fasciopatias, metatarsalgias, pés diabéticos, dentre outras)</li>
                                    <li>Avaliação do pé/tornozelo para a prescrição de palmilhas</li>
                                    <li>Prescrição de elementos e tipos de moldagens</li>
                                    <li>Estudo de casos e discussão das prescrições dos diferentes tipos de palmilhas</li>
                                    <li>Apresentação dos materiais e ferramentas (lixadeira, microrretífica, termoprensa, soprador e moldadores)</li>
                                </List>
                            </Container>
                            <Container className='w-[40%] max-[820px]:w-[80%] max-[426px]:w-[96%] m-4 relative max-[820px]:hidden'>
                                <div className='w-9/12 aspect-square absolute top-1/2 left-1/2 [transform:translate(-50%,-50%)_perspective(800px)_rotateY(-8deg)]'>
                                    <video autoPlay muted loop width={480} height={480} className='rounded-lg shadow-[20px_70px_40px_-20px_rgba(0,0,0,0.2)]'>
                                        <source src='/img/slideshow_cursos.mp4' type='video/mp4' />
                                    </video>
                                </div>
                            </Container>
                        </Wrapper>

                    </Content_Default>
                </Content>
            </Section>

            <Section id="cp-sobre" className='py-32 px-8 flex items-center max-[820px]:pt-[120vw] max-[820px]:pb-8 border-b border-cyan-100'>
                <Content className='relative z-10'>
                    <Content_Default>
                        <Container className='w-1/2 max-[820px]:w-[80%] max-[426px]:w-[96%] pt-8 max-[820px]:pt-0'>
                            <p className='font-extralight'>Olá, meu nome é</p>
                            <h1 className='text-left grad-text'>ANDRÉ MENDES</h1>
                            <div className="divider left"></div>
                            <p>Sou fisioterapeuta especialista em fisioterapia ortopédica com 20 anos de carreira. Sou mestre e doutorando em fisioterapia e autor do livro <i>Palmilhas Terapêuticas: Ciência e Prática Clínica</i>, sócio-criador da Podoshop® e do Palmilhando® com 15 anos de experiência na prescrição e confecção de palmilhas terapêuticas.</p>
                        </Container>
                    </Content_Default>
                </Content>
            </Section>

            <Section id='cp-investimento'>
                <Content>
                    <Content_Default>
                        <Wrapper className='items-center justify-evenly max-[820px]:flex-col-reverse'>
                            <Container className='w-[40%] max-[820px]:w-[80%] max-[426px]:w-[96%] m-4 max-[820px]:mx-0' id='location-info'>
                                {option != 'select' ? (
                                    <Container className='w-full max-[820px]:items-center'>
                                        <h1>LOCAL SELECIONADO:</h1>
                                        <br />
                                        <h1 className='grad-text max-[820px]:text-2xl'>{optionData.cityName}</h1>
                                        <div className="divider"></div>
                                        <Wrapper className='items-center justify-start max-[820px]:justify-center w-full my-4'>
                                            <Wrapper className="items-center flex-nowrap w-max m-2">
                                                <img src='/img/svg/map_pin.svg' alt='' draggable='false' className='w-6 h-6 mr-4' />
                                                <h2 className='font-extralight max-[820px]:text-base'>{optionData.location}</h2>
                                            </Wrapper>
                                            <Wrapper className="items-center flex-nowrap w-max m-2">
                                                <img src='/img/svg/calendar.svg' alt='' draggable='false' className='w-6 h-6 mr-4' />
                                                <h2 className='font-extralight max-[820px]:text-base'>{optionData.eventDuration}</h2>
                                            </Wrapper>
                                        </Wrapper>
                                        <div className='bg-slate-400 rounded-md w-full aspect-video my-4 relative'><p className="absolute-center">[ mapa do local ]</p></div>
                                    </Container>
                                ) : (
                                    <Container className='w-full max-[820px]:items-center'>
                                        <h1>PRÓXIMO CURSO:</h1>
                                        <br />
                                        <h1 className='grad-text max-[820px]:text-2xl'>{upcomingLocation.cityName}</h1>
                                        <div className="divider"></div>
                                        <Wrapper className='items-center justify-start max-[820px]:justify-center w-full my-4'>
                                            <Wrapper className="items-center flex-nowrap w-max m-2">
                                                <img src='/img/svg/map_pin.svg' alt='' draggable='false' className='w-6 h-6 mr-4' />
                                                <h2 className='font-extralight max-[820px]:text-base'>{upcomingLocation.location}</h2>
                                            </Wrapper>
                                            <Wrapper className="items-center flex-nowrap w-max m-2">
                                                <img src='/img/svg/calendar.svg' alt='' draggable='false' className='w-6 h-6 mr-4' />
                                                <h2 className='font-extralight max-[820px]:text-base'>{upcomingLocation.eventDuration}</h2>
                                            </Wrapper>
                                        </Wrapper>
                                        <div className='bg-slate-400 rounded-md w-full aspect-video my-4 relative'><p className="absolute-center">[ mapa do local ]</p></div>
                                    </Container>
                                )}
                                <br />
                            </Container>
                            <Container className='w-[40%] max-[820px]:w-[80%] max-[426px]:w-[96%] m-4 max-[820px]:mx-0'>
                                <div className="flex flex-col items-center justify-between px-[1%] py-[10%] border border-cyan-100 rounded-xl backdrop-brightness-50 shadow-md text-center h-full relative duration-200 ease-out">
                                    <Badge className='border border-inherit rounded-full w-max py-2 px-4 !bg-[color:rgb(7_49_69)]'>
                                        <p className='grad-text grad-slide'>SEU INVESTIMENTO</p>
                                    </Badge>
                                    <img src='/img/svg/logo_cursos_presenciais.svg' alt='' draggable='false' className='w-1/2' />
                                    <br />
                                    <div className="divider"></div>
                                    <br />
                                    <h1 className='text-3xl'><mark className="font-light text-white">até 12x de</mark> R$ 250<sup><small>,00</small></sup></h1>
                                    <h2 className='text-xs font-light my-4'>ou R$ 3000 à vista</h2>
                                    <br />
                                    <h2 className='font-extralight'>RESERVE SUA VAGA</h2>
                                    <div className="divider"></div>
                                    <br />
                                    <select name="localCurso" defaultValue='select' className='cor-4 rounded-lg shadow-md w-9/12 p-2 cursor-pointer' onChange={(e) => {
                                            setOption(e.target.value); 
                                            if (window.visualViewport.width <= 820) {$('#location-info').scrollIntoView({block: 'start'})}
                                        }}>
                                        <option value="select">Selecione sua cidade...</option>
                                        <option value="sao_jose_dos_campos">São José Dos Campos - SP</option>
                                        <option value="curitiba">Curitiba - PR</option>
                                        <option value="belo_horizonte">Belo Horizonte - MG</option>
                                        <option value="porto_alegre">Porto Alegre - RS</option>
                                    </select>
                                    <br />
                                    <p className='text-sm font-extralight w-9/12'>Selecione uma opção para ver detalhes sobre o local do evento</p>
                                    <br />
                                    <a href={optionData.purchaseLink} target="_blank"
                                        className={
                                            `relative z-10 w-9/12 mx-auto py-4 px-8 rounded-xl border font-bold border-cyan-100 shadow-md bg-[linear-gradient(to_right,var(--grad-1))] bg-[length:150%] select-none
                                                ${option == 'select' ? 'saturate-0 opacity-50 cursor-not-allowed pointer-events-none' : 'hover:scale-[101%] hover:brightness-110 hover:translate-y-[-1px] duration-100 ease-out cursor-pointer'}`
                                        }>GARANTIR MINHA VAGA</a>
                                    <img src='/img/pagamento.webp' alt='' draggable='false' className='w-9/12 opacity-30 mt-8' />
                                    <br />
                                </div>
                            </Container>
                        </Wrapper>
                    </Content_Default>
                </Content>
            </Section>

        </div>
    );
}