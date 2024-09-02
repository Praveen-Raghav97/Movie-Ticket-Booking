/** @format */

import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMoviesDetails, newBooking } from "../../api-helpers/api-helpers";
import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";
import { toast } from "react-toastify";

const Bookings = () => {

  const [movie, setMovie] = useState();
  const [inputs, setInputs] = useState({seetNumber:" " , date: " "})
  const id = useParams().id;
  console.log(id);

  useEffect(() => {
    getMoviesDetails(id)
      .then((res) => setMovie(res.exitingMovie))

      .catch((err) => console.log(err));
  }, [id]);

const handleChange =(e)=>{
setInputs((prevState)=>({
  ...prevState,
  [e.target.name]:e.target.value,
}))
}
const handleSubmit = (e)=>{
e.preventDefault();
console.log(inputs)
newBooking({...inputs, movie:movie._id})
.then((res)=> console.log(res) ,toast.success("Add Booking Successfully"))

.catch((err)=>  toast.error("Something Went Wrong"))

}


  return (
    <div>
      {movie && (
        <Fragment  >
          <Typography padding={3} fontFamily="fantasy" variant="h4" textAlign={"center"}>
            Book Tickets Of Movie : {movie.title}
          </Typography>
          <Box display="flex" justifyContent={"center"} padding={5}  flexWrap="wrap"  width={'100%'}>
            <Box display={"flex"} justifyContent={"column"} flexDirection={"column"} padding={3} width={"50%"}>
              <img width={'80%'} height={'40%'} src={movie.posterUrl} alt="" />
              <Box width={"80%"} marginTop={3} padding={2} textAlign={'start'} >
              <Typography fontWeight={"bold"}> Title : {movie.title}</Typography>
              <Typography fontWeight={"bold"} marginTop={1}> Category : {movie.category}</Typography>
                <Typography fontWeight={"bold"} marginTop={1}>
                  Starrer :{movie.actress.map((actor) => " " + actor + " , ")}
                </Typography>
                <Typography fontWeight={"bold"} marginTop={1}>
                  ReleseDate :{new Date(movie.releaseDate).toDateString()}
                </Typography>
                <Typography marginTop={1} > Description : {movie.description}</Typography>
              </Box>
            </Box>

            <Box width={"50%"} paddingTop={3}>
              <form onSubmit={handleSubmit}>
                <Box padding={5} margin={"auto"} flexDirection={"column"} display="flex">
                  <FormLabel>Seet Number</FormLabel>
                  <TextField value={inputs.seetNumber} onChange={handleChange} name="seetNumber" type={"number"} margin="normal" variant="standard" />
                  <FormLabel>Booking Date</FormLabel>
                  <TextField value={inputs.date} onChange={handleChange} name="date" type={"date"} margin="normal" variant="standard" />
                  <Button type="submit " sx={{ mt: 3 }}>
                  
                    Book Now
                  </Button>
                </Box>
              </form>
            </Box>
          </Box>
        </Fragment>
      )}
    </div>
  );
};

export default Bookings;
