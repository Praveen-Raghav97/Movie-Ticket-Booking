import mongoose from "mongoose";

const Schema = mongoose.Schema;

const adminSchema = new Schema({
    username:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minLength:6,
    },
    addedmoive:[
       {
        type:mongoose.Types.ObjectId,
        ref: "Movie",
       } 
    ]
},{})

export default mongoose.model("Admin" , adminSchema);