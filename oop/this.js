/**
 * Behavior of this keyword is different in js than c++ or java
 * In js "this" keyword references to the calling site i.e, from where the function
 *  or class it is called
 *
 */

/* this reference the object that executing the current function
method -> obj
function -> global(window, global)
*/

const video = {
    title: 'a', 
    play(){       //method
        console.log(this);
    }
}

video.play()

function playVideo(){   //regular function - global scope
    //console.log(this);
}
playVideo();

/**
 * Incase of arrow function 'this' is not referring to calling site but to its lexical scope
 */

function Songs(title){
    this.title = title;                     
    console.log(this)
}
let song = new Songs("Lose yourself")       //using constructor -> object


let movies = {
    title: 'a',
    tags : ['a','b','c'],
    showMovies(){
        this.tags.forEach(function(tag){    //this points to the object
           console.log(this.title, tag) 
           // this is inside a callback function which points to global
           // but now "this" points to the object as "this" is passed as parameter for forEach
        }, this) 
    }
}

movies.showMovies()