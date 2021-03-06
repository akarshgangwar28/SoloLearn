const express = require("express");
const mongoose = require('mongoose');
const Courses=require('../models/courses')
const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost:27017/solo-learn', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})

const db = mongoose.connection;

app.get("/courseUpload",(req ,res)=>{
    res.render("course")

})

app.get("/:id/courseView",(req,res)=>{
    var gotId=await Courses.findOne({_id:id})
    console.log(gotId)
    res.render("courseView",{id:gotId})

})

app.get("/beInstructor", (req,res)=>{
    
})

app.get("/",(req,res)=>{
    res.send("<h1>Its testing purpose</h1>")

})

app.listen(3005, ()=> {
    console.log("Server started on port 3005");
  });

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});
