import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
    {
        amount:{
            type:Number,
            required:[true,'Amount is required'],

        },
        category:{
            type:String,
            required:[true,'Category is required']

        },
        refrences:{
            type:String,

        },
        description:{
            type:String,
            required:[true,'Desc is required']
        },
        date:{
            required:[true,'date is required']

        },
    },{timestamp:true}
)
const transactionModel = mongoose.model("transactions",transactionSchema);
export default transactionModel;