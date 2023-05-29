const express = require('express');
const router = express.Router();
const User = require('../models/user.model');



router.get('/menu', async (req,res)=>{
    const users = await User.findById("205291211");
    res.json(users);
});

router.post('/menu', async (req,res)=>{
    const {_id, name, email, password} = req.body;
    const user = new User({_id,name,email,password});
    await user.save();
    res.json({status: "Usuario ingresado"});

})

module.exports = router;