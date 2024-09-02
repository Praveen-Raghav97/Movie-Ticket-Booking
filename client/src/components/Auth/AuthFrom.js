import React, { useState } from 'react'
import {Dialog , Typography , Box, FormLabel, TextField, Button, IconButton} from '@mui/material'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { Link } from 'react-router-dom';
const lableStyle = {mt:1,mb:1};
const AuthFrom = ({ onSubmit , isAdmin}) => {
 const[isSignup , setISSignup] =  useState(false);
  const [input, setInput] = useState(
    {
        name:"",
        email:"",
        password:"",
    }
  )
  const  handleChnage = ((e)=>{
setInput((prevState)=>({
    ...prevState,
    [e.target.name]:e.target.value
}) )
  })

  const handleSubmit = ((e)=>{
  e.preventDefault();
  console.log(input)
onSubmit({input , signup :  isAdmin ? false :isSignup })

  })
  return (
    <Dialog PaperProps={{style:{borderRadius: 20}}} open={true} >
        <Box sx={{ml:"auto" , padding:1}}>
            <IconButton LinkComponent={Link} to = {'/'}>
            <CloseRoundedIcon/>
            </IconButton>
           
        </Box>
      <Typography variant='h4' textAlign={'center'}  >
      {isSignup?"Singup":"Login"}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box display={'flex'} 
        justifyContent={'center'}
        flexDirection='column'
      marginTop={2}
        padding={4}
        margin={'auto'}
        alignContent={'center'}
        sx={{    width: {
          xs: '320px',  // 0px to 600px viewport width
          sm: '380px',   // 600px to 960px viewport width
          md: '380px',   // 960px to 1280px viewport width
          lg: '380px',   // 1280px to 1920px viewport width
          xl: '400px',   // 1920px and up viewport width
        },}}
        >
{
   !isAdmin && isSignup && (
        <>
        {}
        <FormLabel sx={lableStyle}>Name</FormLabel>
        <TextField margin='normal' type={'text'} name='name'
        value={input.name} onChange={handleChnage} />
        </>
    )
}


<FormLabel sx={lableStyle}>Email</FormLabel>
<TextField margin='normal' type={'email'} name='email'
 value={input.email} onChange={handleChnage} />

<FormLabel sx={lableStyle}>Password</FormLabel>
<TextField margin='normal' type={'password'} name='password'
 value={input.password} onChange={handleChnage} />
<Button sx={{borderRadius:12 , mt:2 , bgcolor:"#2b2d42" , }} type='submit' fullWidth
 variant='contained'
> {isSignup?"Signup":"Login"}</Button>
  {!isAdmin && <Button  onClick={ ()=>setISSignup(!isSignup)} sx={{borderRadius:12 , mt:2 ,  }} type='submit' fullWidth
 
> 
Switch To {isSignup?"Login":"Signup"}
</Button>}
        </Box>
      </form>
    </Dialog>
  )
}

export default AuthFrom
