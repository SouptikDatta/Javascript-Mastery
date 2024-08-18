//SyntaxError: Identifier 'a' has already been declared
let a = 10;
{
    var a = 11;
}


//No error message

var a = 10;
{
    let a = 11;
}