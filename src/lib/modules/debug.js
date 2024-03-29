/**
 * Logs `$msg` to console if `$debug` is true.
 * @param {any} msg message to be logged, can be of any type.
 * @param {boolean} debug `default - true`.
 * @param {string} type (optional) type of message [success, error, warning]
 */
function _log(msg, debug = true, type = undefined) {
    if (debug) {
        if (typeof msg == 'string') {
            switch (type) {
                case "success":return console.log("%c" + "☑ - " + msg, "color: #B0C4DE");
                case "error":return console.error(msg);
                case "warning":return console.warn(msg);
                case "info":return console.log("%c" + "⚠ - " + msg, "color: #F0E68C");
                default: return console.log(msg);
            }
        } else return console.log(msg)
    }
}

export {_log};