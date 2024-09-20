import mongoose from "mongoose";

const cloudSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter name"]
    },
    email:{
        type:String,
        required:[true,"Please enter email"],
    },
    number:{
        type:Number,
        required:[true,"Please enter number"],
    }
});

const Cloud = mongoose.model("Cloud",cloudSchema);

export default Cloud;