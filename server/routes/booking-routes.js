import express from "express"
import { deletBookingById, getBookingById, newBooking } from "../controllers/booking-controller.js";


const bookingRouter = express.Router();

bookingRouter.post( "/addBooking" , newBooking);
bookingRouter.get("/:id" , getBookingById);
bookingRouter.delete("/:id" , deletBookingById);

export default bookingRouter;


