console.log("start")

setTimeout(() => {
    console.log("callback")
}, 5000)

console.log("end")

//Trust issues like here are million line of codes which takes 10 seconds
var startTime = new Date().getTime()
var endTime = startTime
while(endTime < startTime + 10000) {
    endTime= new Date().getTime()
}

console.log("while expires after 10 seconds")
