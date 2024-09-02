import React, { useEffect, useState } from 'react'
import{Box, Typography} from '@mui/material'
import {getAllMovies} from '../../api-helpers/api-helpers'
import MovieItem from './MovieItem';
const Movie = () => {
  const[movies , setMovies] = useState([]);
  useEffect(()=>{
    getAllMovies()
    .then((data)=> setMovies(data.allMovie))
    .catch((err)=> console.log(err))
  },[])
  return (
    <div className='con'>
  <Box margin={'auto'} marginTop={4} >
   <Typography margin={'auto'} variant='h4' textAlign={'center'} padding={2}  width={'40%'} marginBottom={10} >
All Movies
   </Typography>
   <Box width={'100%'} height={"100%"} justifyContent={'center'} flexWrap={'wrap'} display={'flex'}
   marginTop={10} margin={'auto'}   >
{movies && movies.map((movie,index)=>(
  <MovieItem  key={index} id={movie._id} title={movie.title} posterUrl = {movie.posterUrl}
  releaseDate={movie.releaseDate} />
))  }
   </Box>
   </Box>
    </div>
 
  )
}

export default Movie
