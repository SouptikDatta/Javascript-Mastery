const btn = document.querySelector('.increment-btn');
const btnPress = document.querySelector('.increment-count');
const trigger = document.querySelector('.trigger-count');

var pressedCount = 0;
var triggeredCount = 0;
const start = new Date().getTime();

// Custom Throttle function with cancel method
const myThrottle = (cb, d) => {
    let lastTimer = 0;
    let timeout;

    const throttled = (...args) => {
        let now = new Date().getTime();
        if (now - lastTimer < d) {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                lastTimer = now;
                cb(...args);
            }, d - (now - lastTimer));
            return;
        }
        lastTimer = now;
        cb(...args);
    };

    throttled.cancel = () => {
        clearTimeout(timeout);
        lastTimer = 0;
    };

    return throttled;
};

const throttledCount = myThrottle(() => {
    const now = new Date().getTime();
    console.log(now - start);
    trigger.innerHTML = ++triggeredCount;
}, 1000);

btn.addEventListener("click", () => {
    btnPress.innerHTML = ++pressedCount;
    throttledCount();
});