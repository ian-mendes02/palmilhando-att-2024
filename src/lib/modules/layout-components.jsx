import {list} from './utils';
/**
 * @param {Object} props 
 * @param {string} props.id
 * @param {string} props.className
 * @param {any} props.children
 */
export const Section = ({id, className, children}) => (
    <section id={id} className={list('py-16 m-auto w-full relative', className)}>
        {children}
    </section>
);
/**
 * @param {Object} props 
 * @param {string} props.id
 * @param {string} props.className
 * @param {any} props.children
 */
export const Content = ({id, className, children}) => (
    <div id={id} className={list('block m-auto w-full', className)}>
        {children}
    </div>
);
/**
 * @param {Object} props 
 * @param {string} props.id
 * @param {string} props.className
 * @param {any} props.children
 */
export const ContentDefault = ({id, className, children}) => (
    <div id={id} className={list('w-[96%] max-w-[1280px] mx-auto', className)}>
        {children}
    </div>
);
/**
 * @param {Object} props 
 * @param {string} props.id
 * @param {string} props.className
 * @param {any} props.children
 */
export const Wrapper = ({id, className, children}) => (
    <div id={id} className={list('flex flex-wrap', className)}>
        {children}
    </div>
);
/**
 * @param {Object} props 
 * @param {string} props.id
 * @param {string} props.className
 * @param {any} props.children
 */
export const Container = ({id, className, children}) => (
    <div id={id} className={list('flex flex-col', className)}>
        {children}
    </div>
);
/**
 * @param {Object} props 
 * @param {string} props.id
 * @param {string} props.className
 * @param {object} props.style
 * @param {any} props.children
 */
export const Grid = ({id, className, style, children}) => (
    <div id={id} className={list('grid', className)} style={style}>
        {children}
    </div>
);
/**
 * @param {Object} props 
 * @param {string} props.id
 * @param {string} props.className
 * @param {number} props.width
 * @param {any} props.children
 */
export const Badge = ({id, className, width = 24, children}) => (
    <div
        id={id}
        className={list('bg-inherit rounded-full absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center p-4', className)}
        style={{width: `${width}px`}}
    >
        {children}
    </div>
);
/**
 * @param {Object} props 
 * @param {number} props.width
 */
export const Loading = ({width = 32}) => {
    const size = width + 'px';
    return (
        <div className='loading absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' style={{
            width: size,
            height: size
        }}>
            <img src="/img/gif/loading.gif"
                width={size}
                height={size}
                draggable='false'
                alt=""
            />
        </div>
    );
};
/**
 * @param {Object} props 
 * @param {number | string} props.size
 */
export const Spacer = ({size = 1}) => (
    <div 
        className='w-full' 
        style={{height: size + 'rem'}}
    ></div>
);
/**
 * @param {Object} props 
 * @param {string} props.className
 * @param {string} props.color
 * @param {string} props.position
 * @param {any} props.children
 */
export const Divider = ({className = '', color = '#ffffff', position = 'center'}) => {
    var fill = {
        center: `rgba(0,0,0,0), ${color}, rgba(0,0,0,0)`,
        left: `${color}, rgba(0,0,0,0)`,
        right: `rgba(0,0,0,0), ${color}` 
    };
    return (
        <div
            className={list('w-full h-[1px]', className)}
            style={{backgroundImage: `linear-gradient(90deg, ${fill[position]})`}}
        ></div>
    );
};
