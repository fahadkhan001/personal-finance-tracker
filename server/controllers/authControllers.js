import User from "../models/userModel.js";
import bcryptjs from 'bcryptjs'
import { errorhandler } from "../utils/error.js";
export const singup =async(req,res,next)=>{
    try {
        const { username, email, password} = req.body;
    const hashedpassword =   bcryptjs.hashSync(password,10)
    //saving data
    const newUser = new User({username, email,password:hashedpassword})
   await newUser.save()
   res.status(200).json("User created Succesfully")
    } catch (error) {
        next(errorhandler(500 ,"Internal server error"))
    }
    }

