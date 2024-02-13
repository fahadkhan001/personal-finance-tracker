import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();
import userRouter from './routes/userRoutes.js'
import authRouter from './routes/authRoutes.js'
import transactionRouter from './routes/transactionRoutes.js'
import cors from 'cors';
import path from 'path';

mongoose
.connect(process.env.MONGO_URL)
.then(() => {
    console.log("Connected to DB");
})
.catch((err) => {
    console.log(err);
});


const app = express();

const __dirname = path.resolve() 

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))


app.listen(3000,()=>{
    console.log("Server is Running on port 3000")
});


app.use('/api/user', userRouter);
app.use("/api/auth", authRouter);
app.use("/api/trans",transactionRouter)

app.use(express.static(path.join(__dirname, '/client/dist')))
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'client','dist','index.html'));
})

app.use((err, req,res,next)=>{
    const statuscode = err.statuscode || 500
    const message =  err.message || "Internal Server error";
    return res.status(statuscode).json({
        success:false,
        statuscode,
        message
    })
})