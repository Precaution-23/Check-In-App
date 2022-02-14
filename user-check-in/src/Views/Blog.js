import React from "react";
import { Box, Badge, Image, Avatar, Input } from "@chakra-ui/react";

function Blog() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 border-2  mt-5  md:p-8 rounded-xl">
        <div className="">
        <Image
              src="./Who-and-How-we-Hire-at-Float.png"
              alt="Image"
              className="rounded"
            />
        </div>

        <div className="">
        {/* <Image
              src="./Support-Is-More-Than-Responding-to-Customer-Tickets.png"
              alt="Image"
              className="rounded"
            /> */}
        </div>  
        
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 lg:gap-12 mt-10">
        <div className=" mx-auto mb-5 ">
          <Box
            px="3"
            py="3"
            className="transition rounded-lg md:rounded-lg mx-auto w-70 border-2 md:border delay-150 md:w-96 hover:-translate-y-1 hover:shadow-full hover:scale-100 hover:border"
            overflow="hidden"
          >
            <Image
              src="./Support-Is-More-Than-Responding-to-Customer-Tickets.png"
              alt="Image"
              className="rounded"
            />

            <Box className="pt-5">
              <Box display="flex" alignItems="baseline">
                <Badge px="3.5" py="1" colorScheme="purple">
                  TITHES
                </Badge>
                <Box
                  display="flex"
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  23 Nov 2022 &bull;{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>{" "}
                  5 min read
                </Box>
              </Box>

              <Box
                mt="2"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
                className="float-left"
              >
                Tithe And Offering
              </Box>

              <Box
                mt="2"
                className="flex float-left text-left"
                overflow="hidden"
              >
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without
              </Box>

              <div className="float-left mb-5 mt-2">
                <div className="flex justify-start">
                  <div>
                    <Avatar name="Dan Abrahmov" src="./Blogging.png" />{" "}
                  </div>

                  <div>
                    <h3 className="my-auto pl-3 font-medium">
                      By Charles Kwame{" "}
                    </h3>
                    <h3 className="my-auto pr-14 ">Secretary </h3>
                  </div>
                </div>
              </div>
            </Box>
          </Box>
        </div>
        <div className=" mx-auto mb-5 ">
          <Box
            px="3"
            py="3"
            className="transition rounded-lg md:rounded-lg mx-auto w-70 border-2 md:border delay-150 md:w-96 hover:-translate-y-1 hover:shadow-full hover:scale-100 hover:border "
            overflow="hidden"
          >
            <Image
              src="./Support-Is-More-Than-Responding-to-Customer-Tickets.png"
              alt="Image"
              className="rounded"
            />

            <Box className="pt-5">
              <Box display="flex" alignItems="baseline">
                <Badge px="3.5" py="1" colorScheme="purple">
                  TITHES
                </Badge>
                <Box
                  display="flex"
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  23 Nov 2022 &bull;{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>{" "}
                  5 min read
                </Box>
              </Box>

              <Box
                mt="2"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
                className="float-left"
              >
                Tithe And Offering
              </Box>

              <Box
                mt="2"
                className="flex float-left text-left"
                overflow="hidden"
              >
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without
              </Box>

              <div className="float-left mb-5 mt-2">
                <div className="flex justify-start">
                  <div>
                    <Avatar name="Dan Abrahmov" src="./Blogging.png" />{" "}
                  </div>

                  <div>
                    <h3 className="my-auto pl-3 font-medium">
                      By Charles Kwame{" "}
                    </h3>
                    <h3 className="my-auto pr-14 ">Secretary </h3>
                  </div>
                </div>
              </div>
            </Box>
          </Box>
        </div>
        <div className=" mx-auto mb-5 ">
          <Box
            px="3"
            py="3"
            className="transition rounded-lg md:rounded-lg mx-auto w-70 border-2 md:border delay-150 md:w-96 hover:-translate-y-1 hover:shadow-full hover:scale-100 hover:border"
            overflow="hidden"
          >
            <Image
              src="./Support-Is-More-Than-Responding-to-Customer-Tickets.png"
              alt="Image"
              className="rounded"
            />

            <Box className="pt-5">
              <Box display="flex" alignItems="baseline">
                <Badge px="3.5" py="1" colorScheme="purple">
                  TITHES
                </Badge>
                <Box
                  display="flex"
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  23 Nov 2022 &bull;{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>{" "}
                  5 min read
                </Box>
              </Box>

              <Box
                mt="2"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
                className="float-left"
              >
                Tithe And Offering
              </Box>

              <Box
                mt="2"
                className="flex float-left text-left"
                overflow="hidden"
              >
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without
              </Box>

              <div className="float-left mb-5 mt-2">
                <div className="flex justify-start">
                  <div>
                    <Avatar name="Dan Abrahmov" src="./Blogging.png" />{" "}
                  </div>

                  <div>
                    <h3 className="my-auto pl-3 font-medium">
                      By Charles Kwame{" "}
                    </h3>
                    <h3 className="my-auto pr-14 ">Secretary </h3>
                  </div>
                </div>
              </div>
            </Box>
          </Box>
        </div>

        <div className=" mx-auto mb-5 ">
          <Box
            px="3"
            py="3"
            className="transition rounded-lg md:rounded-lg mx-auto w-70 border-2 md:border delay-150 md:w-96 hover:-translate-y-1 hover:shadow-full hover:scale-100 hover:border"
            overflow="hidden"
          >
            <Image
              src="./Support-Is-More-Than-Responding-to-Customer-Tickets.png"
              alt="Image"
              className="rounded"
            />

            <Box className="pt-5">
              <Box display="flex" alignItems="baseline">
                <Badge px="3.5" py="1" colorScheme="purple">
                  TITHES
                </Badge>
                <Box
                  display="flex"
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  23 Nov 2022 &bull;{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>{" "}
                  5 min read
                </Box>
              </Box>

              <Box
                mt="2"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
                className="float-left"
              >
                Tithe And Offering
              </Box>

              <Box
                mt="2"
                className="flex float-left text-left"
                overflow="hidden"
              >
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without
              </Box>

              <div className="float-left mb-5 mt-2">
                <div className="flex justify-start">
                  <div>
                    <Avatar name="Dan Abrahmov" src="./Blogging.png" />{" "}
                  </div>

                  <div>
                    <h3 className="my-auto pl-3 font-medium">
                      By Charles Kwame{" "}
                    </h3>
                    <h3 className="my-auto pr-14 ">Secretary </h3>
                  </div>
                </div>
              </div>
            </Box>
          </Box>
        </div>

        <div className=" mx-auto mb-5 ">
          <Box
            px="3"
            py="3"
            className="transition rounded-lg md:rounded-lg mx-auto w-70 border-2 md:border delay-150 md:w-96 hover:-translate-y-1 hover:shadow-full hover:scale-100 hover:border"
            overflow="hidden"
          >
            <Image
              src="./Support-Is-More-Than-Responding-to-Customer-Tickets.png"
              alt="Image"
              className="rounded"
            />

            <Box className="pt-5">
              <Box display="flex" alignItems="baseline">
                <Badge px="3.5" py="1" colorScheme="purple">
                  TITHES
                </Badge>
                <Box
                  display="flex"
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  23 Nov 2022 &bull;{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>{" "}
                  5 min read
                </Box>
              </Box>

              <Box
                mt="2"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
                className="float-left"
              >
                Tithe And Offering
              </Box>

              <Box
                mt="2"
                className="flex float-left text-left"
                overflow="hidden"
              >
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without
              </Box>

              <div className="float-left mb-5 mt-2">
                <div className="flex justify-start">
                  <div>
                    <Avatar name="Dan Abrahmov" src="./Blogging.png" />{" "}
                  </div>

                  <div>
                    <h3 className="my-auto pl-3 font-medium">
                      By Charles Kwame{" "}
                    </h3>
                    <h3 className="my-auto pr-14 ">Secretary </h3>
                  </div>
                </div>
              </div>
            </Box>
          </Box>
        </div>

        <div className=" mx-auto mb-5 ">
          <Box
            px="3"
            py="3"
            className="transition rounded-lg md:rounded-lg mx-auto w-70 border-2 md:border delay-150 md:w-96 hover:-translate-y-1 hover:shadow-full hover:scale-100 hover:border"
            overflow="hidden"
          >
            <Image
              src="./Support-Is-More-Than-Responding-to-Customer-Tickets.png"
              alt="Image"
              className="rounded"
            />

            <Box className="pt-5">
              <Box display="flex" alignItems="baseline">
                <Badge px="3.5" py="1" colorScheme="purple">
                  GIVING
                </Badge>
                <Box
                  display="flex"
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  23 Nov 2022 &bull;{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>{" "}
                  5 min read
                </Box>
              </Box>

              <Box
                mt="2"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
                className="float-left"
              >
                The Acts Of Giving
              </Box>

              <Box
                mt="2"
                className="flex float-left text-left"
                overflow="hidden"
              >
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without
              </Box>

              <div className="float-left mb-5 mt-2">
                <div className="flex justify-start">
                  <div>
                    <Avatar name="Dan Abrahmov" src="./Blogging.png" />{" "}
                  </div>

                  <div>
                    <h3 className="my-auto pl-3 font-medium">
                      By Charles Kwame{" "}
                    </h3>
                    <h3 className="my-auto pr-14 ">Secretary </h3>
                  </div>
                </div>
              </div>
            </Box>
          </Box>
        </div>
      </div>

      <Box
        overflow="hidden"
        className="py-8  bg-teal md:bg-white    md:rounded-lg md:mx-11 mb-40  border md:border-none "
      >
        <div className="flex md:justify-between">
          <div className="">
            <div className="md:mx-7 mx-11">
              <Box
                className="flex text-left w-70 max-w-3xl md:text-3xl"
                overflow="hidden"
                fontWeight="semibold"
              >
                Get exclusive monthly newsletter updates on everything that goes
                on in the church. Subscribe to our newsletter.
              </Box>
            </div>

            <div className="mt-5 md:mt-10  mx-11 md:mx-7">
              <Box
                className="flex text-left w-70 text-base md:text-xl"
                overflow="hidden"
              >
                Join the Godly readers club
              </Box>
            </div>

            <div className="grid md:grid-cols-3 gap-4 md:mx-7">
              <div className=" md:col-span-2 mx-11 md:mx-auto w-72 md:w-full">
                {" "}
                <Input placeholder="Your email" />
              </div>
              <div className=" md:inline">
                <div className=" h-10 md:h-10">
                  <button
                    type="button"
                    className="md:w-36 w-72 rounded-sm h-full bg-blue text-white hover:bg-header md:text-xl md:mr-20"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="md:hidden inline-block">
                <Image
                  src="./12.-Benefits-of-Newsletter-Subscription.png"
                  alt="Image"
                  className=" h-60"
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

export default Blog;
