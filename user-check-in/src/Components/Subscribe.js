import React from 'react'
import { Box, Image, Input } from "@chakra-ui/react";

function Subscribe() {
  return (
    <div>
      <Box
        overflow="hidden"
        className="  bg-teal md:bg-white rounded md:rounded-lg md:mx-11 md:mb-12 mb-8  border md:border-none "
      >
        <div className="flex md:justify-between m-4 md:mx-7 2xl:mx-12">
          <div className="">
            <div className="">
              <Box
                className="flex  w-70 max-w-3xl md:text-3xl"
                overflow="hidden"
                fontWeight="semibold"
              >
                Get exclusive monthly newsletter updates on everything that goes
                on in the church. Subscribe to our newsletter.
              </Box>
            </div>

            <div className="mt-5 md:mt-10">
              <Box
                className="flex w-70 text-base md:text-xl mb-2"
                overflow="hidden"
              >
                Join the Godly readers club
              </Box>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className=" md:col-span-2 md:mx-auto w-full md:w-full">
                {" "}
                <Input placeholder="Your email" type="email" required />
              </div>
              <div className=" md:inline">
                <div className=" h-10 md:h-10">
                  <button
                    type="button"
                    className="md:w-36 w-full rounded-md h-full bg-blue text-white hover:bg-header md:text-xl md:mr-20"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="md:hidden inline-block">
                <Image
                  src="./12.-Benefits-of-Newsletter-Subscription.png"
                  alt="Image"
                  className=" h-60 rounded"
                />
              </div>
            </div>
          </div>

          <div className="mx-2 hidden md:inline-block">
            <Image
              src="./12.-Benefits-of-Newsletter-Subscription.png"
              alt="Image"
              className="rounded h-60"
            />
          </div>
        </div>
      </Box>
    </div>
  );
}

export default Subscribe