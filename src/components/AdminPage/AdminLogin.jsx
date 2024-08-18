import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./AdminLogin.css"
import email_icon from './Email.jpg'
import password_icon from './Password.jpg'
import profile_icon from './Profile.jpg'

function AdminLogin() {
    const [action, setAction] = useState('login')
  return (
    <>
    <div className='container'>
    <div className='header'>
    <div className='text'>{action}</div>
    
    <div className="underline"></div>
    </div>
    <div className="inputs">
        {action === "Login" ? <div></div> : <div className="input">
            <img src={profile_icon} alt="" />
            {/* <i class="fa fa-user-o" aria-hidden="true" id='img'></i> */}
            <input type="text" placeholder='Name' />
        </div>}
        
        <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder='Email Address' />
        </div>
        <div className="input">
            <img src={password_icon} alt="" />
            <input type="password"  placeholder='Password' />
        </div>
    </div>
    {action === "Sign Up" ? <div></div> : <div className="forget-password">Forgot Password? <span>Click Here</span></div> }
    
    <div className="submit-container">
        <div className={action ==="Login" ? "submit gray" : "submit"} onClick={() =>{setAction("Sign Up")}}>Sign up</div>
        <div className={action ==="Sign Up" ? "submit gray" : "submit"} onClick={() =>{setAction("Login")}}>Login</div>
    </div>
    <Link to="https://www.google.com" target='_blank'><div className="submit1">Login with Google </div></Link>

    </div>
    </>
  )
}

export default AdminLogin;