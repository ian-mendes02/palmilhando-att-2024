'use client';
import {Section, Content, Content_Default, Container, Wrapper, Box} from '@/lib/modules/layout-components';
import {Button, Collapsible, List, Caret} from '@/lib/modules/ui-components';
import {classList, mobile, after, before} from '@/lib/modules/class-utils';
import {useState, useEffect} from 'react';
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
        return document.querySelector(el)
    }

    const Depoimento = (props) => {
        return (
            <div className={'flex justify-start items-end mb-8 ' + (props.reverse && 'flex-row-reverse')}>
                <div className='w-[15%] max-[820px]:mb-4'>
                    <img src={props.src} alt="" draggable='false' className='rounded-full shadow-md hover:scale-125 max-[820px]:hover:transform-none duration-500 ease-out' />
                </div>
                <div className={'relative bg-slate-100 shadow-md rounded-md cor-4 p-4 w-[85%] ' + (props.reverse ? 'mr-[5%] max-[820px]:mr-[7.5%]' : 'ml-[5%] max-[820px]:ml-[7.5%]')}>
                    <Caret fill='#f1f5f9' className={'absolute bottom-[24px] ' + (props.reverse ? 'right-[-24px]' : 'left-[-24px] scale-x-[-1]')} width='36px' />
                    <p className='my-4'>{props.children}</p>
                    <h3 className='italic text-end'>{props.title}</h3>
                </div>
            </div>
        );
    };

    const Vantagem = (props) => {
        return (
            <div className='w-72 m-4 text-center'>
                <div className='w-24 h-24 mx-auto mb-4 flex justify-center p-4 items-center border-t border-t-cyan-100 border-b-4 border-b-slate-800 bg-[var(--cor-4)] bg-[linear-gradient(var(--cor-1),var(--cor-4))] rounded-xl'>
                    <img src={props.src} alt="" draggable='false' />
                </div>
                {props.children}
            </div>
        );
    };

    return (
        <div>
            <Section id='header'>
                <Content className='relative z-10 pt-16'>
                    <Content_Default>
                        <Wrapper className='max-[1024px]:justify-center'>
                            <Container className='text-center items-center w-full max-w-[48rem]'>
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
                        <Wrapper className='max-[820px]:flex-col items-center relative bottom-6 max-[820px]:bottom-0'>
                            <Container className='w-1/2 h-auto p-4'>
                                <img src='/img/isolated_tablet_laptop_and_smartphone_composition.webp' alt='' width='512px' height='512px' draggable='false' />
                            </Container>
                            <Container className='basis-1/2 p-4'>
                                <h2>O <mark className="cor-1">Palmilhando</mark> está com você!</h2>
                                <p>
                                    O dia a dia de um clínico que trabalha com palmilhas não é fácil, afinal, cada paciente é um desafio e cada palmilha é uma solução única.
                                    Por isso, criamos o Palmilhando. Para reunir profissionais em um lugar onde possam aprender, aperfeiçoar técnicas, tirar todas as suas dúvidas, trocar experiências e, principalmente, a não se sentirem mais sozinhos.
                                    É o ambiente perfeito para o seu desenvolvimento profissional. Você terá acesso a um conteúdo que vai do zero ao avançado e que será atualizado todo mês!
                                </p>
                                <Button className='mt-4 text-white shadow-md py-4' onClick={() => $('#investimento').scrollIntoView({block:'center'})}>QUERO TER ACESSO AOS CONTEÚDOS!</Button>
                            </Container>
                        </Wrapper>
                    </Content_Default>
                </Content>
                <img id='tab-2' className='absolute w-screen scale-x-[-1] bottom-0 translate-y-[98%]' src='/img/svg/tab.svg' alt='' draggable='false' />
            </Section>

            <Section id='modulos'>
                <Content className='pt-24 max-[820px]:pt-8'>
                    <Content_Default className='flex flex-col items-center justify-center'>
                        <h2 className='text-center'>O que você irá aprender com o <mark className="cor-2">Palmilhando</mark>:</h2>
                        <Container className='w-1/2 pt-8 max-[820px]:w-full relative'>
                            <Collapsible title='MÓDULO 1: O INÍCIO'>
                                <p>É aqui que tudo começa! Preparamos um conteúdo que vai da anatomia e biomecânica até a avaliação completa e a prescrição de elementos e moldagens para quem está começando ou mesmo precisando revisar conceitos sobre o movimento, a neurociência moderna da dor, dentre outros assuntos. Finalizando esse módulo você receberá um certificado de 30h.</p>
                            </Collapsible>

                            <Collapsible title='MÓDULO 2: PÉS DIABÉTICOS'>
                                <p>Pés em risco merecem atenção integral e, por isso, deixamos um módulo exclusivo para eles. Você terá uma introdução ao tema com diferentes especialistas para aprender conceitos básicos, a avaliação e os cuidados com essa população. Nas palmilhas, vamos te mostrar quando prescrever e te ensinar estratégias de intervenção para o tratamento e prevenção de úlceras e outras lesões.</p>
                            </Collapsible>

                            <Collapsible title='MÓDULO 3: PÉS PEDIÁTRICOS'>
                                <p>Existem muitos mitos sobre os pés pediátricos e, nesse módulo, iremos desvendar alguns e mostrar quando e como intervir em crianças sintomáticas te mostrando um tutorial completo para condições como o pé plano sintomático, a marcha em rotação interna e a marcha em ponta idiopática (equino idiopático).</p>
                            </Collapsible>

                            <Collapsible title='MÓDULO 4: PALMILHAS ESPORTIVAS'>
                                <p>Mais do que fazer palmilhas vamos te ensinar o que é uma lesão esportiva, as particularidades do tratamento de atletas, dentre outros conceitos muito importantes!</p>
                            </Collapsible>

                            <Collapsible title='MÓDULO 5: PÉS REUMATÓIDES'>
                                <p>Nesse módulo vamos abordar as principais condições reumatológicas com conceitos introdutórios e sugestões e palmilhas para as principais deformidades encontras nos pés desses pacientes.</p>
                            </Collapsible>

                            <p className='mt-8 text-center'>Todos os módulos acima serão atualizados com novas aulas ao longo do ano, fique ligado!</p>
                        </Container>

                    </Content_Default>
                </Content>
            </Section>

            <Section id='depoimentos' className='bg-[var(--cor-4)] z-10 border-t-2 border-cyan-100'>
                <div className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full top-0 bg-[var(--cor-4)] border-2 border-cyan-100 w-16 h-16'>
                    <img src="/img/svg/chat.svg" alt="" draggable='false' className='w-1/2 aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
                </div>
                <Content>
                    <Content_Default className='pt-8'>
                        <h1 className='text-center'>Veja o que os nossos alunos estão falando sobre o <mark className="cor-7">Palmilhando</mark></h1>
                        <Container className='pt-16'>
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

            <Section id='por-dentro' className='pt-0 pb-0 border-y-2 border-y-cyan-100 bg-[linear-gradient(#0c6b96,#1E3050)]'>
    
                <h1 className='z-20 text-center absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0c6b96] py-2 px-8 rounded-xl border-2 border-cyan-100 font-light'><mark className="grad-text">COMO É O PALMILHANDO POR DENTRO?</mark></h1>

                <Content className='pt-8'>
                    <Content_Default>
                        <Wrapper className='justify-evenly items-center'>
                            <div className='w-full max-w-[640px] backlit'>
                                <img src="/img/curso-reformulado.webp" draggable='false' alt="" />
                            </div>
                            <div className='text-center '>
                                <h1 className='grad-text'>Aulas on-demand</h1>
                                <h2>Disponíveis 24h</h2>
                            </div>
                        </Wrapper>
                    </Content_Default>
                </Content>

                <div className="divider"></div>

                <Content className='py-4'>
                    <Content_Default className='max-[820px]:flex-col-reverse'>
                        <div className='w-full max-w-[640px]'>
                            <img src="" alt="" />
                        </div>
                        <div className='text-center'>
                            <h1 className='grad-text'>Comunidade ativa de membros</h1>
                            <h2>Para você tirar suas dúvidas sempre que precisar</h2>
                        </div>
                    </Content_Default>
                </Content>

                <div className="divider"></div>

                <Content className='py-4'>
                    <Content_Default>
                        <div className='text-center'>
                            <h1 className='grad-text'>Certificado de 30h</h1>
                            <h2>Conclua o curso e receba um certificado autenticado</h2>
                        </div>
                        <div className='w-full max-w-[640px]'>
                            <img src="" alt="" />
                        </div>
                    </Content_Default>
                </Content>

            </Section>

            <Section id='com-o-palmilhando' className='bg-slate-100 cor-4'>
                <Content className='border-[2px] border-white px-8 max-[820px]:px-0'>
                    <Content_Default>
                        <Wrapper className='items-end justify-center py-6'>
                            <List className='basis-1/2 max-[1160px]:basis-full px-8 check-dark h-max'>
                                <h1 className='mb-8'>Com o <mark className="cor-1">Palmilhando</mark> você vai:</h1>
                                <li>Ter mais segurança desde a indicação até a confecção das palmilhas</li>
                                <li>Aprender a se destacar como profissional</li>
                                <li>Ter acesso aos melhores materiais do mercado com descontos e frete grátis</li>
                                <li>Conteúdo atualizado mensalmente</li>
                            </List>
                            <Container className='relative basis-1/2 max-[1160px]:basis-full px-8'>
                                <div className='max-[1160px]:hidden'>
                                    <img className='absolute bottom-[12px] left-[50%] translate-x-[-50%] w-[236px] aspect-square' src="/img/andre-avental.webp" alt="" draggable='false' />
                                    <img className='absolute bottom-[180px] left-[50%] translate-x-[-75%] w-[236px]' src="/img/andre_prop.webp" alt="" draggable='false' />
                                </div>
                                <Button className='relative z-10 text-white shadow-md py-4 w-full mx-auto mt-8 mb-0 text-2xl' onClick={() => $('#investimento').scrollIntoView({block:'center'})}>QUERO ASSINAR AGORA!</Button>
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

            <Section id='amostra' className='bg-[var(--cor-4)] grad-light border-t border-cyan-100 py-12 shadow-md'>
                <Content>
                    <Content_Default className='flex items-center flex-col justify-center'>
                        <div className='w-full max-w-96 max-[820px]:max-w-[90vw] mb-8 text-center'>
                            <h2>Confira um pouco do que você terá no Palmilhando:</h2>
                        </div>
                        <div className='aspect-video bg-slate-500 rounded-md w-full max-w-96 max-[820px]:max-w-[90vw] flex justify-center items-center'><Caret fill='#FFFFFF' width='32px' /></div>
                    </Content_Default>
                </Content>
            </Section>

            <Section id='podoshop-clube' className='pt-0 bg-[var(--cor-4)] border-t-[.5rem] border-[var(--cor-1)]'>
                <div className="badge top-0 w-16 bg-[var(--cor-1)] bg-[url(/img/svg/psclube-icone.svg)]"></div>
                <Content>
                    <Content_Default className='pt-16 relative z-10'>
                        <h1 className="text-center"><mark className="text-white font-light">COM O <mark className="cor-1">PODOSHOP CLUBE</mark></mark><br /><mark className="grad-text">TUDO ISSO SAI DE GRAÇA</mark>!</h1>

                        <Wrapper className='my-8 justify-center items-center max-[820px]:pt-0'>
                            <Container className='w-1/2 p-4 max-[820px]:w-full text-center'>
                                <p>Ao assinar o <mark className="cor-7">Palmilhando</mark>, você se torna automaticamente membro do <mark className="cor-7">Podoshop Clube</mark>, com direito a vantagens exclusivas como:</p>
                            </Container>
                            <Wrapper className='justify-center'>
                                <Vantagem src='/img/svg/free-shipping.svg'>
                                    <p><mark className="grad-text">Frete grátis</mark> nos produtos da Podoshop</p>
                                </Vantagem>
                                <Vantagem src='/img/svg/discount.svg'>
                                    <p>Descontos <mark className="grad-text">exclusivos</mark></p>
                                </Vantagem>
                                <Vantagem src='/img/svg/shopping.svg'>
                                    <p><mark className="grad-text">Acesso antecipado</mark> a lançamentos de produtos da Podoshop</p>
                                </Vantagem>
                            </Wrapper>
                        </Wrapper>

                        <Wrapper className='my-8 justify-center items-center flex-row-reverse max-[820px]:mt-0'>
                            <Container className="w-1/2 p-4 max-[820px]:w-full text-center">
                                <p>
                                    Além disso, você receberá em casa, <strong className='cor-7'>sem custo adicional</strong>, um dos melhores materiais para colocar em prática tudo o que aprendeu e fazer as suas próprias palmilhas!
                                    Você pode usar o material disponibilizado para fazer a palmilha de um dos seus pacientes e ter o seu investimento no curso de volta!
                                </p>
                                <br />
                                <p>
                                    Ou seja, com o frete grátis, os descontos exclusivos e os materiais que enviamos mensalmente até a sua casa, 
                                    <strong className='cor-7'>você recupera todo o seu investimento e o clube sai de graça!</strong>
                                </p>
                                <img src='/img/kit-exclusivo.webp' alt='' draggable='false' className='m-auto w-96 h-auto my-4' />
                                <Button className='text-white shadow-md my-8 mx-auto py-3 w-3/4' onClick={() => $('#investimento').scrollIntoView({block:'center'})}>QUERO SABER MAIS!</Button>
                            </Container>
                        </Wrapper>

                        <div className="divider"></div>

                        <Container className='pt-8'>
                            <h1 className='grad-text text-center'>Confira o que os nossos membros estão dizendo sobre o clube</h1>
                            <Wrapper className='pt-8 justify-center'>

                                <Container className='w-full max-w-80 p-4'>
                                    <div className='relative mt-8 rounded-lg shadow-md bg-[var(--cor-1)] grad-light h-full'>
                                        <img src="/img/debora.webp" alt="" draggable='false' className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-[#4eaad5] rounded-full w-28 aspect-square' />
                                        <div className='flex flex-col justify-between items-center h-full w-full p-6  pt-16 text-sm text-center'>
                                            <p>O clube, além de desconto na compra dos materiais e fretes grátis mensais, que só isso já seria o máximo, traz a educação continuada. Na minha prática, com o clube, além de todas as vantagens, ainda consigo economizar, pois consigo otimizar mais o uso dos materiais e incluir no frete grátis os materiais que preciso para aquele mês.</p>
                                            <br />
                                            <p><i>Débora Barreto, Fisioterapeuta</i></p>
                                        </div>
                                    </div>
                                </Container>

                                <Container className='w-full max-w-80 p-4'>
                                    <div className='relative mt-8 rounded-lg shadow-md bg-[var(--cor-1)] grad-light h-full'>
                                        <img src="/img/nilson.webp" alt="" draggable='false' className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-[#4eaad5] rounded-full w-28 aspect-square' />
                                        <div className='flex flex-col justify-between items-center h-full w-full p-6 pt-16 text-sm text-center'>
                                            <p>Trabalho com palmilhas há 5 anos. mas sempre surgiram dúvidas e, essas, muitas das vezes não eram esclarecidas. Agora, participando da imersão e fazendo parte do Podoshop Clube, aprendo novas estratégias que nunca havia imaginado. Além dessas vantagens ganhamos descontos a cada compra. Ou seja, faço esses cursos sem pagar nada!</p>
                                            <br />
                                            <p><i>Nilson Bastos, Fisioterapeuta</i></p>
                                        </div>
                                    </div>
                                </Container>

                                <Container className='w-full max-w-80 p-4'>
                                    <div className='relative mt-8 rounded-lg shadow-md bg-[var(--cor-1)] grad-light h-full'>
                                        <img src="/img/renata.webp" alt="" draggable='false' className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-[#4eaad5] rounded-full w-28 aspect-square' />
                                        <div className='flex flex-col justify-between items-center h-full w-full p-6  pt-16 text-sm text-center'>
                                            <p>Sinceridade… acho que nunca mais fico sem o Palmilhando e o Podoshop Clube! São informações valiosas que nos tornam mais seguros desde a indicação, raciocínio e confecção da palmilha! O Clayton e o André conduzem esse projeto com excelência!</p>
                                            <br />
                                            <p><i>Renata Scaramussa, Fisioterapeuta</i></p>
                                        </div>
                                    </div>
                                </Container>

                            </Wrapper>
                        </Container>

                    </Content_Default>
                </Content>
            </Section>

            <Section id='investimento' className='bg-[linear-gradient(#0c6b96,#1E3050)] border-y-2 border-y-cyan-100'>
            <h1 className='z-20 text-center absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0c6b96] py-2 px-8 rounded-xl border-2 border-cyan-100'><mark className="grad-text font-light">SEU INVESTIMENTO</mark></h1>
                <Content className='pb-16'>
                    <Wrapper className='justify-center'>
                        <Container className='w-full max-w-96 max-[820px]:w-full m-4 flex flex-col justify-center max-[820px]:text-center'>
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
                        </Container>
                        <Container className='w-full max-w-96 max-[820px]:w-full m-4'>
                            <div className="flex flex-col items-center justify-between p-8 border border-cyan-100 rounded-xl backdrop-brightness-125 shadow-md text-center">
                                <img src="/img/svg/logo_palmilhando.svg" draggable="false" className='w-1/2 h-auto' />
                                <div className="divider"></div>
                                <p className='my-4'>Assinantes novos:</p>
                                <h1 className='text-3xl'><mark className="font-light text-white">12x de</mark> R$191<sup><small>,57</small></sup></h1>
                                <h2 className='text-xs font-light my-4'>R$2298,00 à vista ou <br />R$1908,00 no plano anual</h2>
                                <a href="https://secure.doppus.com/pay/PBOJJ9ZMBOJJ9ZG90O0O8" target="_blank" rel="noopener noreferrer">
                                    <Button id="botao-assine" className='m-auto my-4'>QUERO ASSINAR!</Button>
                                </a>
                                <div className="divider"></div>
                                <p className='text-sm font-light my-4'>Compra 100% segura! Receba seu acesso imediatamente após a confirmação do pagamento</p>
                                <img src="/img/pagamento.webp" draggable="false" className='w-1/2 h-auto opacity-50' />
                            </div>
                        </Container>
                        <Container className='w-full max-w-96 max-[820px]:w-full m-4'>
                            <div className="flex flex-col items-center justify-between p-8 border border-cyan-100 rounded-xl backdrop-brightness-125 shadow-md text-center">
                                <img src="/img/svg/logo_palmilhando.svg" draggable="false" className='w-1/2 h-auto' />
                                <div className="divider"></div>
                                <p className='my-4'>Assinantes recorrentes:</p>
                                <h1 className='text-3xl'><mark className="font-light text-white">3x de</mark> R$141<sup><small>,00</small></sup></h1>
                                <h2 className='text-xs font-light my-4'>R$423,00 à vista ou<br />R$399,00 no plano trimestral<br /></h2>
                                <a href="" target="_blank" rel="noopener noreferrer" className='cursor-not-allowed'>
                                    <Button id="botao-assine" className='m-auto my-4' disabled>QUERO ASSINAR!</Button>
                                </a>
                                <div className="divider"></div>
                                <p className='text-sm font-light my-4'>Compra 100% segura! Receba seu acesso imediatamente após a confirmação do pagamento</p>
                                <img src="/img/pagamento.webp" draggable="false" className='w-1/2 h-auto opacity-50' />
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
                                <Button className='text-white mt-8 shadow-md w-full max-w-96 py-4 mx-auto' onClick={() => $('#investimento').scrollIntoView({block:'center'})}>QUERO ME INSCREVER!</Button>
                            </Container>
                        </Content_Default>
                    </Content>
                </Section>

                <Section id='faq'>
                    <Content>
                        <Content_Default className='flex flex-wrap justify-center'>
                            <Container className='w-full max-w-96 max-[820px]:text-center'>
                                <h2>Ficou com alguma dúvida?</h2>
                                <br />
                                <p>Confira aqui as respostas para as dúvidas mais frequentes, ou entre em contato conosco via Whatsapp</p>
                                <a href="https://wa.me//5512982628132" className='flex items-center justify-center py-4 my-4 border border-cyan-200 rounded-xl hover:backdrop-brightness-110 ease-out duration-200 cursor-pointer decoration-[none] text-white text-center'>
                                    <img src="/img/svg/whatsapp-green.svg" alt="" draggable='false' width='32px' height='32px' className='mr-2' />
                                    <p>ATENDIMENTO POR <mark className="cor-3">WHATSAPP</mark></p>
                                </a>
                            </Container>
                            <Container className='w-full max-w-[48rem] px-16 max-[820px]:px-0'>
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