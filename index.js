import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import { dbConnect } from './config/db.js';
import todoRoute from './routes/todoRoutes.js'


dotenv.config();
const PORT = process.env.PORT || 3000;
dbConnect();

const app= express();

app.use(express.json());

app.get("/",(req,res)=>{
res.send("Server Started")
})

app.use("/todo", todoRoute);


app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})