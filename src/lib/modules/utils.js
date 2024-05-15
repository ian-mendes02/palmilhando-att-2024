var Utils = require('./utils');

Utils.list = (...classes) => classes.join(' ').trim();

Utils.prefix = (prefix, classes) => {
    var cls = classes.split(' ');
    for (let i = 0; i < cls.length; i++) cls[i] = prefix + cls[i];
    return cls.join(' ').trim();
};

Utils.url = (str) => `url('/${str || 'placeholder.webp'}')`;

Utils.scrollToCenter = (el) => {
    var n = typeof el === 'string' ? document.querySelector(el) : el;
    n?.scrollIntoView({block: 'center', behavior: 'smooth'});
};

Utils.scrollToTop = (el) => {
    var n = typeof el === 'string' ? document.querySelector(el) : el;
    n?.scrollIntoView({block: 'start', behavior: 'smooth'});
};

Utils.log = (msg, debug = process.env.NEXT_PUBLIC_DEV_ENV === 'true', type) => {
    if (debug) {
        if (typeof msg != 'string') 
            return console.log(msg);
        else switch (type) {
            case "success": 
                return console.log(`%c☑ - ${msg}`, "color: #B0C4DE");
            case "info": 
                return console.log(`%c⚠ - ${msg}`, "color: #F0E68C");
            case "error": 
                return console.error(msg);
            case "warning": 
                return console.warn(msg);
            default: 
                return console.log(msg);
        }
    }
};