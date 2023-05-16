let player = "virat"

function printName(){
    console.log(player)
   // console.log(coach) - throws error as coach is defined only at execution phase
    coach = "shewag"     //autoglobal
    console.log(coach)
}

// console.log(coach) - error , resolved only after function call
printName()
console.log(coach)