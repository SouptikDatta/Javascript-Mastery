/*  --------- Validate Paranthesis -----------

validate('{}[]()') // true 
validate('{[()]}') // true 
validate('{[}]') // false, they are not in the right order   
validate('{}}') // false, last is not paired with {

*/

function validate(s) {
    const stack = [];
    const pairs = {
      '(': ')',
      '[': ']',
      '{': '}'
    };
  
    for (let char of s) {
        if (pairs[char]) {  // If the character is an opening bracket, push the corresponding closing bracket onto the stack
            stack.push(pairs[char]);
        } else {
            // If the character is a closing bracket, check if it matches the top of the stack
            let topStack = stack.pop();
            if (topStack !== char) {
                return false;
        }
      }
    }
  
    // If the stack is empty, all brackets were matched correctly
    return stack.length === 0;
}
  

console.log(validate("{}[]()"))     //true
console.log(validate('{[()]}'))    // true 
console.log(validate('{[}]'))     // false, they are not in the right order   
console.log(validate('{}}'))     // false, last is not paired with {