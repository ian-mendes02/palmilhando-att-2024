import {classList, mobile} from './class-utils';

const Section = (props) => {
    return (
        <section id={props.id} className={classList('py-16 m-auto w-screen relative', props.className)}>
            {props.children}
        </section>
    );
};

const Content = (props) => {
    return (
        <div id={props.id} className={classList('block m-auto w-full', props.className)}>
            {props.children}
        </div>
    );
};

const Content_Default = (props) => {
    return (
        <div id={props.id} className={classList('m-auto w-[95vw] max-w-[1280px]', props.className)}>
            {props.children}
        </div>
    );
};

const Wrapper = (props) => {
    return (
        <div id={props.id} className={classList('flex flex-wrap', props.className)}>
            {props.children}
        </div>
    );
};

const Container = (props) => {
    return (
        <div id={props.id} className={classList('flex flex-col', props.className)}>
            {props.children}
        </div>
    );
};

const Box = (props) => {
    return (
        <div id={props.id} className={classList('light flex flex-col rounded-md shadow-md items-center justify-start bg-slate-100 text-[var(--cor-5)] m-2 w-2/5 h-96 p-4', props.className)}>
            {props.children}
        </div>
    );
}

const Badge = ({children, width = 24, className = ''}) => {
    return (
        <div className={classList(`bg-inherit rounded-full absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center p-4 w-${width}`, className)}>
            {children}
        </div>
    )
}

export {Section, Content, Content_Default, Container, Wrapper, Box, Badge};