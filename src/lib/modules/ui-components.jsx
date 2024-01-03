'use client';
import {useState, useRef, useEffect} from 'react';
import {classList, mobile} from './class-utils';

const Caret = (props) => {
    return (
        <svg className={'caret ' + props.className} fill={props.fill || '#1E3050'} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 12 12" style={{enableBackground: 'new 0 0 12 12'}} xmlSpace="preserve" width={props.width || '12px'} height={props.width || '12px'}>
            <path d="M9.2,6.8c0.5-0.5,0.5-1.2,0-1.7L4.5,0.5C4.2,0.2,3.7,0.1,3.2,0.3S2.5,0.9,2.5,1.3v9.3c0,0.5,0.3,0.9,0.7,1.1s0.9,0.1,1.3-0.3L9.2,6.8L9.2,6.8L9.2,6.8L9.2,6.8z" />
        </svg>
    );
};

const Collapsible = (props) => {
    const collapsibleRef = useRef(null);
    const toggle_collapse = (container) => {
        var collapsibleContent = document.querySelectorAll('.collapsible .content')
        function collapseNeighbors() {
            for (let content of collapsibleContent) {
                if (content.parentElement.classList.contains('active')) {
                    content.parentElement.classList.remove('active');
                    toggleExpand(content);
                }
            }
        };
        function toggleExpand(content) {
            if (content.parentElement.style.maxHeight) {
                content.parentElement.style.maxHeight = null;
            } else {
                content.parentElement.style.maxHeight = (content.scrollHeight * 2) + 'px';
            }
        }
        if (!container.classList.contains('active')) {
            collapseNeighbors();
        }
        container.classList.toggle('active');
        toggleExpand(container.lastElementChild);
    };
    return (
        <div
            className='collapsible bg-slate-200 cor-4 rounded-md overflow-hidden shadow-sm mb-2 p-4 cursor-pointer hover:bg-slate-50'
            ref={collapsibleRef}
            onClick={() => toggle_collapse(collapsibleRef.current)}
            id={props.id}
        >
            <div className='title flex justify-between items-center'>
                <span className='overflow-hidden whitespace-nowrap mr-4'>{props.title}</span>
                <Caret />
            </div>
            <div className='content mt-4 pb-4'>
                {props.children}
            </div>
        </div>
    );
};

const Button = (props) => {
    return (
        <button id={props.id} className={classList('border border-cyan-200 rounded-xl py-2 px-8 grad-1 font-semibold hover:scale-[101%] hover:brightness-110 hover:translate-y-[-1px] duration-100 ease-out cursor-pointer', props.className)} onClick={() => props.onClick}>
            {props.children}
        </button>
    );
};

const List = (props) => {
    return (
        <ul className={classList('my-list', props.className)}>
            {props.children}
        </ul>
    );
};

export {Collapsible, Button, List, Caret};