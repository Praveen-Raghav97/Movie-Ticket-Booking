import Header from "./components/Header";
import Hero from "./components/Hero/Hero";
import './App.css'
import { Route, Routes} from 'react-router-dom'
import Admin from "./components/Admin/Admin";
import Movie from "./components/Movie/Movie";
import Auth from "./components/Auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { adminActions, userActions } from "./store";
import Bookings from "./components/Bookings/Bookings";
import Profile from "./profile/Profile";
import AddMovie from "./components/Movie/AddMovie";
import AdminProfile from "./profile/AdminProfile";
import Footer from "./components/Footer";
function App() {
  const dispatch = useDispatch();
  const isAdminLogedIn = useSelector((state) => state.admin.isLogedIn);
  const isUserLogedIn = useSelector((state) => state.user.isLogedIn);
 // console.log("isAdminLogedIn" , isAdminLogedIn);
  //console.log("isUserLogedIn" , isUserLogedIn);

  useEffect(()=>{
 if (localStorage.getItem("userId")) {
  dispatch(userActions.login())
 }else if (localStorage.getItem("adminId")) {
  dispatch(adminActions.login())
 }
  },[dispatch])
  return (
    <div className="App">
    <Header/>
    <section>
      <Routes>
        <Route path= '/' element={<Hero/>} />
        <Route path= '/movies' element={<Movie/>} />

        {!isAdminLogedIn && !isUserLogedIn &&
          (
            <>
             <Route path= '/Admin' element={<Admin/>} />
             <Route path= '/Auth' element={<Auth/>} />
            </>
           
          )
        }

{isUserLogedIn && !isAdminLogedIn &&
        (
          <>
           <Route path= '/profile' element={<Profile/>} />
           <Route path= '/booking/:id' element={<Bookings/>} />
          </>
        )}
       
       
        {isAdminLogedIn && !isUserLogedIn &&
        (
          <>
           <Route path= '/add' element={<AddMovie/>} />
           <Route path= '/adminProfile' element={<AdminProfile/>} />
          </>
        )}
       
       </Routes>
    </section>
   <Footer/>
    </div>
  );
}

export default App;
