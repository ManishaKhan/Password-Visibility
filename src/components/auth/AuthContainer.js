import React, { useState } from 'react';
import './AuthContainer.css';
import { Login } from './Login';
import { Register } from './Register';
import { Reset } from './Reset';

export const AuthContainer = () => {

    const[auth,setAuth]=useState({
        login:true,
        register:false,
        reset:false
    })
  return (
    <div>

    </div>
  )
}
