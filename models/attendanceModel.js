import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
    date:{
        type:Date,
        default:Date.now()
    },
    class:{
        type:String,
        required:true
    },
    section:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['Teacher','Student'],
        default:'Student'
    },
    personId:{
        type:mongoose.Schema.Types.ObjectId,
        refPath:"role"
    },
    status:{
        type:String,
        enum:['Present','Absent','Leave'],
        default:'Absent'
    }
})

const attendance = mongoose.model('Attendance',attendanceSchema)

export default attendance