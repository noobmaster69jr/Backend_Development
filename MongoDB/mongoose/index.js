const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/db")    //usr - db name
  .then((res) => console.log("connected to MongoDB"))
  .catch(err=>console.log("error : ",err));

  let cars = mongoose.model("Cars",
                mongoose.Schema({
                    brand: String,
                    model: String
                }))

cars.create({"brand": "maruti", "model":"Swift"})
            .then(data => console.log('Sucess'))
            .catch(err => console.log("Error"))
