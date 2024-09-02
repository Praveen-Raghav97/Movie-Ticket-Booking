import axios from "axios"

const getAllMovies = async() =>{
const response = await axios.get("/movie");


const data = await response.data;
return data;
}
const sendUserAuthRequest = async(data , signup)=>{
  const res = await axios.post(`/user/${signup ? "register" : "login"}`,
    {
        username:signup?data.name : "" ,
        email:data.email,
        password:data.password,
    }
  ).catch((err)=>  console.log(err));

  const resData = await res.data;
  return resData;

}
const  sendAdminAuthRequest = async(data) =>{
 const res = await axios.post('/Admin/login' ,{
  email:data.email,
  password:data.password
 }).catch((err)=> console.log(err))

 
 if (res.status !==200 && res.status !==201 ) {
  console.log("Unexpected Eroor Occured")
}

  const resData = await res.data;
  return resData;
}

const getMoviesDetails = async(id)=>{
  const res = await axios.get(`/movie/${id}`)
  .catch((err)=> console.log(err))
if (!res) {
  console.log("Unexpexted Error")
}
//console.log(res.data)
  const resData = await res.data;
  return resData;
}

const newBooking  = async(data) =>{
  const res = await axios.post('/booking/addBooking',{
    movie:data.movie,
    seetNumber: data.seetNumber,
    date:data.date,
    user: localStorage.getItem("userId"),
  })
  .catch((err)=> console.log(err))

  if (res.status !== 200) {
    console.log("Unexpected Error")
  }
  const resData = await res.data;
  return resData;
};
const getAllBookings = async () =>{
  const id = localStorage.getItem("userId");
  const res = await axios.get(`user/bookings/${id}`)
  .catch((err)=> console.log(err));
  if (res.status !== 200) {
    console.log("Unexpexted Error")
  }

  const resData = await res.data;
  console.log(resData)
  return resData;
}
 const deleteBooking = async(id)=>{
  console.log(id)
  const res = await axios.delete(`booking/${id}`)
  .catch((err)=> console.log(err))

  if(res.status !== 200){
    console.log("Unexpected Error")
  }
  const resData = await res.data;
 return resData;
 }

 const getUserDetails = async () =>{
  const id = localStorage.getItem("userId");
  const res = await axios.get(`/user/${id}`);
  if (res.status !== 200) {
    console.log("Unexpexted Error Occured")
  }
  const resData = await res.data;
  return res.data;
 }
 const getAdminDetails = async () =>{
  const id = localStorage.getItem("adminId");
  
  const res = await axios.get(`/admin/${id}`).catch((err)=>console.log(err))

  if (res.status !== 200) {
    console.log("Unexpexted Error Occured")
  }
  

  const resData = await res.data;
  return resData;


 }

 const AddNewMovie = async(data) =>{
    const res = await axios.post("/movie/register" ,{
      title:data.title,
      description:data.description,
      category:data.category,
      posterUrl:data.posterUrl,
      feutured:data.feutured,
      releaseDate:data.releaseDate,
      actress:data.actors,
      admin:localStorage.getItem("adminId"),
    },{
      headers:{
 Authorization: `Bearer ${localStorage.getItem("token")}`,

      }
     
    }).catch((err)=> console.log(err))

    if (res.status !== 200) {
      console.log("Unexpected Error Occured")
    }
    const resData = await res.data;
    
    return resData
 }


 const deleteMovie = async(id)=>{
  console.log(id)
  const res = await axios.delete(`movie/${id}`)
  .catch((err)=> console.log(err))

  if(res.status !== 200){
    console.log("Unexpected Error")
  }
  const resData = await res.data;
 return resData;
 }
export{
    getAllMovies,
    sendUserAuthRequest,
    sendAdminAuthRequest,
    getMoviesDetails,
    newBooking,
    getAllBookings,
    deleteBooking,
    getUserDetails,
    AddNewMovie,
    getAdminDetails,
    deleteMovie

}