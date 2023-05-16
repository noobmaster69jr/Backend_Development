let x = 10;
function print(){
    let x = 5;
    console.log(x)   //here x is local to this function
}

print()
console.log(x);   //x is global