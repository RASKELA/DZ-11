function delayedLog(text, delay) {
    setTimeout(() => {
        console.log(text);
    }, delay);
}

module.exports = delayedLog;
