/* if var is used to declare a variable inside function it takes function scope. else if it used
within block scope or not , it always takes global scope */



function demo(){
    var x = 25
    console.log(x)
}
demo();
//console.log(x) //can't access

{
    var y = 50
}
console.log(y)

console.log(z)  //returns undefined as z is in global
var z = 100