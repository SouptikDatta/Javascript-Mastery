/*  -------- QUESTION ---------

Create a count function
count() //1
count() //2
count() //3
count.reset()
count() //1
count() //2
count() //3

*/


/*  FIRST SOLUTION

     --------------USING IIFE ----------------
*/

let count = (function () {
    let counter = 0;
    function calc () {
        counter++;
        console.log(counter);
        return counter;
    }
    calc.reset = function () {
        counter = 0;
    }

    return calc;
})()

count() //1
count() //2
count() //3
count.reset()
count() //1
count() //2


/*     ALTERNATE SOLUTION 1

    ----------FUNCTIONS AS OBJECTS----------

function count() {
    count.counter = (count.counter || 0) + 1;
    console.log(count.counter);
    return count.counter;
}

count.reset = function() {
    count.counter = 0;
};

*/



/*     ALTERNATE SOLUTION 2 

   -----------USING GENERATOR FUNCTION----------

function count() {
    count.counter = (count.counter || 0) + 1;
    console.log(count.counter);
    return count.counter;
}

count.reset = function() {
    count.counter = 0;
};

*/

