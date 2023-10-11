const express = require("express");
const router = express.Router();

router.get("/boo", function(req, res){
    res.send("BOOOOO!!!");
});

module.exports = router;