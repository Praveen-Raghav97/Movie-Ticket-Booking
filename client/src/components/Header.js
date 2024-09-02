import React, { useEffect, useState } from 'react'
import {AppBar , Box, Toolbar , Autocomplete , TextField ,
    Tabs , Tab ,
    IconButton,
    useTheme,
    useMediaQuery,
   
    Drawer,
    


  } from '@mui/material'
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { getAllMovies } from '../api-helpers/api-helpers';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { adminActions, userActions } from '../store';
import { useNavigate } from 'react-router-dom';





const Header = () => {
  const isAdminLogedIn = useSelector((state) => state.admin.isLogedIn);
  const isUserLogedIn = useSelector((state) => state.user.isLogedIn);
  const navigate = useNavigate();
 const dispatch = useDispatch()

  const [value , setValue] = useState(0)
  const [movies, setmovies] = useState([])

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(()=>{
   getAllMovies()
   .then((data) => setmovies(data.allMovie))
   .catch((err) => console.log(err))
  },[])

const logout = (isAdmin)=>{
   dispatch(isAdmin?adminActions.logout():userActions.logout());
}
const handleChange = (e,val)=>{
const movie = movies.find((m)=> m.title === val);


if (!isUserLogedIn) {
  navigate(`/bookings/${movie._id}`)
}
}

const [drawerOpen, setDrawerOpen] = useState(false);

const toggleDrawer = (open) => (event) => {
  if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    return;
  }
  setDrawerOpen(open);
};





  return (
   <AppBar position='sticky' sx={{bgcolor:"#2b2d42" ,    width: {
    xs: '100%',  // 0px to 600px viewport width
    sm: '100%',   // 600px to 960px viewport width
    md: '100%',   // 960px to 1280px viewport width
    lg: '100%',   // 1280px to 1920px viewport width
    xl: '100%',   // 1920px and up viewport width
  },}}>
<Toolbar>

{isMobile ? (
          <>
          <Box display={'flex'} justifyContent={"space-between"} 
          >
          <IconButton edge="start" color="inherit" aria-label="menu"  onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Box width={"20%"} position={"right"}  LinkComponent={Link} to='/' >
<IconButton sx={{color:"#fff"}} LinkComponent={Link} to={'/'}>
<LiveTvIcon/> Zenzy
</IconButton>
  
</Box>
       

          </Box>
           <Drawer   anchor="left" sx={{width:"auto"}} open={drawerOpen} onClose={toggleDrawer(false)}>
         <div  role="presentation"
    onClick={toggleDrawer(false)}
    onKeyDown={toggleDrawer(false)} >
         <Tabs textColor='inherit' indicatorColor='secondary'
 value={value} onChange={(e,val) =>setValue(val)}>

<Tab LinkComponent={Link} to="/movies"      label="Movies"/>

{!isAdminLogedIn && !isUserLogedIn &&
(
  <Tabs>
<Tab  LinkComponent={Link} to='/Auth' label ="Auth"/>
<Tab  LinkComponent={Link} to='/Admin' label ="Admin"/>

  </Tabs>
)
}
{isUserLogedIn && (
  <Tabs>
  <Tab  LinkComponent={Link} to='/Profile' label ="Profile"/>
  <Tab onClick={()=> logout(false)} LinkComponent={Link} to='/' label ="logout"/>
  </Tabs>
)}
{isAdminLogedIn && (
  <Tabs>
  <Tab  LinkComponent={Link} to='/add' label ="Add movie"/>
  <Tab  LinkComponent={Link} to='/adminProfile' label ="Profile"/>
  <Tab onClick={()=> logout(true)}  LinkComponent={Link} to='/' label ="logout"/>
  </Tabs>
)}

</Tabs>
         </div>

      </Drawer>

          </>
        ) : (
          <>
           <Box width={"20%"}  LinkComponent={Link} to='/' >
<IconButton sx={{color:"#fff"}} LinkComponent={Link} to={'/'}>
<LiveTvIcon/> Zenzy
</IconButton>
  
</Box>
<Box width={"30%"} margin={'auto'}>
<Autocomplete
onChange={handleChange}
        id="free-solo-demo"
        freeSolo
        options={ movies && movies.map((option) => option.title)}
        renderInput={(params) =>
           <TextField sx={ {input: {color:"white"}}} variant='standard' {...params} placeholder='Search' />}
      />
</Box>
<Box display={'flex'} >
<Tabs textColor='inherit' indicatorColor='secondary'
 value={value} onChange={(e,val) =>setValue(val)}>

<Tab LinkComponent={Link} to="/movies"      label="Movies"/>

{!isAdminLogedIn && !isUserLogedIn &&
(
  <>
<Tab  LinkComponent={Link} to='/Auth' label ="Auth"/>
<Tab  LinkComponent={Link} to='/Admin' label ="Admin"/>

  </>
)
}
{isUserLogedIn && (
  <>
  <Tab  LinkComponent={Link} to='/Profile' label ="Profile"/>
  <Tab onClick={()=> logout(false)} LinkComponent={Link} to='/' label ="logout"/>
  </>
)}
{isAdminLogedIn && (
  <>
  <Tab  LinkComponent={Link} to='/add' label ="Add movie"/>
  <Tab  LinkComponent={Link} to='/adminProfile' label ="Profile"/>
  <Tab onClick={()=> logout(true)}  LinkComponent={Link} to='/' label ="logout"/>
  </>
)}

</Tabs>
</Box>
          </>
        )}


</Toolbar>
   </AppBar>
  )
}

export default Header
