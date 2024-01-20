'use client';
import {Section, Content, Content_Default, Container, Wrapper, Badge} from '@/lib/modules/layout-components';
import {Button, Collapsible, List} from '@/lib/modules/ui-components';
import React from 'react';
import Carousel from '@/lib/modules/carousel';
import Image from 'next/image';
import '../../../public/css/carousel.css';
import '../../../public/css/globals.css';

export default function Home() {

    const [isPlaying, setIsPlaying] = React.useState(false);
    const iframeRef = React.useRef(null);

    React.useEffect(()=> {
        !function(e,t,a,n,g){e[n] = e[n] || [], e[n].push({"gtm.start": (new Date).getTime(), event: "gtm.js"});var m=t.getElementsByTagName(a)[0],r=t.createElement(a);r.async=!0,r.src="https://www.googletagmanager.com/gtm.js?id=GTM-5TTGRP4",m.parentNode.insertBefore(r,m)}(window,document,"script","dataLayer");
        document.title = 'Palmilhando® | Tudo o que você precisa saber, na prática.';
    },[])

    React.useEffect(() => {

        document.querySelectorAll('.card-shine-effect').forEach(c => {
            c.onmouseenter = () => c.classList.add('sheen');
            c.onanimationend = () => c.classList.remove('sheen');
        });

        document.querySelectorAll('.textbox').forEach(t => {
            let textContent = t.querySelector('p');
            if (textContent.clientHeight > t.clientHeight) {
                t.classList.add('fade-text');
                t.addEventListener('scroll', () => {
                    if (Math.abs(t.scrollHeight - t.scrollTop - t.clientHeight) < 1) {
                        t.classList.remove('fade-text');
                    } else {
                        t.classList.add('fade-text');
                    }
                });
            }
        });

        document.getElementById('header').classList.remove('py-16');

        const setHeaderPadding = () => {
            const viewport = window.visualViewport;
            const header = document.getElementById('header');
            const box = document.getElementById('header-box');
            const pic = document.getElementById('header-pic');
            if (viewport.width > 1280) {
                header.style.paddingTop = box.clientHeight / 4 + 'px';
                header.style.paddingBottom = box.clientHeight + 'px';
                pic.style.width = header.clientHeight + 'px';
                pic.style.right = (viewport.width / 2 - box.clientWidth / 1.8) + 'px';
                pic.style.transform = '';
                return;
            };
            if (viewport.height >= viewport.width) {
                header.style.paddingTop = box.clientHeight / 4 + 'px';
                header.style.paddingBottom = box.clientHeight + 'px';
                pic.style.width = header.clientHeight / 2 + 'px';
                pic.style.right = '50%';
                pic.style.transform = 'translateX(50%)';
            } else {
                header.style.paddingTop = box.clientHeight / 4 + 'px';
                header.style.paddingBottom = box.clientHeight + 'px';
                pic.style.width = header.clientHeight + 'px';
                pic.style.right = (viewport.width / 2 - box.clientWidth / 1.8) + 'px';
                pic.style.transform = '';
            };
        };

        setHeaderPadding();

        window.visualViewport.addEventListener('resize', setHeaderPadding);

    }, []);


    React.useEffect(() => {
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

    const togglePlayer = () => {
        if (!isPlaying) {
            setIsPlaying(true);
        }
    };

    function $(el) {
        return document.querySelector(el);
    }

    const Depoimento = (props) => {
        return (
            <div className='flex justify-between items-center bg-[var(--cor-4)] border border-cyan-100 shadow-md rounded-xl px-[3%] py-4 max-[820px]:py-[10%] mb-4 w-[85%] max-[820px]:w-full max-[820px]:flex-col max-[820px]:pt-[15%] max-[820px]:[&:not(:last-of-type)]:mb-24 relative'>
                <div className='w-[15%] max-[820px]:w-1/4 rounded-md max-[820px]:absolute max-[820px]:top-0 max-[820px]:left-1/2 max-[820px]:-translate-y-1/2 max-[820px]:-translate-x-1/2 max-[820px]:border max-[820px]:border-cyan-100'>
                    <img src={props.src} alt="" draggable='false' className='rounded-[inherit]' />
                </div>
                <div className='w-[80%]'>
                    <h2>{props.title}</h2>
                    <div className="divider left"></div>
                    <p>{props.children}</p>
                </div>
            </div>
        );
    };

    const Vantagem = (props) => {
        return (
            <div className='text-center flex items-center justify-center border border-cyan-100 rounded-xl shadow-md p-4 max-[820px]:p-[5%] pt-16 max-[820px]:pt-16 mx-2 h-48 mb-8 w-[calc(100%/4.5)] max-[820px]:w-[95%] backdrop-blur-xl backdrop-brightness-75 relative max-[820px]:[&:not(:last-of-type)]:mb-16 max-[820px]:mx-0'>
                <div className='w-24 h-24 flex justify-center p-4 items-center border-t border-t-cyan-100 border-b-4 border-b-slate-800 bg-[var(--cor-4)] bg-[linear-gradient(var(--cor-1),var(--cor-4))] rounded-xl absolute-top-center'>
                    <img src={props.src} alt="" draggable='false' />
                </div>
                <div>
                    {props.children}
                </div>
            </div>
        );
    };

    return (
        <div>
            <Section id='header'>
                <Content className='relative z-10 w-full'>
                    <Content_Default>
                        <Wrapper className='max-[820px]:justify-center' id='header-box'>
                            <Container className='text-center items-center min-[1280px]:w-[50%] w-96 max-[820px]:w-[80%] max-[426px]:w-[96%] ml-[5%] max-[820px]:ml-0'>
                                <Image src='/img/svg/logo_palmilhando.svg' alt='' width='350' height='80' draggable='false' />
                                <h2 className='mt-4 mb-4'><strong>MAIS QUE UM CONTEÚDO, UMA COMUNIDADE!</strong></h2>
                                <p>Um programa desenvolvido para ser uma verdadeira jornada nesse universo para quem quer começar ou aprimorar o conhecimento na avaliação, prescrição e confecção de palmilhas.</p>
                                <Button className='m-8 font-bold text-2xl shadow-md w-max py-4' onClick={() => $('#saiba-mais').scrollIntoView()}>QUERO SABER MAIS</Button>
                            </Container>
                        </Wrapper>
                    </Content_Default>
                </Content>
                <div id='header-pic'></div>
                <img className='absolute bottom-0 translate-y-[25%] w-screen z-10' src='/img/svg/white-tab.svg' alt='' draggable='false' />
            </Section>

            <Section id='saiba-mais' className='relative z-10 bg-white cor-4 pb-16 pt-0 max-[1024px]:pb-10'>
                <Content>
                    <Content_Default>

                        <Wrapper className='max-[820px]:flex-col items-center justify-evenly relative bottom-6 max-[820px]:bottom-0'>

                            <Wrapper className='items-center justify-evenly my-8 w-full'>
                                <Container className='items-center w-[45%] max-[820px]:w-[80%] max-[426px]:w-[96%]'>
                                    <img src='/img/isolated_tablet_laptop_and_smartphone_composition.webp' alt='' width='512px' height='512px' draggable='false' />
                                </Container>
                                <Container className='w-[45%] max-[820px]:w-[80%] max-[426px]:w-[96%]'>
                                    <h2>O <mark className="cor-7">Palmilhando</mark> está com você!</h2>
                                    <br />
                                    <p>
                                        O dia a dia de um clínico que trabalha com palmilhas não é fácil, afinal, cada paciente é um desafio e cada palmilha é uma solução única.
                                        Por isso, criamos o Palmilhando. Para reunir profissionais em um lugar onde possam aprender, aperfeiçoar técnicas, tirar todas as suas dúvidas, trocar experiências e, principalmente, a não se sentirem mais sozinhos.
                                        É o ambiente perfeito para o seu desenvolvimento profissional.
                                    </p>
                                </Container>
                            </Wrapper>

                            <Wrapper className='flex-nowrap max-[820px]:flex-col items-center justify-evenly my-8 w-full'>
                                <Container className='w-[45%] max-[820px]:w-[80%] max-[426px]:w-[96%]'>
                                    <h2>Conteúdo para <mark className="cor-7">todos os níveis profissionais</mark></h2>
                                    <br />
                                    <p>
                                        O conteúdo do Palmilhando foi desenvolvido com muita dedicação para acolher as necessidades de todos os níveis de experiência profissional. Nosso conteúdo vai do zero ao avançado, ajudando iniciantes a se estabelecerem no mercado de palmilhas terapêuticas, e também oferece oportunidades para clínicos mais experientes aperfeiçoarem sua abordagem e prática.
                                    </p>
                                    <Button className='mt-4 text-white shadow-md py-4 w-full' onClick={() => $('#investimento').scrollIntoView({block: 'center'})}>ASSINE JÁ O PALMILHANDO</Button>
                                </Container>
                                <Container
                                    className='w-[45%] max-[820px]:w-[80%] max-[426px]:w-[96%] max-[820px]:my-8'
                                >
                                    <div className={'aspect-video shadow-lg cursor-pointer rounded-md bg-[url(/img/thumbnail.webp)] bg-cover bg-no-repeat bg-center player'} ref={iframeRef} onClick={togglePlayer}>
                                        {isPlaying && <iframe src='https://www.youtube.com/embed/SGRkRk7JJoY?si=YlmbUvmKD89wEOS2&autoplay=1&rel=0' allow='autoplay; picture-in-picture; web-share' allowFullScreen className='outline-none w-full h-full rounded-md'></iframe>}
                                    </div>
                                </Container>
                            </Wrapper>

                        </Wrapper>
                    </Content_Default>
                </Content>
                <img id='tab-2' className='absolute w-screen scale-x-[-1] bottom-0 translate-y-[98%]' src='/img/svg/tab.svg' alt='' draggable='false' />
            </Section>

            <Section id='modulos'>
                <Content className='pt-24 max-[820px]:pt-8 relative z-10'>
                    <Content_Default>
                        <h1 className='grad-text font-normal text-center'>CONHEÇA NOSSOS CURSOS</h1>
                        <div className="divider"></div>
                        <Carousel isInfinite withIndicator autoScrollEnabled={false} className='mt-8'>
                            <Wrapper className="w-full h-9/12 h-auto justify-center items-start">
                                <div className="flex max-[820px]:flex-col w-9/12 max-[820px]:w-full h-[512px] max-[820px]:h-[90vh] bg-[linear-gradient(#0c6b96,#1E3050)] border-2 border-cyan-100 items-center justify-evenly rounded-xl shadow-xl p-[2.5%] max-[820px]:justify-start">
                                    <div className="relative w-82 max-[820px]:w-full max-[820px]:aspect-video overflow-hidden rounded-lg shadow-xl">
                                        <div className="card-shine-effect rounded-lg"></div>
                                        <img src='/img/cursos/2.webp' alt='' draggable='false' className='w-96 h-auto rounded-lg shadow-xl m-auto max-[820px]:hidden' />
                                        <img src='/img/cursos/mobile/2.webp' alt='' draggable='false' className='w-full aspect-video rounded-lg shadow-xl m-auto min-[821px]:hidden' />
                                    </div>
                                    <div className='w-[55%] max-[820px]:w-full ml-[2.5%] max-[820px]:mx-auto max-[820px]:pr-0 max-h-full max-[820px]:h-auto max-[820px]:mt-8 overflow-y-auto textbox'>
                                        <h2 className='grad-text text-3xl max-[426px]:text-xl'>PALMILHAS TERAPÊUTICAS: DO BÁSICO AO AVANÇADO</h2>
                                        <div className="divider left"></div>
                                        <p className='font-extralight'>Um curso completo, que vai do básico ao avançado, com certificado e atualizado todo mês. Dá pra acreditar? Esse conteúdo foi planejado desde a anatomia e biomecânica do pé e do tornozelo, passando pela neurociência da dor, até chegar na avaliação, prescrição e confecção de palmilhas para as principais queixas dos pés. É um curso para quem quer começar ou aperfeiçoar os conhecimentos nessa área com base em evidências científicas e muita prática clínica. As aulas são gravadas e você poderá assistir quando e como quiser, no seu tempo. <br />Concluindo este módulo inicial, você tem acesso a um certificado de 30h.</p>
                                    </div>
                                </div>
                            </Wrapper>

                            <Wrapper className="w-full h-auto justify-center items-start">
                                <div className="flex max-[820px]:flex-col w-9/12 max-[820px]:w-full h-[512px] max-[820px]:h-[90vh] bg-[linear-gradient(#0c6b96,#1E3050)] border-2 border-cyan-100 items-center justify-evenly rounded-xl shadow-xl p-[2.5%] max-[820px]:justify-start">
                                    <div className="relative w-82 max-[820px]:w-full max-[820px]:aspect-video overflow-hidden rounded-lg shadow-xl">
                                        <div className="card-shine-effect rounded-lg"></div>
                                        <img src='/img/cursos/1.webp' alt='' draggable='false' className='w-96 h-auto rounded-lg shadow-xl m-auto max-[820px]:hidden' />
                                        <img src='/img/cursos/mobile/1.webp' alt='' draggable='false' className='w-full aspect-video rounded-lg shadow-xl m-auto min-[821px]:hidden' />
                                    </div>
                                    <div className='w-[55%] max-[820px]:w-full ml-[2.5%] max-[820px]:mx-auto max-[820px]:pr-0 max-h-[80%] max-[820px]:max-h-full max-[820px]:h-auto max-[820px]:mt-8 overflow-y-auto textbox'>
                                        <h2 className='grad-text text-3xl max-[426px]:text-xl'>PALMILHAS & NEGÓCIOS</h2>
                                        <div className="divider left"></div>
                                        <p className='font-extralight'>No mercado de trabalho tão dinâmico e competitivo, ser bom tecnicamente não basta. É preciso entender a estrutura do negócio e como gerar fontes de faturamento e gerar lucro ao final do mês. Nesse curso vamos te mostrar de maneira prática como criar ou evoluir o seu negócio com base em três pilares: marketing, gestão financeira e planejamento estratégico.</p>
                                    </div>
                                </div>
                            </Wrapper>

                            <Wrapper className="w-full h-auto justify-center items-start">
                                <div className="flex max-[820px]:flex-col w-9/12 max-[820px]:w-full h-[512px] max-[820px]:h-[90vh] bg-[linear-gradient(#0c6b96,#1E3050)] border-2 border-cyan-100 items-center justify-evenly rounded-xl shadow-xl p-[2.5%] max-[820px]:justify-start">
                                    <div className="relative w-82 max-[820px]:w-full max-[820px]:aspect-video overflow-hidden rounded-lg shadow-xl">
                                        <div className="card-shine-effect rounded-lg"></div>
                                        <img src='/img/cursos/3.webp' alt='' draggable='false' className='w-96 h-auto rounded-lg shadow-xl m-auto max-[820px]:hidden' />
                                        <img src='/img/cursos/mobile/3.webp' alt='' draggable='false' className='w-full aspect-video rounded-lg shadow-xl m-auto min-[821px]:hidden' />
                                    </div>
                                    <div className='w-[55%] max-[820px]:w-full ml-[2.5%] max-[820px]:mx-auto max-[820px]:pr-0 max-h-[80%] max-[820px]:max-h-full max-[820px]:h-auto max-[820px]:mt-8 overflow-y-auto textbox'>
                                        <h2 className='grad-text text-3xl max-[426px]:text-xl'>TPC & LIVES</h2>
                                        <div className="divider left"></div>
                                        <p className='font-extralight'>Pela correria do dia a dia, nem sempre conseguimos assistir aquela live da semana sobre um assunto que interessa muito, não é? Nessa coleção você encontrará todas as nossas lives e treinamentos ao vivo. Só o assinante tem acesso às gravações e pode assistir quantas vezes quiser, no melhor momento do dia.</p>
                                    </div>
                                </div>
                            </Wrapper>

                            <Wrapper className="w-full h-auto justify-center items-start">
                                <div className="flex max-[820px]:flex-col w-9/12 max-[820px]:w-full h-[512px] max-[820px]:h-[90vh] bg-[linear-gradient(#0c6b96,#1E3050)] border-2 border-cyan-100 items-center justify-evenly rounded-xl shadow-xl p-[2.5%] max-[820px]:justify-start">
                                    <div className="relative w-82 max-[820px]:w-full max-[820px]:aspect-video overflow-hidden rounded-lg shadow-xl">
                                        <div className="card-shine-effect rounded-lg"></div>
                                        <img src='/img/cursos/4.webp' alt='' draggable='false' className='w-96 h-auto rounded-lg shadow-xl m-auto max-[820px]:hidden' />
                                        <img src='/img/cursos/mobile/4.webp' alt='' draggable='false' className='w-full aspect-video rounded-lg shadow-xl m-auto min-[821px]:hidden' />
                                    </div>
                                    <div className='w-[55%] max-[820px]:w-full ml-[2.5%] max-[820px]:mx-auto max-[820px]:pr-0 max-h-[80%] max-[820px]:max-h-full max-[820px]:h-auto max-[820px]:mt-8 overflow-y-auto textbox'>
                                        <h2 className='grad-text grad-slide text-3xl max-[426px]:text-xl'>MENTORIAS AO VIVO</h2>
                                        <div className="divider left"></div>
                                        <p className='font-extralight'>Uma vez por mês você terá uma aula ao vivo com o André, com o Clayton ou outro convidado incrível para discutir casos clínicos que você pode levar! Imagine poder compartilhar as suas dúvidas com aquele paciente complexo! Esse é o objetivo da mentoria, passarmos um tempo valioso juntos discutindo casos, sugerindo estratégias e mostrando como é a prática baseada em evidências no mundo real. Uma grande oportunidade!</p>
                                    </div>
                                </div>
                            </Wrapper>

                        </Carousel>
                    </Content_Default>
                </Content>
            </Section>

            <Section id='depoimentos' className='bg-[var(--cor-4)] z-10 border-t-2 border-cyan-100'>
                <div className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full top-0 bg-[var(--cor-4)] border-2 border-cyan-100 w-16 h-16'>
                    <img src="/img/svg/chat.svg" alt="" draggable='false' className='w-1/2 aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
                </div>
                <Content>
                    <Content_Default className='py-8'>
                        <h1 className='text-center'>Veja o que os nossos alunos estão falando sobre o <mark className="cor-7">Palmilhando</mark></h1>
                        <Container className='pt-16 max-[820px]:pt-24 items-center'>
                            <Depoimento title='Gláucia Mendonça, Podologista' src='/img/glaucia.webp'>
                                A didática usada pelo Clayton e pelo André é maravilhosa, sempre nos dando dicas e nos incentivando a buscar melhorar a cada dia, sem falar no grupo de WhatsApp que a troca de experiências é riquíssima. A plataforma do Palmilhando veio como um divisor de águas pra mim, e hoje me destaco como a profissional que sou.
                            </Depoimento>

                            <Depoimento reverse title='Jane Reis, Enfermeira Podiatra' src='/img/jane.webp'>
                                No Palmilhando, com o André e o Clayton, vamos nos atualizando e discutindo ciência. Abri meu leque de atuação pois, além de palmilhas para pacientes portadores de Diabetes, atendo também outras demandas. Com certeza o Palmilhando e o Podoshop Clube são divisores de água na minha carreira. Obrigada André e Clayton pelo excelente trabalho e entrega.
                            </Depoimento>

                            <Depoimento title='Luciana Negri, Fisioterapeuta' src='/img/luciana.webp'>
                                Na imersão eu conheci o Palmilhando, que hoje vejo como um divisor de águas na minha atuação como fisioterapeuta. Todo dia aprendo trocando ideias e não me sinto mais sozinha. Sempre tem novidades e as pesquisas e os estudos são constantes.
                            </Depoimento>
                        </Container>
                    </Content_Default>
                </Content>
            </Section>

            <Section id='com-o-palmilhando' className='bg-slate-100 cor-4 light z-30'>
                <Content className='border-[2px] border-white px-8 max-[820px]:px-0'>
                    <Content_Default>
                        <Wrapper className='items-end justify-evenly py-8'>
                            <Container className='w-1/2 max-[820px]:w-[80%] max-[426px]:w-[96%] px-2'>
                                <h1 className='cor-7'>Com o Palmilhando® você pode:</h1>
                                <div className="divider left"></div>
                                <br />
                                <List className='check-dark'>
                                    <li>Ter mais segurança desde a indicação até a confecção das palmilhas</li>
                                    <li>Aprender a se destacar como profissional</li>
                                    <li>Ter acesso aos melhores materiais do mercado com descontos e frete grátis</li>
                                    <li>Aumentar seus contatos profissionais</li>
                                    <li>Receber conteúdo atualizado mensalmente</li>
                                </List>
                            </Container>
                            <Container className='w-1/2 max-[820px]:w-[80%] max-[426px]:w-[96%] relative'>
                                <div className='max-[1160px]:hidden'>
                                    <img className='absolute bottom-[12px] left-[50%] translate-x-[-50%] w-[50%] aspect-square' src="/img/andre-avental.webp" alt="" draggable='false' />
                                    <img className='absolute bottom-[240px] left-[50%] translate-x-[-75%] w-[45%]' src="/img/andre_prop.webp" alt="" draggable='false' />
                                </div>
                                <Button
                                    className='relative z-10 text-white shadow-md py-4 w-[32rem] max-[820px]:w-[80%] max-[426px]:w-[96%] mx-auto text-2xl'
                                    onClick={() => $('#investimento').scrollIntoView({block: 'center'})}>
                                    ASSINE JÁ O PALMILHANDO!
                                </Button>
                            </Container>
                        </Wrapper>
                    </Content_Default>
                </Content>
            </Section>

            <Section id='criadores' className='overflow-hidden'>
                <Content className='relative z-10'>
                    <Content_Default>
                        <h1 className='text-center'>Conheça os criadores do <mark className="cor-2">Palmilhando</mark>!</h1>
                        <Wrapper className='justify-center pt-32'>
                            <Container className='relative w-[40%] max-[820px]:w-full max-[820px]:mb-32 p-8 pt-28 border-2 border-cyan-100 bg-[var(--cor-1-5)] grad-light rounded-lg shadow-md mx-4'>
                                <div className='rounded-full shadow-md border-2 border-cyan-100 w-1/2 max-w-48 min-w-32 aspect-square absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-[var(--cor-2)] bg-[url(/img/andre-banner.webp)] bg-top bg-cover'></div>
                                <h2 className='text-center'>André Mendes</h2>
                                <div className="divider"></div>
                                <List className='check-light pt-4 mx-auto'>
                                    <li>Fisioterapeuta</li>
                                    <li>Mestre e doutorando em fisioterapia</li>
                                    <li>Autor do livro <i>Palmilhas Terapêuticas: Ciência e Prática Clínica</i></li>
                                    <li>Sócio fundador da Podoshop® e do Palmilhando®</li>
                                </List>
                            </Container>
                            <Container className='relative w-[40%] max-[820px]:w-full p-8 pt-28 border-2 border-cyan-100 bg-[var(--cor-1-5)] grad-light rounded-lg shadow-md mx-4'>
                                <div className='rounded-full shadow-md border-2 border-cyan-100 w-1/2 max-w-48 min-w-32 aspect-square absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-[var(--cor-2)] bg-[url(/img/clayton-banner.webp)] bg-top bg-cover'></div>
                                <h2 className='text-center'>Clayton Fuzetti</h2>
                                <div className="divider"></div>
                                <List className='check-light pt-4 mx-auto'>
                                    <li>Fisioterapeuta</li>
                                    <li>Especialista em Terapia manual e morfofisiologia humana</li>
                                    <li>MBA em gestão empresarial</li>
                                    <li>Sócio fundador da Podoshop® e do Palmilhando</li>
                                </List>
                            </Container>
                        </Wrapper>
                    </Content_Default>
                </Content>
            </Section>

            <Section id='podoshop-clube' className='pt-0 bg-[var(--cor-4)] border-t-[.5rem] border-[var(--cor-1)]'>
                <div className="badge top-0 w-16 bg-[var(--cor-1)] bg-[url(/img/svg/psclube-icone.svg)]"></div>
                <Content>
                    <Content_Default className='pt-16 relative z-10'>
                        <h1 className="text-center"><mark className="text-white font-light">COM O <mark className="cor-1">PODOSHOP CLUBE</mark></mark><br /><mark className="grad-text grad-slide">TUDO ISSO SAI DE GRAÇA!</mark></h1>

                        <Wrapper className='my-8 justify-center items-center max-[820px]:pt-0'>
                            <Container className='w-[48rem] max-[820px]:w-[80%] max-[426px]:w-[96%] text-center'>
                                <p>Assinantes do Palmilhando se tornam automaticamente membros do <strong className="cor-7">Podoshop Clube</strong>, obtendo as seguintes <strong className='grad-text'>vantagens exclusivas:</strong></p>
                            </Container>
                            <Wrapper className='max-[820px]:flex-col justify-center items-center mt-24'>
                                <Vantagem src='/img/svg/free-shipping.svg'>
                                    <p className='text-lg'><strong className='grad-text'>Frete grátis</strong> nos produtos da Podoshop</p>
                                </Vantagem>
                                <Vantagem src='/img/svg/discount.svg'>
                                    <p className='text-lg'>Descontos<strong className='grad-text'> exclusivos</strong></p>
                                </Vantagem>
                                <Vantagem src='/img/svg/shopping.svg'>
                                    <p className='text-lg'><strong className='grad-text'>Acesso antecipado</strong> a lançamentos da Podoshop</p>
                                </Vantagem>
                                <Vantagem src='/img/svg/gift.svg'>
                                    <p className='text-base'><strong className='grad-text'>Materiais de qualidade internacional</strong> enviados direto para a sua casa</p>
                                </Vantagem>
                            </Wrapper>
                        </Wrapper>

                        <Wrapper className='justify-evenly items-center max-[820px]:mt-0 flex-nowrap max-[820px]:flex-col'>
                            <Container className="w-[32rem] max-[820px]:w-[80%] max-[426px]:w-[96%] m-4 max-[820px]:text-center">
                                <h1 className="grad-text">KIT EXCLUSIVO PODOSHOP®</h1>
                                <br />
                                <p className='font-extralight'>
                                    Membros do Podoshop Clube recebem <strong className='cor-7'>sem nenhum custo adicional</strong>, um kit exclusivo contendo os melhores materiais para colocar em prática tudo o que aprenderam e fazerem as suas próprias palmilhas!
                                    Você pode usar o material disponibilizado para fazer a palmilha de um dos seus pacientes e ter o seu investimento no curso de volta!
                                </p>
                                <br />
                                <p>
                                    Com o frete grátis, os descontos exclusivos e os materiais que enviamos mensalmente até a sua casa,
                                    <strong className='cor-7'> você recupera todo o seu investimento e o clube sai de graça!</strong>
                                </p>
                            </Container>
                            <Container className='w-96 max-[820px]:w-9/12 max-[426px]:w-[80%] m-4'>
                                <img src='/img/kit-exclusivo.webp' alt='' draggable='false' className='m-auto w-full h-auto my-4' />
                                <Button className='text-white shadow-md my-8 mx-auto py-3 w-full' onClick={() => $('#investimento').scrollIntoView({block: 'center'})}>CLIQUE PARA SABER MAIS</Button>
                            </Container>
                        </Wrapper>

                        <div className="divider"></div>

                        <Container className='pt-8'>
                            <h1 className='grad-text text-center font-light w-[65%] max-[820px]:w-full mx-auto'>Veja o quanto nossos membros estão se beneficiando com as vantagens do Podoshop Clube:</h1>
                            <Wrapper className='pt-8 justify-center flex-nowrap max-[820px]:flex-col'>

                                <Container className='w-1/3 max-[820px]:w-[80%] max-[426px]:w-[96%] m-4 max-[820px]:mx-auto'>
                                    <div className='relative mt-8 rounded-lg shadow-md bg-[var(--cor-1)] grad-light h-full'>
                                        <img src="/img/debora.webp" alt="" draggable='false' className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-[#4eaad5] rounded-full w-28 aspect-square' />
                                        <div className='flex flex-col justify-between items-center h-full w-full p-6  pt-16 text-sm text-center'>
                                            <p className='font-extralight'>O clube, além de desconto na compra dos materiais e fretes grátis mensais, que só isso já seria o máximo, traz a educação continuada. Na minha prática, com o clube, além de todas as vantagens, ainda consigo economizar, pois consigo otimizar mais o uso dos materiais e incluir no frete grátis os materiais que preciso para aquele mês.</p>
                                            <br />
                                            <p className='font-extralight'><i>Débora Barreto, Fisioterapeuta</i></p>
                                        </div>
                                    </div>
                                </Container>

                                <Container className='w-1/3 max-[820px]:w-[80%] max-[426px]:w-[96%] m-4 max-[820px]:mx-auto'>
                                    <div className='relative mt-8 rounded-lg shadow-md bg-[var(--cor-1)] grad-light h-full'>
                                        <img src="/img/nilson.webp" alt="" draggable='false' className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-[#4eaad5] rounded-full w-28 aspect-square' />
                                        <div className='flex flex-col justify-between items-center h-full w-full p-6 pt-16 text-sm text-center'>
                                            <p className='font-extralight'>Trabalho com palmilhas há 5 anos. mas sempre surgiram dúvidas e, essas, muitas das vezes não eram esclarecidas. Agora, participando da imersão e fazendo parte do Podoshop Clube, aprendo novas estratégias que nunca havia imaginado. Além dessas vantagens ganhamos descontos a cada compra. Ou seja, faço esses cursos sem pagar nada!</p>
                                            <br />
                                            <p className='font-extralight'><i>Nilson Bastos, Fisioterapeuta</i></p>
                                        </div>
                                    </div>
                                </Container>

                                <Container className='w-1/3 max-[820px]:w-[80%] max-[426px]:w-[96%] m-4 max-[820px]:mx-auto'>
                                    <div className='relative mt-8 rounded-lg shadow-md bg-[var(--cor-1)] grad-light h-full'>
                                        <img src="/img/renata.webp" alt="" draggable='false' className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-[#4eaad5] rounded-full w-28 aspect-square' />
                                        <div className='flex flex-col justify-between items-center h-full w-full p-6  pt-16 text-sm text-center'>
                                            <p className='font-extralight'>Sinceridade… acho que nunca mais fico sem o Palmilhando e o Podoshop Clube! São informações valiosas que nos tornam mais seguros desde a indicação, raciocínio e confecção da palmilha! O Clayton e o André conduzem esse projeto com excelência!</p>
                                            <br />
                                            <p className='font-extralight'><i>Renata Scaramussa, Fisioterapeuta</i></p>
                                        </div>
                                    </div>
                                </Container>

                            </Wrapper>
                        </Container>

                    </Content_Default>
                </Content>
            </Section>

            <Section id='investimento' className='bg-[linear-gradient(#0c6b96,#1E3050)] border-y-2 border-y-cyan-100'>
                <h1 className='z-20 text-center absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0c6b96] py-2 px-8 rounded-xl border-2 border-cyan-100 max-[820px]:w-[90%]'><mark className="grad-text font-light">SEU INVESTIMENTO</mark></h1>
                <Content className='mb-16'>
                    <Wrapper className='mb-12'>
                        <table id='tabela-planos' className='shadow-lg text-lg w-1/2 max-[820px]:w-[80%] max-[426px]:w-[96%] max-[820px]:text-xs select-none'>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th></th>
                                </tr>
                                <tr className='bg-slate-200 bg-opacity-80 cor-4 rounded-md'>
                                    <th className='rounded-tl-[inherit]'>Plano</th>
                                    <th>Valor</th>
                                    <th className='text-sky-700'>Conteúdo + Certificado</th>
                                    <th className='text-sky-700'>TPC</th>
                                    <th className='text-sky-700'>Palmilhas & Negócios</th>
                                    <th className='text-sky-700 rounded-tr-[inherit]'>Mentoria</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='bg-[#156d9f] border-b border-cyan-100'>
                                    <td className='font-bold'>Básico</td>
                                    <td className='font-bold'>R$ 1900</td>
                                    <td className='text-green-500'>&#10004;</td>
                                    <td className='text-green-500'>&#10004;</td>
                                    <td className='text-rose-700'>&#10008;</td>
                                    <td className='text-rose-700'>&#10008;</td>
                                </tr>
                                <tr className='bg-[#2e5064] border-b border-cyan-100'>
                                    <td className='font-bold cor-3'>Business</td>
                                    <td className='font-bold cor-3'>R$ 2400</td>
                                    <td className='text-green-500'>&#10004;</td>
                                    <td className='text-green-500'>&#10004;</td>
                                    <td className='text-green-500'>&#10004;</td>
                                    <td className='text-rose-700'>&#10008;</td>
                                </tr>
                                <tr className='bg-[#092b3f] rounded-md'>
                                    <td className='font-bold grad-text grad-slide rounded-bl-[inherit]'>Premium</td>
                                    <td className='font-bold grad-text grad-slide'>R$ 2900</td>
                                    <td className='text-green-500'>&#10004;</td>
                                    <td className='text-green-500'>&#10004;</td>
                                    <td className='text-green-500'>&#10004;</td>
                                    <td className='text-green-500 rounded-br-[inherit]'>&#10004;</td>
                                </tr>
                            </tbody>
                        </table>
                    </Wrapper>
                    <Wrapper className='flex-nowrap w-full max-[820px]:flex-col justify-center items-center'>
                        <Container className='w-96 max-[820px]:w-[80%] max-[426px]:w-[96%] m-4'>
                            <div className="flex flex-col items-center justify-between px-[1%] py-[10%] border border-cyan-100 rounded-xl backdrop-brightness-125 shadow-md text-center h-full relative hover:-translate-y-2 duration-200 ease-out">
                                <h1>PLANO BÁSICO</h1>
                                <p className='font-extralight text-xs w-9/12 h-12'>O essencial para você se destacar como profissional</p>
                                <div className="divider"></div>
                                <br />
                                <h1 className='text-3xl'><mark className="font-light text-white">12x de</mark> R$ 197<sup><small>,33</small></sup></h1>
                                <h2 className='text-xs font-light my-4'>(R$ 1900 à vista)</h2>
                                <a href='https://secure.doppus.com/pay/PBOJJ9ZMBOJJ9ZG90O0O8' target="_blank" className='relative z-10 w-9/12 mx-auto py-2 px-4 rounded-xl border font-bold border-cyan-100 shadow-md bg-[linear-gradient(to_right,var(--grad-1))] bg-[length:150%] select-none cursor-pointer hover:brightness-110 duration-150 ease-out'>ASSINAR</a>
                                <br />
                                <div className="divider"></div>
                                <h2 className='font-extralight'>Vantagens</h2>
                                <List className='text-left pt-4 px-[10%] checklist'>
                                    <li className='include'>Acesso a todo o conteúdo teórico e prático</li>
                                    <li className='include'>Gravação das lives mensais e lançamentos</li>
                                    <li className='not-include'>Curso de Palmilhas e Negócios</li>
                                    <li className='not-include'>Mentorias ao vivo com casos clínicos e/ou convidados</li>
                                </List>
                            </div>
                        </Container>
                        <Container className='w-96 max-[820px]:w-[80%] max-[426px]:w-[96%] m-4'>
                            <div className="flex flex-col items-center justify-between px-[1%] py-[10%] border border-cyan-100 rounded-xl backdrop-saturate-50 shadow-md text-center h-full relative hover:-translate-y-2 duration-200 ease-out">
                                <div className="card-shine-effect rounded-lg top-0 opacity-30"></div>
                                <h1 className='cor-3'>PLANO BUSINESS</h1>
                                <p className='font-extralight text-xs w-9/12 h-12'>Para o profissional que deseja transformar sua prática em um negócio lucrativo</p>
                                <div className="divider"></div>
                                <br />
                                <h1 className=' text-3xl'><mark className="font-light text-white">12x de</mark> R$ 248<sup><small>,22</small></sup></h1>
                                <h2 className='text-xs font-light my-4'>(R$ 2400 à vista)</h2>
                                <a href='https://secure.doppus.com/pay/PBOJJ9ZMBOJJ9ZG90JO08' target="_blank" className='relative z-10 w-9/12 mx-auto py-2 px-4 rounded-xl border font-bold border-cyan-100 shadow-md bg-[linear-gradient(to_right,var(--grad-1))] bg-[length:150%] select-none cursor-pointer hover:brightness-110 duration-150 ease-out'>ASSINAR</a>
                                <br />
                                <div className="divider"></div>
                                <h2 className='font-extralight'>Vantagens</h2>
                                <List className='text-left pt-4 px-[10%] checklist'>
                                    <li className='include'>Acesso a todo o conteúdo teórico e prático</li>
                                    <li className='include'>Gravação das lives mensais e lançamentos</li>
                                    <li className='include'>Curso de Palmilhas e Negócios</li>
                                    <li className='not-include'>Mentorias ao vivo com casos clínicos e/ou convidados</li>
                                </List>
                            </div>
                        </Container>
                        <Container className='w-96 max-[820px]:w-[80%] max-[426px]:w-[96%] m-4'>
                            <div className="flex flex-col items-center justify-between px-[1%] py-[10%] border border-cyan-100 rounded-xl backdrop-brightness-50 shadow-md text-center h-full relative hover:-translate-y-2 duration-200 ease-out">
                                <div className="card-shine-effect rounded-lg top-0"></div>
                                <Badge className='border border-inherit rounded-full w-max py-2 px-4 !bg-[color:rgb(7_49_69)]'>
                                    <p className='grad-text grad-slide'>MAIS RECOMENDADO</p>
                                </Badge>
                                <h1 className='grad-text grad-slide'>PLANO PREMIUM</h1>
                                <p className='font-extralight text-xs w-9/12 h-12'>Tenha acesso a todas as vantagens de ser um membro premium do Palmilhando®</p>
                                <div className="divider"></div>
                                <br />
                                <h1 className='text-3xl'><mark className="font-light text-white">12x de</mark> R$ 299<sup><small>,93</small></sup></h1>
                                <h2 className='text-xs font-light my-4'>(R$ 2900 à vista)</h2>
                                <a href='https://secure.doppus.com/pay/PBOJJ9ZMBOJJ9ZG90JO0J' target="_blank" className='relative z-10 w-9/12 mx-auto py-2 px-4 rounded-xl border font-bold border-cyan-100 shadow-md bg-[linear-gradient(to_right,var(--grad-1))] bg-[length:150%] select-none cursor-pointer hover:brightness-110 duration-150 ease-out'>ASSINAR</a>
                                <br />
                                <div className="divider"></div>
                                <h2 className='font-extralight'>Vantagens</h2>
                                <List className='text-left pt-4 px-[10%] checklist'>
                                    <li className='include'>Acesso a todo o conteúdo teórico e prático</li>
                                    <li className='include'>Gravação das lives mensais e lançamentos</li>
                                    <li className='include'>Curso de Palmilhas e Negócios</li>
                                    <li className='include'>Mentorias ao vivo com casos clínicos e/ou convidados</li>
                                </List>
                            </div>
                        </Container>
                    </Wrapper>
                </Content>
            </Section>

            <div className='bg-[linear-gradient(#0c6b96,#1E3050)]'>
                <Section id='garantia' className='pt-36 text-center'>
                    <div className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48'>
                        <img src="/img/selo_garantia.webp" alt="" draggable='false' className='m-auto' />
                    </div>
                    <Content>
                        <Content_Default>
                            <Container className='w-full max-w-[48rem] mx-auto'>
                                <h1>Garantia incondicional de 7 dias.</h1>
                                <p>Se, após a inscrição, você acreditar que o Palmilhando não é para você, basta solicitar o reembolso em até 7 dias após a inscrição que 100% do seu investimento será devolvido sem questionamentos.</p>
                                <Button className='text-white mt-8 shadow-md w-full max-w-96 py-4 mx-auto' onClick={() => $('#investimento').scrollIntoView({block: 'center'})}>QUERO ME INSCREVER!</Button>
                            </Container>
                        </Content_Default>
                    </Content>
                </Section>

                <Section id='faq'>
                    <Content>
                        <Content_Default className='flex justify-evenly max-[820px]:flex-col'>
                            <Container className='w-[30%] max-[820px]:w-[90%] max-[820px]:mx-auto max-[820px]:mb-8 max-[820px]:text-center'>
                                <h2>Ficou com alguma dúvida?</h2>
                                <div className="divider left"></div>
                                <p>Confira aqui as respostas para as dúvidas mais frequentes, ou entre em contato conosco via Whatsapp</p>
                                <a href="https://wa.me//5512982628132" className='flex items-center justify-evenly py-4 my-4 px-8 border border-cyan-200 rounded-xl hover:backdrop-brightness-110 ease-out duration-200 cursor-pointer decoration-[none] text-white'>
                                    <img src="/img/svg/whatsapp-green.svg" alt="" draggable='false' width='32px' height='32px' className='mr-2' />
                                    <p className='w-full'>ATENDIMENTO POR <mark className="cor-3">WHATSAPP</mark></p>
                                </a>
                            </Container>
                            <Container className='w-[70%] max-[820px]:w-full ml-8 max-[820px]:ml-0'>
                                <Collapsible title='Quais são as formas de pagamento?'>
                                    <p>O pagamento pode ser feito no <strong>cartão de crédito em até 12x</strong> ou no <strong>PIX</strong> com desconto.</p>
                                </Collapsible>
                                <Collapsible title='A plataforma de pagamentos é segura?'>
                                    <p><strong>Sim!</strong> A Doppus é uma plataforma segura e utilizada em diferentes produtos digitais do mercado.</p>
                                </Collapsible>
                                <Collapsible title='Posso parcelar o pagamento?'>
                                    <p><strong>Sim, em até 12x no cartão de crédito</strong>. Não realizamos o parcelamento por boletos.</p>
                                </Collapsible>
                                <Collapsible title='Por quanto tempo tenho acesso ao curso?'>
                                    <p>O plano é <strong>anual</strong>. Sendo assim, você terá acesso por 12 meses, com possibilidade de renovação.</p>
                                </Collapsible>
                                <Collapsible title='Como funciona a garantia?'>
                                    <p>Você pode solicitar o reembolso do seu investimento até 7 dias após a data da compra.</p>
                                </Collapsible>
                                <Collapsible title='O curso é online ou presencial?'>
                                    <p><strong>O curso é 100% online</strong> para que você possa assistir às aulas a qualquer momento, evoluindo de acordo com seu ritmo individual de aprendizado.</p>
                                </Collapsible>
                                <Collapsible title='Como recebo meu acesso?'>
                                    <p>Assim que a sua compra for aprovada, <strong>enviaremos um email contendo as instruções de acesso</strong> para o endereço de email utilizado no momento da compra.</p>
                                </Collapsible>
                                <Collapsible className='text-s' title={<p className='max-[512px]:text-[.85rem]'>Não sei fazer palmilhas, esse curso é para mim?</p>}>
                                    <p><strong>Sim! Esse conteúdo foi planejando para iniciantes e experts.</strong> Você encontrará todo o conteúdo necessário para começar e terá o suporte para dúvidas no nosso grupo de alunos.</p>
                                </Collapsible>
                            </Container>
                        </Content_Default>
                    </Content>
                </Section>
            </div>

        </div>
    );
}