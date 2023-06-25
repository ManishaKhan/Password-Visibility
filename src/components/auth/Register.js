import React, { useEffect, useState } from 'react'
import register from "../../assets/register.png"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import './AuthContainer.css'
import { GoPrimitiveDot } from "react-icons/go";
import { FaCheck } from "react-icons/fa";

export const Register = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);

  const [showIndicator, setShowIndicator] = useState(false);

  const [pass, setPass] = useState("");

  const [passLetter, setPassLetter] = useState(false);
  const [passNumber, setPassNumber] = useState(false);
  const [passChar, setPassChar] = useState(false);
  const [passLength, setPassLength] = useState(false);

  const [passComplete, setPassComplete] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  }


  const handleShowIndicator = () => {
    setShowIndicator(true)
  }

  const handlePasswordChange = (e) => {
    setPass(e.target.value)
    console.log(pass)
  }


  useEffect(() => {
    //check lower and uppercase
    // if (pass.match(/([a-z].*[A-Z]) | ([A-Z].*[a-z])/)) {
      if (pass.match(/[A-Z]/g) && (/[a-z]/g)) {
      setPassLetter(true);
    } else {
      setPassLetter(false);
    }

    //check for number
    if (pass.match(/[0-9]/)) {
      setPassNumber(true)
    } else {
      setPassNumber(false)
    }

    //check for special character
    if (pass.match(/[#?!@$%^&*-]/g)) {
      setPassChar(true)
    } else {
      setPassChar(false)
    }

    if(pass.length > 7){
          setPassLength(true)
    }else{
      setPassLength(false)
    }


    if(passLetter && passNumber && passChar && passLength){
          setPassComplete(true)
    }else{
      setPassComplete(false)
    }

  }, [pass])

  return (
    <div className='main-container --flex-center'>
      <div className='form-container'>
        <form className='--form-control'>
          <h2 className='--color-danger --text-center'>Register</h2>
          <div>
            <input type='text' className='--width-100' placeholder='Username'></input>
          </div>

          <div>
            <input type='email' className='--width-100' placeholder='Email'></input>
          </div>


          {/* Password field */}
          <div className='password'>
            <input type={showPassword ? "text" : "password"} className='--width-100' placeholder='Password'
              onFocus={handleShowIndicator} value={pass}
              onChange={handlePasswordChange}
            ></input>
            <span className='icon' onClick={handleTogglePassword}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}

            </span>
          </div>

          <button onClick={()=>alert("Register Successfully")}
          disabled={!passComplete} 
           className={passComplete? '--btn --btn-primary --btn-block' : '--btn --btn-primary --btn-block btn-disabled'}>Register</button>

          <div>
            <span className='--text-sm --block'>
              Have an account?{" "}
              <a href='#' className='--text-sm' onClick={onLogin}> Login</a>
            </span>
          </div>

          {/* Password strength Indicator */}
          <div className={showIndicator ? 'show-indicator' : 'hide-indicator'}>
            <ul className='--list-style-none --card --bg-grey --text-sm --p' >
              <p className='--text-sm'>Password strength Indicator</p>

              <li className={passLetter ? 'pass-green' : 'pass-red'}>
                <span className='--align-center'>
                  {passLetter ? <FaCheck /> : <GoPrimitiveDot />}
                  Lowercase and Uppercase
                </span>
              </li>


              <br></br>

              <li className={passNumber ? 'pass-green' : 'pass-red'}>
                <span className='--align-center'>
                  {passNumber ? <FaCheck /> : <GoPrimitiveDot />}
                  Numbers(0-9)
                </span>
              </li>



              <br></br>

              <li className={passChar ? 'pass-green' : 'pass-red'}>
                <span className='--align-center'>
                {passChar ? <FaCheck /> : <GoPrimitiveDot />}
                  Special Character(!@#$%^&*)
                </span>
              </li>



              <br></br>

              <li className={passLength ? 'pass-green' : 'pass-red'}>
              <span className='--align-center'>
              {passLength ? <FaCheck /> : <GoPrimitiveDot />}
                Atleast 8 characters
              </span>
              </li>
              


            </ul>
          </div>

        </form>

      </div>

    </div>
  )
}
