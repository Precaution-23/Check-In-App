import React from "react";
import { Input, Stack } from "@chakra-ui/react";

function SignUp() {
  return (
    <div className="bg-orange h-52 b0rder-2 border-green-700">
      <div className="mt-24 relative rounded-lg max-w-xs md:max-w-sm border-2  text-gray-dark bg-black-500 mx-auto  h-12 md:h-12">
        <input
          placeholder="Email"
          type="email"
          name="blog"
          id="blog"
          className=" w-full h-full pl-7 pr-12 text-lg rounded-lg outline-none"
        />

        <div className="grid justify-items-center max-w-xs md:max-w-sm mt-5 h-10 md:h-10">
          <button className=" w-full h-full bg-blue rounded-lg text-white  border-red-600">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
