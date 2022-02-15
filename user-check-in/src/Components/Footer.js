import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="relative">
      <div className="max-w-full mx-auto bg-footer px-4 sm:px-6 sticky md:sticky bottom-0 md:h-96 max-h-68 border 2xl:pr-52 2xl:pl-52">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 float-left md:float-none md:py-10 py-5 md:mx-44 ">
          <div>
            <div className="my-3 mx-7 text-2xl font-medium text-left">
              Church
            </div>
            <div className="my-3 mx-7 text-left  text-lg font-normal text-grey-900 cursor-pointer">
              How It Works
            </div>
            <div className="my-3 mx-7 text-left  text-lg font-normal text-grey-900 cursor-pointer">
              Blog
            </div>
            <div className="my-3 mx-7 text-left  text-lg font-normal text-grey-900 cursor-pointer">
              About Us
            </div>
          </div>
          <div>
            <div className="my-3 mx-7 text-2xl font-medium md:text-left text-left "> 
              Resources
            </div>
            <div className="my-3 mx-7 md:text-left text-left  text-lg font-normal text-grey-900 cursor-pointer">
              Contact Us
            </div>
            <div className="my-3 mx-7 md:text-left text-left  text-lg font-normal text-grey-900 cursor-pointer">
              Privacy Policy
            </div>
          </div>
          <div className="mx-7 ">
          <div className="my-3 text-2xl font-medium text-left">
              Visit Us 
            </div>
            <div className="flex justify-start">
              <div className="mr-5">
                <FaFacebook size={30} color="#4267B2" />
              </div>
              <div className="mr-5">
                <FaTwitter size={30} color="#1d9bf0" />
              </div>

              <div  className="mr-5">
                <FaInstagram size={30} className="insta-icon"/>
              </div>
              <div>
                <FaYoutube size={30} color="red" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 float-left md:float-none py-10 md:mx-52 mx-7  ">
          <div className="text-base font-medium text-left">
            Mega Youth Church <span>&#169;</span> 2022. All rights reserved.
          </div>

          <div className="md:text-right md:mx-7 text-left"></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
