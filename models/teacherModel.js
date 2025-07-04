import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    employeeId:{
        type:String,
        required:true,
        unique:true,
    },
    gender:{
        type:String,
        required:true
    },
    contactNumber:{
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
    address:{
        type:String,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    hireDate:{
        type:Date,
        required:true
    },
    subjects:[
        {
            type:String,
            required:true
        }
    ],
    assignedClass:[
        {
            type:String,
            required:true
        }
    ],
    status:{
        type:String,
        enum:['active','inactive'],
        default:'active'
    },
    photo:{
        type:Buffer
    }
},{timestamps:true})

const teacher = mongoose.model('Teacher',teacherSchema)

export default teacher