import mongoose from "mongoose";

const feePaymentSchema = new mongoose.Schema({
    amount:{
        type:Number,
        required:true
    },
    studentId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    paymentDate:{
        type:Date,
        required:true
    },
    paymentMode:{
        type:String,
        enum:['Cash','Bank','Online'],
        default:'Cash'
    },
    receiptNumber:{
        type:String,
        required:true
    },
    remarks:{
        type:String,
        required:true
    }
},{timestamps:true
})

const feePayment = mongoose.model('FeePayment',feePaymentSchema)

export default feePayment