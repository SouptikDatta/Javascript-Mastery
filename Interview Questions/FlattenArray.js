//  ---------- FIRST METHOD ----------

function flattenArray(arr) {
    let output = [];
    for(let i = 0; i < arr.length; i++) {
        if(typeof(arr[i]) === 'object'){    // OR write ----- if(Array.isArray(arr[i]))
            let flattened = flattenArray(arr[i]);
            for(let j = 0; j < flattened.length; j++) {
                output.push(flattened[j]);
            }
        }
        else {
            output.push(arr[i]);
        }
    }
    return output;
}


const a = [1, 2, 0.1, [4, [5, 6]], [true, [3, 0.5]], 8]
const result = flattenArray(a); 
console.log(result);   // [ 1, 2, 0.1, 4, 5, 6, true, 3, 0.5, 8]



/*   ----------ALTERNATE METHOD-----------

function flattenArray(arr, output) {
    for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
           flattenArray(arr[i], output);
        }
        else {
            output.push(arr[i]);
        }
    }
    return output;
}


const a = [1, 2, 0.1, [4, [5, 6]], [true, [3, 0.5]], 8]
const result = flattenArray(a, []); 
console.log(result);   // [ 1, 2, 0.1, 4, 5, 6, true, 3, 0.5, 8]

*/