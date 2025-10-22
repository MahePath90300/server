const express = require("express");
const router = express();

router.post("/save",(req,res, next)=>{
    const requestedData = req.body;
res.send(requestedData);
})

module.exports = router;