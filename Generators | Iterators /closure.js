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
console.log("first time calling ", fun())
console.log("second time calling ", fun())
console.log("third time calling ", fun())

