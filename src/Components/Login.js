import React from 'react'
import { Link } from 'react-router-dom';

 function Login() {
    
  return (
    <div>
        Login page <br/>
        <Link to="/Login"> Move to Login</Link>
        <form >
            <label for="email1">Email</label>
            <input placeholder='Enter your email...' type="email"/>
            <label for="pwd1">Password</label>
            <input placeholder='Enter password' type="password"/>
        </form>
    </div>
  )
  
 }
export default Login;
