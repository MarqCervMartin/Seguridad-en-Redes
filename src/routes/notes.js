const express = require('express');
const router = express.Router();
router.get('/notes/add',(req,res)=>{
    res.render('notes/new-note');
})
module.exports =router;