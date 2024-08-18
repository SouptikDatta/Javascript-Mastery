function counter() {
    var count = 0;
    return function incrementCounter () {
        count++;
        console.log(count);
    }
}

var counterFun = counter();
counterFun(); 