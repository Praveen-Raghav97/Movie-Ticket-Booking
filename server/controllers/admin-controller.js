import Admin from "../models/Admin.js";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

const registerAdmin = async(req,res,next) =>{
    const {email,username,password} = req.body;
    if (
      [ email, password , username].some((field) => field?.trim() === " ")
    ) {
      return res.status(422).json("All Fields Are Required")
    }

    //find the admin in db

    const existedAdmin = await Admin.findOne({
        $or: { email },
      });

       //check user is already exists

  if (existedAdmin) {
    return res.status(409).json({message:"Admin with email is already exists"});
  }
    let admin;
    const hashedPassword= bcrypt.hashSync(password , 10)
      try {
         admin = new Admin({email, password:hashedPassword, username});
         admin = await admin.save();
      } catch (error) {
          return next(error)
      }
      if (!admin) {
          return res.status(500).json({Message:"unexpeted Error Occurred"})
      }
  
      return res.status(200).json({admin})
  }

  const loginAdmin = async(req, res, next)=>{
    const{email, password}= req.body;

    if (
        [ email, password].some((field) => field?.trim() === " ")
      ) {
        return res.status(422).json("All Fields Are Required")
      }

      

      let existingAdmin;

      try {
        existingAdmin = await Admin.findOne({email});
      } catch (error) {
        return next(error)
      }

      if (!existingAdmin) {
        return res.status(404).json({message:"Admin Not Exist"})
      }
      const isPasswordCorrect =  bcrypt.compareSync(password ,existingAdmin.password);

      if (!isPasswordCorrect) {
        return res.status(400).json({message:"Incorrect Password"})
      }
      const token = jwt.sign({id : existingAdmin._id}, process.env.REFRESH_TOKEN_SECRET ,{
        expiresIn: "20d" ,
     })

      return res.status(200).json( {token , id:existingAdmin._id , message:"Login Successfully"} )



}

const getAdmin = async(req, res , next) =>{
  let admins;
  try {
    admins = await Admin.find();
  } catch (error) {
    return next(error)
  }

  if (!admins) {
    return res.json({message:"There Are No Existing Admins "})
  }
  return res.status(200).json({admins})
}

const getAdminByID = async(req, res, next)=>{
  const id = req.params.id;
let admin;
 try {
    admin = await Admin.findById(id).populate("addedmoive");
 
  
 } catch (error) {
  console.log(error)
 }
 if (!admin) {
  return res.status(400).json("Admin Not Found")
}

return res.status(200).json({admin});
}

export{
    registerAdmin,
    loginAdmin,
    getAdmin,
    getAdminByID
}