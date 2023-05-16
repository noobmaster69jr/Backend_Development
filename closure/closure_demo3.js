function a(name){
 return function b(){
    console.log(name)
 }
}

let x = a("ashwin")
console.log(x) //reference to function b
x(); //ashwin