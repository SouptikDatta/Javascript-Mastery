const btn = document.querySelector('.increment-btn');
const btnPress = document.querySelector('.increment-count');
const trigger = document.querySelector('.trigger-count');

var pressedCount = 0;
var triggeredCount = 0;
const start = new Date().getTime();

//Throttle method of Lodash Library
const throttledCount = _.throttle(() => {
    const now = new Date().getTime();
    console.log(now - start);
    trigger.innerHTML = ++triggeredCount;
}, 800);


btn.addEventListener("click", () => {
    btnPress.innerHTML = ++pressedCount;
    throttledCount();
});
