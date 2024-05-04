import {ReactNode} from "react";
type Node = HTMLElement | ReactNode;
export = Utils;
export as namespace Utils;
declare namespace Utils {
    function list(...classes: string[]): string;
    function prefix(prefix: string, classes: string): string;
    function url(str: string): string;
    function scrollToCenter(el: string): void;
    function scrollToTop(el: Node | string): void;
    function log(msg: any, debug: boolean, type: string): void;
}