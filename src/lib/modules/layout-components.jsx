import {classList, mobile} from './class-utils';

const Section = (props) => {
    return (
        <section id={props.id} className={classList('py-16 m-auto w-full relative', props.className)} style={props.style}>
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
        <div id={props.id} className={classList('mx-auto w-[95%] max-w-[1280px]', props.className)}>
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

const Badge = ({children, width = 24, className = ''}) => {
    return (
        <div className={classList(`bg-inherit rounded-full absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center p-4 w-${width}`, className)}>
            {children}
        </div>
    )
}

const Loading = ({width = 32}) => {
    return <img src={process.env.NEXT_PUBLIC_ASSET_PREFIX_GLOBAL + 'img/gif/loading.gif'} alt='' draggable='false' width={width} height={width} className='absolute-center'/>
}

export {Section, Content, Content_Default, Container, Wrapper, Badge, Loading};