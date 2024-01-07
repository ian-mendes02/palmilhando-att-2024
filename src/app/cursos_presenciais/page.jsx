'use client';
import {Section, Content, Content_Default, Container, Wrapper, Box, Badge} from '@/lib/modules/layout-components';
import {Button, Collapsible, List, Caret} from '@/lib/modules/ui-components';
import {classList, mobile, after, before} from '@/lib/modules/class-utils';
import Carousel from '@/lib/modules/carousel';
export default function Page() {

    return (
        <div>
            <div className='bg-[linear-gradient(#0a0a0a,#1E3050)]'>
                <Section id="cp-header" className='h-[512px] flex flex-col justify-center'>
                    <Content className='relative z-10'>
                        <Content_Default>
                            <h1 className='text-center'>CURSO PRESENCIAL: <br /> PALMILHAS TERAPÊUTICAS</h1>
                            <h3 className='text-center'>(logo pendente)</h3>
                        </Content_Default>
                    </Content>
                </Section>
                <Section id="cp-proposta">
                    <Content>
                        <Content_Default>
                            <Wrapper className='justify-evenly items-center'>
                                <Container className='w-[32rem] max-[1024px]:w-96 max-[820px]:w-full px-8 mb-8'>
                                    <h2>O QUE VOCÊ APRENDERÁ NESSE CURSO</h2>
                                    <br />
                                    <p>
                                        O curso de Palmilhas Terapêuticas foi planejado para ser uma experiência completa para quem quer aprender a avaliar, prescrever e confeccionar palmilhas terapêuticas.
                                        Serão dois dias intensos de teoria e muita prática de avaliação e confecção de palmilhas com diferentes técnicas de moldagem e configurações de elementos.
                                    </p>
                                </Container>
                                <Container className='w-[32rem] max-[1024px]:w-96 max-[820px]:w-full px-8'>
                                    <Carousel isInfinite withIndicator visibleItemsCount={1}>
                                        <div className='w-full aspect-video bg-blue-500'></div>
                                        <div className='w-full aspect-video bg-green-500'></div>
                                        <div className='w-full aspect-video bg-yellow-500'></div>
                                        <div className='w-full aspect-video bg-orange-500'></div>
                                        <div className='w-full aspect-video bg-red-500'></div>
                                        <div className='w-full aspect-video bg-pink-500'></div>
                                        <div className='w-full aspect-video bg-purple-500'></div>
                                    </Carousel>
                                </Container>
                            </Wrapper>
                        </Content_Default>
                    </Content>
                </Section>
            </div>

            <Section id='cp-conteudo' className='bg-[linear-gradient(#0c6b96,transparent)]'>
                <Content>
                    <Content_Default>
                        <Wrapper className='items-center justify-evenly'>
                            <Container className='w-[90%] max-w-[32rem]'>
                                <h1 className='grad-text'>CONTEÚDO DO CURSO</h1>
                                <br />
                                <ul id='cp-lista-conteudo' className='chain'>
                                    <li className='font-light'>Anatomia e biomecânica para a prescrição de palmilhas</li>
                                    <li className='font-light'>Prescrição de palmilhas para as diferentes queixas dos pés (fasciopatias, metatarsalgias, pés diabéticos, dentre outras)</li>
                                    <li className='font-light'>Avaliação do pé/tornozelo para a prescrição de palmilhas</li>
                                    <li className='font-light'>Prescrição de elementos e tipos de moldagens</li>
                                    <li className='font-light'>Estudo de casos e discussão das prescrições dos diferentes tipos de palmilhas</li>
                                    <li className='font-light'>Apresentação dos materiais e ferramentas (lixadeira, microrretífica, termoprensa, soprador e moldadores)</li>
                                    <li className='font-light'>Confecção de palmilhas planas termo soldadas</li>
                                    <li className='font-light'>Confecção de palmilhas termomoldáveis com carga</li>
                                    <li className='font-light'>Confecção de palmilhas moldadas sem carga</li>
                                    <li className='font-light'>Confecção de palmilhas moldadas sob molde</li>
                                </ul>
                            </Container>
                            <Container className='w-[32rem] max-[1024px]:w-96 max-[820px]:w-full m-4'>
                                <div className="flex flex-col items-center justify-between p-8 border border-cyan-100 rounded-xl backdrop-brightness-125 shadow-md text-center text-white">
                                    <img src="/img/svg/logo_palmilhando.svg" draggable="false" className='w-1/2 h-auto' />
                                    <div className="divider"></div>
                                    <p className='my-4'>Seu investimento:</p>
                                    <h1 className='text-3xl'><mark className="font-light text-white">12x de</mark> R$250<sup><small>,00</small></sup></h1>
                                    <h2 className='text-xs font-light my-4'>ou R$3000,00 à vista</h2>
                                    <a target="_blank" rel="noopener noreferrer">
                                        <Button id="botao-assine" className='m-auto my-4'>QUERO ASSINAR!</Button>
                                    </a>
                                    <div className="divider"></div>
                                    <p className='text-sm font-light my-4'>Compra 100% segura! Receba seu acesso imediatamente após a confirmação do pagamento</p>
                                    <img src="/img/pagamento.webp" draggable="false" className='w-1/2 h-auto opacity-50' />
                                </div>
                            </Container>
                        </Wrapper>
                    </Content_Default>
                </Content>
            </Section>

            <Section id="cp-sobre" className='flex items-center py-64 max-[820px]:pt-[120vw] max-[820px]:pb-8'>
                <Content className='relative z-10'>
                    <Content_Default>
                        <Container className='w-full max-w-[32rem] max-[820px]:mx-auto'>
                            <span className='bg-[var(--cor-4)] rounded-full border border-cyan-100 w-fit px-4 mb-8'><p className='grad-text font-light font-xs text-center'>CONHEÇA SEU MENTOR</p></span>
                            <h1 className='mb-8 text-left'>Quem é <mark className="grad-text">André Mendes</mark>?</h1>
                            <p>Fisioterapeuta especialista em fisioterapia ortopédica com 20 anos de carreira. Mestre e doutorando em fisioterapia, André é autor do livro <i>Palmilhas Terapêuticas: Ciência e Prática Clínica</i>, sócio-criador da Podoshop® e do Palmilhando® com 15 anos de experiência na prescrição e confecção de palmilhas terapêuticas.</p>
                        </Container>
                    </Content_Default>
                </Content>
            </Section>

            <Section id='cp-prox-cursos' className='bg-[linear-gradient(#0c6b96,transparent)] border-t-2 border-t-cyan-50'>
                <Content>
                    <Content_Default className='flex flex-col items-center'>
                        <Container className='max-w-[32rem] items-center'>
                            <h1 className='text-center mb-8 grad-text'>PRÓXIMOS CURSOS</h1>
                            <List className='chain'>
                                <li><strong>SÃO JOSÉ DOS CAMPOS (SP)</strong> -  DIAS 23 E 24 DE FEVEREIRO DE 2024</li>
                                <li><strong>CURITIBA (PR)</strong> - DIAS 15 E 16 DE MARÇO DE 2024</li>
                                <li><strong>BELO HORIZONTE (MG)</strong> - DIAS 5 E 6 DE ABRIL DE 2024</li>
                                <li><strong>PORTO ALEGRE (RS)</strong> - DIAS 18 E 19 DE MAIO DE 2024</li>
                            </List>
                            <a className='my-8 w-full'>
                                <Button className='w-full'>QUERO GARANTIR MINHA VAGA</Button>
                            </a>
                        </Container>
                    </Content_Default>
                </Content>
            </Section>

        </div>
    );
}