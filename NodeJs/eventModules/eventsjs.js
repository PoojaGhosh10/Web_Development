const EventEmiiter= require("events");
const event= new EventEmiiter();
event.on("sayMyName",()=>{
    console.log("Your name is ?");
});

//call the event
//the event is created all on its own


//if emitted first and then event is defined it will not produce output


// emitting name events
//registerning and unregistering listener function

event.on("sayMyName",()=>{
    console.log("Your name is Pooja?");
});
event.on("sayMyName",()=>{
    console.log("Your name is Shruti?");
});
event.on("sayMyName",()=>{
    console.log("Your name is Lisa?");
});
event.on("sayMyName",()=>{
    console.log("Your name is Kiikkie?");
});

//like a function call
event.emit("sayMyName");
//try with alert , popup
//register
event.on("checkPage",(sc, msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`);
});

///to check the status of the server
event.emit("checkPage", 200, "ok");