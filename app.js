const express = require ("express");
const bodyParser = require ("body-parser");
const request = require ("request");
const https = require ("https");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.get("/",function (req,res) {
   res.sendFile(__dirname +"/index.html");
    
});

app.listen(3000,function(){
    console.log("server is running");
});

//8f3becfd50bd2fce6811dbc37676b88a-us21
//a2e6e431e5