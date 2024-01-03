export function classList(...classes) {
    return classes.join(' ').trim()
};

export function mobile(classes) {
    var cls = classes.split(' ');
    for (let i = 0; i < cls.length; i++) {
        cls[i] = 'max-[768px]:' + cls[i]
    };
    return cls.join(' ').trim()
}

export function before(classes) {
    var cls = classes.split(' ');
    for (let i = 0; i < cls.length; i++) {
        cls[i] = 'before:' + cls[i]
    };
    return cls.join(' ').trim()
}

export function after(classes) {
    var cls = classes.split(' ');
    for (let i = 0; i < cls.length; i++) {
        cls[i] = 'after:' + cls[i]
    };
    return cls.join(' ').trim()
}