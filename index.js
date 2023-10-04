const express = require("express");
const app = express();

app.get("/test", function(req, res){
    res.send("Boo!");
});

app.get("/poyo", function(req, res){
    res.send("POYO!");
});

app.listen(6060, function(){
    console.log("> Listening in the port ");
});