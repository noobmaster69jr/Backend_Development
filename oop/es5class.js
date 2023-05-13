// before es6 we create class by using function

function Person(name, age){
    let activity = "hello"    //local within function scope
    this.name = name;
    this.age = age;
    return this;
}

let person = new Person('amul',25, "active"); // here "this" reference to calling site
let person1 = Person("arun", 15, "active"); 
//we can also create object without new in function based objects, 
//but "this" points to global scope as function in global space

console.log(person)
console.log(person1.name)
/**
 * new keyword :
 *    new keyword is not only associated with class , it is also used with function
 */


//we can also create objects by 

let mobile = {
    name:"samsung",
    type:"Android",
    model:"lolipop",
}