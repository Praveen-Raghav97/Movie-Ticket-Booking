import React from 'react'
import AuthFrom from './AuthFrom'
import { sendUserAuthRequest } from '../../api-helpers/api-helpers';
import { useDispatch } from 'react-redux';
import { userActions } from '../../store';
import { useNavigate } from 'react-router-dom';


const Auth = () => {
  const dispatch = useDispatch();
const navigate = useNavigate()

  const onResRecieved = (data) => {
    console.log(data);
    dispatch(userActions.login());
    localStorage.setItem("userId", data.id);
  
  }
  
 const getData = (data) =>{
  console.log(data);
  sendUserAuthRequest(data.input ,data.signup)
  .then(onResRecieved)
  .catch((err)=> console.log(err))
 }

  return (
    <div>
      <AuthFrom onSubmit={getData} isAdmin={false} />
    </div>
  )
}

export default Auth
