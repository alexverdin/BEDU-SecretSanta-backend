const express = require("express");
const app = express();

// importamos los router
const testRouter = require('./routers/test');
const booRouter = require('./routers/boo');

// conectamos los routers con el index
app.use(testRouter);
app.use(booRouter);

app.listen(6060, function(){
    console.log("> Listening in the port 6060");
});