import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
    {
        userid:{
            type:String,
            required:true
        },
        amount:{
            type:Number,
            required:[true,"amount is required"],

        },
        type:{
            type:String,
            required:[true,"type is required"]
        },
        category:{
            type:String,
            required:[true,"Category is required"]

        },
        refrence:{
            type:String,

        },
        description:{
            type:String,
            required:[true,"desc is required"]
        },
        date:{
            type:Date,
            required:[true,"date is rewquired"]

        },
    },{timestamp:true}
)
const transactionModel = mongoose.model("transactions",transactionSchema);
export default transactionModel;