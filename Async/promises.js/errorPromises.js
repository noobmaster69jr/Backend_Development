/**
 * .then() takes two callbacks success callback and error callback
 */

x.then(
  function success() {},
  function err() {}
);

/**
 * catch() method returns a promise it works same as then 
 * but works only on rejected cases
 */

x.then().catch(function err(){})

/**
 * if error is handled then catch is not called
 */

x.then(success, errorHandled).catch()

//we can also use throw keyword to throw a error(user defined exception)

/**
 * if we want to handle error in async await we can use try catch block
 */

try{
    //some code
}
catch(err){

}