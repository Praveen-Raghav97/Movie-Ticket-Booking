import express from "express"
import { getalluser, getUserBookings, getUserBookingsById, loginUser, registerUser } from "../controllers/user-controller.js";


const userRouter = express.Router();

userRouter.get('/', getalluser);
userRouter.post('/register', registerUser);
userRouter.post("/login" , loginUser);
userRouter.get("/bookings/:id" , getUserBookings);
userRouter.get("/:id" , getUserBookingsById);

export default userRouter;