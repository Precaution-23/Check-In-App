import React, {useState} from "react";
import {validEmail} from "../Services/validations"
import BeatLoader from "react-spinners/BeatLoader";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false)
  const [errorEmailMessage, setEmailErrorMessage] = useState("");
  const [showError, setshowError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [errorPasswordMessage, setErrorPasswordMessage] = useState();
  const [showLoader, setshowLoader] = useState(false)

  // toggle between viewing password or not
  const handleClick = () => setShow(!show)

  // regex for checking the requirements of password
  const passw = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,30}$/


  // cheking of email validity whiles user is typing
  const checkEmailValidOnChange = (value) => {
    if(!validEmail(value) ){
      return  setEmailErrorMessage('error')
    }else if(validEmail(value)){
      return  setEmailErrorMessage('')
    }
  }

    // check if password match the requirements on change
    const checkPasswordvalidOnVhange = (value) => {
      if(!value.match(passw)){
        return setErrorPasswordMessage('Min 8, a special character and a number')
      }else if(value.match(passw)){
        return setErrorPasswordMessage('')
      }
    }


    /**
   * function to log in a user
   * @param email is the user's email
   * @param password is the user's password
   */

     const logInUser = async (e) => {
      e.preventDefault();
      const data = {
        email,
        password,
      };

      setshowLoader(true)

      if(email === "" && password === ""){
        setshowError(true)
        setEmailErrorMessage('Email field can not be empty')
        setPasswordError(true)
        setErrorPasswordMessage('Password field can not be empty')
      }else if(email === ""){
        setshowError(true)
        setEmailErrorMessage('Email field can not be empty')
      }else if(!validEmail(email)){
        setshowError(true)
        setEmailErrorMessage('Please provide a valid email address')
      }else if(password === ""){
        setPasswordError(true)
        setErrorPasswordMessage('Password field can not be empty')
      }
  
      // console.log("#############", data)
    };


  return (
    <div className="justify-center mx-auto my-auto md:mt-10  shadow-none h-fit max-w-3xl  mb-10 ">
      <div className="text-center mt-16">
        <h1 className="text-2xl font-semibold" >Login to your account</h1>
      </div>
      <form onSubmit={logInUser}>
      <div className="my-8 relative mx-auto rounded-lg max-w-xs md:max-w-sm border-2  text-gray-dark bg-black-500  h-12 md:h-12">
        <input
          placeholder="Your email"
          type="email"
          name="emal"
          id="email"
          className=" w-full h-full pl-4 pr-12 text-lg rounded-lg outline-none"
          onChange={(e) => {
            setEmail(e.target.value)
            checkEmailValidOnChange(e.target.value)
          }}
        />
        <p id="email-error" className="text-red" > {`${errorEmailMessage}`}</p>
        
      </div>
      

      <div className="my-8 relative mx-auto rounded-lg max-w-xs md:max-w-sm border-2  text-gray-dark bg-black-500  h-12 md:h-12">
        <input
          placeholder="Your password"
          type={show ? `text` : `password`}
          name="password"
          id="password"
          className=" md:w-80 w-64 h-full pl-4 pr-12 text-lg rounded-lg outline-none"
          onChange={(e) => {
            setPassword(e.target.value)
            checkPasswordvalidOnVhange(e.target.value)
          }}
        />
        <span className="cursor-pointer hidden md:inline" onClick={handleClick}>{!show ? `Show` : `Hide`}</span>
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
          <p id="password-error" className="text-red" > {!passwordError ? `` : `${errorPasswordMessage}`}</p>
      </div>

      <div className="grid mx-auto justify-items-center max-w-xs md:max-w-sm mt-5 mb-10 h-10 md:h-10">
        <button type="button" className=" mt-3 w-full h-full bg-blue rounded-[10rem] text-white  border-red-600 hover:bg-header text-lg"  onClick={logInUser}>
        
           {showLoader ? <BeatLoader  size={12} color="#ffffff"  /> : `Log In` } 
        </button>
      </div>
      </form>

      <div className="text-center md:mb-20 ">
        Don't have an account? 
        <span>
        <a
          href="/signup"
          className="whitespace-nowrap text-base font-medium text-blue ml-1"
        >
          Create one
        </a>
        </span>
      </div>
    </div>
  );
}

export default SignIn;

