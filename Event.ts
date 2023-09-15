import Event from "events"
import welcomeEvent from "./Fs"

console.log(Event)

const emitter = new Event

emitter.on("Money", ()=>{
    console.log("ok ma");
    
})

emitter.emit("Money", "Please get me rice 300 naira")


setInterval(()=>{
    emitter.emit("Money", "Please get me rice 300 naira")

}, 5000)


