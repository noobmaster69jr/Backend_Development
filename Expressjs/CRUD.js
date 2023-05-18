const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let array_of_users = [{id:1, name:"ash"},{id:2, name:"tharun"},{id:3, name:"arun"}]

app.get("/get/:id",function(req, resp){
    let userId = req.params
    userId = array_of_users.filter(user => user.id == userId.id)
    if(userId.length != 0){
        resp.send(userId)
    }else{
        resp.status(400).send("Requested user is not present")
    }
})

app.post('/post',Validate, function(req, resp){
   let userData = req.body
   array_of_users.push(userData)
   console.log(array_of_users)
   resp.send("Data has been added successfully")
})
function Validate(req, resp, next){
    const userData = req.body
    console.log(userData)
    if(userData.id && userData.name){
        next()
    }else{
        resp.status(400).send({'err':'Data is missing'})
    }
}

app.delete("/delete", function(req, resp){
    let userId = req.body
    array_of_users = array_of_users.filter(user => user.id != userId.id)
    console.log(array_of_users)
    resp.send("data has been deleted successfully")
})

app.put("/put", Validate, function(req, resp){
    const userData = req.body
    console.log(array_of_users)
    array_of_users = array_of_users.filter(user => user.id != userData.id)
    array_of_users.push(userData)
    console.log(array_of_users);
    resp.send("data has been updated successfully")
})
app.listen(8080, function(){
    console.log("server started")
})