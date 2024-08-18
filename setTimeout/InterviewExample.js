function x() {
    for (var i = 0; i <=5 ; i++) {
        setTimeout(function () {
            console.log(i);
        }, i*1000);
    }

    console.log('HELLO WORLD'); 
}
x();

/* Output
HELLO WORLD
6
6
6
6
6
6
*/


//FIX THE PROBLEM
//1. With let
function x() {
    for (let i = 0; i <=5 ; i++) {
        setTimeout(function () {
            console.log(i);
        }, i*1000);
    }

    console.log('HELLO WORLD'); 
}
x();

/* Output
HELLO WORLD
0
1
2
3
4
5
*/


// 2. With closure property
function x() {
    for (let i = 0; i <=5 ; i++) {
        function close(a) {
            setTimeout(function () {
                console.log(a);
            }, a*1000);
        }
        close(i);
    }

    console.log('HELLO WORLD'); 
}
x();

/* Output
HELLO WORLD
0
1
2
3
4
5
*/