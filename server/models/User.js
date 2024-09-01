import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
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
        minLength:8,
    }, 
    bookings:[
        {
            type:mongoose.Types.ObjectId,
             ref:"Booking"
        }
    ]
    
},{})

export default mongoose.model("User" , userSchema);