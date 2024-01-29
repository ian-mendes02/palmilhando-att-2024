'use client';
import React from 'react';
import {Section, Content, Content_Default, Container, Wrapper, Badge} from '@/lib/modules/layout-components';
import {Button, List} from '@/lib/modules/ui-components';

export default function Page(props) {

    React.useEffect(() => {
        !function(e, t, a, n, g) {e[n] = e[n] || [], e[n].push({"gtm.start": (new Date).getTime(), event: "gtm.js"}); var m = t.getElementsByTagName(a)[0], r = t.createElement(a); r.async = !0, r.src = "https://www.googletagmanager.com/gtm.js?id=GTM-5TTGRP4", m.parentNode.insertBefore(r, m);}(window, document, "script", "dataLayer");
        document.title = 'Evento Palmilhas e Ciência Aplicada 2024';
    }, []);


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
                    <th className='w-[25%] bg-slate-200 p-4 rounded-tl-lg rounded-bl-lg min-[820px]:hidden'><img src='/img/svg/clock.svg' width='24px' height='24px' alt='' draggable='false' className='m-auto'/></th>
                    <th className='bg-slate-200 p-6 max-[820px]:hidden'>TEMA</th>
                    <th className='bg-slate-200 p-6 min-[820px]:hidden'><img src='/img/svg/bulb.svg' width='24px' height='24px' alt='' draggable='false' className='m-auto'/></th>
                    <th className='w-[25%] bg-slate-200 p-4 rounded-tr-lg rounded-br-lg max-[820px]:hidden'>PALESTRANTE</th>
                    <th className='w-[25%] bg-slate-200 p-4 rounded-tr-lg rounded-br-lg min-[820px]:hidden'><img src='/img/svg/talk.svg' width='24px' height='24px' alt='' draggable='false' className='m-auto'/></th>
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

    return (
        <div>
            <Section id='topnav' className='h-48 max-[820px]:h-8'>
                <Content>
                    <Content_Default className='flex justify-between'>
                        <Container className='h-8 w-auto max-[820px]:mx-auto max-[820px]:h-16'>
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
                    <Content_Default className='flex justify-between max-[820px]:text-center max-[820px]:flex-col'>
                        <Container className='h-full w-[50%] max-[820px]:w-[80%] max-[426px]:w-[96%]'>
                            <Container>
                                <p className='text-3xl max-[820px]:text-xl max-[820px]:mb-4'>Encontro anual</p>
                                <h1 className='text-6xl max-[820px]:text-4xl'>Palmilhas &amp;<br />Ciência Aplicada</h1>
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
                            <div className='w-full aspect-video bg-slate-400 rounded-lg shadow-lg'></div>
                        </Container>
                    </Content_Default>
                </Content>
            </Section>

            <Section id='evt-detalhes'>
                <Content>
                    <Content_Default>
                        <Container className="text-center m-auto">
                            <h1>Programação</h1>
                            <br />
                            <p>Confira os horários das atividades aqui.</p>
                        </Container>
                        
                        <Schedule title='DIA 1'>
                            <tr>
                                <td className='p-4 text-center bg-sky-700 font-bold' colSpan='3'>AVALIAÇÃO E RACIOCÍNIO</td>
                            </tr>
                            <tr>
                                <td className='p-4 border-b border-x-0 border-slate-100 w-[25%] text-center bg-[var(--cor-1)]'>00:00</td>
                                <td className='p-4 border-b border-x-0 border-slate-100 text-center bg-[var(--cor-1)]'>Tema da palestra lorem ipsum dolor sit amet[...]</td>
                                <td className='p-4 border-b border-x-0 border-slate-100 w-[25%] text-center bg-[var(--cor-1)]'>Fulano da Silva</td>
                            </tr>
                            <tr>
                                <td className='p-4 border-b border-x-0 border-slate-100 w-[25%] text-center bg-[var(--cor-1)]'>00:00</td>
                                <td className='p-4 border-b border-x-0 border-slate-100 text-center bg-[var(--cor-1)]'>Tema da palestra lorem ipsum dolor sit amet[...]</td>
                                <td className='p-4 border-b border-x-0 border-slate-100 w-[25%] text-center bg-[var(--cor-1)]'>Fulano da Silva</td>
                            </tr>
                            <tr>
                                <td className='p-4 border-b border-x-0 border-slate-100 w-[25%] text-center bg-[var(--cor-1)]'>00:00</td>
                                <td className='p-4 border-b border-x-0 border-slate-100 text-center bg-[var(--cor-1)]'>Tema da palestra lorem ipsum dolor sit amet[...]</td>
                                <td className='p-4 border-b border-x-0 border-slate-100 w-[25%] text-center bg-[var(--cor-1)]'>Fulano da Silva</td>
                            </tr>
                            <tr>
                                <td className='p-4 text-center bg-[var(--cor-1)]'>00:00</td>
                                <td className='p-4 text-center bg-[var(--cor-1)] font-bold' colSpan='2'><img src='/img/svg/coffee.svg' width='24px' height='24px' alt='' draggable='false' className='m-auto' /></td>
                            </tr>

                            <tr>
                                <td className='p-4 text-center bg-sky-700 font-bold' colSpan='3'>PEDIATRIA</td>
                            </tr>
                            <tr>
                                <td className='p-4 border-b border-x-0 border-slate-100 w-[25%] text-center bg-teal-600'>00:00</td>
                                <td className='p-4 border-b border-x-0 border-slate-100 text-center bg-teal-600'>Tema da palestra lorem ipsum dolor sit amet[...]</td>
                                <td className='p-4 border-b border-x-0 border-slate-100 w-[25%] text-center bg-teal-600'>Fulano da Silva</td>
                            </tr>
                            <tr>
                                <td className='p-4 border-b border-x-0 border-slate-100 w-[25%] text-center bg-teal-600'>00:00</td>
                                <td className='p-4 border-b border-x-0 border-slate-100 text-center bg-teal-600'>Tema da palestra lorem ipsum dolor sit amet[...]</td>
                                <td className='p-4 border-b border-x-0 border-slate-100 w-[25%] text-center bg-teal-600'>Fulano da Silva</td>
                            </tr>
                            <tr>
                                <td className='p-4 border-b border-x-0 border-slate-100 w-[25%] text-center bg-teal-600'>00:00</td>
                                <td className='p-4 border-b border-x-0 border-slate-100 text-center bg-teal-600'>Tema da palestra lorem ipsum dolor sit amet[...]</td>
                                <td className='p-4 border-b border-x-0 border-slate-100 w-[25%] text-center bg-teal-600'>Fulano da Silva</td>
                            </tr>
                            <tr>
                                <td className='p-4 text-center bg-teal-600'>00:00</td>
                                <td className='p-4 text-center bg-teal-600 font-bold' colSpan='2'><img src='/img/svg/lunch.svg' width='24px' height='24px' alt='' draggable='false' className='m-auto' /></td>
                            </tr>

                            <tr>
                                <td className='p-4 text-center bg-sky-700 font-bold' colSpan='3'>PÉS EM RISCO</td>
                            </tr>
                            <tr>
                                <td className='p-4 border-b border-x-0 border-slate-100 w-[25%] text-center bg-cyan-500'>00:00</td>
                                <td className='p-4 border-b border-x-0 border-slate-100 text-center bg-cyan-500'>Tema da palestra lorem ipsum dolor sit amet[...]</td>
                                <td className='p-4 border-b border-x-0 border-slate-100 w-[25%] text-center bg-cyan-500'>Fulano da Silva</td>
                            </tr>
                            <tr>
                                <td className='p-4 border-b border-x-0 border-slate-100 w-[25%] text-center bg-cyan-500'>00:00</td>
                                <td className='p-4 border-b border-x-0 border-slate-100 text-center bg-cyan-500'>Tema da palestra lorem ipsum dolor sit amet[...]</td>
                                <td className='p-4 border-b border-x-0 border-slate-100 w-[25%] text-center bg-cyan-500'>Fulano da Silva</td>
                            </tr>
                            <tr>
                                <td className='p-4 border-b border-x-0 border-slate-100 w-[25%] text-center bg-cyan-500'>00:00</td>
                                <td className='p-4 border-b border-x-0 border-slate-100 text-center bg-cyan-500'>Tema da palestra lorem ipsum dolor sit amet[...]</td>
                                <td className='p-4 border-b border-x-0 border-slate-100 w-[25%] text-center bg-cyan-500'>Fulano da Silva</td>
                            </tr>
                            <tr>
                                <td className='p-4 text-center bg-cyan-500'>00:00</td>
                                <td className='p-4 text-center bg-cyan-500 font-bold' colSpan='2'><img src='/img/svg/coffee.svg' width='24px' height='24px' alt='' draggable='false' className='m-auto' /></td>
                            </tr>

                            <tr>
                                <td className='p-4 text-center bg-sky-700 font-bold' colSpan='3'>ESPORTES</td>
                            </tr>
                            <tr>
                                <td className='p-4 border-b border-x-0 border-slate-100 w-[25%] text-center bg-violet-400'>00:00</td>
                                <td className='p-4 border-b border-x-0 border-slate-100 text-center bg-violet-400'>Tema da palestra lorem ipsum dolor sit amet[...]</td>
                                <td className='p-4 border-b border-x-0 border-slate-100 w-[25%] text-center bg-violet-400'>Fulano da Silva</td>
                            </tr>
                            <tr>
                                <td className='p-4 border-b border-x-0 border-slate-100 w-[25%] text-center bg-violet-400'>00:00</td>
                                <td className='p-4 border-b border-x-0 border-slate-100 text-center bg-violet-400'>Tema da palestra lorem ipsum dolor sit amet[...]</td>
                                <td className='p-4 border-b border-x-0 border-slate-100 w-[25%] text-center bg-violet-400'>Fulano da Silva</td>
                            </tr>
                            <tr>
                                <td className='p-4 border-b border-x-0 border-slate-100 w-[25%] text-center bg-violet-400'>00:00</td>
                                <td className='p-4 border-b border-x-0 border-slate-100 text-center bg-violet-400'>Tema da palestra lorem ipsum dolor sit amet[...]</td>
                                <td className='p-4 border-b border-x-0 border-slate-100 w-[25%] text-center bg-violet-400'>Fulano da Silva</td>
                            </tr>
                            <tr>
                                <td className='p-4 border-x-0 text-center    bg-violet-400 rounded-bl-lg'>00:00</td>
                                <td className='p-4 border-x-0 text-center font-bold bg-violet-400 rounded-br-lg' colSpan='2'>ENCERRAMENTO</td>
                            </tr>
                        </Schedule>

                        <Schedule title='DIA 2'>
                            <tr>
                                <td className='p-4 text-center bg-sky-700 font-bold' colSpan='3'>AVALIAÇÃO E RACIOCÍNIO</td>
                            </tr>
                            <tr>
                                <td className='p-4 border-b border-x-0 border-slate-100 w-[25%] text-center bg-[var(--cor-1)]'>00:00</td>
                                <td className='p-4 border-b border-x-0 border-slate-100 text-center bg-[var(--cor-1)]'>Tema da palestra lorem ipsum dolor sit amet[...]</td>
                                <td className='p-4 border-b border-x-0 border-slate-100 w-[25%] text-center bg-[var(--cor-1)]'>Fulano da Silva</td>
                            </tr>
                            <tr>
                                <td className='p-4 border-b border-x-0 border-slate-100 w-[25%] text-center bg-[var(--cor-1)]'>00:00</td>
                                <td className='p-4 border-b border-x-0 border-slate-100 text-center bg-[var(--cor-1)]'>Tema da palestra lorem ipsum dolor sit amet[...]</td>
                                <td className='p-4 border-b border-x-0 border-slate-100 w-[25%] text-center bg-[var(--cor-1)]'>Fulano da Silva</td>
                            </tr>
                            <tr>
                                <td className='p-4 border-b border-x-0 border-slate-100 w-[25%] text-center bg-[var(--cor-1)]'>00:00</td>
                                <td className='p-4 border-b border-x-0 border-slate-100 text-center bg-[var(--cor-1)]'>Tema da palestra lorem ipsum dolor sit amet[...]</td>
                                <td className='p-4 border-b border-x-0 border-slate-100 w-[25%] text-center bg-[var(--cor-1)]'>Fulano da Silva</td>
                            </tr>
                            <tr>
                                <td className='p-4 text-center bg-[var(--cor-1)]'>00:00</td>
                                <td className='p-4 text-center bg-[var(--cor-1)] font-bold' colSpan='2'><img src='/img/svg/coffee.svg' width='24px' height='24px' alt='' draggable='false' className='m-auto' /></td>
                            </tr>

                            <tr>
                                <td className='p-4 text-center bg-sky-700 font-bold' colSpan='3'>PEDIATRIA</td>
                            </tr>
                            <tr>
                                <td className='p-4 border-b border-x-0 border-slate-100 w-[25%] text-center bg-teal-600'>00:00</td>
                                <td className='p-4 border-b border-x-0 border-slate-100 text-center bg-teal-600'>Tema da palestra lorem ipsum dolor sit amet[...]</td>
                                <td className='p-4 border-b border-x-0 border-slate-100 w-[25%] text-center bg-teal-600'>Fulano da Silva</td>
                            </tr>
                            <tr>
                                <td className='p-4 border-b border-x-0 border-slate-100 w-[25%] text-center bg-teal-600'>00:00</td>
                                <td className='p-4 border-b border-x-0 border-slate-100 text-center bg-teal-600'>Tema da palestra lorem ipsum dolor sit amet[...]</td>
                                <td className='p-4 border-b border-x-0 border-slate-100 w-[25%] text-center bg-teal-600'>Fulano da Silva</td>
                            </tr>
                            <tr>
                                <td className='p-4 border-b border-x-0 border-slate-100 w-[25%] text-center bg-teal-600'>00:00</td>
                                <td className='p-4 border-b border-x-0 border-slate-100 text-center bg-teal-600'>Tema da palestra lorem ipsum dolor sit amet[...]</td>
                                <td className='p-4 border-b border-x-0 border-slate-100 w-[25%] text-center bg-teal-600'>Fulano da Silva</td>
                            </tr>
                            <tr>
                                <td className='p-4 text-center bg-teal-600'>00:00</td>
                                <td className='p-4 text-center bg-teal-600 font-bold' colSpan='2'><img src='/img/svg/lunch.svg' width='24px' height='24px' alt='' draggable='false' className='m-auto' /></td>
                            </tr>

                            <tr>
                                <td className='p-4 text-center bg-sky-700 font-bold' colSpan='3'>PÉS EM RISCO</td>
                            </tr>
                            <tr>
                                <td className='p-4 border-b border-x-0 border-slate-100 w-[25%] text-center bg-cyan-500'>00:00</td>
                                <td className='p-4 border-b border-x-0 border-slate-100 text-center bg-cyan-500'>Tema da palestra lorem ipsum dolor sit amet[...]</td>
                                <td className='p-4 border-b border-x-0 border-slate-100 w-[25%] text-center bg-cyan-500'>Fulano da Silva</td>
                            </tr>
                            <tr>
                                <td className='p-4 border-b border-x-0 border-slate-100 w-[25%] text-center bg-cyan-500'>00:00</td>
                                <td className='p-4 border-b border-x-0 border-slate-100 text-center bg-cyan-500'>Tema da palestra lorem ipsum dolor sit amet[...]</td>
                                <td className='p-4 border-b border-x-0 border-slate-100 w-[25%] text-center bg-cyan-500'>Fulano da Silva</td>
                            </tr>
                            <tr>
                                <td className='p-4 border-b border-x-0 border-slate-100 w-[25%] text-center bg-cyan-500'>00:00</td>
                                <td className='p-4 border-b border-x-0 border-slate-100 text-center bg-cyan-500'>Tema da palestra lorem ipsum dolor sit amet[...]</td>
                                <td className='p-4 border-b border-x-0 border-slate-100 w-[25%] text-center bg-cyan-500'>Fulano da Silva</td>
                            </tr>
                            <tr>
                                <td className='p-4 text-center bg-cyan-500'>00:00</td>
                                <td className='p-4 text-center bg-cyan-500 font-bold' colSpan='2'><img src='/img/svg/coffee.svg' width='24px' height='24px' alt='' draggable='false' className='m-auto' /></td>
                            </tr>

                            <tr>
                                <td className='p-4 text-center bg-sky-700 font-bold' colSpan='3'>ESPORTES</td>
                            </tr>
                            <tr>
                                <td className='p-4 border-b border-x-0 border-slate-100 w-[25%] text-center bg-violet-400'>00:00</td>
                                <td className='p-4 border-b border-x-0 border-slate-100 text-center bg-violet-400'>Tema da palestra lorem ipsum dolor sit amet[...]</td>
                                <td className='p-4 border-b border-x-0 border-slate-100 w-[25%] text-center bg-violet-400'>Fulano da Silva</td>
                            </tr>
                            <tr>
                                <td className='p-4 border-b border-x-0 border-slate-100 w-[25%] text-center bg-violet-400'>00:00</td>
                                <td className='p-4 border-b border-x-0 border-slate-100 text-center bg-violet-400'>Tema da palestra lorem ipsum dolor sit amet[...]</td>
                                <td className='p-4 border-b border-x-0 border-slate-100 w-[25%] text-center bg-violet-400'>Fulano da Silva</td>
                            </tr>
                            <tr>
                                <td className='p-4 border-b border-x-0 border-slate-100 w-[25%] text-center bg-violet-400'>00:00</td>
                                <td className='p-4 border-b border-x-0 border-slate-100 text-center bg-violet-400'>Tema da palestra lorem ipsum dolor sit amet[...]</td>
                                <td className='p-4 border-b border-x-0 border-slate-100 w-[25%] text-center bg-violet-400'>Fulano da Silva</td>
                            </tr>
                            <tr>
                                <td className='p-4 text-center bg-violet-400 rounded-bl-lg'>00:00</td>
                                <td className='p-4 text-center font-bold bg-violet-400 rounded-br-lg' colSpan='3'>ENCERRAMENTO</td>
                            </tr>
                        </Schedule>

                    </Content_Default>
                </Content>
            </Section>

            <Section id='evt-apresentacao'>
                <Content>
                    <Content_Default>

                    </Content_Default>
                </Content>
            </Section>

            <Section id='evt-programacao'>
                <Content>
                    <Content_Default>

                    </Content_Default>
                </Content>
            </Section>

            <Section id='evt-parceiros'>
                <Content>
                    <Content_Default>

                    </Content_Default>
                </Content>
            </Section>

            <Section id='evt-como-chegar'>
                <Content>
                    <Content_Default>

                    </Content_Default>
                </Content>
            </Section>

            <Section id='evt-o-que-fazer'>
                <Content>
                    <Content_Default>

                    </Content_Default>
                </Content>
            </Section>

            <Section id='evt-valor'>
                <Content>
                    <Content_Default>

                    </Content_Default>
                </Content>
            </Section>

        </div>
    );
}