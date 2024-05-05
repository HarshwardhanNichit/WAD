import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbname: "RESTAURANT"
    }).then(() => {
        console.log("Connected successfully!");
    }).catch(err => {
        console.log(`Error Occured! ${err}`)
    });
}