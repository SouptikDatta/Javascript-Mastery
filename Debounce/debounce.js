const btn = document.querySelector('.increment-btn');
const btnPress = document.querySelector('.increment-count');
const trigger = document.querySelector('.trigger-count');

var pressedCount = 0;
var triggeredCount = 0;

//Debounce method of Lodash Library
const debouncedCount = _.debounce(() => {
    trigger.innerHTML = ++triggeredCount;
}, 800);


btn.addEventListener("click", () => {
    btnPress.innerHTML = ++pressedCount;
    debouncedCount();
});
