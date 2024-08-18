const body = document.querySelector("body")
const div = document.querySelector("div")
const span = document.querySelector("span")
const button = document.querySelector("button")

div.addEventListener('click', () => {
  console.log("div was clicked")
})

span.addEventListener('click', () => {
  console.log("span was clicked")
})

button.addEventListener('click', (event) => {
  event.stopPropagation()
  console.log("button was clicked")
})