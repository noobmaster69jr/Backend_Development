function todo(task){
    console.log("started")
    setTimeout(function fun(){
        console.log("completed ", task)
    }, 1000)
    console.log("ended")
    
}

console.log("Starting")
todo("assignments")
//even after the todo function is ended fun() still remembered the value of task
console.log("Ending")
/*
this happens because of closure,
closure is when a function remembers its lexical scope, even when executed outside of its lexical scope
*/
