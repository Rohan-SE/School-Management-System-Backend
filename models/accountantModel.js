import mongoose, { model } from "mongoose";

const accountantSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    employeeId:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    contactNumber:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true,
    },
    hireDate:{
        type:Date,
        required:true
    },
    status:{
        type:String,
        enum:['active','inactive'],
        default:'active'
    }
},{timestamps:true})

const accountant = mongoose.model('Accountant',accountantSchema)

export default accountant