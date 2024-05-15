'use client';
import {useRef} from 'react';
import {list} from './utils';

/**
 * @param {Object} props
 * @param {string} props.id
 * @param {string} props.className
 * @param {string} props.fill
 * @param {string | number} props.width
 */
export const Caret = ({id, className, fill = '#1E3050', width = 12}) => (
    <svg
        id={id}
        className={'caret ' + className}
        fill={fill}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 12 12"
        style={{enableBackground: 'new 0 0 12 12'}}
        xmlSpace="preserve"
        width={width + 'px'}
        height={width + 'px'}
    >
        <path d="M9.2,6.8c0.5-0.5,0.5-1.2,0-1.7L4.5,0.5C4.2,0.2,3.7,0.1,3.2,0.3S2.5,0.9,2.5,1.3v9.3c0,0.5,0.3,0.9,0.7,1.1s0.9,0.1,1.3-0.3L9.2,6.8L9.2,6.8L9.2,6.8L9.2,6.8z" />
    </svg>
);

/**
 * @param {Object} props
 * @param {string} props.id
 * @param {string} props.className
 * @param {string} props.title
 * @param {any} props.children
 */
export const Collapsible = ({id, className, title, children}) => {
    const collapsibleRef = useRef(null);
    const toggle_collapse = () => {
        var collapsibleContent = document.querySelectorAll('.collapsible .content');
        function collapseNeighbors() {
            for (let content of collapsibleContent)
                if (content.parentElement.classList.contains('active')) {
                    content.parentElement.classList.remove('active');
                    toggleExpand(content);
                }
        };
        function toggleExpand(content) {
            if (content.parentElement.style.maxHeight) content.parentElement.style.maxHeight = null;
            else content.parentElement.style.maxHeight = (content.scrollHeight * 3) + 'px';
        }
        if (!collapsibleRef.current?.classList.contains('active')) collapseNeighbors();
        collapsibleRef.current?.classList.toggle('active');
        toggleExpand(collapsibleRef.current?.lastElementChild);
    };
    return (
        <div
            className={list('collapsible bg-slate-200 cor-4 rounded-md overflow-hidden shadow-sm mb-2 p-4 cursor-pointer hover:bg-slate-50 light', className)}
            ref={collapsibleRef}
            onClick={toggle_collapse}
            id={id}
        >
            <div className='title flex justify-between items-center'>
                <span className='mr-4 font-bold'>{title}</span>
                <Caret />
            </div>
            <div className='content mt-4 pb-4'>{children}</div>
        </div>
    );
};

/**
 * @param {Object} props
 * @param {string} props.id
 * @param {string} props.className
 * @param {string | boolean} props.disabled
 * @param {any} props.children
 */
export const Button = ({id, className, disabled, onClick, children}) => (
    <button id={id} className={list(
        'border border-cyan-200 rounded-xl py-2 px-8 grad-1 font-semibold',
        `${disabled
            ? 'saturate-0 opacity-50 cursor-not-allowed'
            : 'hover:scale-[101%] hover:brightness-110 hover:translate-y-[-1px] duration-100 ease-out cursor-pointer'
        }`,
        className,
    )}
        onClick={onClick}>
        {children}
    </button>
);

/**
 * @param {Object} props
 * @param {string} props.id
 * @param {string} props.className
 * @param {any} props.children
 */
export const List = ({id, className, children}) => (
    <ul id={id} className={list('my-list', className)}>
        {children}
    </ul>
);