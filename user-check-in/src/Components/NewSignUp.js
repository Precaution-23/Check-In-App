import React, { useState, useEffect } from "react";
import {validEmail} from "../Services/validations"
import { Modal, Button, Text, Input, Row, Loading, Link } from "@nextui-org/react";
import { useTheme } from '@nextui-org/react';


function NewSignUp() {
  const { theme } = useTheme();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameErrorMessage, setnameErrorMessage] = useState("primary");
  const [errorEmailMessage, setErrorEmailMessage] = useState("primary");
  const [showPasswordError, setShowPasswordError] = useState("primary");
  const [showLoader, setshowLoader] = useState(false)

   // logics for routing to signin
   const handlerLogIn = () => window.location.assign('/auth/signin');

    
  // regex for checking the requirements of password
 const passw = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,30}$/

 // check if name field is not empty on change
 const nameFieldNotEmpty = (value) => {
   if(value.length > 0){
     return setnameErrorMessage('success')
   }
 }

 // check of email is valid on change
 const checkMailValidOnChange = (value) => {
   if(!validEmail(value)){
     return  setErrorEmailMessage("error")
   }else if(validEmail(value)){
     return setErrorEmailMessage("")
   }
 }

 // chek if password match the requirements on change
 const checkPasswordvalidOnVhange = (value) => {
   if(!value.match(passw)){
     return setShowPasswordError('error')
   }else if(value.match(passw)){
     return setShowPasswordError('success')
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
    
     if(email.length > 0 && !validEmail(email)){
          setErrorEmailMessage('error')
        }else if(!password.match(passw)){
          console.log("wrong password")
          setShowPasswordError('error')
        }
    
      };

  return (
    <div>

          <Modal.Header>
            <Text id="modal-title" size={18}>
              <Text b size={18}>
                Sign Up
              </Text>
            </Text>
          </Modal.Header>
          <Modal.Body>
          <Input
              status={nameErrorMessage}
              bordered
              fullWidth
              color="success"
              size="lg"
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
                nameFieldNotEmpty(e.target.value)
              }}
            />
            <Input
              status={errorEmailMessage}
              bordered
              fullWidth
              color="success"
              size="lg"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
                checkMailValidOnChange(e.target.value)
              }}
            />
            <Input.Password
              status={showPasswordError}
              bordered
              fullWidth
              color="success"
              size="lg"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
                checkPasswordvalidOnVhange(e.target.value)
              }}
            />

            <Row justify="space-start">
              <Text size={14} color="primary"  css= {{ margin: '$0' }} >Password must have min of 8, a number & special character</Text>
            </Row>
            <Row justify="center">
                <Link size={14} block color="secondary" css={{ fontSize: '$xs' }} onClick={handlerLogIn}>Already have an account? Log In </Link>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button auto  size="lg" rounded onClick={registerUser} disabled={ name === "" || email === "" || password === ""} >
            {showLoader ? <Loading type="points" color="white" size="sm" />  : `Sign Up`} 
            </Button>
          </Modal.Footer>
    </div>
  )
}

export default NewSignUp