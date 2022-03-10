import React, { useState } from "react";
import {validEmail} from "../Services/validations"
import BeatLoader from "react-spinners/BeatLoader";


function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [nameErrorMessage, setnameErrorMessage] = useState("");
  const [errorEmailMessage, setErrorEmailMessage] = useState("");
  const [showPasswordError, setShowPasswordError] = useState("");
  const [nameMessage, setNameMessage] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [showLoader, setshowLoader] = useState(false)


  // toggle between viewing password or not
  const handleClick = () => setShow(!show);

   // regex for checking the requirements of password
  const passw = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,30}$/

  // check if name field is not empty on change
  const nameFieldNotEmpty = (value) => {
    if(value.length > 0){
      return setnameErrorMessage('')
    }
  }

  // check of email is valid on change
  const checkMailValidOnChange = (value) => {
    if(!validEmail(value)){
      return  setErrorEmailMessage('Please provide a valid email address')
    }else if(validEmail(value)){
      return setErrorEmailMessage("")
    }
  }

  // chek if password match the requirements on change
  const checkPasswordvalidOnVhange = (value) => {
    if(!value.match(passw)){
      return setShowPasswordError('Min 8, a special character and a number')
    }else if(value.match(passw)){
      return setShowPasswordError('')
    }
  }

  /**
   * function to register a user
   * @param name is the user's name
   * @param email is the user's email
   * @param password is the user's password
   */

  const registerUser = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      password,
    };

    setshowLoader(true)

    if(name === "" && email === "" && password === ""){
      setNameMessage(true)
      setPasswordError(true)
      setEmailError(true)
      setnameErrorMessage('Name field can not be empty')
      setErrorEmailMessage('Email field can not be empty')
      setShowPasswordError('Password field can not be empty')

    }else if(name === ""){
      setNameMessage(true)
      setnameErrorMessage('Name field can not be empty')
      
    }else if(email === ""){
      setEmailError(true)
      setErrorEmailMessage('Email field can not be empty')
      
    }else if(email.length > 0 && !validEmail(email)){
      setEmailError(true)
      setErrorEmailMessage('Please provide a valid email address')
    }else if(password === ""){
      setPasswordError(true)
      setShowPasswordError('Password field can not be empty')
    }else if(!password.match(passw)){
      setPasswordError(true)
      setShowPasswordError('Min 8, a special character and a number')
    }

    // console.log("#############", data)
  };

  return (
    <div className="justify-center mx-auto my-auto md:mt-10 shadow-none  h-fit max-w-3xl md:rounded-lg mb-10 ">
      <div className="text-center mt-16">
        <h1 className="text-2xl font-semibold">Create your account</h1>
      </div>
      <form onSubmit={registerUser}>

        <div className="my-8 relative mx-auto rounded-lg max-w-xs md:max-w-sm border-2  text-gray-dark bg-black-500  h-12 md:h-12">
          <input
            placeholder="Name"
            type="text"
            name="name"

            id="name"
            className=" md:w-full w-full h-full pl-4 pr-12 text-lg rounded-lg outline-none"
            onChange={(e) => {
              setName(e.target.value);
              nameFieldNotEmpty(e.target.value)
            }}
          />
             <p className="text-red float-left" > {!nameMessage ? `` : `${nameErrorMessage}`}</p>
        </div>
        <div className="my-8 relative mx-auto rounded-lg max-w-xs md:max-w-sm border-2  text-gray-dark bg-black-500  h-12 md:h-12">
          <input
            placeholder="Email"
            type="text"
            name="emal"
            id="email"
            className=" md:w-full w-full h-full pl-4 pr-12 text-lg rounded-lg outline-none "
            onChange={(e) => {
              setEmail(e.target.value);
              checkMailValidOnChange(e.target.value)
            }}
          />
           <p className="text-red" > {!emailError ? `` : `${errorEmailMessage}`}</p>
        </div>

        <div className="my-8 relative mx-auto rounded-lg max-w-xs md:max-w-sm border-2  text-gray-dark bg-black-500  h-12 md:h-12">
          <input
            placeholder="Password"
            type={show ? "text" : "password"}
            name="password"
            id="password"
            className="md:w-80 w-64 h-full pl-4 pr-12 text-lg rounded-lg outline-none"
            onChange={(e) => {
              setPassword(e.target.value);
              checkPasswordvalidOnVhange(e.target.value)
            }}
          />
          <span
            className="cursor-pointer hidden md:inline "
            onClick={handleClick}
          >
            {!show ? `Show` : `Hide`}
          </span>
          <span className="md:hidden inline-block" onClick={handleClick}>
            {!show ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                />
              </svg>
            )}
          </span>
          <p className="text-red" > {!passwordError ? `` : `${showPasswordError}`}</p>
        </div>

        <div className="grid mx-auto justify-items-center max-w-xs md:max-w-sm mt-5 mb-10 h-10 md:h-10">
          <button
            type="button"
            className="mt-3 w-full h-full bg-blue rounded-[10rem] text-white  border-red-600 hover:bg-header text-lg"
            onClick={registerUser}
          >
            {showLoader ? <BeatLoader  size={12} color="#ffffff"  /> : `Sign Up` } 
          </button>
        </div>
      </form>

      <div className="text-center md:mb-[20]">
        Already have an account? 
        <span>
          <a
            href="/signin"
            className="whitespace-nowrap text-base font-medium text-blue ml-1"
          >
            Log In
          </a>
        </span>
      </div>
    </div>
  );
}

export default SignUp;



