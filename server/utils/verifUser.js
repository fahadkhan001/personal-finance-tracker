//we are creating this because when we are updating user we need to confirm wether it is a right profile or not and to do that we ned to check the token that we have
//sent to the user when login in that what wwe have to verify over heree

import jwt from "jsonwebtoken";
import { errorhandler } from "./error.js";

//we have stored the token inside cookie hennce we need to extract from cookie hence we need to install cookie parserer.

export const verifyToken =(req,res,next)=>{
    const token = req.cookies.access_token;
    if(!token) return next(errorhandler(401,"Unauthorized"));

    jwt.verify(token, process.env.JWT_SECRET,(err,user)=>{
        if(err) return next(errorHandler(403,'Forbidden'));

        req.user = user;
        next();
    })
}