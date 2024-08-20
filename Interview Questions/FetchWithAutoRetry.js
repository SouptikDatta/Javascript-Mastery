/*  -------- Question ----------

Create a fetchWithAutoRetry(fetcher, count), which automatically fetch again when error happens, until the maximum count is met.
    
function fetchWithAutoRetry (fetcher, maximumRetryCount) { 
    // code goes here
}

*/


function fetchWithAutoRetry(fetcher, maximumRetryCount) {
    return new Promise((resolve, reject) => {
        const attemptFetch = (retriesLeft) => {
            fetcher()
                .then(resolve) // Resolve the promise if the fetch is successful
                .catch((error) => {
                    if (retriesLeft > 0) {
                        console.log(`Retrying... (${maximumRetryCount - retriesLeft + 1})`);
                        attemptFetch(retriesLeft - 1);
                    } else {
                        reject(error); // Reject the promise if no retries are left
                    }
                });
        };

        attemptFetch(maximumRetryCount);
    });
}


// Example usage with p1 and p2
const p1 = () => new Promise((resolve, reject) => resolve('p1'));

const p2 = () => new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
        resolve('p2 success');
    } else {
        reject('p2 failed');
    }
});

fetchWithAutoRetry(p2, 5)
    .then(result => console.log('Success:', result))
    .catch(error => console.log('Final failure:', error));








/*

async function fetchWithAutoRetry (fetcher, maximumRetryCount ) { 
    if(maximumRetryCount > 0) {
        try {
            console.log('in try block = ', maximumRetryCount);
            const result = await fetcher();
            return result;
        } catch(e) {
            console.log('in catch block = ', maximumRetryCount)
            const result = await fetchWithAutoRetry(fetcher, maximumRetryCount - 1);
            return result;
        }
    }
    throw new Error('max retry count exceeded');
}

const p1 = () =>  new Promise((resolve, reject) => resolve('p1'));
const p2 = () => new Promise((resolve, reject) => {
    const randomNumber = Math.random() > 0.5;
    console.log({randomNumber: randomNumber});

    if(randomNumber) {
        resolve('resolved p2');
    } else {
        reject('rejected p2');
    }
})


(async function a() {
    try{
        const result = await fetchWithAutoRetry(p2, 5);
        console.log('result', result);
    } catch(e) {
        console.error('Failed to fetch', e);
    }
})()


*/