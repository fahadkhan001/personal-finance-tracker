import transactionModel from '../models/transactionModel.js'; 
import { errorhandler } from '../utils/error.js';
import moment from 'moment';
export const getAllTransaction =async(req,res,next)=>{
    try {
        const {frequency,type} = req.body
        const transaction = await transactionModel.find({
            date:{
                $gt :moment().subtract(Number(frequency),'d').toDate()
            },
            userid:req.body.userid,
            ...(type !=='all' && {type})
        });
        res.status(200).json(transaction)
    } catch (error) {
        next(errorhandler(500, "error occcured in getalltrans"))
    }
}


export const addTransaction =async(req,res,next)=>{
    try {
        const newTransaction =  new  transactionModel(req.body);
        await newTransaction.save();
            res.status(200).json("Tranasction Created")
    } catch (error) {
        next(errorhandler(500, "Error occured in addtrans"));
    }
}
export const deleteTransection = async (req, res) => {
    try {
      await transactionModel.findOneAndDelete({ _id: req.body.transactionId });
      res.status(200).send("Transaction Deleted!");
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  };
export const editTransaction =async(req,res,next)=>{

    try {
        await transactionModel.findOneAndUpdate({_id:req.body.transactionId},req.body.payload);
        res.status(200).json("Edited Succesfully")
    } catch (error) {
     next(error.message)   
    }
}