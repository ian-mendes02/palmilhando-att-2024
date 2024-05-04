var Utils = require('./utils');

Utils.list = function(...classes) {
    return classes.join(' ').trim();
};

Utils.prefix = function(prefix, classes) {
    var cls = classes.split(' ');
    for (let i = 0; i < cls.length; i++) cls[i] = prefix + cls[i];
    return cls.join(' ').trim();
};

Utils.url = function(str) {
    return `url('/${str || 'placeholder.webp'}')`;
};

Utils.scrollToCenter = function(el) {
    var n = typeof el === 'string' ? document.querySelector(el) : el;
    n?.scrollIntoView({block: 'center', behavior: 'smooth'});
};

Utils.scrollToTop = function(el) {
    var n = typeof el === 'string' ? document.querySelector(el) : el;
    n?.scrollIntoView({block: 'start', behavior: 'smooth'});
};

Utils.log = function(msg, debug = process.env.NEXT_PUBLIC_DEV_ENV === 'true', type) {
    if (debug) {
        if (typeof msg != 'string')
            console.log(msg);
        else switch (type) {
            case "success":
                console.log("%c" + "☑ - " + msg, "color: #B0C4DE");
                break;
            case "error":
                console.error(msg);
                break;
            case "warning":
                console.warn(msg);
                break;
            case "info":
                console.log("%c" + "⚠ - " + msg, "color: #F0E68C");
                break;
            default:
                console.log(msg);
                break;
        }
    }
};