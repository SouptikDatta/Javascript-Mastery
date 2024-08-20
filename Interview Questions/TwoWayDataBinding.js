/*  --------- Two way Data Binding like Angular, Vue js --------

Please create a function model(state, element), to bind state.value to the HTMLInputElement element.
const input = document.createElement('input')
const state = { value: 'Hi')
model(state, input)
console.log(input.value) // 'Hi'
state.value = 'dev'
console.log(input.value) // 'dev'
input.value = 'souptik'
input.dispatchEvent(new Event('change'))
console.log(state.value) // 'souptik'

*/


const input = document.createElement('input');
const state = { value: 'Hi' }
model(state, input);

function model(state, input) {
    // matches same value
    input.value = state.value;
    
    Object.defineProperty(state, 'value', {      
        get() {
            return input.value;
        },

        set(newVal) {
            // push update to input
            if (newVal != input.value) {
                input.value = newVal;
            }
            return;
            // dipatch event to update value;
        }
    });
}

console.log(input.value) // 'Hi'

state.value = 'dev'
console.log(input.value) // 'dev'

input.value = 'souptik'
input.dispatchEvent(new Event('change'))
console.log(state.value) // 'souptik'