// const array = [20, 5, 17, 17, 18, 3, 1];
const array = ['i', 'a', 'b', 'j', 'e', 'c', 'k'];

// function quickSort(arr) {
//     if(arr.length < 1)
//         return arr;
    
//     const pivot = arr[0];
//     const left  = [];
//     const right = [];

//     for (let i = 1; i < arr.length; i++) {
//         if (pivot > arr[i]) {
//             left.push(arr[i]);
//         }
//         else if (pivot < arr[i]) {
//             right.push(arr[i]);
//         }
//     }

//     return [...quickSort(left), pivot, ...quickSort(right)];
// }

// console.log(quickSort(array));


// function bubbleSort(arr) {
//     const n = arr.length;

//     for (let i = 0; i < n; i++) {
//         for(let j = i; j < n; j++) {
//             if(arr[i] > arr[j]) {
//                 [arr[i], arr[j]] = [arr[j], arr[i]];
//             }
//         }
//     }
//     return arr;
// }

// console.log(bubbleSort(array));



function insertionSort(arr) {
    let n = arr.length;

    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > key) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
    return arr;
}

console.log(insertionSort(array));