import express from "express"
import { addMovie, deleteMovie, getAllMovie, getMovieBYID } from "../controllers/movie-controller.js";




const movieRouter = express.Router();


movieRouter.post('/register', addMovie );
movieRouter.get("/:id" , getMovieBYID);
movieRouter.delete("/:id" , deleteMovie)
movieRouter.get("/" , getAllMovie);

export default movieRouter;