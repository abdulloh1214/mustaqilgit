const express = require("express")
const app = express()
const port = 3000
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const rIndex = require("./routers/index")

mongoose.connect("mongodb://localhost:27017/films")
const db = mongoose.connection
db.on("open", ()=>{
    console.log("Mongodb is running...")
})
db.on("error", ()=>{
    console.log("Mongodb is wrong...")
})


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.get("/", (req, res)=>{
    res.send("Hello world")
})
app.use(rIndex)
app.listen(port, ()=>{
    console.log("Server is running")
})