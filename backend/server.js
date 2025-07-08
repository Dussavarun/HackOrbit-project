// const express = require("express");
import cookieParser from "cookie-parser";
import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/userRoute.js";
import cors from "cors"
const app = express()
dotenv.config();

//middleware 
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
const corsOptions={
    origin: "http://localhost:5173",
    credentials:true
}
app.use(cors(corsOptions));

app.get("/",(req, res)=>{
    return res.status(200).json({
        message:"welcome to our skillGraph app",
        success: true
    })
})

//apis

app.use("/api/v1/users", userRoute);


const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    connectDB()
    console.log(`server is running on port ${PORT}`)
})