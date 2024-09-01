import Booking from "../models/Booking.js";
import User from "../models/User.js";
import bcrypt from 'bcrypt'


const getalluser = async(req,res,next) => {
let users;
try {
    users = await User.find();

} catch (error) {
    return next(err)
}
if (!users) {
    return res.status(404).json("users not found");
}

return res.status(200)
.json({users})

}

const registerUser = async(req,res,next) =>{
  const {email,username,password} = req.body;
  if (
    [ email, password , username].some((field) => field?.trim() === " ")
  ) {
    return res.status(422).json("All Fields Are Required")
  }

    //find the admin in db

    const existedUser = await User.findOne({
      $or: { email },
    });

     //check user is already exists

if (existedUser) {
  return res.status(409).json({message:"User with email is already exists"});
}

  let user;
  const hashedPassword= bcrypt.hashSync(password , 10)
    try {
       user = new User({email, password:hashedPassword, username});
       user = await user.save();
    } catch (error) {
        return next(error)
    }
    if (!user) {
        return res.status(500).json({Message:"unexpeted Error Occurred"})
    }

    return res.status(200).json({user})
}
const loginUser = async(req, res, next)=>{
    const{email, password}= req.body;
    //console.log(req.body)

    if (
        [ email, password].some((field) => field?.trim() === " ")
      ) {
        return res.status(422).json("All Fields Are Required")
      }

      let user;

      try {
        user = await User.findOne({email});
      } catch (error) {
        return next(error)
      }

      if (!user) {
        return res.status(404).json({message:"User Not Exist"})
      }
      const isPasswordCorrect =  bcrypt.compareSync(password ,user.password);

      if (!isPasswordCorrect) {
        return res.status(400).json({message:"Incorrect Password"})
      }

      return res.status(200).json({ id:user._id , message: "Login Succesfully"})



}

const getUserBookings = async(req,res,next)=>{
  const id = req.params.id;
  let bookings;
  try {
    bookings = await Booking.find({user: id});
  } catch (error) {
   return next(error) 
  }

  if (!bookings) {
    return res.status(404).json("There Are No Bookings")
  }
  return res.status(200).json({bookings})
}
const getUserBookingsById = async(req,res,next)=>{
   const id = req.params.id;
   if (!id && id === "") {
    return res.status(300).json("Something Error Fetch User Id")
   }
   const user = await User.findById(id);
   if (!user) {
    return res.status(400).json("User Not Found")
   }

   return res.status(200).json({user})
}








export {
    getalluser,
    registerUser,
    loginUser,
    getUserBookings,
    getUserBookingsById
}