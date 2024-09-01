import mongoose from "mongoose";

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    movie:{
        type:mongoose.Types.ObjectId,
        ref:"Movie",
    },
    seetNumber:{
        type:String,
        required:true,
        Unique:true,
    }, 
    date:{
        type:Date,
        required:true,
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User",
    }
})
export default mongoose.model("Booking" , bookingSchema)