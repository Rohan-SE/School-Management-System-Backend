import mongoose from "mongoose";

const classSchema = new mongoose.Schema({
    class:{
        type:String,
        required:true
    },
    section:{
        type:String,
        required:true
    },
    classTeacher:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Teacher'
    },
    capacity:{
        type:Number,
        required:true
    }

})

const classSection = mongoose.model('Class',classSchema)

export default classSection