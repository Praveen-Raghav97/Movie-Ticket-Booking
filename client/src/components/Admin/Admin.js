import React from 'react'
import AuthFrom from '../Auth/AuthFrom'

import { sendAdminAuthRequest } from '../../api-helpers/api-helpers'
import { useDispatch } from 'react-redux'
import { adminActions } from '../../store'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
const Admin = () => {


  const dispatch = useDispatch();
const navigate = useNavigate()
  const onResRecieved = (data) =>{
    console.log(data)
    toast.success("Admin Login Successfully")
    dispatch(adminActions.login())
    localStorage.setItem("token" , data.token)
    localStorage.setItem("adminId" , data.id)
    navigate("/")
    
  }
  const getData =(data)=>{
    console.log("Admin" , data)
    sendAdminAuthRequest(data.input)
    .then(onResRecieved)
    .catch((err)=> console.log(err))
  }
  return (
    <div>
      <AuthFrom onSubmit={getData} isAdmin={true} />
    </div>
  )
}

export default Admin
