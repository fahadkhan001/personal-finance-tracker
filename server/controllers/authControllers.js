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
        next(errorhandler(500 ,"Internal server error in singup"))
    }
    }

  export  const signin = async(req,res,next)=>{
    const {email,password}=req.body;
    try {
        const validUser = await User.findOne({email});
        if(!validUser)return next(errorhandler(404,"User not found"))
        const validpassword = bcryptjs.compareSync(password,validUser.password);
    if(!validpassword)return next(errorhandler(401,"Invalid password"))
    const token
    } catch (error) {
        
    }
  }
