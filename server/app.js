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
app.use(cors({
    origin:["https://movie-ticket-booking-ptxk.vercel.app/"],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  optionsSuccessStatus: 204
}));

//Middelwares 
app.use("/user" , userRouter);
app.use("/admin" , adminRouter);
app.use("/movie" , movieRouter);
app.use("/booking" , bookingRouter);

mongoose.connect(process.env.MONGODB_URI).then(()=>

    app.get("/" , (req,res)=>{
        res.send("Hello , Server Connected")
    }),

    app.listen(5000 , ()=>{
        console.log(`Data bese and server is running`)
    }),
  

)
.catch((e)=>
    console.log(e)
)

