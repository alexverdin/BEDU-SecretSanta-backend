/** 
 * Un router es una pieza de Express
 * que puede 'unirse' al Express del index
 * mediante la exportación e importación del propio "router"
 */

const express = require("express");
const router = express.Router();

router.get("/test", function(req, res){
    res.send("Poyo!");
});

module.exports = router;