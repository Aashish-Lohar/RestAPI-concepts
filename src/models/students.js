const mongoose=require('mongoose');
const validator=require('validator');

const student_schema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:4,
    },
    email:{
        type:String,
        required:true,
        unique:[true,"email is already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid Email');
            }
        }
    },
    phone:{
        type:Number,
        min:10,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true,
        maxlength:50,
    }
})


//create new model
const Student=new mongoose.model('Student',student_schema);
module.exports=Student;