const express = require("express");
const app = express();
const mongoose = require("mongoose");
const postRoute = require('./routes/posts.js');
const bodyParser = require('body-parser')
const cors = require('cors');
require('dotenv/config');

app.get('/',(req,res) =>{
    res.send("Animesh")
});

// Middlewares
app.use('/posts',postRoute);
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.DB_CON_LOC,{ useNewUrlParser: true,useUnifiedTopology: true },() =>{
    console.log("Connected to DB");
})
app.listen("3000")