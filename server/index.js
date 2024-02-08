import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();

mongoose
.connect(process.env.MONGO_URL)
.then(() => {
    console.log("Connected to DB");
})
.catch((err) => {
    console.log(err);
});


const app = express();

app.use(express.urlencoded({extended:true}))


app.listen(5000,()=>{
    console.log("Server is Running on port 5000")
});