import { Box, Button,  Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MovieItem from '../Movie/MovieItem'
import {getAllMovies} from '../../api-helpers/api-helpers'
import { Link } from 'react-router-dom'
const Home = () => {
  const [movies,setMovies] = useState([])

  useEffect(()=>{
    getAllMovies()

    .then((data) => setMovies(data.allMovie)) 
    .catch((err) => console.log(err))
    
  },[])


  return (
    <Box width={"100%"} height={"100%"} margin="auto" marginTop={2} >
        <Box padding={5} margin="auto">
<Typography variant='h4' textAlign={"center"}>
Latest Releases
</Typography>
        </Box>
      <Box 
      margin={"auto"}
      display="flex"
      width="80%"
      justifyContent={"center"}
      alignItems="center"
      flexWrap="wrap"
      >
{movies && movies.slice(0 ,4).map((movie , index)=>(
    <MovieItem  key={index} id={movie._id} title={movie.title} posterUrl = {movie.posterUrl}
    releaseDate={movie.releaseDate} />
)

)}
      </Box >
      <Box
      display="flex"
      padding={5}
      margin='auto'
      >
<Button LinkComponent={Link} to={'/movies'} variant='outlined' sx={{margin:"auto" , color: "#2b2d42"}} >
All Movies
</Button>
      </Box>
    </Box>
  )
}

export default Home;
