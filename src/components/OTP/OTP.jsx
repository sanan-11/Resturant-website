import React, { useState } from 'react'
import './OTP.css'
import OtpInput from './OtpInput'

function OTP() {

    const [phoneNumber, setPhoneNumber] = useState(" ")
    const [showOTPInput, setShowOTPInput] = useState(false)
    const handlePhoneNumber = (event) => {
        setPhoneNumber(event.target.value)
    }
    const handlePhoneSubmit = (event) => {
        event.preventDefault();

        const regex = /[^0-9]/g;
        if(phoneNumber.length < 10 || regex.test(phoneNumber)){
            alert("Invalid Phone Number")
            return;
        }
        setShowOTPInput(true)
    }

    const onOtpSubmit=()=>{
        console.log("Login sucessfully", OTP)
    }
  return (
    <div>
    {!showOTPInput? <form onSubmit={handlePhoneSubmit}>
        <input type="text" value={phoneNumber } onChange={handlePhoneNumber} placeholder='Enter Phone Number'/>
            <button type="submit">Submit</button>
    </form>: <div>
        <p>Enter OTP sent to {phoneNumber}</p>
        <OtpInput length={4} onOtpSubmit={onOtpSubmit}/>
        </div>}
    </div>
  )
}

export default OTP