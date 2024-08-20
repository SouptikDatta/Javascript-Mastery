/*  ---------Question-----------

Input->
    console.log(computeAmount().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value())
Output-> 
    143545000

*/

function calculator() {
    this.totalAmount = 0;

    this.crore = function (amount) {
        this.totalAmount += amount * 10000000;
        return this;
    }

    this.lacs = function (amount) {
        this.totalAmount += amount * 100000;
        return this;
    }

    this.thousand = function (amount) {
        this.totalAmount += amount  * 1000;
        return this;
    }

    this.hundred = function (amount) {
        this.totalAmount += amount  * 100;
        return this;
    }

    this.ten = function (amount) {
        this.totalAmount += amount  * 10;
        return this;
    }

    this.value = function () {
        return this.totalAmount;
    }
}

function computeAmount() {
    return new calculator();
}

console.log(computeAmount().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value())  // 143545000
console.log(computeAmount().thousand(10).hundred(3).ten(7).thousand(2).value())   //12370