// Create a debounce function like search functionality 

function debounce(searchFn, delay) {
    let timer;
    return function optimizedSearch(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            searchFn(...args)
        }, delay)
    }
}

function print(data) {
    console.log(data);
}

let printOptimized = debounce(print, 3000);
printOptimized('a');
printOptimized('am');
printOptimized('ama');
printOptimized('amaz');
printOptimized('amazo');
printOptimized('amazon');