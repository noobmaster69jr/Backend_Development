class Person{
    name;           // data members
    age;

//constructor is a special function create object , which do not qualifies as member function
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    //member function - just a function without a function keyword
    aboutFunc(){
        console.log(`I'm ${this.name} and i'm ${this.age} years old`);
    }
    //we use this keyword to access data member inside the member functions/methods

    updateAge= () => console.log("i'll be "+(this.age+1) +" next year")
}

let person = new Person('aravind', 22);

console.log(person.name, person.age)

person.aboutFunc();

person.updateAge()


/**
 * It looks like "new" keyword only calls constructor, but it does more than that
 * The new keyword actually executes a 4 step process
 *    The new keyword creates a brand new empty js object
 *    it does a process of linking
 *    calls the function with the 'this' property assigned to the empty object it created before
 *    the function execution starts(and we know that the this keyword belong to calling site) and
 * if the function does'nt return any specific object then it automatically returns 'this'. otherwise
 * it return the object returned by you
 */