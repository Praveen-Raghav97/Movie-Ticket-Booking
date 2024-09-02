import React, { Fragment, useEffect, useState } from 'react'
import {Box} from "@mui/system"
import { deleteMovie, getAdminDetails } from '../api-helpers/api-helpers'
import { IconButton, List, ListItem, ListItemText, Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { toast } from 'react-toastify';
const AdminProfile = () => {
    const [data, setdata] = useState()
   

useEffect(() => {
 
  getAdminDetails()
  .then((res) => setdata(res.admin))
  .catch((err)=> console.log(err))
 
  
}, [])

const handleDelete = (id) => {
  console.log(id)
 deleteMovie(id).then((res)=> console.log(res) , toast.success("Movie Delete Succesfully"))
 .catch((err)=>   toast("Something Went Wrong"))
}

  return (
    <Box display={"flex"} width={"100%"} alignItems={'center'} justifyContent={'center'}
    
    
    flexDirection={'column'}
    padding={1}>
        <Fragment> 
            {data && (
               <Box
      justifyContent={"center"}
      alignItems={"center"}
      width={"50%"}
      flexDirection={"column"}
      >
<AccountCircleIcon sx={{fontSize:"12rem"}} />
<Typography padding={1} width={"auto"} textAlign={"center"} border={"1px solid #ccc"} borderRadius={5} >Name : {data.username}</Typography>
<Typography padding={1} width={"auto"} textAlign={"center"} border={"1px solid #ccc"} borderRadius={5} marginTop={2} >Email : {data.email}</Typography>
      </Box>  )}
     {data && (
 <Box sx={{    width: {
  xs: '100%',  // 0px to 600px viewport width
  sm: '50%',   // 600px to 960px viewport width
  md: '33%',   // 960px to 1280px viewport width
  lg: '25%',   // 1280px to 1920px viewport width
  xl: '20%',   // 1920px and up viewport width
},}} alignItems={"center"} justifyContent={"center"} flexDirection={"column"} marginTop={1} >
 <Typography variant='h4' fontFamily={"verdana"} textAlign={"center"} padding={2} >
 Added Movies
 </Typography>
 <Box sx={{    width: {
          xs: '100%',  // 0px to 600px viewport width
          sm: '100%',   // 600px to 960px viewport width
          md: '100%',   // 960px to 1280px viewport width
          lg: '100%',   // 1280px to 1920px viewport width
          xl: '90%',   // 1920px and up viewport width
        },
        }} display={"flex"} margin={"auto"} flexDirection={"column"} padding={1}>


   
     <List >
         {data.addedmoive.map(movie => (
           <ListItem sx ={{color:'white' , margin:1  ,textAlign:'center'  ,bgcolor :"#00d386"  ,    width: {
            xs: '100%',  // 0px to 600px viewport width
            sm: '100%',   // 600px to 960px viewport width
            md: '100%',   // 960px to 1280px viewport width
            lg: '100%',   // 1280px to 1920px viewport width
            xl: '100%',   // 1920px and up viewport width
          }, }} key={movie._id}  >
<ListItemText sx={{margin:1, width: "200px" , textAlign:"left" , marginRight:2}}>Movie:{movie.title}</ListItemText>

<ListItemText sx={{margin:1, width: "200px" , textAlign:"left" , marginRight:2}}>Rel-Date:{ new Date(movie.releaseDate).toDateString()}</ListItemText>
<IconButton color='error'>
<DeleteForeverIcon color='red' onClick={()=>handleDelete(movie._id)} />
</IconButton>
</ListItem>
         ))}

       
     </List>
 </Box>
</Box>
     )}
     
        </Fragment>
      
    

    </Box>
  )
}

export default AdminProfile
