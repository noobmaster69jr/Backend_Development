//An abstraction is a way of hiding the implementation details
// and showing only the functionality to the users.

function Student(){
    this.name = "DummyName"
    throw new Error("You cannot create an instance of abstract class")
}

Student.prototype.print = function(){
    return "i'm "+this.name
}

function person(name){
    this.name = name;
}

person.prototype = Object.create(Student.prototype)

let p = new person("arun")
console.log(p.print())