//closure
function process(){
  let i = 0;
  function innerFunction(){
    i += 1;
    return i;
  }
  return innerFunction
}

var fun = process()
// when process seems like removed from the stack after return innerFunction
// here still fun->innerFunction still has access to i
console.log("first time calling ", fun())     //1
console.log("second time calling ", fun())    //2
console.log("third time calling ", fun())     //3



function fun(){
    let i = 0;
    let j = [1, 2, 3];
    let k = 3;
    function innerProcess(){
        i += 1;
        console.log(j);  // in closure, persistent memory for i, j is created and values are updated further but not k
    }
    return innerProcess;
}

let x = fun()
let obj = {func : x}
console.log(obj)


