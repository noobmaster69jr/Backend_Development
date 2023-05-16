//we use a pair of curly braces to make a block scope
// visibility of variables and function are within the block

{
    let x = 15;
    console.log(x)
}

{
  console.log(x); // doesn't work
}


console.log(x)      //doesn't work