'use client';
import {Section, Content, ContentDefault, Container, Wrapper, Badge, Grid} from '@/lib/modules/layout-components';
import {Button, Collapsible, List} from '@/lib/modules/ui-components';
import { scrollToTop, list } from '@/lib/modules/utils';
import Carousel from '@/lib/modules/carousel';
import '$/css/carousel.css';
import '$/css/globals.css';
import React from 'react';

export default function Home() {

    const $ = (el) => document.querySelector(el);

    const [viewportWidth, setViewportWidth] = React.useState(null);

    const DEV = React.useMemo(() => process.env.NEXT_PUBLIC_DEV_ENV === 'true', []);
    const ASSET_PREFIX = React.useMemo(() => DEV ? "/" : process.env.NEXT_PUBLIC_ASSET_PREFIX_PALMILHANDO, []);

    React.useEffect(() => {
        !function(e, t, a, n, g) {e[n] = e[n] || [], e[n].push({"gtm.start": (new Date).getTime(), event: "gtm.js"}); var m = t.getElementsByTagName(a)[0], r = t.createElement(a); r.async = !0, r.src = "https://www.googletagmanager.com/gtm.js?id=GTM-5TTGRP4", m.parentNode.insertBefore(r, m);}(window, document, "script", "dataLayer");
        document.title = 'Palmilhando® | Tudo o que você precisa saber, na prática.';
    }, []);

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
                    if (Math.abs(t.scrollHeight - t.scrollTop - t.clientHeight) < 1)
                        t.classList.remove('fade-text');
                    else
                        t.classList.add('fade-text');
                });
            }
        });
        function isVisible(el) {
            var rect = el.getBoundingClientRect();
            return (rect.top >= 0 && rect.bottom <= window.innerHeight * 1.5);
        }
        function fadeIn() {
            const fade = document.querySelectorAll('.fade');
            for (let i = 0; i < fade.length; i++)
                if (isVisible(fade[i]))
                    fade[i]?.classList?.add('fade-up');
        }
        window.addEventListener('scroll', fadeIn);
        return () => window.removeEventListener('scroll', fadeIn);
    }, []);

    React.useEffect(() => {
        function vw() {
            setViewportWidth(window.visualViewport.width);
        } vw();
        window.visualViewport.addEventListener('resize', vw);
        return () => window.visualViewport.removeEventListener('resize', vw);
    }, []);

    const Depoimento = (props) => (
        <div className='flex justify-between items-center bg-[var(--cor-4)] w-full border border-cyan-100 shadow-md rounded-xl px-[3%] py-4 max-[820px]:py-[10%] max-[820px]:flex-col max-[820px]:pt-[15%] relative'>
            <div className='w-[15%] max-[820px]:w-1/4 rounded-md max-[820px]:absolute max-[820px]:top-0 max-[820px]:left-1/2 max-[820px]:-translate-y-1/2 max-[820px]:-translate-x-1/2 max-[820px]:border max-[820px]:border-cyan-100'>
                <img src={props.src} alt="" draggable='false' className='rounded-[inherit]' />
            </div>
            <div className='w-[80%] max-[820px]:w-full'>
                <h2>{props.title}</h2>
                <div className="divider left"></div>
                <p>{props.children}</p>
            </div>
        </div>
    );

    const Checkout = ({text = 'JUNTE-SE AO PALMILHANDO', className}) => (
        <div
            className={list(
                'block w-max py-4 px-8 max-[820px]:px-4 mx-auto text-xl max-w-full rounded-full shadow-lg bg-sky-700 grad-alt cursor-pointer hover:brightness-105 hover:-scale-y-[5px] duration-150 ease-out',
                className
            )}
            onClick={() => scrollToTop('#seu-investimento')}
        ><span className='m-auto text-center text-white font-bold'>{text}</span></div>
    );

    return (
        <main>
            <Section id='header' className='h-[55rem] max-[820px]:h-[95vh]'>
                <Content className='relative z-10 w-full'>
                    <ContentDefault>
                        <Wrapper className='justify-center' id='header-box'>
                            <Container className='items-center w-[65%] max-[820px]:w-[80%] max-[426px]:w-full max-w-[820px]'>
                                <img src={ASSET_PREFIX + 'img/svg/logo_palmilhando.svg'} alt='' className='w-72 mb-4 max-w-[640px]' draggable='false' />
                                <div className="divider"></div>
                                <p className='text-2xl text-center my-4'>
                                    <strong>Tudo o que você precisa para ser <mark className="cor-2">referência em palmilhas</mark>, atender seus pacientes com segurança e ter um consultório <mark className="cor-3">realmente lucrativo</mark>.</strong>
                                </p>
                                <p className='text-center mb-8'>
                                    O <strong className='text-sky-600'>Palmilhando</strong> é um programa desenvolvido <mark className="font-semibold text-white">por clínicos, para clínicos</mark>, para facilitar sua vida profissional com conteúdos teóricos e aulas práticas com materiais enviados mensalmente até a sua casa - <strong>sem nenhum custo adicional</strong>.
                                </p>
                                <Checkout text='QUERO ENTRAR NO PROGRAMA'/>
                                <p className='text-sm font-extralight my-4'>Continue lendo para saber mais</p>
                            </Container>
                        </Wrapper>
                    </ContentDefault>
                </Content>
                <img className='absolute bottom-0 translate-y-[25%] w-screen z-20' src={ASSET_PREFIX + 'img/svg/white-tab.svg'} alt='' draggable='false' />
            </Section>

            <Section id='saiba-mais' className='relative z-20 bg-slate-100 cor-4 pb-16 pt-0 max-[1024px]:pb-10'>
                <Content>
                    <ContentDefault>

                        <Wrapper className='max-[820px]:flex-col items-center justify-evenly relative bottom-6 max-[820px]:bottom-0'>

                            <Wrapper className='items-center justify-evenly w-9/12 max-[820px]:w-full fade px-4'>
                                <Container className='items-center w-[45%] max-[820px]:w-[80%] max-[426px]:w-full'>
                                    <img src={ASSET_PREFIX + 'img/isolated_tablet_laptop_and_smartphone_composition.webp'} className='fade' alt='' width='512px' height='512px' draggable='false' />
                                </Container>
                                <Container className='w-[45%] max-[820px]:w-[80%] max-[426px]:w-full max-[820px]:my-8'>
                                    <h2 className='text-xl font-semibold'>O que é o <mark className="text-sky-600">Palmilhando</mark>?</h2>
                                    <br />
                                    <p>O Palmilhando é o único lugar que reúne <mark className="text-sky-600 font-semibold">absolutamente tudo</mark> o que você precisa para aprender a prescrever, confeccionar e empreender com palmilhas terapêuticas, fazendo delas o carro-chefe do seu consultório.</p>
                                </Container>
                            </Wrapper>

                            <Wrapper className='flex-nowrap max-[820px]:flex-col-reverse items-center justify-evenly w-9/12 max-[820px]:w-full fade px-4'>
                                <Container className='w-[45%] max-[820px]:w-[80%] max-[426px]:w-full max-[820px]:my-8'>
                                    <h2 className='text-xl font-semibold'>Conteúdo <mark className="text-sky-600">passo a passo</mark></h2>
                                    <br />
                                    <p>Para todos os níveis. Seja você um <mark className="text-sky-600 font-semibold">iniciante</mark> buscando aprender o básico sobre a confecção de palmilhas, ou um <mark className="text-sky-600 font-semibold">profissional experiente</mark> que deseja aprimorar sua prática e elevar seus lucros, <mark className="text-sky-600 font-semibold">o Palmilhando é o lugar certo para você</mark>.</p>
                                </Container>
                                <Container className='w-[45%] max-[820px]:w-[80%] max-[426px]:w-full max-[820px]:my-8'>
                                    <img src={ASSET_PREFIX + 'img/svg/passo-a-passo.svg'} width={480} height={480} className='w-full' alt='' draggable='false' />
                                </Container>
                            </Wrapper>

                            <Wrapper className='flex-nowrap max-[820px]:flex-col items-center justify-evenly w-9/12 max-[820px]:w-full fade px-4'>
                                <Container className='w-[45%] max-[820px]:w-[80%] max-[426px]:w-full max-[820px]:my-8'>
                                    <img src={ASSET_PREFIX + 'img/svg/comunidade-ativa.svg'} width={480} height={480} className='w-full' alt='' draggable='false' />
                                </Container>
                                <Container className='w-[45%] max-[820px]:w-[80%] max-[426px]:w-full max-[820px]:my-8'>
                                    <h2 className='text-xl font-semibold'>Comunidade <mark className="text-sky-600">ativa</mark> de membros</h2>
                                    <br />
                                    <p>Para você tirar todas as suas dúvidas, discutir casos clínicos, trocar indicações de pacientes e receber apoio para seguir mais forte. <mark className="text-sky-600 font-semibold">Com o Palmilhando, você não fica sozinho</mark>.</p>
                                </Container>
                            </Wrapper>

                            <Wrapper className='flex-nowrap max-[820px]:flex-col-reverse items-center justify-evenly w-9/12 max-[820px]:w-full fade px-4'>
                                <Container className='w-[45%] max-[820px]:w-[80%] max-[426px]:w-full max-[820px]:my-8'>
                                    <h2 className='text-xl font-semibold'>Kit de palmilha <mark className="text-sky-600">enviado para a sua casa</mark></h2>
                                    <br />
                                    <p>Todo mês você receberá um <mark className="text-sky-600 font-semibold">kit completo de materiais da Podoshop</mark> para confeccionar as suas palmilhas, chegando no total de 24 palmilhas no período de um ano.</p>
                                </Container>
                                <Container className='w-[45%] max-[820px]:w-[80%] max-[426px]:w-full max-[820px]:my-8'>
                                    <img src={ASSET_PREFIX + 'img/svg/entrega-pacote.svg'} width={480} height={480} className='w-full' alt='' draggable='false' />
                                </Container>
                            </Wrapper>

                            <Wrapper className='flex-nowrap max-[820px]:flex-col items-center justify-evenly w-9/12 max-[820px]:w-full fade px-4'>
                                <Container className='w-[45%] max-[820px]:w-[80%] max-[426px]:w-full max-[820px]:my-8'>
                                    <img src={ASSET_PREFIX + 'img/svg/vantagem-compras.svg'} width={480} height={480} className='w-full' alt='' draggable='false' />
                                </Container>
                                <Container className='w-[45%] max-[820px]:w-[80%] max-[426px]:w-full max-[820px]:my-8'>
                                    <h2 className='text-xl font-semibold'>Vantagens de compra de produtos e <mark className="text-sky-600">frete grátis</mark> durante todo o curso</h2>
                                    <br />
                                    <p>Para você aproveitar os nossos produtos da Podoshop e fazer as suas palmilhas com os <mark className="text-sky-600 font-semibold">melhores materiais</mark>.</p>
                                </Container>
                            </Wrapper>

                        </Wrapper>

                    </ContentDefault>
                </Content>
                <img id='tab-2' className='absolute w-screen scale-x-[-1] bottom-0 translate-y-[98%] z-20' src={ASSET_PREFIX + 'img/svg/tab.svg'} alt='' draggable='false' />
            </Section>

            <div id='modulos' className='relative pt-24 max-[820px]:pt-0'>

                <Section className='pb-0'>
                    <Content>
                        <ContentDefault>
                            <Wrapper className='max-[820px]:flex-col items-center justify-evenly relative bottom-6 max-[820px]:bottom-0'>

                                <Container className='items-start'>
                                    <Wrapper className='flex-nowrap max-[820px]:flex-col justify-evenly items-center'>
                                        <Container className='basis-[100%] mx-8 max-[820px]:mx-0 px-4'>
                                            <h1 className='m-8 mb-0 text-3xl font-bold'>Pra quem é o <mark className="grad-text">Palmilhando</mark>?</h1>
                                            <List className='chain mx-auto max-w-[480px] my-8'>
                                                <li>Profissionais que desejam <strong>proporcionar um tratamento mais eficiente</strong> para os seus pacientes.</li>
                                                <li>Clínicos que buscam <strong>conciliar a prática clínica com seus negócios</strong>.</li>
                                                <li><strong>Empreendedores</strong> que visam a utilizar a confecção e prescrição de palmilhas como um <strong>modelo de negócio rentável</strong>, fazendo delas o <strong>carro-chefe</strong> do consultório.</li>
                                            </List>
                                        </Container>
                                        <Container>
                                            <Wrapper className='border border-cyan-100 rounded-lg p-4 m-4 ml-16 pl-24 relative max-[820px]:ml-4 max-[820px]:pl-4 max-[820px]:pt-20 max-[820px]:mt-16 max-[820px]:text-center'>
                                                <div className='absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-32 h-32 flex justify-center p-8 items-center border-t border-t-cyan-100 border-b-4 border-b-slate-800 bg-[var(--cor-4)] bg-[linear-gradient(var(--cor-1),var(--cor-4))] rounded-xl max-[820px]:left-1/2 max-[820px]:top-0'>
                                                    <img src={ASSET_PREFIX + 'img/svg/sprout.svg'} alt='' draggable='false' className='w-full h-auto' width={32} height={32} />
                                                </div>
                                                <div>
                                                    <p className='font-bold text-xl mb-4'>"Nunca trabalhei com palmilhas, o Palmilhando é para mim?"</p>
                                                    <p>Claro! O Palmilhando oferece todo o apoio e conteúdo que você precisa para iniciar sua carreira com palmilhas, te preparando para o mercado competitivo.</p>
                                                </div>
                                            </Wrapper>
                                            <Wrapper className='border border-cyan-100 rounded-lg p-4 m-4 ml-16 pl-24 relative max-[820px]:ml-4 max-[820px]:pl-4 max-[820px]:pt-20 max-[820px]:mt-16 max-[820px]:text-center'>
                                                <div className='absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-32 h-32 flex justify-center p-8 items-center border-t border-t-cyan-100 border-b-4 border-b-slate-800 bg-[var(--cor-4)] bg-[linear-gradient(var(--cor-1),var(--cor-4))] rounded-xl max-[820px]:left-1/2 max-[820px]:top-0'>
                                                    <img src={ASSET_PREFIX + 'img/svg/rocket.svg'} alt='' draggable='false' className='w-full h-auto' width={32} height={32} />
                                                </div>
                                                <div>
                                                    <p className='font-bold text-xl mb-4'>"E eu, que já trabalho com palmilhas há algum tempo?"</p>
                                                    <p>Com o Palmilhando, você pode aperfeiçoar suas habilidades de confeção e seus métodos de avaliação e também aprender a tornar seu negócio mais rentável.</p>
                                                </div>
                                            </Wrapper>
                                        </Container>
                                    </Wrapper>
                                </Container>

                            </Wrapper>
                        </ContentDefault>
                    </Content>
                </Section>

                <Section className='bg-[radial-gradient(circle_at_center,#1E3050,#121e31)] border-t border-cyan-100'>
                    <Content className='max-[820px]:pt-8 relative z-10'>
                        <ContentDefault>
                            <h1 className='grad-text font-bold text-center text-3xl'>O PALMILHANDO POR DENTRO</h1>
                            <div className="divider"></div>
                            <Carousel isInfinite withIndicator autoScrollEnabled={false} isFullWidth={true} className='mt-8'>

                                <Wrapper className="w-full h-auto justify-center items-start">
                                    <div className="flex max-[820px]:flex-col w-9/12 max-[820px]:w-full h-[512px] max-[820px]:h-[90vh] bg-[linear-gradient(#0c6b96,#1E3050)] border-2 border-cyan-100 items-center justify-evenly rounded-xl shadow-xl p-[2.5%] max-[820px]:justify-start">
                                        <div className="relative w-82 max-[820px]:w-full overflow-hidden rounded-lg shadow-xl max-[820px]:overflow-visible">
                                            <div className="card-shine-effect rounded-lg"></div>
                                            <img src={ASSET_PREFIX + 'img/2.webp'} alt='' draggable='false' className='w-96 h-auto rounded-lg shadow-xl m-auto max-[820px]:hidden' />
                                            <img src={ASSET_PREFIX + 'img/mobile/2.webp'} width={720} height={400} alt='' draggable='false' className='w-full h-auto aspect-video rounded-lg shadow-xl m-auto min-[821px]:hidden' />
                                        </div>
                                        <div className='w-[55%] max-[820px]:w-full ml-[2.5%] max-[820px]:mx-auto max-[820px]:pr-0 max-h-[80%] max-[820px]:h-[80%] max-[820px]:mt-8 overflow-y-auto textbox'>
                                            <h2 className='grad-text text-3xl max-[426px]:text-xl'>PALMILHAS TERAPÊUTICAS: DO BÁSICO AO AVANÇADO</h2>
                                            <div className="divider left"></div>
                                            <p className='font-light max-[820px]:text-lg'>Um curso completo, que vai do básico ao avançado, com certificado e atualizado todo mês. Dá pra acreditar? Esse conteúdo foi planejado desde a anatomia e biomecânica do pé e do tornozelo, passando pela neurociência da dor, até chegar na avaliação, prescrição e confecção de palmilhas para as principais queixas dos pés. É um curso para quem quer começar ou aperfeiçoar os conhecimentos nessa área com base em evidências científicas e muita prática clínica. As aulas são gravadas e você poderá assistir quando e como quiser, no seu tempo. <br />Concluindo este módulo inicial, você tem acesso a um certificado de 30h.</p>
                                        </div>
                                    </div>
                                </Wrapper>

                                <Wrapper className="w-full h-auto justify-center items-start">
                                    <div className="flex max-[820px]:flex-col w-9/12 max-[820px]:w-full h-[512px] max-[820px]:h-[90vh] bg-[linear-gradient(#0c6b96,#1E3050)] border-2 border-cyan-100 items-center justify-evenly rounded-xl shadow-xl p-[2.5%] max-[820px]:justify-start">
                                        <div className="relative w-82 max-[820px]:w-full overflow-hidden rounded-lg shadow-xl max-[820px]:overflow-visible">
                                            <div className="card-shine-effect rounded-lg"></div>
                                            <img src={ASSET_PREFIX + 'img/1.webp'} alt='' draggable='false' className='w-96 h-auto rounded-lg shadow-xl m-auto max-[820px]:hidden' />
                                            <img src={ASSET_PREFIX + 'img/mobile/1.webp'} width={720} height={400} alt='' draggable='false' className='w-full h-auto aspect-video rounded-lg shadow-xl m-auto min-[821px]:hidden' />
                                        </div>
                                        <div className='w-[55%] max-[820px]:w-full ml-[2.5%] max-[820px]:mx-auto max-[820px]:pr-0 max-h-[80%] max-[820px]:h-[80%] max-[820px]:mt-8 overflow-y-auto textbox'>
                                            <h2 className='grad-text text-3xl max-[426px]:text-xl'>PALMILHAS & NEGÓCIOS</h2>
                                            <div className="divider left"></div>
                                            <p className='font-light max-[820px]:text-lg'>No mercado de trabalho tão dinâmico e competitivo, ser bom tecnicamente não basta. É preciso entender a estrutura do negócio e como gerar fontes de faturamento e gerar lucro ao final do mês. Nesse curso vamos te mostrar de maneira prática como criar ou evoluir o seu negócio com base em três pilares: marketing, gestão financeira e planejamento estratégico.</p>
                                        </div>
                                    </div>
                                </Wrapper>

                                <Wrapper className="w-full h-auto justify-center items-start">
                                    <div className="flex max-[820px]:flex-col w-9/12 max-[820px]:w-full h-[512px] max-[820px]:h-[90vh] bg-[linear-gradient(#0c6b96,#1E3050)] border-2 border-cyan-100 items-center justify-evenly rounded-xl shadow-xl p-[2.5%] max-[820px]:justify-start">
                                        <div className="relative w-82 max-[820px]:w-full overflow-hidden rounded-lg shadow-xl max-[820px]:overflow-visible">
                                            <div className="card-shine-effect rounded-lg"></div>
                                            <img src={ASSET_PREFIX + 'img/3.webp'} alt='' draggable='false' className='w-96 h-auto rounded-lg shadow-xl m-auto max-[820px]:hidden' />
                                            <img src={ASSET_PREFIX + 'img/mobile/3.webp'} width={720} height={400} alt='' draggable='false' className='w-full h-auto aspect-video rounded-lg shadow-xl m-auto min-[821px]:hidden' />
                                        </div>
                                        <div className='w-[55%] max-[820px]:w-full ml-[2.5%] max-[820px]:mx-auto max-[820px]:pr-0 max-h-[80%] max-[820px]:h-[80%] max-[820px]:mt-8 overflow-y-auto textbox'>
                                            <h2 className='grad-text text-3xl max-[426px]:text-xl'>TPC & LIVES</h2>
                                            <div className="divider left"></div>
                                            <p className='font-light max-[820px]:text-lg'>Pela correria do dia a dia, nem sempre conseguimos assistir aquela live da semana sobre um assunto que interessa muito, não é? Nessa coleção você encontrará todas as nossas lives e treinamentos ao vivo. Só o assinante tem acesso às gravações e pode assistir quantas vezes quiser, no melhor momento do dia.</p>
                                        </div>
                                    </div>
                                </Wrapper>

                                <Wrapper className="w-full h-auto justify-center items-start">
                                    <div className="flex max-[820px]:flex-col w-9/12 max-[820px]:w-full h-[512px] max-[820px]:h-[90vh] bg-[linear-gradient(#0c6b96,#1E3050)] border-2 border-cyan-100 items-center justify-evenly rounded-xl shadow-xl p-[2.5%] max-[820px]:justify-start">
                                        <div className="relative w-82 max-[820px]:w-full overflow-hidden rounded-lg shadow-xl max-[820px]:overflow-visible">
                                            <div className="card-shine-effect rounded-lg"></div>
                                            <img src={ASSET_PREFIX + 'img/4.webp'} alt='' draggable='false' className='w-96 h-auto rounded-lg shadow-xl m-auto max-[820px]:hidden' />
                                            <img src={ASSET_PREFIX + 'img/mobile/4.webp'} width={720} height={400} alt='' draggable='false' className='w-full h-auto aspect-video rounded-lg shadow-xl m-auto min-[821px]:hidden' />
                                        </div>
                                        <div className='w-[55%] max-[820px]:w-full ml-[2.5%] max-[820px]:mx-auto max-[820px]:pr-0 max-h-[80%] max-[820px]:max-h-full max-[820px]:h-auto max-[820px]:mt-8 overflow-y-auto textbox'>
                                            <h2 className='grad-text grad-slide text-3xl max-[426px]:text-xl'>MENTORIAS AO VIVO</h2>
                                            <div className="divider left"></div>
                                            <p className='font-light max-[820px]:text-lg'>Uma vez por mês você terá uma aula ao vivo com o André, com o Clayton ou outro convidado incrível para discutir casos clínicos que você pode levar! Imagine poder compartilhar as suas dúvidas com aquele paciente complexo! Esse é o objetivo da mentoria, passarmos um tempo valioso juntos discutindo casos, sugerindo estratégias e mostrando como é a prática baseada em evidências no mundo real. Uma grande oportunidade!</p>
                                        </div>
                                    </div>
                                </Wrapper>

                            </Carousel>
                        </ContentDefault>
                    </Content>
                    <Checkout className='my-8'/>
                </Section>
            </div>

            <Section className='bg-[#d7eeff] pt-0'>
                <div className='w-full bg-[var(--cor-7)] p-4 text-center'>
                    <h1 className='uppercase font-semibold text-lg'>Saber fazer uma palmilha básica é importante, mas não é o suficiente.</h1>
                </div>
                <Content>
                    <ContentDefault className='pt-16'>
                        <Grid className='grid-cols-2 max-[820px]:grid-cols-1'>
                            <p className='cor-4 m-4'>
                                Claro, você precisa saber confeccionar uma palmilha de qualidade que atenda às necessidades do seu paciente.
                                Mas para <mark className="cor-1 font-semibold">realmente colher os frutos do seu empreendimento, destacando-se dos demais, é preciso ter ESTRATÉGIA</mark>.
                                <br /><br />
                                Se você, profissional, não domina técnicas mais avançadas, não trata seu trabalho como um verdadeiro negócio e não tem contato com outros profissionais, há grandes chances de que seus resultados não atendam às suas expectativas.
                            </p>
                            <p className='cor-4 m-4'>
                                Nossa <strong className="cor-1 font-semibold">imersão</strong> te oferece as ferramentas que você, enquanto clínico e empreendedor, precisa para <mark className="cor-1 font-semibold">elevar sua prática clínica</mark>, <mark className="cor-1 font-semibold">aumentar seu faturamento com as palmilhas</mark> e <mark className="cor-1 font-semibold">tornar-se autoridade na sua área de atuação</mark>.
                                <br /><br />
                                Não se engane, a imersão não é um material didático qualquer, mas sim um <mark className="cor-1 font-semibold">ecossistema projetado por clínicos como você</mark>, para te preparar para o mercado competitivo e fazer valer sua dedicação como profissional, convertendo seus esforços em resultados satisfatórios.
                            </p>
                        </Grid>

                    </ContentDefault>
                </Content>
            </Section>

            <Section id='napratica'>
                <Content>
                    <ContentDefault>
                        <h1 className='grad-text grad-slide text-center px-4 mb-8 text-3xl font-bold'>Tudo o que você precisa, num lugar só.</h1>
                        <h3 className='text-center px-4'>Confira a seguir algumas das aulas que o Palmilhando oferece</h3>
                        <div className="divider"></div>
                        <Carousel isInfinite withIndicator autoScrollEnabled={false} visibleItemsCount={viewportWidth <= 820 ? 1 : 7} className='mt-8 backlit' id='aulas-carrossel'>
                            <div className="rounded-lg shadow-md m-4 max-[820px]:ml-0">
                                <img src={ASSET_PREFIX + 'img/capa_1.webp'} alt='' draggable='false' width={300} height={580} className='rounded-[inherit]' />
                            </div>
                            <div className="rounded-lg shadow-md m-4 max-[820px]:ml-0">
                                <img src={ASSET_PREFIX + 'img/capa_2.webp'} alt='' draggable='false' width={300} height={580} className='rounded-[inherit]' />
                            </div>
                            <div className="rounded-lg shadow-md m-4 max-[820px]:ml-0">
                                <img src={ASSET_PREFIX + 'img/capa_3.webp'} alt='' draggable='false' width={300} height={580} className='rounded-[inherit]' />
                            </div>
                            <div className="rounded-lg shadow-md m-4 max-[820px]:ml-0">
                                <img src={ASSET_PREFIX + 'img/capa_4.webp'} alt='' draggable='false' width={300} height={580} className='rounded-[inherit]' />
                            </div>
                            <div className="rounded-lg shadow-md m-4 max-[820px]:ml-0">
                                <img src={ASSET_PREFIX + 'img/capa_5.webp'} alt='' draggable='false' width={300} height={580} className='rounded-[inherit]' />
                            </div>
                            <div className="rounded-lg shadow-md m-4 max-[820px]:ml-0">
                                <img src={ASSET_PREFIX + 'img/capa_6.webp'} alt='' draggable='false' width={300} height={580} className='rounded-[inherit]' />
                            </div>
                            <div className="rounded-lg shadow-md m-4 max-[820px]:ml-0">
                                <img src={ASSET_PREFIX + 'img/capa_7.webp'} alt='' draggable='false' width={300} height={580} className='rounded-[inherit]' />
                            </div>
                            <div className="rounded-lg shadow-md m-4 max-[820px]:ml-0">
                                <img src={ASSET_PREFIX + 'img/capa_8.webp'} alt='' draggable='false' width={300} height={580} className='rounded-[inherit]' />
                            </div>
                            <div className="rounded-lg shadow-md m-4 max-[820px]:ml-0">
                                <img src={ASSET_PREFIX + 'img/capa_9.webp'} alt='' draggable='false' width={300} height={580} className='rounded-[inherit]' />
                            </div>
                            <div className="rounded-lg shadow-md m-4 max-[820px]:ml-0">
                                <img src={ASSET_PREFIX + 'img/capa_10.webp'} alt='' draggable='false' width={300} height={580} className='rounded-[inherit]' />
                            </div>
                            <div className="rounded-lg shadow-md m-4 max-[820px]:ml-0">
                                <img src={ASSET_PREFIX + 'img/capa_11.webp'} alt='' draggable='false' width={300} height={580} className='rounded-[inherit]' />
                            </div>
                            <div className="rounded-lg shadow-md m-4 max-[820px]:ml-0">
                                <img src={ASSET_PREFIX + 'img/capa_12.webp'} alt='' draggable='false' width={300} height={580} className='rounded-[inherit]' />
                            </div>
                        </Carousel>
                    </ContentDefault>
                </Content>
            </Section>

            <Section id='podoshop-clube' className='pt-0 bg-[var(--cor-4)] border-y-[.5rem] border-[var(--cor-1)]'>
                <div className='badge top-0 w-16 bg-[var(--cor-1)]'>
                    <img src={ASSET_PREFIX + 'img/svg/psclube-icone.svg'} width={32} height={32} className='absolute-center' alt='' draggable='false' />
                </div>
                <Content>
                    <ContentDefault className='pt-16 relative z-10'>

                        <Wrapper className='justify-evenly items-center max-[820px]:mt-0 flex-nowrap max-[820px]:flex-col' >
                            <Container className="w-[48rem] max-[820px]:w-[80%] max-[426px]:w-full m-4 px-4" id="kit-exclusivo">
                                <h1 className="grad-text text-3xl font-bold">KIT EXCLUSIVO PODOSHOP®</h1>
                                <br />
                                <p>
                                    Cada aluno do Palmilhando receberá um kit mensalmente, <mark className="text-sky-600">sem custo adicional</mark>, para colocar em prática todo o aprendizado e fazer as suas próprias palmilhas.
                                    <br /><br />
                                </p>
                                <Container className='w-[36rem] min-[821px]:hidden max-[820px]:w-9/12 max-[426px]:w-[80%] mx-auto'>
                                    <img src={ASSET_PREFIX + 'img/kit-exclusivo.webp'} alt='' draggable='false' className='m-auto w-full h-auto my-4' />
                                </Container>
                                <p>
                                    No período de um ano, você poderá fazer 24 palmilhas com o material disponibilizado e <mark className="text-sky-600">recuperar todo o seu investimento no curso</mark>.
                                    Além disso, você terá <mark className="text-sky-600">descontos</mark> em todos os produtos e <mark className="text-sky-600">frete grátis</mark> para economizar de verdade.
                                    <br /><br />
                                    Somando o desconto de frete, os descontos em compras e o material fornecido, você percebe que o valor dos benefícios é maior do que o valor da mensalidade do Palmilhando.
                                    <mark className="grad-text font-bold"> Ou seja, o Palmilhando se paga!</mark>
                                    <br /><br />
                                    Pensa com a gente: em que outro lugar você receberia tudo isso para aprimorar o seu conhecimento e conquistar um consultório ainda mais lucrativo?
                                    <br /><br />
                                    <small>* O envio do kit é exclusivo para território nacional.</small>
                                </p>
                            </Container>
                            <Container className='w-[36rem] max-[820px]:hidden m-4'>
                                <img src={ASSET_PREFIX + 'img/kit-exclusivo.webp'} alt='' draggable='false' className='m-auto w-full h-auto my-4' />
                            </Container>
                        </Wrapper>

                    </ContentDefault>
                </Content>
                <Checkout className='my-8 relative z-50'/>
            </Section>

            <Section id='palmilhando-pbe'>
                <Content>
                    <ContentDefault>
                        <Wrapper className="flex-nowrap max-[820px]:flex-col items-center justify-center">
                            <Container className='w-[36rem] max-[820px]:w-9/12 max-[426px]:w-[80%]'>
                                <h2 className='my-4 text-3xl'>No Palmilhando, tabalhamos com a <mark className="grad-text">prática baseada em evidência</mark>.</h2>
                                <h3>Exercendo sua prática com base em evidência científica, <strong>você se destaca dos demais profissionais</strong></h3>
                                <List className="chain my-4">
                                    <li>Conquista credibilidade e, como consequência, mais reconhecimento profissional.</li>
                                    <li>Tem mais segurança e assertividade para diagnosticar e tratar os seus pacientes.</li>
                                    <li>Transmite a informação científica com propriedade</li>
                                </List>
                            </Container>
                            <Container className='w-[36rem] max-[820px]:w-9/12 max-[426px]:w-full m-4 backlit'>
                                <img src={ASSET_PREFIX + 'img/png/pbe_venn.png'} alt='' draggable='false' className='m-auto w-full h-auto my-4 fade' />
                            </Container>
                        </Wrapper>
                    </ContentDefault>
                </Content>
            </Section>

            <Section id='com-o-palmilhando' className='bg-slate-100 cor-4 light z-30'>
                <Content className='border-[2px] border-white px-8 max-[820px]:px-0'>
                    <ContentDefault>
                        <Wrapper className='items-end justify-evenly py-8'>
                            <Container className='w-1/2 max-[820px]:w-[80%] max-[426px]:w-full px-4'>
                                <h1 className='text-sky-600'>Com o Palmilhando® você vai:</h1>
                                <div className="divider left"></div>
                                <br />
                                <List className='check-dark'>
                                    <li>Ter mais segurança desde a indicação até a confecção das palmilhas</li>
                                    <li>Aprender a se destacar como profissional</li>
                                    <li>Conteúdo atualizado mensalmente</li>
                                    <li>Ter acesso aos melhores materiais do mercado com descontos e frete grátis, enviados direto pra você sem nenhum custo adicional</li>
                                </List>
                            </Container>
                            <Container className='w-1/2 max-[820px]:w-[80%] max-[426px]:w-full relative'>
                                <div className='max-[820px]:hidden'>
                                    <img className='absolute bottom-[12px] left-[50%] translate-x-[-50%] w-[50%] aspect-square' src={ASSET_PREFIX + 'img/andre-avental.webp'} alt="" draggable='false' />
                                    <img className='absolute bottom-[240px] left-[50%] translate-x-[-75%] w-[45%]' src={ASSET_PREFIX + 'img/andre_prop.webp'} alt="" draggable='false' />
                                </div>
                                <Checkout className='relative z-50' />
                            </Container>
                        </Wrapper>
                    </ContentDefault>
                </Content>
            </Section>

            <Section id='seu-investimento' className='bg-[linear-gradient(#0c6b96,#1E3050)] border-y-2 border-y-cyan-100 z-30 max-[820px]:pt-4'>
                <h1 className='z-20 text-center absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0c6b96] py-2 px-8 rounded-xl border-2 border-cyan-100 max-[820px]:w-[90%]'><mark className="grad-text font-light">SEU INVESTIMENTO</mark></h1>
                <Content className='mb-16'>
                    <Wrapper className='mb-12'>
                        <table id='tabela-planos' className='shadow-lg text-lg max-w-[820px] w-[75%] max-[820px]:hidden select-none'>
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
                    <ContentDefault id="investimento">
                        <Grid className='grid-cols-3 max-[820px]:grid-cols-1 gap-4'>

                            <Container className='w-full'>
                                <div className="flex flex-col items-center justify-between px-[1%] py-[10%] border border-cyan-100 rounded-xl backdrop-brightness-125 shadow-md text-center h-full relative hover:-translate-y-2 duration-200 ease-out">
                                    <h1 className=' font-bold text-xl'>PLANO BÁSICO</h1>
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

                            <Container className='w-full'>
                                <div className="flex flex-col items-center justify-between px-[1%] py-[10%] border border-cyan-100 rounded-xl backdrop-brightness-50 shadow-md text-center h-full relative hover:-translate-y-2 duration-200 ease-out">
                                    <div className="card-shine-effect rounded-lg top-0"></div>
                                    <Badge className='border border-inherit rounded-full !w-max py-2 px-4 !bg-[color:rgb(7_49_69)]'>
                                        <p className='grad-text grad-slide'>MAIS RECOMENDADO</p>
                                    </Badge>
                                    <h1 className='grad-text grad-slide font-bold text-xl'>PLANO PREMIUM</h1>
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

                            <Container className='w-full'>
                                <div className="flex flex-col items-center justify-between px-[1%] py-[10%] border border-cyan-100 rounded-xl backdrop-saturate-50 shadow-md text-center h-full relative hover:-translate-y-2 duration-200 ease-out">
                                    <div className="card-shine-effect rounded-lg top-0 opacity-30"></div>
                                    <h1 className='cor-3 font-bold text-xl'>PLANO BUSINESS</h1>
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

                        </Grid>
                    </ContentDefault>
                </Content>
            </Section>

            <Section id='depoimentos' className='bg-[radial-gradient(circle_at_center,#1E3050,#121e31)] z-40 border-t border-cyan-100'>
                <div className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full top-0 bg-[var(--cor-4)] border-2 border-cyan-100 w-16 h-16'>
                    <img src={ASSET_PREFIX + 'img/svg/chat.svg'} alt="" draggable='false' className='w-1/2 aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
                </div>
                <Content>
                    <ContentDefault className='py-8'>
                        <h1 className='text-center text-xl font-bold'>Não acredita na gente?<br /><mark className="grad-text">Confira alguns depoimentos dos nossos alunos</mark></h1>
                        <Grid className='py-16 max-[820px]:py-24 grid-rows-3 gap-4 w-9/12 max-[820px]:w-full mx-auto'>
                            <Depoimento title='Gláucia Mendonça, Podologista' src={ASSET_PREFIX + 'img/glaucia.webp'}>
                                A didática usada pelo Clayton e pelo André é maravilhosa, sempre nos dando dicas e nos incentivando a buscar melhorar a cada dia, sem falar no grupo de WhatsApp que a troca de experiências é riquíssima. A plataforma do Palmilhando veio como um divisor de águas pra mim, e hoje me destaco como a profissional que sou.
                            </Depoimento>

                            <Depoimento reverse title='Jane Reis, Enfermeira Podiatra' src={ASSET_PREFIX + 'img/jane.webp'}>
                                No Palmilhando, com o André e o Clayton, vamos nos atualizando e discutindo ciência. Abri meu leque de atuação pois, além de palmilhas para pacientes portadores de Diabetes, atendo também outras demandas. Com certeza o Palmilhando e o Podoshop Clube são divisores de água na minha carreira. Obrigada André e Clayton pelo excelente trabalho e entrega.
                            </Depoimento>

                            <Depoimento title='Luciana Negri, Fisioterapeuta' src={ASSET_PREFIX + 'img/luciana.webp'}>
                                Na imersão eu conheci o Palmilhando, que hoje vejo como um divisor de águas na minha atuação como fisioterapeuta. Todo dia aprendo trocando ideias e não me sinto mais sozinha. Sempre tem novidades e as pesquisas e os estudos são constantes.
                            </Depoimento>
                        </Grid>
                    </ContentDefault>
                </Content>
            </Section>

            <Section id='garantia' className='pt-36 text-center z-50 bg-[radial-gradient(circle_at_center,#ffffff,rgb(241_245_249))]'>
                <div className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48'>
                    <img src={ASSET_PREFIX + 'img/selo_garantia.webp'} alt="" draggable='false' className='m-auto' />
                </div>
                <Content>
                    <ContentDefault>
                        <Container className='w-full max-w-[48rem] mx-auto cor-4'>
                            <h1>Garantia incondicional de 7 dias.</h1>
                            <p>Se, após a inscrição, você acreditar que o Palmilhando não é para você, basta solicitar o reembolso em até 7 dias após a inscrição que 100% do seu investimento será devolvido sem questionamentos.</p>
                            <Button className='text-white mt-8 shadow-md w-full max-w-96 py-4 mx-auto' onClick={() => $('#investimento').scrollIntoView({block: 'center'})}>QUERO APROVEITAR A GARANTIA</Button>
                        </Container>
                    </ContentDefault>
                </Content>
            </Section>

            <Section id='criadores' className='overflow-hidden border-t-2 border-cyan-100'>
                <Content className='relative z-10'>
                    <ContentDefault>
                        <h1 className='text-center'>Conheça os criadores do <mark className="cor-2">Palmilhando</mark>!</h1>
                        <Wrapper className='justify-center pt-32'>
                            <Container className='relative w-[40%] max-[820px]:w-full max-[820px]:mb-32 p-8 pt-28 border-2 border-cyan-100 bg-[var(--cor-1-5)] grad-light rounded-lg shadow-md mx-4 max-[820px]:mx-0'>
                                <div
                                    className='rounded-full shadow-md border-2 border-cyan-100 w-1/2 max-w-48 min-w-32 aspect-square absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-top bg-cover bg-[var(--cor-2)]'
                                    style={{backgroundImage: `url('${ASSET_PREFIX + 'img/andre-banner.webp'}')`}}
                                ></div>
                                <h2 className='text-center'>André Mendes</h2>
                                <div className="divider"></div>
                                <List className='check-light pt-4 mx-auto'>
                                    <li>Fisioterapeuta</li>
                                    <li>Mestre e doutorando em fisioterapia</li>
                                    <li>Autor do livro <i>Palmilhas Terapêuticas: Ciência e Prática Clínica</i></li>
                                    <li>Sócio fundador da Podoshop® e do Palmilhando®</li>
                                </List>
                            </Container>
                            <Container className='relative w-[40%] max-[820px]:w-full p-8 pt-28 border-2 border-cyan-100 bg-[var(--cor-1-5)] grad-light rounded-lg shadow-md mx-4 max-[820px]:mx-0'>
                                <div
                                    className='rounded-full shadow-md border-2 border-cyan-100 w-1/2 max-w-48 min-w-32 aspect-square absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-top bg-cover bg-[var(--cor-2)]'
                                    style={{backgroundImage: `url('${ASSET_PREFIX + 'img/clayton-banner.webp'}')`}}
                                ></div>
                                <h2 className='text-center'>Clayton Fuzetti</h2>
                                <div className="divider"></div>
                                <List className='check-light pt-4 mx-auto'>
                                    <li>Fisioterapeuta</li>
                                    <li>Especialista em terapia manual e morfofisiologia humana</li>
                                    <li>MBA em gestão empresarial</li>
                                    <li>Sócio fundador da Podoshop® e do Palmilhando®</li>
                                </List>
                            </Container>
                        </Wrapper>
                    </ContentDefault>
                </Content>
            </Section>

            <div className='bg-[linear-gradient(#0c6b96,#1E3050)]'>
                <Section id='faq'>
                    <Content>
                        <ContentDefault className='flex justify-evenly max-[820px]:flex-col'>
                            <Container className='w-[30%] max-[820px]:w-[90%] max-[820px]:mx-auto max-[820px]:mb-8 max-[820px]:text-center'>
                                <h2>Ficou com alguma dúvida?</h2>
                                <div className="divider left"></div>
                                <p>Confira aqui as respostas para as dúvidas mais frequentes, ou entre em contato conosco via Whatsapp</p>
                                <a href="https://wa.me//5512982628132" className='flex items-center justify-evenly py-4 my-4 px-8 border border-cyan-200 rounded-xl hover:backdrop-brightness-110 ease-out duration-200 cursor-pointer decoration-[none] text-white'>
                                    <img src={ASSET_PREFIX + 'img/svg/whatsapp-green.svg'} alt="" draggable='false' width='32px' height='32px' className='mr-2' />
                                    <p className='w-full'>ATENDIMENTO POR <mark className="cor-3">WHATSAPP</mark></p>
                                </a>
                                <Checkout />
                            </Container>
                            <Container className='w-[70%] max-[820px]:w-full ml-8 max-[820px]:ml-0'>
                                <Collapsible title='Quais são as formas de pagamento?'>
                                    <p>O pagamento pode ser efetuado com cartão de crédito, cartão de débito, boleto bancário ou PIX.</p>
                                </Collapsible>
                                <Collapsible title='A plataforma de pagamentos é segura?'>
                                    <p><strong>Sim!</strong> A Doppus é uma plataforma segura e utilizada em diferentes produtos digitais do mercado.</p>
                                </Collapsible>
                                <Collapsible title='Posso parcelar o pagamento?'>
                                    <p><strong>Sim, em até 12x no cartão de crédito</strong>. Não realizamos o parcelamento por boletos.</p>
                                </Collapsible>
                                <Collapsible title='Por quanto tempo tenho acesso ao curso?'>
                                    <p>O acesso do curso tem duração de <strong>1 ano a partir da data da compra</strong>.</p>
                                </Collapsible>
                                <Collapsible title='Como funciona a garantia?'>
                                    <p>Você pode solicitar o reembolso do seu investimento <strong>até 7 dias após a data da compra</strong>.</p>
                                </Collapsible>
                                <Collapsible title='O curso é online ou presencial?'>
                                    <p>O curso é <strong>100% online</strong> para que você possa assistir às aulas a qualquer momento, evoluindo de acordo com seu ritmo individual de aprendizado. Também teremos aulas ao vivo que ficarão disponíveis para você assistir quantas vezes quiser.</p>
                                </Collapsible>
                                <Collapsible title='Quando e onde vai chegar o meu acesso?'>
                                    <p>
                                        Você receberá acesso total a todos os conteúdos após a confirmação do pagamento.
                                        <br /><br />
                                        O seu acesso chegará no seu e-mail, junto com toda explicação que você precisa para fazer o seu login. Por isso, no ato da compra, <strong>insira um email válido e ao qual você tem acesso</strong>.
                                    </p>
                                </Collapsible>
                                <Collapsible className='text-sm' title='Serve para iniciantes? E para avançados?'>
                                    <p>Sim! A Imersão em Palmilhas Terapêuticas oferece aulas que te trarão resultados <strong>independentemente do seu estágio profissional</strong>.</p>
                                </Collapsible>
                            </Container>
                        </ContentDefault>
                    </Content>
                </Section>
            </div>

        </main>
    );
}