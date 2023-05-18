const express = require("express")

const app = express()
    // :id - params
app.get('/about/:id', function(req, resp){
    console.log("id", req.params.id)
    console.log("query", req.query);
    resp.send(`I'm about page of userId ${req.params.id}`)
} )


app.listen(8080, function(){
    console.log("server started")
})