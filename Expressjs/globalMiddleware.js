const express = require('express')

const app = express()

app.use(function(req, resp, next){
    console.log("i'm in global middleware")
    next()
})

app.get('/', function(req, resp){
    resp.send("path / executed after global middleware")
    console.log("end")
})

app.get('/chat', function(req, resp){
    resp.send("path /chat executed after global middleware")
    console.log("end")
})
app.listen(8080, function(){
    console.log("we are making a global middleware")
})

//we can make a middleware as global , such function will execute for all routes 
//app.use(function(req, resp){})