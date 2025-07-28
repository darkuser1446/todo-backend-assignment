import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

export const dbConnect = async () =>{
    await mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("mongodb connected")

        mongoose.connection.on('err',error =>{
            console.log('err connecting to mongodb',error)
        })
    })
}