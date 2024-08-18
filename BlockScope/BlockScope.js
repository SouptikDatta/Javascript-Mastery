var a = 100;

{
    var a = 10;
    let b = 20;
    const c = 30; 
    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(a);
console.log(b);  //ReferenceError: b is not defined
console.log(c);  //ReferenceError: c is not defined