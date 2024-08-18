
/*

Please implement function chunk(arr: any[], size: number)
chunk([1,2,3,4,5], 1)          // [[1], [2], [3], [4], [5]]
chunk([1,2,3,4,5], 2)         // [[1, 2], [3, 4], [5]]
chunk([1,2,3,4,5], 3)        //  [[1, 2, 3], [4, 5]]
chunk([1,2,3,4,5], 4)       // [[1, 2, 3, 4], [5]]
chunk([1,2,3,4,5], 5)      // [[1, 2, 3, 4, 5]]

*/

function chunk(arr, size) {
    let result = [];
    let miniRes = [];
    for (let i = 0; i < arr.length; i++) {
        miniRes.push(arr[i]);
        if(miniRes.length === size || i == arr.length - 1) {
            result.push(miniRes);
            miniRes = [];
        }
    } 
    return result;
}

console.log(chunk([1,2,3,4,5], 1))   
console.log(chunk([1,2,3,4,5], 2))        
console.log(chunk([1,2,3,4,5], 3))    
console.log(chunk([1,2,3,4,5], 4))      
console.log(chunk([1,2,3,4,5], 5)) 