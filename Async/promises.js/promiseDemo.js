function numberState(val) {
  return new Promise(function (resolve, reject) {
    console.log("started");
    setTimeout(function process() {
      if (val % 2 == 0) {
        resolve("Even");
      } else {
        reject("Odd");
      }
    }, 1000);
    console.log("Executing");
  });
}

var l =numberState(8)
console.log(l)
setTimeout(function (){
    console.log(l)
}, 2000)
/**
 * Initially the promise is in pending state
 * promise is fulfilled when resolve() is called
 * promise is rejected when reject() is called
 */
