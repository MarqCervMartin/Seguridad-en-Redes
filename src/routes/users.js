const express = require('express');
const router = express.Router();

router.get('/users/signin',(req,res)=>{
    res.render('users/signin');
})
router.get('/users/singup',(req, res)=>{
    res.render('users/signup');
})

router.post('/users/singup',(req,res)=>{
    const{nombre,email,password,confirm_password} =req.body;
    const errors = [];
    console.log(req.body);
    /* if(nombre.length<=0){
        errors.push({text: 'Por favor inserta nombre'});
    }
    if(password!=confirm_password){
        errors.push({text: 'la contrasenia no coincide'});
    }
    if(password.length<4){
        errors.push({text: 'password muy corta, ingresa mas de 4 caracteres'})
    }*/

    if(errors.length>0){
        res.render('users/singup',{errors,nombre,email,password,confirm_password});
    }else{ 
    res.send("OK");
    }
})

module.exports =router;