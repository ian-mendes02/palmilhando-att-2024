'use client';
import {Section, Content, Content_Default, Container, Wrapper, Box, Badge} from '@/lib/modules/layout-components';
import {Button, Collapsible, List, Caret} from '@/lib/modules/ui-components';
import {classList, mobile, after, before} from '@/lib/modules/class-utils';
import {useState, useEffect} from 'react';
import Carousel from '@/lib/modules/carousel';
import Image from 'next/image';

export default function Home() {
    const [isMobile, setIsMobile] = useState();

    useEffect(() => {
        setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', () => {
            setIsMobile(window.innerWidth <= 768);
        });
    }, []);

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
            <div className='text-center flex items-center justify-center border border-cyan-100 rounded-xl shadow-md p-4 max-[820px]:p-[5%] pt-16 max-[820px]:pt-16 mx-2 w-[30%] max-[820px]:w-9/12 h-36 backdrop-blur-xl backdrop-brightness-75 relative max-[820px]:[&:not(:last-of-type)]:mb-16 max-[820px]:mx-0'>
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
                <Content className='relative z-10 w-96 max-[820px]:pt-0'>
                    <Content_Default>
                        <Wrapper className='max-[820px]:justify-center'>
                            <Container className='text-center items-center min-[1280px]:w-[50%] w-96 max-[820px]:w-[80%] max-[426px]:w-[96%] ml-[5%] max-[820px]:ml-0'>
                                <Image src='/img/svg/logo_palmilhando.svg' alt='' width='350' height='80' draggable='false' />
                                <h2 className='mt-4 mb-4'><strong>MAIS QUE UM CONTEÚDO, UMA COMUNIDADE!</strong></h2>
                                <p>Um programa desenvolvido para ser uma verdadeira jornada nesse universo para quem quer começar ou aprimorar o conhecimento na avaliação, prescrição e confecção de palmilhas.</p>
                                <Button className='m-8 font-bold shadow-md w-3/4 max-[512px]:w-full py-4' onClick={() => $('#saiba-mais').scrollIntoView()}>QUERO SABER MAIS</Button>
                            </Container>
                        </Wrapper>
                    </Content_Default>
                </Content>
                <img className='absolute bottom-0 translate-y-[25%] w-screen z-10' src='/img/svg/white-tab.svg' alt='' draggable='false' />
            </Section>

            <Section id='saiba-mais' className='relative z-10 bg-white cor-4 pb-16 pt-0 max-[1024px]:pb-10'>
                <Content>
                    <Content_Default>
                        <Wrapper className='max-[820px]:flex-col items-center justify-evenly relative bottom-6 max-[820px]:bottom-0'>
                            <Container className='w-[32rem] max-[820px]:w-[80%] max-[426px]:w-[96%] h-auto p-4'>
                                <img src='/img/isolated_tablet_laptop_and_smartphone_composition.webp' alt='' width='512px' height='512px' draggable='false' />
                            </Container>
                            <Container className='w-[32rem] max-[820px]:w-[80%] max-[426px]:w-[96%] p-4'>
                                <h2>O <mark className="cor-1">Palmilhando</mark> está com você!</h2>
                                <p>
                                    O dia a dia de um clínico que trabalha com palmilhas não é fácil, afinal, cada paciente é um desafio e cada palmilha é uma solução única.
                                    Por isso, criamos o Palmilhando. Para reunir profissionais em um lugar onde possam aprender, aperfeiçoar técnicas, tirar todas as suas dúvidas, trocar experiências e, principalmente, a não se sentirem mais sozinhos.
                                    É o ambiente perfeito para o seu desenvolvimento profissional. Você terá acesso a um conteúdo que vai do zero ao avançado e que será atualizado todo mês!
                                </p>
                            </Container>
                            <Wrapper className='items-center justify-evenly w-full flex-nowrap max-[820px]:flex-col mt-8'>
                                <div className='w-[32rem] max-[820px]:w-[80%] max-[426px]:w-[96%]'>
                                    <h2 className='max-[820px]:text-center'>Confira um pouco do que você terá no Palmilhando:</h2>
                                </div>
                                <Container className='items-center w-1/2 max-[820px]:w-[80%] max-[426px]:w-[96%]'>
                                    <div className='aspect-video bg-slate-500 rounded-md w-[80%] flex justify-center items-center max-[820px]:my-8'><Caret fill='#FFFFFF' width='32px' /></div>
                                    <Button className='mt-4 text-white shadow-md py-4 w-9/12 max-[820px]:w-full' onClick={() => $('#investimento').scrollIntoView({block: 'center'})}>QUERO TER ACESSO AOS CONTEÚDOS!</Button>
                                </Container>
                            </Wrapper>
                        </Wrapper>
                    </Content_Default>
                </Content>
                <img id='tab-2' className='absolute w-screen scale-x-[-1] bottom-0 translate-y-[98%]' src='/img/svg/tab.svg' alt='' draggable='false' />
            </Section>

            <Section id='modulos'>
                <Content className='pt-24 max-[820px]:pt-8 relative z-10'>
                    <Wrapper className='flex-col items-center justify-center py-8 border-2 border-cyan-300 rounded-xl w-full max-w-[1440px] mx-auto'>
                        <h1 className='text-center grad-text'>O QUE VOCÊ APRENDE NO PALMILHANDO</h1>
                        <br />
                        <p className='text-center font-light'>Todo esse conteúdo será atualizado com novas aulas ao longo do ano, fique ligado!</p>
                        <br />
                        <div className="divider"></div>
                        <br />
                        <Wrapper className='justify-center'>
                            <div className='flex flex-col items-center justify-start w-96 max-[820px]:w-[80%] max-[426px]:w-[96%] h-[28rem] max-[820px]:h-max rounded-xl shadow-md border-4 border-cyan-300 p-8 m-2 bg-slate-100 light cor-4'>
                                <h2 className='grad-text'>1. O INÍCIO</h2>
                                <div className="divider"></div>
                                <br />
                                <p className='opacity-80'>É aqui que tudo começa! Preparamos um conteúdo que vai da anatomia e biomecânica até a avaliação completa e a prescrição de elementos e moldagens para quem está começando ou mesmo precisando revisar conceitos sobre o movimento, a neurociência moderna da dor, dentre outros assuntos. Finalizando esse módulo você receberá um certificado de 30h.</p>
                            </div>
                            <div className='flex flex-col items-center justify-start w-96 max-[820px]:w-[80%] max-[426px]:w-[96%] h-[28rem] max-[820px]:h-max rounded-xl shadow-md border-4 border-cyan-300 p-8 m-2 bg-slate-100 light cor-4'>
                                <h2 className='grad-text'>2. PÉS DIABÉTICOS</h2>
                                <div className="divider"></div>
                                <br />
                                <p className='opacity-80'>Pés em risco merecem atenção integral e, por isso, deixamos um módulo exclusivo para eles. Você terá uma introdução ao tema com diferentes especialistas para aprender conceitos básicos, a avaliação e os cuidados com essa população. Nas palmilhas, vamos te mostrar quando prescrever e te ensinar estratégias de intervenção para o tratamento e prevenção de úlceras e outras lesões.</p>                            </div>
                            <div className='flex flex-col items-center justify-start w-96 max-[820px]:w-[80%] max-[426px]:w-[96%] h-[28rem] max-[820px]:h-max rounded-xl shadow-md border-4 border-cyan-300 p-8 m-2 bg-slate-100 light cor-4'>
                                <h2 className='grad-text'>3. PÉS PEDIÁTRICOS</h2>
                                <div className="divider"></div>
                                <br />
                                <p className='opacity-80'>Existem muitos mitos sobre os pés pediátricos e, nesse módulo, iremos desvendar alguns e mostrar quando e como intervir em crianças sintomáticas te mostrando um tutorial completo para condições como o pé plano sintomático, a marcha em rotação interna e a marcha em ponta idiopática (equino idiopático).</p>                            </div>
                            <div className='flex flex-col items-center justify-start w-96 max-[820px]:w-[80%] max-[426px]:w-[96%] h-[28rem] max-[820px]:h-max rounded-xl shadow-md border-4 border-cyan-300 p-8 m-2 bg-slate-100 light cor-4'>
                                <h2 className='grad-text'>4. PALMILHAS ESPORTIVAS</h2>
                                <div className="divider"></div>
                                <br />
                                <p className='opacity-80'>Mais do que fazer palmilhas vamos te ensinar o que é uma lesão esportiva, as particularidades do tratamento de atletas, dentre outros conceitos muito importantes!</p>
                            </div>
                            <div className='flex flex-col items-center justify-start w-96 max-[820px]:w-[80%] max-[426px]:w-[96%] h-[28rem] max-[820px]:h-max rounded-xl shadow-md border-4 border-cyan-300 p-8 m-2 bg-slate-100 light cor-4'>
                                <h2 className='grad-text'>5. PÉS REUMATOIDES</h2>
                                <div className="divider"></div>
                                <br />
                                <p className='opacity-80'>Nesse módulo vamos abordar as principais condições reumatológicas com conceitos introdutórios e sugestões e palmilhas para as principais deformidades encontras nos pés desses pacientes.</p>
                            </div>
                        </Wrapper>

                    </Wrapper>
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

            <Section id='por-dentro' className='py-16 border-y-2 border-y-cyan-100 bg-[linear-gradient(#0c6b96,#1E3050)]'>
                <h1 className='z-20 text-center absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0c6b96] py-2 px-8 rounded-xl border-2 border-cyan-100 font-light max-[820px]:w-[90%] max-[820px]:text-lg'><mark className="grad-text">COMO É O PALMILHANDO POR DENTRO?</mark></h1>
                <Wrapper className='justify-center items-center'>
                    <Container>
                        <h2 className='max-[820px]:text-center mb-6'>Aulas para você assistir <br /><strong>onde e quando quiser</strong></h2>
                    </Container>
                    <Container className='w-[32rem]'>
                        <Carousel isInfinite withIndicator visibleItemsCount={1}>
                            <div className="w-full aspect-video"><img src='/img/cursos/1.webp' alt='' draggable='false' className='w-96 h-auto rounded-lg shadow-md m-auto' /></div>
                            <div className="w-full aspect-video"><img src='/img/cursos/2.webp' alt='' draggable='false' className='w-96 h-auto rounded-lg shadow-md m-auto' /></div>
                            <div className="w-full aspect-video"><img src='/img/cursos/3.webp' alt='' draggable='false' className='w-96 h-auto rounded-lg shadow-md m-auto' /></div>
                            <div className="w-full aspect-video"><img src='/img/cursos/4.webp' alt='' draggable='false' className='w-96 h-auto rounded-lg shadow-md m-auto' /></div>
                        </Carousel>
                    </Container>
                </Wrapper>
            </Section>

            <Section id='com-o-palmilhando' className='bg-slate-100 cor-4 light'>
                <Content className='border-[2px] border-white px-8 max-[820px]:px-0'>
                    <Content_Default>
                        <Wrapper className='items-center justify-evenly py-8'>
                            <Container className='w-1/2 max-[820px]:w-[80%] max-[426px]:w-[96%] px-2'>
                                <h1 className='grad-text'>Com o Palmilhando® você pode:</h1>
                                <div className="divider left"></div>
                                <br />
                                <List className='check-dark'>
                                    <li>Ter mais segurança desde a indicação até a confecção das palmilhas</li>
                                    <li>Aprender a se destacar como profissional</li>
                                    <li>Ter acesso aos melhores materiais do mercado com descontos e frete grátis</li>
                                    <li>Aumentar seus contatos profissionais</li>
                                    <li>Receber conteúdo atualizado mensalmente</li>
                                    <li>Obter um certificado de 30h ao final do curso</li>
                                </List>
                            </Container>
                            <Container className='w-1/2 max-[820px]:w-[80%] max-[426px]:w-[96%] px-4'>
                                <div className='w-full aspect-video rounded-xl shadow-md bg-slate-400'></div>
                            </Container>
                            {/*                             <Container className='w-1/2 max-[820px]:w-[80%] max-[426px]:w-[96%]'>
                                <div className='max-[1160px]:hidden'>
                                <img className='absolute bottom-[12px] left-[50%] translate-x-[-50%] w-[236px] aspect-square' src="/img/andre-avental.webp" alt="" draggable='false' />
                                <img className='absolute bottom-[180px] left-[50%] translate-x-[-75%] w-[236px]' src="/img/andre_prop.webp" alt="" draggable='false' />
                                </div>
                            </Container> */}
                        </Wrapper>
                        <Button
                            className='relative z-10 text-white shadow-md py-4 w-[32rem] max-[820px]:w-[80%] max-[426px]:w-[96%] mx-auto mt-8 mb-8 text-2xl'
                            onClick={() => $('#investimento').scrollIntoView({block: 'center'})}>
                            ASSINE JÁ!
                        </Button>
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
                                <p>Ao assinar o <mark className="cor-7">Palmilhando</mark>, você se torna automaticamente membro do <mark className="cor-7">Podoshop Clube</mark>, com direito a vantagens exclusivas como:</p>
                            </Container>
                            <Wrapper className='max-[820px]:flex-col justify-evenly items-center mt-24'>
                                <Vantagem src='/img/svg/free-shipping.svg'>
                                    <p className='text-lg'><strong className='grad-text'>Frete grátis</strong> nos produtos da Podoshop</p>
                                </Vantagem>
                                <Vantagem src='/img/svg/discount.svg'>
                                    <p className='text-lg'>Descontos<strong className='grad-text'> exclusivos</strong></p>
                                </Vantagem>
                                <Vantagem src='/img/svg/shopping.svg'>
                                    <p className='text-lg'><strong className='grad-text'>Acesso antecipado</strong> a lançamentos de produtos da Podoshop</p>
                                </Vantagem>
                            </Wrapper>
                        </Wrapper>

                        <Wrapper className='my-8 justify-evenly items-center max-[820px]:mt-0 flex-nowrap max-[820px]:flex-col'>
                            <Container className="w-[32rem] max-[820px]:w-[80%] max-[426px]:w-[96%] m-4 max-[820px]:text-center">
                                <h1 className="grad-text">RECEBA UM KIT EXCLUSIVO</h1>
                                <br />
                                <p className='font-extralight'>
                                    Membros do Podoshop Clube recebem <strong className='cor-7'>sem nenhum custo adicional</strong>, um kit exclusivo contendo os melhores materiais para colocar em prática tudo o que aprendeu e fazer as suas próprias palmilhas!
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
                            <h1 className='grad-text text-center font-light'>Veja como nossos membros estão se beneficiando com o Podoshop Clube</h1>
                            <Wrapper className='pt-8 justify-center'>

                                <Container className='w-96 max-[820px]:w-[80%] max-[426px]:w-[96%] m-4'>
                                    <div className='relative mt-8 rounded-lg shadow-md bg-[var(--cor-1)] grad-light h-full'>
                                        <img src="/img/debora.webp" alt="" draggable='false' className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-[#4eaad5] rounded-full w-28 aspect-square' />
                                        <div className='flex flex-col justify-between items-center h-full w-full p-6  pt-16 text-sm text-center'>
                                            <p className='font-extralight'>O clube, além de desconto na compra dos materiais e fretes grátis mensais, que só isso já seria o máximo, traz a educação continuada. Na minha prática, com o clube, além de todas as vantagens, ainda consigo economizar, pois consigo otimizar mais o uso dos materiais e incluir no frete grátis os materiais que preciso para aquele mês.</p>
                                            <br />
                                            <p className='font-extralight'><i>Débora Barreto, Fisioterapeuta</i></p>
                                        </div>
                                    </div>
                                </Container>

                                <Container className='w-96 max-[820px]:w-[80%] max-[426px]:w-[96%] m-4'>
                                    <div className='relative mt-8 rounded-lg shadow-md bg-[var(--cor-1)] grad-light h-full'>
                                        <img src="/img/nilson.webp" alt="" draggable='false' className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-[#4eaad5] rounded-full w-28 aspect-square' />
                                        <div className='flex flex-col justify-between items-center h-full w-full p-6 pt-16 text-sm text-center'>
                                            <p className='font-extralight'>Trabalho com palmilhas há 5 anos. mas sempre surgiram dúvidas e, essas, muitas das vezes não eram esclarecidas. Agora, participando da imersão e fazendo parte do Podoshop Clube, aprendo novas estratégias que nunca havia imaginado. Além dessas vantagens ganhamos descontos a cada compra. Ou seja, faço esses cursos sem pagar nada!</p>
                                            <br />
                                            <p className='font-extralight'><i>Nilson Bastos, Fisioterapeuta</i></p>
                                        </div>
                                    </div>
                                </Container>

                                <Container className='w-96 max-[820px]:w-[80%] max-[426px]:w-[96%] m-4'>
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
                <Content className='pb-16'>
                    <Wrapper className='flex-nowrap w-full max-[820px]:flex-col justify-center items-center'>
                        {/*                         <Container className='w-full max-w-96 max-[820px]:w-full m-4 flex flex-col justify-center max-[820px]:text-center'>
                            <h2 className='mb-4'>Tudo que você precisa saber, na prática.</h2>
                            <p>Junte-se ao Palmilhando e destaque-se na sua área como profissional da saúde.</p>
                            <List className='bullet-green text-left pt-4'>
                                <li>Curso atualizado mensalmente com mais de 30 aulas</li>
                                <li>Prática baseada em evidência</li>
                                <li>Acesso às melhorias e atualizações futuras do curso sem custo adicional</li>
                                <li>Acesso aos materiais enviados mensalmente para que você coloque em prática tudo o que aprendeu</li>
                                <li>Grupo de estudos e tira dúvidas exclusivo no Whatsapp</li>
                                <li>Frete grátis e descontos exclusivos nos produtos da Podoshop</li>
                                <li>7 dias de garantia incondicional</li>
                            </List>
                        </Container> */}

                        <Container className='w-96 max-[820px]:w-[80%] max-[426px]:w-[96%] m-4'>
                            <div className="flex flex-col items-center justify-between px-[1%] py-[10%] border border-cyan-100 rounded-xl backdrop-brightness-125 shadow-md text-center h-full relative hover:-translate-y-2 duration-200 ease-out">
                                <h1>PLANO BÁSICO</h1>
                                <p className='font-extralight text-xs w-9/12 h-12'>O essencial para você se destacar como profissional</p>
                                <div className="divider"></div>
                                <br />
                                <h1 className='text-3xl'><mark className="font-light text-white">12x de</mark> R$ 158<sup><small>,34</small></sup></h1>
                                <h2 className='text-xs font-light my-4'>R$ 1900 à vista</h2>
                                <a target="_blank" rel="noopener noreferrer" className='w-9/12 mx-auto py-2 px-4 rounded-xl border font-bold border-cyan-100 shadow-md bg-[linear-gradient(to_right,var(--grad-1))] bg-[length:150%] select-none cursor-pointer hover:brightness-110 duration-150 ease-out'>ASSINAR</a>
                                <br />
                                <div className="divider"></div>
                                <h2 className='font-extralight'>Vantagens</h2>
                                <List className='text-left pt-4 px-[10%] checklist'>
                                    <li className='include'>Acesso a todo o conteúdo teórico e prático</li>
                                    <li className='include'>Gravação das lives mensais e lançamentos</li>
                                    <li className='not-include'>Curso de negócios com palmilhas</li>
                                    <li className='not-include'>Aulas ao vivo com casos clínicos e/ou convidados</li>
                                </List>
                            </div>
                        </Container>

                        <Container className='w-96 max-[820px]:w-[80%] max-[426px]:w-[96%] m-4'>
                            <div className="flex flex-col items-center justify-between px-[1%] py-[10%] border border-cyan-100 rounded-xl backdrop-saturate-50 shadow-md text-center h-full relative hover:-translate-y-2 duration-200 ease-out">
                                <h1 className='text-green-400'>PLANO BUSINESS</h1>
                                <p className='font-extralight text-xs w-9/12 h-12'>Para o profissional que deseja transformar sua prática em um negócio lucrativo</p>
                                <div className="divider"></div>
                                <br />
                                <h1 className=' text-3xl'><mark className="font-light text-white">12x de</mark> R$ 200<sup><small>,00</small></sup></h1>
                                <h2 className='text-xs font-light my-4'>R$ 2400 à vista</h2>
                                <a target="_blank" rel="noopener noreferrer" className='w-9/12 mx-auto py-2 px-4 rounded-xl border font-bold border-cyan-100 shadow-md bg-[linear-gradient(to_right,var(--grad-1))] bg-[length:150%] select-none cursor-pointer hover:brightness-110 duration-150 ease-out'>ASSINAR</a>
                                <br />
                                <div className="divider"></div>
                                <h2 className='font-extralight'>Vantagens</h2>
                                <List className='text-left pt-4 px-[10%] checklist'>
                                    <li className='include'>Acesso a todo o conteúdo teórico e prático</li>
                                    <li className='include'>Gravação das lives mensais e lançamentos</li>
                                    <li className='include'>Curso de negócios com palmilhas</li>
                                    <li className='not-include'>Aulas ao vivo com casos clínicos e/ou convidados</li>
                                </List>
                            </div>
                        </Container>

                        <Container className='w-96 max-[820px]:w-[80%] max-[426px]:w-[96%] m-4'>
                            <div className="flex flex-col items-center justify-between px-[1%] py-[10%] border border-cyan-100 rounded-xl backdrop-brightness-50 shadow-md text-center h-full relative hover:-translate-y-2 duration-200 ease-out">
                                <Badge className='border border-inherit rounded-full w-max py-2 px-4 !bg-[color:rgb(7_49_69)]'>
                                    <p className='grad-text grad-slide'>MAIS RECOMENDADO</p>
                                </Badge>
                                <h1 className='grad-text grad-slide'>PLANO PREMIUM</h1>
                                <p className='font-extralight text-xs w-9/12 h-12'>Tenha acesso a todas as vantagens de ser um membro premium do Palmilhando®</p>
                                <div className="divider"></div>
                                <br />
                                <h1 className='text-3xl'><mark className="font-light text-white">12x de</mark> R$ 241<sup><small>,67</small></sup></h1>
                                <h2 className='text-xs font-light my-4'>R$ 2900 à vista</h2>
                                <a target="_blank" rel="noopener noreferrer" className='w-9/12 mx-auto py-2 px-4 rounded-xl border font-bold border-cyan-100 shadow-md bg-[linear-gradient(to_right,var(--grad-1))] bg-[length:150%] select-none cursor-pointer hover:brightness-110 duration-150 ease-out'>ASSINAR</a>
                                <br />
                                <div className="divider"></div>
                                <h2 className='font-extralight'>Vantagens</h2>
                                <List className='text-left pt-4 px-[10%] checklist'>
                                    <li className='include'>Acesso a todo o conteúdo teórico e prático</li>
                                    <li className='include'>Gravação das lives mensais e lançamentos</li>
                                    <li className='include'>Curso de negócios com palmilhas</li>
                                    <li className='include'>Aulas ao vivo com casos clínicos e/ou convidados</li>
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
                                <Collapsible title='Não sei fazer palmilhas, esse curso é para mim?'>
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