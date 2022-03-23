import React, { useState } from "react";
import Footer from "./Footer";
import { Button, Modal } from "@nextui-org/react";
import { HiViewList } from "react-icons/hi";
import { useDisclosure } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import NewSignUp from "./NewSignUp";
import NewLogin from "./NewLogin";

function Header({ pages }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const [showSigUp, setshowSigUp] = useState(false)
  const [showSignIn, setshowSignIn] = useState(false)

  
  const closeSignUpModal = () => {
    setshowSigUp(false);
  };

    const closeSigInModal = () => {
      setshowSignIn(false);
    };


  // logics for routing to login
  const handlerLogin = () => {
    setshowSignIn(true)
  };

  // logics for routing to signup
  const handlerSignUp = () => {
    setshowSigUp(true)
  }

  return (
    <div className="relative">
      <div className="max-w-full mx-auto bg-header px-4 sm:px-6 sticky md:sticky top-0 z-[1000]">
        <div className="flex justify-between items-center  py-3 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <HiViewList
              ref={btnRef}
              color="white"
              size={25}
              onClick={onOpen}
              style={{ marginRight: "5px" }}
            />
          </div>
          <nav className="hidden md:flex space-x-10">
          <a
              href="/dashboard"
              className=" hover:underline text-lg font-medium text-white"
            >
              Dashboard
            </a>
            <a
              href="#"
              className=" hover:underline text-lg font-medium text-white"
            >
              How it works
            </a>
            <a
              href="/blog"
              className="hover:underline text-lg font-medium text-white "
            >
              Blog
            </a>
            <a
              href="#"
              className="hover:underline text-lg font-medium text-white "
            >
              About Us
            </a>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">


            <div
              className="whitespace-nowrap text-lg font-medium text-white cursor-pointer mr-5"
              onClick={() => {
                handlerLogin()
              }}
            >
              Log In
            </div>

            <Button
              size="xl"
              auto
              color="primary"
              rounded
              onClick={() => {
                handlerSignUp();
              }}
            >
              Get Started
            </Button>
 
          </div>
        </div>
      </div>

      <Modal
          preventClose
          closeButton
          aria-labelledby="modal-title"
          open={showSigUp}
          onClose={closeSignUpModal}
        >
          <NewSignUp />
        </Modal>

        
      <Modal
          preventClose
          closeButton
          aria-labelledby="modal-title"
          open={showSignIn}
          onClose={closeSigInModal}
        >
          <NewLogin />
        </Modal>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>{/* <Input placeholder='Type here...' /> */}</DrawerBody>
        </DrawerContent>
      </Drawer>

      <div className="">{pages}</div>

      {
        window.location.pathname === "/auth/signin" ||  window.location.pathname === "/auth/signup" ? (``) : <Footer />
      }
      
    </div>
  );
}

export default Header;
