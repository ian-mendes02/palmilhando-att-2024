'use client';
import React, {useEffect} from 'react';
import {Section, Content, Content_Default, Container, Wrapper, Badge} from '@/lib/modules/layout-components';
import {Button, List, Caret} from '@/lib/modules/ui-components';

export default function Page(props) {

    React.useEffect(() => {
        !function(e, t, a, n, g) {e[n] = e[n] || [], e[n].push({"gtm.start": (new Date).getTime(), event: "gtm.js"}); var m = t.getElementsByTagName(a)[0], r = t.createElement(a); r.async = !0, r.src = "https://www.googletagmanager.com/gtm.js?id=GTM-5TTGRP4", m.parentNode.insertBefore(r, m);}(window, document, "script", "dataLayer");
        document.title = 'Evento Palmilhas e Ciência Aplicada 2024';
    }, []);

    const iframeRef = React.useRef(null);
    const [isPlaying, setIsPlaying] = React.useState(false);

    const Schedule = (props) => {
        const DefaultHeader = () => {
            return (
                <tr className='cor-5 scale-[102%] shadow-md rounded-lg'>
                    <th colSpan='3' className='w-[25%] bg-slate-200 p-6 rounded-lg'><span className='flex justify-between items-center text-xl font-bold'>{props.title}<span className='text-xl font-bold'>&#43;</span></span></th>
                </tr>
            );
        };
        const TableHeader = () => {
            return (
                <tr className='cor-5 rounded-lg shadow-md scale-[102%]'>
                    <th className='w-[25%] bg-slate-200 p-4 rounded-tl-lg rounded-bl-lg max-[820px]:hidden'>HORÁRIO</th>
                    <th className='w-[25%] bg-slate-200 p-4 rounded-tl-lg rounded-bl-lg min-[820px]:hidden'><img src='/img/svg/clock.svg' width='24px' height='24px' alt='' draggable='false' className='m-auto' /></th>
                    <th className='bg-slate-200 p-6 max-[820px]:hidden'>TEMA</th>
                    <th className='bg-slate-200 p-6 min-[820px]:hidden'><img src='/img/svg/bulb.svg' width='24px' height='24px' alt='' draggable='false' className='m-auto' /></th>
                    <th className='w-[25%] bg-slate-200 p-4 rounded-tr-lg rounded-br-lg max-[820px]:hidden'>PALESTRANTE</th>
                    <th className='w-[25%] bg-slate-200 p-4 rounded-tr-lg rounded-br-lg min-[820px]:hidden'><img src='/img/svg/talk.svg' width='24px' height='24px' alt='' draggable='false' className='m-auto' /></th>
                </tr>
            );
        };
        const [titleContent, setTitleContent] = React.useState(<DefaultHeader />);
        const scheduleRef = React.useRef(null);
        const toggle_collapse = (container) => {
            /* var scheduleContent = document.querySelectorAll('.schedule .content');
            function collapseNeighbors() {
                for (let content of scheduleContent) {
                    if (content.classList.contains('active')) {
                        content.classList.remove('active');
                        toggleExpand(content);
                    }
                }
            }; */
            function toggleExpand(content) {
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                    setTitleContent(<DefaultHeader />);
                } else {
                    content.style.maxHeight = (content.scrollHeight * 3) + 'px';
                    setTitleContent(<TableHeader />);
                }
            }
            /* if (!container.nextElementSibling.classList.contains('active')) {
                collapseNeighbors();
            } */
            container.nextElementSibling.classList.toggle('active');
            toggleExpand(container.nextElementSibling);
        };
        return (
            <div className='schedule mx-auto my-8 w-[80%] max-[820px]:w-full select-none' id={props.id}>
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
                <img src='/img/thumbnail_video_apresentacao.webp' alt='' draggable='false' className='w-full h-auto rounded-lg' />
                <img src='/img/svg/play_button.svg' width={64} height={64} alt='' draggable='false' className='absolute-center opacity-80 hover:opacity-100 duration-200 ease' />
            </div>
        );
    };

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

    return (
        <div>

            <div className='absolute top-0 left-0 w-screen h-auto overflow-clip mix-blend-soft-light bg-fade-bottom'>
                <img src='/img/[evento]_header_bg.webp' alt='' draggable='false' className='w-full h-auto' />
            </div>

            <Section id='topnav' className='py-8'>
                <Content>
                    <Content_Default className='flex justify-between'>
                        <Container className='h-8 w-auto max-[820px]:mx-auto max-[820px]:h-12'>
                            <img src='/img/svg/logo_palmilhando.svg' alt='' draggable='false' className='h-full w-auto' />
                        </Container>
                        <Wrapper id='navlinks' className='max-[820px]:hidden'>
                            <List className='flex items-center'>
                                <li className='font-bold my-auto'>HOME</li>
                                <li className='font-bold my-auto'>ASSINE O PALIMILHANDO</li>
                                <li className='font-bold my-auto'>CONTATO</li>
                                <li><span className='font-bold  bg-[linear-gradient(to_right,var(--grad-1))] bg-[length:150%] rounded-full shadow-md m-auto p-3 cursor-pointer'>GARANTA SEU INGRESSO</span></li>
                            </List>
                        </Wrapper>
                    </Content_Default>
                </Content>
            </Section>

            <Section id='evt-header'>
                <Content>
                    <Content_Default className='flex justify-between items-end max-[820px]:text-center max-[820px]:flex-col max-[820px]:items-center'>
                        <Container className='h-full w-[50%] max-[820px]:w-[80%] max-[426px]:w-[96%]'>
                            <Container>
                                <img src='/img/svg/encontro_logo_3.svg' alt='' draggable='false' />
                            </Container>
                            <Container className='my-8'>
                                <Wrapper className="items-center flex-nowrap w-max m-2">
                                    <div className='w-12 h-12 mr-4 bg-sky-900 rounded-full flex items-center justify-center shadow-md'>
                                        <img src='/img/svg/map_pin.svg' alt='' draggable='false' className='w-[40%]' />
                                    </div>
                                    <h2 className='font-extralight max-[820px]:text-base'>São José dos Campos - SP</h2>
                                </Wrapper>
                                <Wrapper className="items-center flex-nowrap w-max m-2">
                                    <div className='w-12 h-12 mr-4 bg-sky-900 rounded-full flex items-center justify-center shadow-md'>
                                        <img src='/img/svg/calendar.svg' alt='' draggable='false' className='w-1/2' />
                                    </div>
                                    <h2 className='font-extralight max-[820px]:text-base'>20 e 21 de Setembro</h2>
                                </Wrapper>
                            </Container>
                        </Container>
                        <Container className='h-full w-[50%] max-[820px]:w-full p-8 max-[820px]:p-2'>
                            <p className='text-center text-sm'>CONFIRA AQUI COMO FOI NOSSO ÚLTIMO ENCONTRO</p>
                            <br />
                            <div className='w-full aspect-video relative shadow-md rounded-lg cursor-pointer bg-sky-700' ref={iframeRef}>
                                {isPlaying ? <IframeContent /> : <Thumbnail />}
                            </div>
                        </Container>
                    </Content_Default>
                </Content>
            </Section>

            <Section id='evt-programacao'>
                <Content>
                    <Content_Default>
                        <Container className="text-center m-auto">
                            <h1>Programação</h1>
                            <br />
                            <p>Confira os horários das atividades aqui.</p>
                        </Container>

                        <Schedule title='DIA 1'>
                            <tr className='text-center bg-sky-700 font-bold'>
                                <td className='p-4' colSpan='3'>AVALIAÇÃO E RACIOCÍNIO</td>
                            </tr>
                            <tr className='border-b border-x-0 border-slate-100 text-center bg-[var(--cor-1)]'>
                                <td className='w-[25%] p-4'>08:00</td>
                                <td>Abertura do Evento</td>
                                <td className='w-[25%] p-4'>André e Clayton</td>
                            </tr>
                            <tr className='border-b border-x-0 border-slate-100 text-center bg-[var(--cor-1)]'>
                                <td className='w-[25%] p-4'>08:30</td>
                                <td className='p-4'>Avaliação Clínica do Pé</td>
                                <td className='w-[25%] p-4'>Flávia Nakatame</td>
                            </tr>
                            <tr className='border-b border-x-0 border-slate-100 text-center bg-[var(--cor-1)]'>
                                <td className='w-[25%] p-4 '>09:10</td>
                                <td className='p-4'>Vamos pensar juntos?</td>
                                <td className='w-[25%] p-4 '>André</td>
                            </tr>
                            <tr className='text-center bg-[var(--cor-1)]'>
                                <td className='p-4'>09:50</td>
                                <td className='p-4 font-bold'>
                                    <img src='/img/svg/coffee.svg' width='24px' height='24px' alt='' draggable='false' className='m-auto' />
                                </td>
                                <td></td>
                            </tr>

                            <tr className='text-center bg-sky-700'>
                                <td className='p-4 font-bold' colSpan='3'>PEDIATRIA</td>
                            </tr>
                            <tr className='border-b border-x-0 border-slate-100 text-center bg-teal-600'>
                                <td className='w-[25%] p-4'>10:20</td>
                                <td className='p-4'>Marcha em equino</td>
                                <td className='w-[25%] p-4'>Ana Maria Paccolo</td>
                            </tr>
                            <tr className='border-b border-x-0 border-slate-100 text-center bg-teal-600'>
                                <td className='w-[25%] p-4'>11:00</td>
                                <td className='p-4'>Evidências para palmilhas em crianças</td>
                                <td className='w-[25%] p-4'></td>
                            </tr>
                            <tr className='border-b border-x-0 border-slate-100 text-center bg-teal-600'>
                                <td className='w-[25%] p-4'>11:50</td>
                                <td className='p-4'>O pé da criança atípica</td>
                                <td className='w-[25%] p-4'>Felipe Barcelos</td>
                            </tr>
                            <tr className='text-center bg-teal-600'>
                                <td className='p-4'>12:30</td>
                                <td className='p-4 font-bold'>
                                    <img src='/img/svg/lunch.svg' width='24px' height='24px' alt='' draggable='false' className='m-auto' />
                                </td>
                                <td></td>
                            </tr>

                            <tr className='text-center bg-sky-700'>
                                <td className='p-4 font-bold' colSpan='3'>PÉS EM RISCO</td>
                            </tr>
                            <tr className='border-b border-x-0 border-slate-100 text-center bg-cyan-500'>
                                <td className='w-[25%] p-4'>14:00</td>
                                <td className='p-4'>O que diz a diretriz sobre pés diabéticos</td>
                                <td className='w-[25%] p-4'>Maria Lucóveis</td>
                            </tr>
                            <tr className='border-b border-x-0 border-slate-100 text-center bg-cyan-500'>
                                <td className='w-[25%] p-4'>14:30</td>
                                <td className='p-4'>Palmilhas e calçados para pés diabéticos</td>
                                <td className='w-[25%] p-4'></td>
                            </tr>
                            <tr className='border-b border-x-0 border-slate-100 text-center bg-cyan-500'>
                                <td className='w-[25%] p-4'>15:10</td>
                                <td className='p-4'>Lesões pré-ulcerativas (calosidades)</td>
                                <td className='w-[25%] p-4'>Karine</td>
                            </tr>
                            <tr className='text-center bg-cyan-500'>
                                <td className='p-4'>15:50</td>
                                <td className='p-4 font-bold'>
                                    <img src='/img/svg/coffee.svg' width='24px' height='24px' alt='' draggable='false' className='m-auto' />
                                </td>
                                <td></td>
                            </tr>

                            <tr className='text-center bg-sky-700'>
                                <td className='p-4 font-bold' colSpan='3'>ESPORTES</td>
                            </tr>
                            <tr className='border-b border-x-0 border-slate-100 text-center bg-violet-400'>
                                <td className='w-[25%] p-4'>16:20</td>
                                <td className='p-4'>Palmilhas no futebol profissional</td>
                                <td className='w-[25%] p-4'>Leonardo Signorini</td>
                            </tr>
                            <tr className='border-b border-x-0 border-slate-100 text-center bg-violet-400'>
                                <td className='w-[25%] p-4'>17:00</td>
                                <td className='p-4'>O que precisamos saber sobre a fascite em corredores</td>
                                <td className='w-[25%] p-4'>Roberta Mendonça ou Michelle Sena</td>
                            </tr>
                            <tr className='text-center bg-violet-400 rounded-br-lg rounded-bl-lg'>
                                <td className='p-4 rounded-bl-lg'>17:40</td>
                                <td className='p-4 font-bold'>ENCERRAMENTO</td>
                                <td className='rounded-br-lg'></td>
                            </tr>
                        </Schedule>

                        <Schedule title='DIA 2'>
                            <tr className='text-center bg-sky-700 font-bold'>
                                <td className='p-4' colSpan='3'>-</td>
                            </tr>
                            <tr className='border-b border-x-0 border-slate-100 text-center bg-[var(--cor-1)]'>
                                <td className='w-[25%] p-4'>08:00</td>
                                <td className='p-4'>O que mudou desde o último encontro?</td>
                                <td className='w-[25%] p-4'>Débora/Jaíse/Renata</td>
                            </tr>
                            <tr className='border-b border-x-0 border-slate-100 text-center bg-[var(--cor-1)]'>
                                <td className='w-[25%] p-4'>09:00</td>
                                <td className='p-4'>Saúde baseada em valor</td>
                                <td className='w-[25%] p-4'>Rafael Alaiti</td>
                            </tr>
                            <tr className='text-center bg-[var(--cor-1)]'>
                                <td className='p-4'>09:50</td>
                                <td className='p-4 font-bold'>
                                    <img src='/img/svg/coffee.svg' width='24px' height='24px' alt='' draggable='false' className='m-auto' />
                                </td>
                                <td></td>
                            </tr>

                            <tr className='text-center bg-sky-700'>
                                <td className='p-4 font-bold' colSpan='3'>MARKETING</td>
                            </tr>
                            <tr className='border-b border-x-0 border-slate-100 text-center bg-teal-600'>
                                <td className='w-[25%] p-4'>10:20</td>
                                <td className='p-4'>Posicionamento de marca</td>
                                <td className='w-[25%] p-4'>Natália Faro</td>
                            </tr>
                            <tr className='border-b border-x-0 border-slate-100 text-center bg-teal-600'>
                                <td className='w-[25%] p-4'>11:00</td>
                                <td className='p-4'>Estratégias digitais</td>
                                <td className='w-[25%] p-4'>Lucas Nery</td>
                            </tr>
                            <tr className='border-b border-x-0 border-slate-100 text-center bg-teal-600'>
                                <td className='w-[25%] p-4'>11:40</td>
                                <td className='p-4'>Vídeos que vendem</td>
                                <td className='w-[25%] p-4'>Leonardo</td>
                            </tr>
                            <tr className='text-center bg-teal-600'>
                                <td className='p-4'>12:30</td>
                                <td className='p-4 font-bold'>
                                    <img src='/img/svg/lunch.svg' width='24px' height='24px' alt='' draggable='false' className='m-auto' />
                                </td>
                                <td></td>
                            </tr>

                            <tr className='text-center bg-sky-700'>
                                <td className='p-4 font-bold' colSpan='3'>FINANCEIRO</td>
                            </tr>
                            <tr className='border-b border-x-0 border-slate-100 text-center bg-cyan-500'>
                                <td className='w-[25%] p-4'>14:00</td>
                                <td className='p-4'>Investimentos</td>
                                <td className='w-[25%] p-4'></td>
                            </tr>
                            <tr className='border-b border-x-0 border-slate-100 text-center bg-cyan-500'>
                                <td className='w-[25%] p-4'>14:40</td>
                                <td className='p-4'></td>
                                <td className='w-[25%] p-4'></td>
                            </tr>
                            <tr className='border-b border-x-0 border-slate-100 text-center bg-cyan-500'>
                                <td className='w-[25%] p-4'>15:20</td>
                                <td className='p-4'></td>
                                <td className='w-[25%] p-4'></td>
                            </tr>
                            <tr className='text-center bg-cyan-500'>
                                <td className='p-4'>16:00</td>
                                <td className='p-4 font-bold'>
                                    <img src='/img/svg/coffee.svg' width='24px' height='24px' alt='' draggable='false' className='m-auto' />
                                </td>
                                <td></td>
                            </tr>

                            <tr className='text-center bg-sky-700'>
                                <td className='p-4 font-bold' colSpan='3'>-</td>
                            </tr>
                            <tr className='border-b border-x-0 border-slate-100 text-center bg-violet-400'>
                                <td className='w-[25%] p-4'>16:30</td>
                                <td className='p-4'>Estudo de caso</td>
                                <td className='w-[25%] p-4'></td>
                            </tr>
                            <tr className='text-center bg-violet-400 rounded-br-lg rounded-bl-lg'>
                                <td className='p-4 rounded-bl-lg'>17:40</td>
                                <td className='p-4 font-bold'>ENCERRAMENTO</td>
                                <td className='rounded-br-lg'></td>
                            </tr>
                        </Schedule>

                    </Content_Default>
                </Content>
            </Section>

            <Section id='evt-parceiros'>
                <Content>
                    <Content_Default>
                        <h1 className='text-center'>Hoteis Parceiros</h1>
                    </Content_Default>
                </Content>
            </Section>

            <Section id='evt-como-chegar'>
                <Content>
                    <Content_Default>
                        <h1 className='text-center'>Como Chegar</h1>
                    </Content_Default>
                </Content>
            </Section>

            <Section id='evt-o-que-fazer'>
                <Content>
                    <Content_Default>
                        <h1 className='text-center'>O Que Fazer Na Região</h1>
                    </Content_Default>
                </Content>
            </Section>

            <Section id='evt-valor' className='bg-[var(--cor-4)] border-t-2 border-cyan-100'>
                <Badge className='border-2 border-cyan-100'>
                    <img src='/img/svg/ticket.svg' alt='' draggable='false' className='w-full aspect-square' />
                </Badge>
                <Content>
                    <Content_Default>
                        <h1 className='text-center grad-text'>GARANTA SEU INGRESSO</h1>
                    </Content_Default>
                </Content>
            </Section>

        </div>
    );
}