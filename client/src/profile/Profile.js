import React, { Fragment, useEffect, useState } from 'react'
import {Box} from "@mui/system"
import { deleteBooking, getAllBookings, getUserDetails } from '../api-helpers/api-helpers'
import { IconButton, List, ListItem, ListItemText, Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { toast } from 'react-toastify';
const Profile = () => {
    const [bookings,setBookings] = useState([]);
    const [data, setdata] = useState()
useEffect(() => {
  getUserDetails()
  .then((res)=> setdata(res.user))
  getAllBookings()
  .then((res)=> setBookings(res.bookings))
  .catch((err)=> console.log(err))
 
  
}, [])

const handleDelete = (id) => {
  console.log(id)
 deleteBooking(id).then((res)=> console.log(res) , toast.success("Booking Delete Succesfully"))
 .catch((err)=>   toast("Something Went3 Wrong"))
}


  return (
    <Box display={"flex"} width={"100%"} height={'80vh'}
 flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
        <Fragment>
            {data && ( <Box
      justifyContent={"center"}
      alignItems={"center"}
      width={"50%"}
      flexDirection={"column"}
      >
<AccountCircleIcon sx={{fontSize:"12rem"}} />
<Typography padding={1} width={"auto"} textAlign={"center"} border={"1px solid #ccc"} borderRadius={5} >Name : {data.username}</Typography>
<Typography padding={1} width={"auto"} textAlign={"center"} border={"1px solid #ccc"} borderRadius={5} marginTop={2} >Email : {data.email}</Typography>
      </Box>  )}
     {bookings && (
 <Box width={"100%"} alignItems={"center"} justifyContent={"center"} flexDirection={"column"} >
 <Typography variant='h4' fontFamily={"verdana"} textAlign={"center"} padding={2} >
 Bookings
 </Typography>
 <Box width={"80%"}display={"flex"} margin={"auto"} flexDirection={"column"}>


   
     <List>
         {bookings.map(booking => (
           <ListItem sx ={{color:'white' , margin:1  ,textAlign:'center'  ,bgcolor :"#00d386"}} key={booking._id}  >
<ListItemText sx={{margin:1, width: "300px" , textAlign:"left"}}>Movie:{booking.movie}</ListItemText>
<ListItemText sx={{margin:1, width: "300px" , textAlign:"left"}}>seet:{booking.seetNumber}</ListItemText>
<ListItemText sx={{margin:1, width: "300px" , textAlign:"left"}}>Date:{ new Date(booking.date).toDateString()}</ListItemText>
<IconButton color='error' onClick={()=>handleDelete(booking._id)} >
<DeleteForeverIcon color='red' />
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

export default Profile
