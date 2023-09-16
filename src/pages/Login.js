import React from 'react'
import Headerup from '../components/Headerup'
import {  } from "../components/Login";

const LoginPage = () => {
  return (
    <>
        <Headerup
            heading="Login to your account"
            paragraph="Don't have an account yet? "
            linkName="Signup"
            linkUrl="/signup"
        />
        
    </>
  )
}

export default LoginPage