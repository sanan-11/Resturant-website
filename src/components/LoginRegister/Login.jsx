import React, { useState } from 'react'
import './LoginRegister.css'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import {app} from '../firebase'
import OTP from '../OTP/OTP';

const auth = getAuth(app)

function Login() {
    const SignInUser = () =>{
        signInWithEmailAndPassword(auth, email, password).then(value=> alert('Sign In Successfully')).catch((error)=>alert(error))
    }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [action, setAction] = useState('')

    const registerLink = () =>{
        setAction("active")
    }
    
    
  return (
    <>
    <div className={`wrapper${action}`}>
        <div className="form-box login">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input onChange={(e)=>setEmail(e.target.value)} value={email}  type="email" placeholder='Email Address' required />
                    <FaUser className='icon1' />
                </div>
                <div className="input-box">
                    <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder='Password' required />
                    <FaLock className='icon1'/>
                </div>
                {/* <OTP/> */}
                <div className="remember-forgot">
                    <label><input type='checkbox'/>Remember Me</label>
                    <a href="/">Forgot Password</a>
                </div>
                <button type="submit" onClick={SignInUser} className='page'>Log In</button>
                <div className="register-link">
                    <p>Don't Have an account? <a href="/register" onClick={registerLink}>Register</a></p>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default Login;