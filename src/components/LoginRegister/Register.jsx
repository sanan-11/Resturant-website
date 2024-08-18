import React, { useState } from 'react'
import './LoginRegister.css'
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { app } from '../firebase'

const db = getAuth(app);
function Register() {

    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("") 

    const creatUser = () =>{
        createUserWithEmailAndPassword(db, email, password).then(value=>alert("Success"))
    }
    const [action, setAction] = useState('')
    const loginLink = () =>{
        setAction("active")
    }
  return (
    <>
    <div className={`wrapper${action}`}>
    <div className="form-box Register">
            <form action="">
                <h1>Registration</h1>
                
                <div className="input-box">
                    <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" name="" id="" placeholder='Email Address' required />
                    <MdEmail  className='icon1' />
                </div>
                <div className="input-box">
                    <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" name="" id="" placeholder='password' required />
                    <FaLock className='icon1'/>
                </div>
                <div className="remember-forgot">
                    <label><input type='checkbox'/>I agree the terms and conditions</label>
                </div>
                <button type="submit" onClick={creatUser}className='page'>Register</button>
                <div className="register-link">
                    <p>Already have an account? <a href="/login" onClick={loginLink}>Login</a></p>
                </div>
            </form>
        </div>
        </div>
    </>
  )
}

export default Register