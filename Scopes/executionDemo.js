var Student = "Ahan"
function printName(){
    var Student = "Khan"
    console.log(Student)
}

printName()

function func(){
    teach = "arun"
    console.log(teach)   
    var teach = "tharun"     
}

func()

console.log(teach) //teach didn't become autoglobal as teach was already in func scope