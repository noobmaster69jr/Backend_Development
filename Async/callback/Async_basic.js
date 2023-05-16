function process(){
    console.log("started")
    setTimeout(function f(){
        console.log("This is f")
    }, 1000)
    //after the timer runs out the f() is added to event queue 
    for(let i = 0; i < 10000; i++){

    }
    console.log("Ended")
}

process()

/*
by default js uses synchronous way of  code execution
but synchronous execution works only on operations native to js 
(setTimeout, setInterval given to us by browser
  similarly node also provides filesystem, process, setTimeout)
  */

  
/*
the condition for event loop to execute operations in event queue is to 
1)callstack must be empty
2)global scope must be done
*/