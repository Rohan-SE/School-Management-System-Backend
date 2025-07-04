import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    rollNumber:{
        type:String,
        required:true,
        unique:true
    },
    class:{
        type:String,
        required:true,
    },
    section:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    dob:{
        type:Date,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    contactNumber:{
        type:String,
        required:true
    },
    guardianName:{
        type:String,
        required:true
    },
    guardianContact:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:['active','inactive'],
        default:'active'
    },
    photo:{
        type:Buffer
    }
},{timestamps:true})

const student = mongoose.model('Student',studentSchema)

export default student