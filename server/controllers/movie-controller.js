import Movie from "../models/Movie.js";
import Admin from "../models/Admin.js"
import jwt from "jsonwebtoken"
import mongoose from "mongoose";



const addMovie = async(req, res, next) =>{
    const extreactToken = req.headers.authorization.split(' ')[1]; //Bearer token
    if (!extreactToken && extreactToken.trim() === "") {
     return res.json( { message:"please authorize admin yourself.."})
    
    }

    let adminId;

    jwt.verify(extreactToken, process.env.REFRESH_TOKEN_SECRET, (err , decrypted) =>  {
     if (err) {
      return next(400 ,`${err.message}` , "token does not match") ;
     }else{
       adminId = decrypted.id;
       return ;
     }
    })

   //Get Movie Info From frontend
   const {title ,  description , location ,actress , category , posterUrl , releaseDate , feutured} = req.body;
 
   console.log(req.body)
  

   if (
      !title && title.trim() === ""
       &&  !description && description.trim() === ""
        && !category && category.trim() === ""
         && !releseDate &&releseDate.trim() === "" 
          && !posterUrl && posterUrl.trim() === ""
           && !location && location.trim() === ""
          )
    {
     return res.json( {message:"All fields are required"});
   }

   let movie;

   try {
      movie = new Movie({title, feutured , description, location ,posterUrl, actress , admin:adminId , category , releaseDate: new Date(`${releaseDate}`)} );

    const session = await mongoose.startSession();
    const adminUser = await Admin.findById(adminId)
    session.startTransaction()
    await movie.save({session})
    adminUser.addedmoive.push(movie)
    await adminUser.save({session})

    await session.commitTransaction();
   } catch (error) {
    return next(error)
   }

   if (!movie) {
    return res.status(500).json({message:"Internal Server Error In Add Movie"})
   }

   return res.status(200).json({ movie , message:"Movie Added Successfully"})


}

const deleteMovie= async(req, res ,next) =>{
    const id = req.params.id
    let movie;
    try {
      movie = await Movie.findByIdAndDelete(id);
    } catch (error) {
      return next(err)
    }

    if (!movie) {
      return res.status(400)
      .json("Movie Not Found")
    }

    return res.status(200).json("movie delet Successfully")
}

const getMovieBYID= async(req, res ,next) =>{
  const movie_id  = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(movie_id)) {
    return res.json({message:"This Page Some Error"})
   }

   const exitingMovie = await Movie.findById(movie_id);
   if (!exitingMovie) {
    return res.json({message:"This Page Some Error"})
   }
   return res.status(200).json({exitingMovie});
   
}
const getAllMovie= async(req, res ,next) =>{
    try {
        const allMovie = await Movie.find({});
        if (!allMovie) {
            return res.json({message:"There Are no Movie"})
        }

        return res.status(200).json({allMovie})
    } catch (error) {
       return next(error) 
    }
}

export{
    addMovie,
    deleteMovie,
    getAllMovie,
    getMovieBYID,
}



