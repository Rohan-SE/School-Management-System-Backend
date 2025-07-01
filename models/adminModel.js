import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
    name:{
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
    password:{
        type:String,
        required:true,
        min:[6,"Password must be 6 length"],
        max:10
    }
})

const adminModel = mongoose.model('admin',adminSchema)

export default adminModel