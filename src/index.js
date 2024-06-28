// require('dotenv').config({path:`./env`})


import dotenv from "dotenv"
import connectDB from "./db/index.js"
dotenv.config({
    path: `./env`
})


connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`server at running port :${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log("MONGO DB Connection failed !! ", err);
    })








/*
import express from "express"
const app = express()
    (async () => {
        try {
            await mongoose.Connection(`${process.env.MONGODB_URI}/${DB_NAME}`)
            app.on("error", (error) => {
                console.log("ERROR :", error);
                throw error
            })
            app.listen(process.env.PORT, () => {
                console.log(`App is listening on ports ${process.env.PORT}`);
                throw error
            })
        } catch (error) {
            console.error("ERROR:", error);
            throw err
        }
    })()

*/
