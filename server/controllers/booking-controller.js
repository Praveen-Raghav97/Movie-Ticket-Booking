import Booking from "../models/Booking.js";
import Movie from "../models/Movie.js";
import User from "../models/User.js";
import mongoose, { startSession } from "mongoose";

const newBooking = async(req, res , next) =>{
 const {user , seetNumber , movie , date} = req.body;

 
 //console.log(req.body)


 if (
    !user && user.trim() === ""
     &&  !seetNumber && seetNumber.trim() === ""
      && !movie && movie.trim() === ""
       && !date &&date.trim() === "" 
        )
  {
   return res.json( {message:"All fields are required"});
 }

 let existingMovie;
 let existingUser;

 try {
  existingMovie = await Movie.findById(movie);
  existingUser = await User.findById(user);
 } catch (error) {
  return next(error);
 }

 if (!existingMovie) {
  return res.json("There Are No Existing Movie")
 }
 if (!existingUser) {
  return res.json("There Are No Existing User")
 }


 let booking;

 try {
    booking = new Booking({user , movie , seetNumber , date: new Date(`${date}`)} );

    const session = await mongoose.startSession();
  
    session.startTransaction();
 
  existingUser.bookings.push(booking);
  existingMovie.bookings.push(booking);
  await existingMovie.save({session});
  await existingUser.save({session});
  await booking.save({session});
//  adminUser.Movie.push(movie)
 // await adminUser.save({session})

  await session.commitTransaction();
 } catch (error) {
  return next(error)
 }

 if (!booking) {
  return res.status(500).json({message:"Internal Server Error In Add Movie"})
 }

 return res.status(200).json({ booking , message:"Movie Added Successfully"})



}
const getBookingById = async(req,res , next) =>{
  const id = req.params.id;
  if (!id) {
    return res.json({message:"Booking Id Not Found"})
  }
  let existingBooking;
  try {
    existingBooking = await Booking.findById(id).populate("user movie");
  } catch (error) {
    return next(error)
  }
  if (!existingBooking) {
    return res.status(500).json({message:"Internal Server Error"})
  }
  return res.status(200).json({  existingBooking ,message:"Booking Found Successfully"})
}
const deletBookingById = async(req,res,next) =>{
  const id = req.params.id;
  console.log(id)
  if (!id) {
    return res.json({message:"There Are No BookingId "})
  }
  let booking;
  try {
    booking = await Booking.findByIdAndDelete(id).populate("user  movie");
    //console.log(booking)
    if (!booking) {
      return res.status(404).json({message:"Booking Not Found"})
    }
    
    const session = await mongoose.startSession();
    session.startTransaction();
   await booking.user.bookings.pull(booking)
   await booking.movie.bookings.pull(booking);
    await booking.movie.save({session});
    await booking.user.save({session});
   session.commitTransaction();
  } catch (error) {
    return next(error)
  }
  if (!booking) {
    return res.status(500).json({message:"Some Internal Sever Error"})
  }

  return res.status(200).json({ booking ,message:"Booking Delete Successfully"})
}

export{
    newBooking,
    getBookingById,
    deletBookingById
}
