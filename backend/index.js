const express = require("express");
const app = express();

app.get("/test", function(req, res){
    res.send("Boo!");
});

app.listen(6060, function(){
    console.log("> Escuchando en el puerto 6060");
});