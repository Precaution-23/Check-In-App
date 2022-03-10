import React, { useState, useEffect } from "react";
import {
  Modal,
  Button,
  Text,
  Input,
  Row,
  Checkbox,
  Loading,
  Link,
} from "@nextui-org/react";
import { validEmail } from "../Services/validations";
import { useTheme } from "@nextui-org/react";

function NewLogin() {
  const { theme } = useTheme();
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmailMessage, setEmailErrorMessage] = useState("primary");
  const [errorPasswordMessage, setErrorPasswordMessage] = useState("primary");
  const [showLoader, setshowLoader] = useState(false);

  // closing of login modal 
  const closeLoginModal = () => {
    setVisible(false);
  };

  const handlerSignUp = () => {
    window.location.assign("/auth/signup")
  };

  // regex for checking the requirements of password
  const passw = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,30}$/;

  // cheking of email validity whiles user is typing
  const checkEmailValidOnChange = (value) => {
    if (!validEmail(value)) {
      return setEmailErrorMessage("error");
    } else if (validEmail(value)) {
      return setEmailErrorMessage("");
    }
  };

  console.log("#############", theme);

  // check if password match the requirements on change
  const checkPasswordvalidOnVhange = (value) => {
    if (!value.match(passw)) {
      return setErrorPasswordMessage("error");
    } else if (value.match(passw)) {
      return setErrorPasswordMessage("");
    }
  };

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

    setshowLoader(true);

    if (!validEmail(email)) {
      setEmailErrorMessage("error");
    }

    // console.log("#############", data);
  };

  useEffect(() => {
    setVisible(true)
  }, [])
  

  return (
    <div>
      <Modal
        preventClose
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeLoginModal}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            <Text b size={18}>
              Log In
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            status={errorEmailMessage}
            bordered
            fullWidth
            color="success"
            size="lg"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
              checkEmailValidOnChange(e.target.value);
            }}
          />
          <Input.Password
            status={errorPasswordMessage}
            bordered
            fullWidth
            color="success"
            size="lg"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
              checkPasswordvalidOnVhange(e.target.value);
            }}
          />
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Link block color="secondary" css={{ fontSize: "$xs" }} size={14}>
              Forgot password?
            </Link>
          </Row>
          <Row justify="center">
            <Link
              size={14}
              block
              color="secondary"
              css={{ fontSize: "$xs" }}
              onClick={() => {
                handlerSignUp();
              }}
            >
              Don't have an account? Sign Up{" "}
            </Link>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button
            auto
            size="lg"
            rounded
            onClick={logInUser}
            disabled={email === "" || password === ""}
          >
            {showLoader ? (
              <Loading type="points" color="white" size="md" />
            ) : (
              `Log In`
            )}
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}

export default NewLogin;
