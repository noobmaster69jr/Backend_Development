const express = require('express')

const app = express()

function logger(req, resp, next){
    console.log("I'm in middleware")
    next()
}
app.get('/',logger,function(req, resp){
    resp.send("I'm executed after middleware function")
    console.log("I'm in controller")
})
app.listen(8080, function(){
    console.log("server started for middleware demo")
})

//middleware are function which has access to request and response objects
//midlleware function take req, resp and next as parameters 
//when a request is sent before reaching the main controller it goes through middleware