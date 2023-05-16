/**
 * Promises are special objects in js, that are also considered as 
 * readablitiy enhancers.
 * they get returned immediately from a function setup to return a promise
 * they act as a placeholders for data which we hope to get back from future task
 * we also attach the functionality that we want to defer until the future task is done
 * and promise automatically handle execution of the functionality 
 * Promises do 2 things one inside and one outside js
 * it signs up the process required to run in the runtime and 
 * gives a placeholder in js, which has a value property
 * */ 

/**
 * 
 * promise object has 4 major properties
 * status
 * value
 * onfulfillment
 * onReject
 */

/**
 * state/status shows current promise status
 * pending state
 * fulfilled state
 * rejected state
 */

/**
 * value - when state of the promise is pending then the value property is 
 * undefined. once the promise is (status - fulfilled)resolved then the value property
 * is updated with new value(this value is considered as the resolved/returned value)
 * so it acts a placeholder till promise is finishes
 */

/**
 * onfulfillment - this is an array which contains functions that we attach
 * to the promise object.(to a promise object we can attach functions using
 * the .then() method). when the value property is updated from undefined to
 * new value, js gives chance to these attached functions one by one with 
 * value property as their argument(if there is no piece of code in call 
 * stack and global is done)
 */

function fetch(url){

    return new Promise(function (resolve, reject){
        //some code
        /**if we want to return something on success we call resolve(data) */
    })
}

/**
 * functions attached to promise then pushed into microtask queue
 *  which has higher priority over event queue
 * promise -> callbacks -> microtask queue
 * normal callbacks -> event queue
 */