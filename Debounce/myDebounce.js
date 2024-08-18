const btn = document.querySelector('.increment-btn');
const btnPress = document.querySelector('.increment-count');
const trigger = document.querySelector('.trigger-count');

var pressedCount = 0;
var triggeredCount = 0;

// Custom Debounce function with cancel method
const myDebounce = (cb, delay) => {
    let timer;

    const debounced = (...args) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            cb(...args);
        }, delay);
    };

    debounced.cancel = () => {
        if (timer) clearTimeout(timer);
        timer = null;
    };

    return debounced;
};

const debouncedCount = myDebounce(() => {
    trigger.innerHTML = ++triggeredCount;
}, 800);

btn.addEventListener("click", () => {
    btnPress.innerHTML = ++pressedCount;
    debouncedCount();
});

// To cancel the debounced function after 5 seconds
setTimeout(() => {
    debouncedCount.cancel();
    console.log('Debounced function cancelled');
}, 5000);