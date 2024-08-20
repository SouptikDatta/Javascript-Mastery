/*   ---------- QUESTION -----------

const add = (a, b) => a+b;
const memoizedAdd = memoizeOne (add);

const sub = (a, b) => a-b;
const memoizedSub = memoizeOne (sub);

memoizedAdd(1, 2); //3
// Add function is called to get new value

memoizedAdd(1, 2); // 3
// Add function is not executed: previous result is returned

memoizedAdd(2, 3); // 5
// Add function is called to get new value

memoizedAdd(2, 3); // 5
// Add function is not executed: previous result is returned

memoizedSub(3, 1); // 2
// Sub function is called to get new value

memoizedSub(3, 1); // 2
// Sub function is not executed: previous result is returned

*/


const memoizeOne = (fn) => {
    const cache = new Map();
  
    return (...args) => {
      const key = JSON.stringify(args);
      if (cache.has(key)) {
        console.log('Getting from cache')
        return cache.get(key);
      }
      const result = fn(...args);
      cache.set(key, result);
      return result;
    };
  };
  
  const add = (a, b) => a + b;
  const memoizedAdd = memoizeOne(add);
  
  const sub = (a, b) => a - b;
  const memoizedSub = memoizeOne(sub);
  
  console.log(memoizedAdd(1, 2)); // 3, Add function is called to get new value
  console.log(memoizedAdd(1, 2)); // 3, Add function is not executed: previous result is returned
  console.log(memoizedAdd(3, 1)); // 4, Add function is called to get new value
  console.log(memoizedAdd(3, 1)); // 4, Add function is not executed: previous result is returned
  
  console.log(memoizedSub(3, 1)); // 2, Sub function is called to get new value
  console.log(memoizedSub(3, 1)); // 2, Sub function is not executed: previous result is returned
  
  console.log(memoizedAdd(3, 1)); // 4, Add function is not executed: previous result is returned