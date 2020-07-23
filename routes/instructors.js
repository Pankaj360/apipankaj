const express = require('express');
const router = express.Router();

const Instructors = require('../models/Instructors');

//get instructor
router.get('/', async (req,res)=>{
    try{

        const instructors = await Instructors.find();
        res.json(instructors);

    } catch(err){
        res.json({message:err});


    }
    // res.send('we are the instructors');
});

//add instructor

router.post('/', (req,res) =>{

    const instructors = new Instructors ({

        name : req.body.name,
        car : req.body.car,
        price : req.body.price
    });

    instructors.save()
    
    .then(data => {


        res.json(data);
    })
    .catch(err => {


   res.json({message: err});

    });




});







module.exports = router;





