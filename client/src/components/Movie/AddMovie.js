import { Box, Button, Checkbox, FormLabel, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { AddNewMovie } from '../../api-helpers/api-helpers'
import { useNavigate } from 'react-router-dom'
const lableProps ={
    mt:1,
    mb:1,
}
const AddMovie = () => {

  const navigate = useNavigate()
    const [inputs, setInputs] = useState({
        title:"",
        description:"",
        category:"",
        posterUrl:"" ,
        releaseDate:"" ,
        feutured:"false",
        })
const [actors, setActors] = useState([])
const [actor, setActor] = useState("")

        const handleSubmit = (e)=>{
           e.preventDefault();
           console.log(inputs, actors)
           AddNewMovie({...inputs ,actors}).then((res)=>console.log(res))
           .then(()=>navigate("/movies"))
           .catch((err)=> console.log(err));
        }
    const  handleChnage = (e)=>{
        setInputs((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }) )
          }
          //console.log(inputs)
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
    sx={{    width: {
      xs: '100%',  // 0px to 600px viewport width
      sm: '90%',   // 600px to 960px viewport width
      md: '50%',   // 960px to 1280px viewport width
      lg: '50%',   // 1280px to 1920px viewport width
      xl: '50%',   // 1920px and up viewport width
    },}}
        width={20}
        padding={10}
        margin={'auto'}
        display={'flex'}
        flexDirection={"column"}
        boxShadow={"10px 10px 20px #ccc"}
        textAlign={"start"}
        flexWrap={"nowrap"}
        >
<Typography
fontFamily={"verdana"}
textAlign={'center'}
variant='h4'
marginBottom={4}
>
    Add New Movie
</Typography>
<FormLabel sx={{lableProps}}> Title</FormLabel>
<TextField value={inputs.title} onChange={handleChnage} name='title' variant='standard' margin='normal'/>
<FormLabel sx={{lableProps}}> Description</FormLabel>
<TextField value={inputs.description} onChange={handleChnage} name='description' variant='standard' margin='normal'/>
<FormLabel sx={{lableProps}}> PosterUrl</FormLabel>
<TextField value={inputs.posterUrl} onChange={handleChnage} name='posterUrl' variant='standard' margin='normal'/>
<FormLabel sx={{lableProps}}> Release Date</FormLabel>
<TextField value={inputs.releaseDate} type='date' onChange={handleChnage} name='releaseDate' variant='standard' margin='normal'/>
<FormLabel sx={{lableProps}}> Category</FormLabel>
<TextField value={inputs.category} onChange={handleChnage} name='category' variant='standard' margin='normal'/>
<Box display={'flex'}>
<FormLabel sx={{lableProps}}> Actor</FormLabel>
<TextField value={actor} onChange={(e)=>setActor(e.target.value)} name='actor' variant='standard' margin='normal'/>
<Button onClick={()=>{
  setActors([...actors , actor]);
  setActor("")
}} >Add</Button>
</Box>
<FormLabel sx={{lableProps}}>Feutured</FormLabel>
 <Checkbox
 
 onClick={(e)=>setInputs((prevState)=>({
  ...prevState,
  feutured: e.target.checked

 }))}
  sx={{mr:"auto"}} checked={inputs.feutured}  />
 <Button type='submit' variant='contained' sx={{    width: {
          xs: '100%',  // 0px to 600px viewport width
          sm: '50%',   // 600px to 960px viewport width
          md: '30%',   // 960px to 1280px viewport width
          lg: '40%',   // 1280px to 1920px viewport width
          xl: '20%',   // 1920px and up viewport width
        },  margin:"auto" , bgcolor:"#2b2b42" , ":hover" :{
    bgcolor:"#121217"
 }}} >Add New Movie</Button>
        </Box>
      </form>
    </div>
  )
}

export default AddMovie
