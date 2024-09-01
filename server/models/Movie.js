import mongoose from "mongoose";

const Schema = mongoose.Schema;

const movieSchema = new Schema({

    title:{
        type:String,
        required:true,

    },
    bookings:[{
        type:mongoose.Types.ObjectId,
        ref:"Booking"
    }],
    posterUrl:[
       {
        type:String,
        require:true,
       },
       

    ],
    location:{
        type:String,
        
    },
    actress:[
        {
            type:String,
            required:true
        },
    ],

    description:{
    type:String,
    minLenth:50,
    },
    admin:{
        type:mongoose.Types.ObjectId,
        ref:"Admin"
    },
    category:{
    type:String,
    required:true,
    },
    feutured:{
    type:Boolean
    },
    releaseDate:{
    type:Date,
    required:true,
    },

})
export default mongoose.model("Movie" ,movieSchema );