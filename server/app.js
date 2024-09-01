import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user-routes.js";
import adminRouter from "./routes/admin-routes.js";
import movieRouter from "./routes/movie-routes.js";
import bookingRouter from "./routes/booking-routes.js";
import cors from 'cors'

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors(
    {
        origin:["https://frontend-2kxfh67da-praveen-raghavs-projects.vercel.app"],
        methods:["GET" , "POST" , "DELETE"],
        credentials:true,
    }
));
//Middelwares 
app.use("/user" , userRouter);
app.use("/admin" , adminRouter);
app.use("/movie" , movieRouter);
app.use("/booking" , bookingRouter);

mongoose.connect(process.env.MONGODB_URI).then(()=>

    app.listen(5000 , ()=>{
        console.log(`Data bese and server is running`)
    }),
    app.get("/" , (req,res)=>{
        res.json("Hello , Server Connected")
    })

)
.catch((e)=>
    console.log(e)
)