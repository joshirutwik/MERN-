var mongoose = require('mongoose'); 
var express = require('express'); 
var router = express.Router(); 

// Student Model
var studentSchema = require('../models/Student');

// Create Studnet 
router.route('/create-student').post((req,res,next) => {
        studentSchema.create(req.body,(err,data) => {
            if(err)
            {
                console.log(err.message+"  In Router  file");
                return(err.message+"  In Router  file");
            }
            else 
            {
                res.json(data);
            }
        })
}); 

// READ ALL Students 
router.route('/').get((req,res)=>{
    studentSchema.find((err,docs) => {
        if(err)
        {
            console.log(err.message);
        }
        else 
        {
            res.json(docs);
        }
    })
})

// Get a Single Student 
router.route('/edit-student/:id').get((req,res) => {
    studentSchema.findById(req.params.id,(err,docs) => {
        if(err)
        {
            console.log(err);
        }
        else 
        {
            res.json(docs);
        }
    })
})

// Update Student 
router.route('/update-student/:id').put((req,res,next) => {
    studentSchema.findByIdAndUpdate(req.params.id , {$set:req.body},(err,docs) => {
        if(err)
        {
            console.log(err);
        }
        else 
        {
            res.json(docs);
        }
    })
}); 

// DELETE Student 
router.route('/delete-student/:id').delete((req,res,next) => {
    studentSchema.findByIdAndRemove(req.params.id,(err,data) => {
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.status(200).json(data);
        }
    })
})

module.exports = router;