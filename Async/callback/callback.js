
function fn() {
  console.log("fn");
}
function fun(x, fn) {
  fn();
  console.log("this is fun");
}
//callbacks are function that are passed as a argument to another function
fun(5, fn);

/*
disadvantage of callbacks :
inversion of control(major prblm), callback hell
inversion of control = if there is some part of code whose control we are
passing to someone else and we don't know how that part will be executed
(passing a callback to function, which we do not know how callback will be
used). this problem will be inversion of control
*/