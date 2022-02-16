import React from "react";
import { Box, Badge, Image, Avatar, Input } from "@chakra-ui/react";

function Blog() {
  return (
    <div>
      <div className="header md:h-144 h-80 md:-left-3 md:w-[103%] -left-6 md:absolute bg-[#2e5fe8] top-0">
        <div className="md:pt-20 pt-2 md:mr-12">
          <div className="text-center md:text-5xl text-3xl text-white mt-5">
            Kingdom Of God
          </div>

          <div className="text-center md:text-xl text-base text-white mt-5">
            Powered by Mega Youth Church
          </div>

          <div className="text-center md:text-2xl text-base text-white mt-5 ">
            We are a God-fearing church rooted in the principles of God. Come
            worship with us one day, God bless you.
          </div>
        </div>
      </div>
      <div className="md:pr-16 md:pl-16 2xl:pl-72 2xl:pr-72   pr-4 pl-4  relative md:top-52 -top-32 md:mb-80 ">
        <div className="grid grid-cols-1 md:grid-cols-2 mt-5  md:p-8 rounded bg-white">
          <div className="">
            <Image
              src="./Who-and-How-we-Hire-at-Float.png"
              alt="Image"
              className="rounded"
            />
          </div>

          <div className="mt-12 md:mx-10 mx-4">
            <div className="flex mb-5">
              <Badge px="3.5" py="1" colorScheme="purple">
                TITHES
              </Badge>
              <div className="mt-1">
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
              </div>
            </div>
            <div>
              <h1 className="text-left text-3xl font-medium mb-8">
                Jesus Is Our Lord And Saviour
              </h1>
            </div>

            <div>
              <p className="text-left text-lg text-gray-500">
                Jesus Christ came to die for our sins. He is willing to always
                forgive us.Come to Him all that are heavily laden and HHe will
                give you rest
              </p>
            </div>

            <div className="flex mb-5 mt-5">
              <div>
                <Avatar name="Dan Abrahmov" src="./Blogging.png" />{" "}
              </div>

              <div>
                <div className=" pl-3 font-medium">
                  <h3>By Charles Kwame</h3>
                </div>
                <div>
                  <h3 className=" pl-3">Secretary </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-around  md:gap-5 mt-10">
          <div className="  mb-5 ">
            <Box
              px="3"
              py="3"
              className="transition rounded-lg md:rounded-lg w-70 border-2 md:border delay-150 md:w-96 hover:-translate-y-1 hover:shadow-full hover:scale-100 hover:border"
              overflow="hidden"
            >
              <Image
                src="./Self-Designing-Your-Productive-Work-Day.png"
                alt="Image"
                className="rounded"
              />

              <div className="flex mt-5">
                <Badge px="3.5" py="1" colorScheme="purple">
                  TITHES
                </Badge>
                <div className="mt-1">
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
                </div>
              </div>

              <div className="">
                <Box
                  mt="2"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                  className=""
                >
                  Tithe And Offering
                </Box>
              </div>

              <div>
                <Box mt="2" className=" text-left" overflow="hidden">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without
                </Box>
              </div>

              <div className="flex mb-5 mt-2">
                <div>
                  <Avatar name="Dan Abrahmov" src="./Blogging.png" />{" "}
                </div>

                <div>
                  <div className=" pl-3 font-medium">
                    <h3>By Charles Kwame</h3>
                  </div>
                  <div>
                    <h3 className=" pl-3">Secretary </h3>
                  </div>
                </div>
              </div>
            </Box>
          </div>
          <div className="  mb-5 ">
            <Box
              px="3"
              py="3"
              className="transition rounded-lg md:rounded-lg w-70 border-2 md:border delay-150 md:w-96 hover:-translate-y-1 hover:shadow-full hover:scale-100 hover:border"
              overflow="hidden"
            >
              <Image
                src="./Who-and-How-we-Hire-at-Float.png"
                alt="Image"
                className="rounded"
              />

              <div className="flex mt-5">
                <Badge px="3.5" py="1" colorScheme="purple">
                  TITHES
                </Badge>
                <div className="mt-1">
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
                </div>
              </div>

              <div className="">
                <Box
                  mt="2"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                  className=""
                >
                  Tithe And Offering
                </Box>
              </div>

              <div>
                <Box mt="2" className=" text-left" overflow="hidden">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without
                </Box>
              </div>

              <div className="flex mb-5 mt-2">
                <div>
                  <Avatar name="Dan Abrahmov" src="./Blogging.png" />{" "}
                </div>

                <div>
                  <div className=" pl-3 font-medium">
                    <h3>By Charles Kwame</h3>
                  </div>
                  <div>
                    <h3 className=" pl-3">Secretary </h3>
                  </div>
                </div>
              </div>
            </Box>
          </div>
          <div className="  mb-5 ">
            <Box
              px="3"
              py="3"
              className="transition rounded-lg md:rounded-lg w-70 border-2 md:border delay-150 md:w-96 hover:-translate-y-1 hover:shadow-full hover:scale-100 hover:border"
              overflow="hidden"
            >
              <Image
                src="./Support-Is-More-Than-Responding-to-Customer-Tickets.png"
                alt="Image"
                className="rounded"
              />

              <div className="flex mt-5">
                <Badge px="3.5" py="1" colorScheme="purple">
                  TITHES
                </Badge>
                <div className="mt-1">
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
                </div>
              </div>

              <div className="">
                <Box
                  mt="2"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                  className=""
                >
                  Tithe And Offering
                </Box>
              </div>

              <div>
                <Box mt="2" className=" text-left" overflow="hidden">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without
                </Box>
              </div>

              <div className="flex mb-5 mt-2">
                <div>
                  <Avatar name="Dan Abrahmov" src="./Blogging.png" />{" "}
                </div>

                <div>
                  <div className=" pl-3 font-medium">
                    <h3>By Charles Kwame</h3>
                  </div>
                  <div>
                    <h3 className=" pl-3">Secretary </h3>
                  </div>
                </div>
              </div>
            </Box>
          </div>
          <div className="  mb-5 ">
            <Box
              px="3"
              py="3"
              className="transition rounded-lg md:rounded-lg w-70 border-2 md:border delay-150 md:w-96 hover:-translate-y-1 hover:shadow-full hover:scale-100 hover:border"
              overflow="hidden"
            >
              <Image
                src="./Who-and-How-we-Hire-at-Float.png"
                alt="Image"
                className="rounded"
              />

              <div className="flex mt-5">
                <Badge px="3.5" py="1" colorScheme="purple">
                  TITHES
                </Badge>
                <div className="mt-1">
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
                </div>
              </div>

              <div className="">
                <Box
                  mt="2"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                  className=""
                >
                  Tithe And Offering
                </Box>
              </div>

              <div>
                <Box mt="2" className=" text-left" overflow="hidden">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without
                </Box>
              </div>

              <div className="flex mb-5 mt-2">
                <div>
                  <Avatar name="Dan Abrahmov" src="./Blogging.png" />{" "}
                </div>

                <div>
                  <div className=" pl-3 font-medium">
                    <h3>By Charles Kwame</h3>
                  </div>
                  <div>
                    <h3 className=" pl-3">Secretary </h3>
                  </div>
                </div>
              </div>
            </Box>
          </div>
          <div className="  mb-5 ">
            <Box
              px="3"
              py="3"
              className="transition rounded-lg md:rounded-lg w-70 border-2 md:border delay-150 md:w-96 hover:-translate-y-1 hover:shadow-full hover:scale-100 hover:border"
              overflow="hidden"
            >
              <Image
                src="./How-Extroverts-Can-Thrive-in-Asynchronous-Remote-Work.png"
                alt="Image"
                className="rounded"
              />

              <div className="flex mt-5">
                <Badge px="3.5" py="1" colorScheme="purple">
                  TITHES
                </Badge>
                <div className="mt-1">
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
                </div>
              </div>

              <div className="">
                <Box
                  mt="2"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                  className=""
                >
                  Tithe And Offering
                </Box>
              </div>

              <div>
                <Box mt="2" className=" text-left" overflow="hidden">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without
                </Box>
              </div>

              <div className="flex mb-5 mt-2">
                <div>
                  <Avatar name="Dan Abrahmov" src="./Blogging.png" />{" "}
                </div>

                <div>
                  <div className=" pl-3 font-medium">
                    <h3>By Charles Kwame</h3>
                  </div>
                  <div>
                    <h3 className=" pl-3">Secretary </h3>
                  </div>
                </div>
              </div>
            </Box>
          </div>
          <div className="  mb-5 ">
            <Box
              px="3"
              py="3"
              className="transition rounded-lg md:rounded-lg w-70 border-2 md:border delay-150 md:w-96 hover:-translate-y-1 hover:shadow-full hover:scale-100 hover:border"
              overflow="hidden"
            >
              <Image
                src="./Self-Designing-Your-Productive-Work-Day.png"
                alt="Image"
                className="rounded"
              />

              <div className="flex mt-5">
                <Badge px="3.5" py="1" colorScheme="purple">
                  TITHES
                </Badge>
                <div className="mt-1">
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
                </div>
              </div>

              <div className="">
                <Box
                  mt="2"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                  className=""
                >
                  Tithe And Offering
                </Box>
              </div>

              <div>
                <Box mt="2" className=" text-left" overflow="hidden">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without
                </Box>
              </div>

              <div className="flex mb-5 mt-2">
                <div>
                  <Avatar name="Dan Abrahmov" src="./Blogging.png" />{" "}
                </div>

                <div>
                  <div className=" pl-3 font-medium">
                    <h3>By Charles Kwame</h3>
                  </div>
                  <div>
                    <h3 className=" pl-3">Secretary </h3>
                  </div>
                </div>
              </div>
            </Box>
          </div>
        </div>

        <Box
          overflow="hidden"
          className="  bg-teal md:bg-white rounded md:rounded-lg md:mx-11 md:mb-12 mb-8  border md:border-none "
        >
          <div className="flex md:justify-between m-4">
            <div className="">
              <div className="md:mx-7">
                <Box
                  className="flex  w-70 max-w-3xl md:text-3xl"
                  overflow="hidden"
                  fontWeight="semibold"
                >
                  Get exclusive monthly newsletter updates on everything that
                  goes on in the church. Subscribe to our newsletter.
                </Box>
              </div>

              <div className="mt-5 md:mt-10  md:mx-7">
                <Box
                  className="flex w-70 text-base md:text-xl mb-2"
                  overflow="hidden"
                >
                  Join the Godly readers club
                </Box>
              </div>

              <div className="grid md:grid-cols-3 gap-4 md:mx-7">
                <div className=" md:col-span-2 md:mx-auto w-full md:w-full">
                  {" "}
                  <Input placeholder="Your email" />
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

        <div className="flex flex-wrap justify-around  md:gap-5 mt-10">
          <div className="  mb-5 ">
            <Box
              px="3"
              py="3"
              className="transition rounded-lg md:rounded-lg w-70 border-2 md:border delay-150 md:w-96 hover:-translate-y-1 hover:shadow-full hover:scale-100 hover:border"
              overflow="hidden"
            >
              <Image
                src="./Self-Designing-Your-Productive-Work-Day.png"
                alt="Image"
                className="rounded"
              />

              <div className="flex mt-5">
                <Badge px="3.5" py="1" colorScheme="purple">
                  TITHES
                </Badge>
                <div className="mt-1">
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
                </div>
              </div>

              <div className="">
                <Box
                  mt="2"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                  className=""
                >
                  Tithe And Offering
                </Box>
              </div>

              <div>
                <Box mt="2" className=" text-left" overflow="hidden">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without
                </Box>
              </div>

              <div className="flex mb-5 mt-2">
                <div>
                  <Avatar name="Dan Abrahmov" src="./Blogging.png" />{" "}
                </div>

                <div>
                  <div className=" pl-3 font-medium">
                    <h3>By Charles Kwame</h3>
                  </div>
                  <div>
                    <h3 className=" pl-3">Secretary </h3>
                  </div>
                </div>
              </div>
            </Box>
          </div>
          <div className="  mb-5 ">
            <Box
              px="3"
              py="3"
              className="transition rounded-lg md:rounded-lg w-70 border-2 md:border delay-150 md:w-96 hover:-translate-y-1 hover:shadow-full hover:scale-100 hover:border"
              overflow="hidden"
            >
              <Image
                src="./Who-and-How-we-Hire-at-Float.png"
                alt="Image"
                className="rounded"
              />

              <div className="flex mt-5">
                <Badge px="3.5" py="1" colorScheme="purple">
                  TITHES
                </Badge>
                <div className="mt-1">
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
                </div>
              </div>

              <div className="">
                <Box
                  mt="2"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                  className=""
                >
                  Tithe And Offering
                </Box>
              </div>

              <div>
                <Box mt="2" className=" text-left" overflow="hidden">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without
                </Box>
              </div>

              <div className="flex mb-5 mt-2">
                <div>
                  <Avatar name="Dan Abrahmov" src="./Blogging.png" />{" "}
                </div>

                <div>
                  <div className=" pl-3 font-medium">
                    <h3>By Charles Kwame</h3>
                  </div>
                  <div>
                    <h3 className=" pl-3">Secretary </h3>
                  </div>
                </div>
              </div>
            </Box>
          </div>
          <div className="  mb-5 ">
            <Box
              px="3"
              py="3"
              className="transition rounded-lg md:rounded-lg w-70 border-2 md:border delay-150 md:w-96 hover:-translate-y-1 hover:shadow-full hover:scale-100 hover:border"
              overflow="hidden"
            >
              <Image
                src="./Support-Is-More-Than-Responding-to-Customer-Tickets.png"
                alt="Image"
                className="rounded"
              />

              <div className="flex mt-5">
                <Badge px="3.5" py="1" colorScheme="purple">
                  TITHES
                </Badge>
                <div className="mt-1">
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
                </div>
              </div>

              <div className="">
                <Box
                  mt="2"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                  className=""
                >
                  Tithe And Offering
                </Box>
              </div>

              <div>
                <Box mt="2" className=" text-left" overflow="hidden">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without
                </Box>
              </div>

              <div className="flex mb-5 mt-2">
                <div>
                  <Avatar name="Dan Abrahmov" src="./Blogging.png" />{" "}
                </div>

                <div>
                  <div className=" pl-3 font-medium">
                    <h3>By Charles Kwame</h3>
                  </div>
                  <div>
                    <h3 className=" pl-3">Secretary </h3>
                  </div>
                </div>
              </div>
            </Box>
          </div>
          <div className="  mb-5 ">
            <Box
              px="3"
              py="3"
              className="transition rounded-lg md:rounded-lg w-70 border-2 md:border delay-150 md:w-96 hover:-translate-y-1 hover:shadow-full hover:scale-100 hover:border"
              overflow="hidden"
            >
              <Image
                src="./Who-and-How-we-Hire-at-Float.png"
                alt="Image"
                className="rounded"
              />

              <div className="flex mt-5">
                <Badge px="3.5" py="1" colorScheme="purple">
                  TITHES
                </Badge>
                <div className="mt-1">
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
                </div>
              </div>

              <div className="">
                <Box
                  mt="2"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                  className=""
                >
                  Tithe And Offering
                </Box>
              </div>

              <div>
                <Box mt="2" className=" text-left" overflow="hidden">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without
                </Box>
              </div>

              <div className="flex mb-5 mt-2">
                <div>
                  <Avatar name="Dan Abrahmov" src="./Blogging.png" />{" "}
                </div>

                <div>
                  <div className=" pl-3 font-medium">
                    <h3>By Charles Kwame</h3>
                  </div>
                  <div>
                    <h3 className=" pl-3">Secretary </h3>
                  </div>
                </div>
              </div>
            </Box>
          </div>
          <div className="  mb-5 ">
            <Box
              px="3"
              py="3"
              className="transition rounded-lg md:rounded-lg w-70 border-2 md:border delay-150 md:w-96 hover:-translate-y-1 hover:shadow-full hover:scale-100 hover:border"
              overflow="hidden"
            >
              <Image
                src="./How-Extroverts-Can-Thrive-in-Asynchronous-Remote-Work.png"
                alt="Image"
                className="rounded"
              />

              <div className="flex mt-5">
                <Badge px="3.5" py="1" colorScheme="purple">
                  TITHES
                </Badge>
                <div className="mt-1">
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
                </div>
              </div>

              <div className="">
                <Box
                  mt="2"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                  className=""
                >
                  Tithe And Offering
                </Box>
              </div>

              <div>
                <Box mt="2" className=" text-left" overflow="hidden">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without
                </Box>
              </div>

              <div className="flex mb-5 mt-2">
                <div>
                  <Avatar name="Dan Abrahmov" src="./Blogging.png" />{" "}
                </div>

                <div>
                  <div className=" pl-3 font-medium">
                    <h3>By Charles Kwame</h3>
                  </div>
                  <div>
                    <h3 className=" pl-3">Secretary </h3>
                  </div>
                </div>
              </div>
            </Box>
          </div>
          <div className="  mb-5 ">
            <Box
              px="3"
              py="3"
              className="transition rounded-lg md:rounded-lg w-70 border-2 md:border delay-150 md:w-96 hover:-translate-y-1 hover:shadow-full hover:scale-100 hover:border"
              overflow="hidden"
            >
              <Image
                src="./Self-Designing-Your-Productive-Work-Day.png"
                alt="Image"
                className="rounded"
              />

              <div className="flex mt-5">
                <Badge px="3.5" py="1" colorScheme="purple">
                  TITHES
                </Badge>
                <div className="mt-1">
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
                </div>
              </div>

              <div className="">
                <Box
                  mt="2"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                  className=""
                >
                  Tithe And Offering
                </Box>
              </div>

              <div>
                <Box mt="2" className=" text-left" overflow="hidden">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without
                </Box>
              </div>

              <div className="flex mb-5 mt-2">
                <div>
                  <Avatar name="Dan Abrahmov" src="./Blogging.png" />{" "}
                </div>

                <div>
                  <div className=" pl-3 font-medium">
                    <h3>By Charles Kwame</h3>
                  </div>
                  <div>
                    <h3 className=" pl-3">Secretary </h3>
                  </div>
                </div>
              </div>
            </Box>
          </div>
        </div>
        <div className="flex flex-wrap justify-around  md:gap-5 mt-10">
          <div className="  mb-5 ">
            <Box
              px="3"
              py="3"
              className="transition rounded-lg md:rounded-lg w-70 border-2 md:border delay-150 md:w-96 hover:-translate-y-1 hover:shadow-full hover:scale-100 hover:border"
              overflow="hidden"
            >
              <Image
                src="./Self-Designing-Your-Productive-Work-Day.png"
                alt="Image"
                className="rounded"
              />

              <div className="flex mt-5">
                <Badge px="3.5" py="1" colorScheme="purple">
                  TITHES
                </Badge>
                <div className="mt-1">
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
                </div>
              </div>

              <div className="">
                <Box
                  mt="2"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                  className=""
                >
                  Tithe And Offering
                </Box>
              </div>

              <div>
                <Box mt="2" className=" text-left" overflow="hidden">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without
                </Box>
              </div>

              <div className="flex mb-5 mt-2">
                <div>
                  <Avatar name="Dan Abrahmov" src="./Blogging.png" />{" "}
                </div>

                <div>
                  <div className=" pl-3 font-medium">
                    <h3>By Charles Kwame</h3>
                  </div>
                  <div>
                    <h3 className=" pl-3">Secretary </h3>
                  </div>
                </div>
              </div>
            </Box>
          </div>
          <div className="  mb-5 ">
            <Box
              px="3"
              py="3"
              className="transition rounded-lg md:rounded-lg w-70 border-2 md:border delay-150 md:w-96 hover:-translate-y-1 hover:shadow-full hover:scale-100 hover:border"
              overflow="hidden"
            >
              <Image
                src="./Who-and-How-we-Hire-at-Float.png"
                alt="Image"
                className="rounded"
              />

              <div className="flex mt-5">
                <Badge px="3.5" py="1" colorScheme="purple">
                  TITHES
                </Badge>
                <div className="mt-1">
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
                </div>
              </div>

              <div className="">
                <Box
                  mt="2"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                  className=""
                >
                  Tithe And Offering
                </Box>
              </div>

              <div>
                <Box mt="2" className=" text-left" overflow="hidden">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without
                </Box>
              </div>

              <div className="flex mb-5 mt-2">
                <div>
                  <Avatar name="Dan Abrahmov" src="./Blogging.png" />{" "}
                </div>

                <div>
                  <div className=" pl-3 font-medium">
                    <h3>By Charles Kwame</h3>
                  </div>
                  <div>
                    <h3 className=" pl-3">Secretary </h3>
                  </div>
                </div>
              </div>
            </Box>
          </div>
          <div className="  mb-5 ">
            <Box
              px="3"
              py="3"
              className="transition rounded-lg md:rounded-lg w-70 border-2 md:border delay-150 md:w-96 hover:-translate-y-1 hover:shadow-full hover:scale-100 hover:border"
              overflow="hidden"
            >
              <Image
                src="./Support-Is-More-Than-Responding-to-Customer-Tickets.png"
                alt="Image"
                className="rounded"
              />

              <div className="flex mt-5">
                <Badge px="3.5" py="1" colorScheme="purple">
                  TITHES
                </Badge>
                <div className="mt-1">
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
                </div>
              </div>

              <div className="">
                <Box
                  mt="2"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                  className=""
                >
                  Tithe And Offering
                </Box>
              </div>

              <div>
                <Box mt="2" className=" text-left" overflow="hidden">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without
                </Box>
              </div>

              <div className="flex mb-5 mt-2">
                <div>
                  <Avatar name="Dan Abrahmov" src="./Blogging.png" />{" "}
                </div>

                <div>
                  <div className=" pl-3 font-medium">
                    <h3>By Charles Kwame</h3>
                  </div>
                  <div>
                    <h3 className=" pl-3">Secretary </h3>
                  </div>
                </div>
              </div>
            </Box>
          </div>
          <div className="  mb-5 ">
            <Box
              px="3"
              py="3"
              className="transition rounded-lg md:rounded-lg w-70 border-2 md:border delay-150 md:w-96 hover:-translate-y-1 hover:shadow-full hover:scale-100 hover:border"
              overflow="hidden"
            >
              <Image
                src="./Who-and-How-we-Hire-at-Float.png"
                alt="Image"
                className="rounded"
              />

              <div className="flex mt-5">
                <Badge px="3.5" py="1" colorScheme="purple">
                  TITHES
                </Badge>
                <div className="mt-1">
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
                </div>
              </div>

              <div className="">
                <Box
                  mt="2"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                  className=""
                >
                  Tithe And Offering
                </Box>
              </div>

              <div>
                <Box mt="2" className=" text-left" overflow="hidden">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without
                </Box>
              </div>

              <div className="flex mb-5 mt-2">
                <div>
                  <Avatar name="Dan Abrahmov" src="./Blogging.png" />{" "}
                </div>

                <div>
                  <div className=" pl-3 font-medium">
                    <h3>By Charles Kwame</h3>
                  </div>
                  <div>
                    <h3 className=" pl-3">Secretary </h3>
                  </div>
                </div>
              </div>
            </Box>
          </div>
          <div className="  mb-5 ">
            <Box
              px="3"
              py="3"
              className="transition rounded-lg md:rounded-lg w-70 border-2 md:border delay-150 md:w-96 hover:-translate-y-1 hover:shadow-full hover:scale-100 hover:border"
              overflow="hidden"
            >
              <Image
                src="./How-Extroverts-Can-Thrive-in-Asynchronous-Remote-Work.png"
                alt="Image"
                className="rounded"
              />

              <div className="flex mt-5">
                <Badge px="3.5" py="1" colorScheme="purple">
                  TITHES
                </Badge>
                <div className="mt-1">
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
                </div>
              </div>

              <div className="">
                <Box
                  mt="2"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                  className=""
                >
                  Tithe And Offering
                </Box>
              </div>

              <div>
                <Box mt="2" className=" text-left" overflow="hidden">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without
                </Box>
              </div>

              <div className="flex mb-5 mt-2">
                <div>
                  <Avatar name="Dan Abrahmov" src="./Blogging.png" />{" "}
                </div>

                <div>
                  <div className=" pl-3 font-medium">
                    <h3>By Charles Kwame</h3>
                  </div>
                  <div>
                    <h3 className=" pl-3">Secretary </h3>
                  </div>
                </div>
              </div>
            </Box>
          </div>
          <div className="  mb-5 ">
            <Box
              px="3"
              py="3"
              className="transition rounded-lg md:rounded-lg w-70 border-2 md:border delay-150 md:w-96 hover:-translate-y-1 hover:shadow-full hover:scale-100 hover:border"
              overflow="hidden"
            >
              <Image
                src="./Self-Designing-Your-Productive-Work-Day.png"
                alt="Image"
                className="rounded"
              />

              <div className="flex mt-5">
                <Badge px="3.5" py="1" colorScheme="purple">
                  TITHES
                </Badge>
                <div className="mt-1">
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
                </div>
              </div>

              <div className="">
                <Box
                  mt="2"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                  className=""
                >
                  Tithe And Offering
                </Box>
              </div>

              <div>
                <Box mt="2" className=" text-left" overflow="hidden">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without
                </Box>
              </div>

              <div className="flex mb-5 mt-2">
                <div>
                  <Avatar name="Dan Abrahmov" src="./Blogging.png" />{" "}
                </div>

                <div>
                  <div className=" pl-3 font-medium">
                    <h3>By Charles Kwame</h3>
                  </div>
                  <div>
                    <h3 className=" pl-3">Secretary </h3>
                  </div>
                </div>
              </div>
            </Box>
          </div>
        </div>
        <div className="flex flex-wrap justify-around  md:gap-5 mt-10">
          <div className="  mb-5 ">
            <Box
              px="3"
              py="3"
              className="transition rounded-lg md:rounded-lg w-70 border-2 md:border delay-150 md:w-96 hover:-translate-y-1 hover:shadow-full hover:scale-100 hover:border"
              overflow="hidden"
            >
              <Image
                src="./Self-Designing-Your-Productive-Work-Day.png"
                alt="Image"
                className="rounded"
              />

              <div className="flex mt-5">
                <Badge px="3.5" py="1" colorScheme="purple">
                  TITHES
                </Badge>
                <div className="mt-1">
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
                </div>
              </div>

              <div className="">
                <Box
                  mt="2"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                  className=""
                >
                  Tithe And Offering
                </Box>
              </div>

              <div>
                <Box mt="2" className=" text-left" overflow="hidden">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without
                </Box>
              </div>

              <div className="flex mb-5 mt-2">
                <div>
                  <Avatar name="Dan Abrahmov" src="./Blogging.png" />{" "}
                </div>

                <div>
                  <div className=" pl-3 font-medium">
                    <h3>By Charles Kwame</h3>
                  </div>
                  <div>
                    <h3 className=" pl-3">Secretary </h3>
                  </div>
                </div>
              </div>
            </Box>
          </div>
          <div className="  mb-5 ">
            <Box
              px="3"
              py="3"
              className="transition rounded-lg md:rounded-lg w-70 border-2 md:border delay-150 md:w-96 hover:-translate-y-1 hover:shadow-full hover:scale-100 hover:border"
              overflow="hidden"
            >
              <Image
                src="./Who-and-How-we-Hire-at-Float.png"
                alt="Image"
                className="rounded"
              />

              <div className="flex mt-5">
                <Badge px="3.5" py="1" colorScheme="purple">
                  TITHES
                </Badge>
                <div className="mt-1">
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
                </div>
              </div>

              <div className="">
                <Box
                  mt="2"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                  className=""
                >
                  Tithe And Offering
                </Box>
              </div>

              <div>
                <Box mt="2" className=" text-left" overflow="hidden">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without
                </Box>
              </div>

              <div className="flex mb-5 mt-2">
                <div>
                  <Avatar name="Dan Abrahmov" src="./Blogging.png" />{" "}
                </div>

                <div>
                  <div className=" pl-3 font-medium">
                    <h3>By Charles Kwame</h3>
                  </div>
                  <div>
                    <h3 className=" pl-3">Secretary </h3>
                  </div>
                </div>
              </div>
            </Box>
          </div>
          <div className="  mb-5 ">
            <Box
              px="3"
              py="3"
              className="transition rounded-lg md:rounded-lg w-70 border-2 md:border delay-150 md:w-96 hover:-translate-y-1 hover:shadow-full hover:scale-100 hover:border"
              overflow="hidden"
            >
              <Image
                src="./Support-Is-More-Than-Responding-to-Customer-Tickets.png"
                alt="Image"
                className="rounded"
              />

              <div className="flex mt-5">
                <Badge px="3.5" py="1" colorScheme="purple">
                  TITHES
                </Badge>
                <div className="mt-1">
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
                </div>
              </div>

              <div className="">
                <Box
                  mt="2"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                  className=""
                >
                  Tithe And Offering
                </Box>
              </div>

              <div>
                <Box mt="2" className=" text-left" overflow="hidden">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without
                </Box>
              </div>

              <div className="flex mb-5 mt-2">
                <div>
                  <Avatar name="Dan Abrahmov" src="./Blogging.png" />{" "}
                </div>

                <div>
                  <div className=" pl-3 font-medium">
                    <h3>By Charles Kwame</h3>
                  </div>
                  <div>
                    <h3 className=" pl-3">Secretary </h3>
                  </div>
                </div>
              </div>
            </Box>
          </div>
          <div className="  mb-5 ">
            <Box
              px="3"
              py="3"
              className="transition rounded-lg md:rounded-lg w-70 border-2 md:border delay-150 md:w-96 hover:-translate-y-1 hover:shadow-full hover:scale-100 hover:border"
              overflow="hidden"
            >
              <Image
                src="./Who-and-How-we-Hire-at-Float.png"
                alt="Image"
                className="rounded"
              />

              <div className="flex mt-5">
                <Badge px="3.5" py="1" colorScheme="purple">
                  TITHES
                </Badge>
                <div className="mt-1">
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
                </div>
              </div>

              <div className="">
                <Box
                  mt="2"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                  className=""
                >
                  Tithe And Offering
                </Box>
              </div>

              <div>
                <Box mt="2" className=" text-left" overflow="hidden">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without
                </Box>
              </div>

              <div className="flex mb-5 mt-2">
                <div>
                  <Avatar name="Dan Abrahmov" src="./Blogging.png" />{" "}
                </div>

                <div>
                  <div className=" pl-3 font-medium">
                    <h3>By Charles Kwame</h3>
                  </div>
                  <div>
                    <h3 className=" pl-3">Secretary </h3>
                  </div>
                </div>
              </div>
            </Box>
          </div>
          <div className="  mb-5 ">
            <Box
              px="3"
              py="3"
              className="transition rounded-lg md:rounded-lg w-70 border-2 md:border delay-150 md:w-96 hover:-translate-y-1 hover:shadow-full hover:scale-100 hover:border"
              overflow="hidden"
            >
              <Image
                src="./How-Extroverts-Can-Thrive-in-Asynchronous-Remote-Work.png"
                alt="Image"
                className="rounded"
              />

              <div className="flex mt-5">
                <Badge px="3.5" py="1" colorScheme="purple">
                  TITHES
                </Badge>
                <div className="mt-1">
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
                </div>
              </div>

              <div className="">
                <Box
                  mt="2"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                  className=""
                >
                  Tithe And Offering
                </Box>
              </div>

              <div>
                <Box mt="2" className=" text-left" overflow="hidden">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without
                </Box>
              </div>

              <div className="flex mb-5 mt-2">
                <div>
                  <Avatar name="Dan Abrahmov" src="./Blogging.png" />{" "}
                </div>

                <div>
                  <div className=" pl-3 font-medium">
                    <h3>By Charles Kwame</h3>
                  </div>
                  <div>
                    <h3 className=" pl-3">Secretary </h3>
                  </div>
                </div>
              </div>
            </Box>
          </div>
          <div className="  mb-5 ">
            <Box
              px="3"
              py="3"
              className="transition rounded-lg md:rounded-lg w-70 border-2 md:border delay-150 md:w-96 hover:-translate-y-1 hover:shadow-full hover:scale-100 hover:border"
              overflow="hidden"
            >
              <Image
                src="./Self-Designing-Your-Productive-Work-Day.png"
                alt="Image"
                className="rounded"
              />

              <div className="flex mt-5">
                <Badge px="3.5" py="1" colorScheme="purple">
                  TITHES
                </Badge>
                <div className="mt-1">
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
                </div>
              </div>

              <div className="">
                <Box
                  mt="2"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                  className=""
                >
                  Tithe And Offering
                </Box>
              </div>

              <div>
                <Box mt="2" className=" text-left" overflow="hidden">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without
                </Box>
              </div>

              <div className="flex mb-5 mt-2">
                <div>
                  <Avatar name="Dan Abrahmov" src="./Blogging.png" />{" "}
                </div>

                <div>
                  <div className=" pl-3 font-medium">
                    <h3>By Charles Kwame</h3>
                  </div>
                  <div>
                    <h3 className=" pl-3">Secretary </h3>
                  </div>
                </div>
              </div>
            </Box>
          </div>
        </div>
        <div className="flex flex-wrap justify-around  md:gap-5 mt-10">
          <div className="  mb-5 ">
            <Box
              px="3"
              py="3"
              className="transition rounded-lg md:rounded-lg w-70 border-2 md:border delay-150 md:w-96 hover:-translate-y-1 hover:shadow-full hover:scale-100 hover:border"
              overflow="hidden"
            >
              <Image
                src="./Self-Designing-Your-Productive-Work-Day.png"
                alt="Image"
                className="rounded"
              />

              <div className="flex mt-5">
                <Badge px="3.5" py="1" colorScheme="purple">
                  TITHES
                </Badge>
                <div className="mt-1">
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
                </div>
              </div>

              <div className="">
                <Box
                  mt="2"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                  className=""
                >
                  Tithe And Offering
                </Box>
              </div>

              <div>
                <Box mt="2" className=" text-left" overflow="hidden">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without
                </Box>
              </div>

              <div className="flex mb-5 mt-2">
                <div>
                  <Avatar name="Dan Abrahmov" src="./Blogging.png" />{" "}
                </div>

                <div>
                  <div className=" pl-3 font-medium">
                    <h3>By Charles Kwame</h3>
                  </div>
                  <div>
                    <h3 className=" pl-3">Secretary </h3>
                  </div>
                </div>
              </div>
            </Box>
          </div>
          <div className="  mb-5 ">
            <Box
              px="3"
              py="3"
              className="transition rounded-lg md:rounded-lg w-70 border-2 md:border delay-150 md:w-96 hover:-translate-y-1 hover:shadow-full hover:scale-100 hover:border"
              overflow="hidden"
            >
              <Image
                src="./Who-and-How-we-Hire-at-Float.png"
                alt="Image"
                className="rounded"
              />

              <div className="flex mt-5">
                <Badge px="3.5" py="1" colorScheme="purple">
                  TITHES
                </Badge>
                <div className="mt-1">
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
                </div>
              </div>

              <div className="">
                <Box
                  mt="2"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                  className=""
                >
                  Tithe And Offering
                </Box>
              </div>

              <div>
                <Box mt="2" className=" text-left" overflow="hidden">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without
                </Box>
              </div>

              <div className="flex mb-5 mt-2">
                <div>
                  <Avatar name="Dan Abrahmov" src="./Blogging.png" />{" "}
                </div>

                <div>
                  <div className=" pl-3 font-medium">
                    <h3>By Charles Kwame</h3>
                  </div>
                  <div>
                    <h3 className=" pl-3">Secretary </h3>
                  </div>
                </div>
              </div>
            </Box>
          </div>
          <div className="  mb-5 ">
            <Box
              px="3"
              py="3"
              className="transition rounded-lg md:rounded-lg w-70 border-2 md:border delay-150 md:w-96 hover:-translate-y-1 hover:shadow-full hover:scale-100 hover:border"
              overflow="hidden"
            >
              <Image
                src="./Support-Is-More-Than-Responding-to-Customer-Tickets.png"
                alt="Image"
                className="rounded"
              />

              <div className="flex mt-5">
                <Badge px="3.5" py="1" colorScheme="purple">
                  TITHES
                </Badge>
                <div className="mt-1">
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
                </div>
              </div>

              <div className="">
                <Box
                  mt="2"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                  className=""
                >
                  Tithe And Offering
                </Box>
              </div>

              <div>
                <Box mt="2" className=" text-left" overflow="hidden">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without
                </Box>
              </div>

              <div className="flex mb-5 mt-2">
                <div>
                  <Avatar name="Dan Abrahmov" src="./Blogging.png" />{" "}
                </div>

                <div>
                  <div className=" pl-3 font-medium">
                    <h3>By Charles Kwame</h3>
                  </div>
                  <div>
                    <h3 className=" pl-3">Secretary </h3>
                  </div>
                </div>
              </div>
            </Box>
          </div>
          <div className="  mb-5 ">
            <Box
              px="3"
              py="3"
              className="transition rounded-lg md:rounded-lg w-70 border-2 md:border delay-150 md:w-96 hover:-translate-y-1 hover:shadow-full hover:scale-100 hover:border"
              overflow="hidden"
            >
              <Image
                src="./Who-and-How-we-Hire-at-Float.png"
                alt="Image"
                className="rounded"
              />

              <div className="flex mt-5">
                <Badge px="3.5" py="1" colorScheme="purple">
                  TITHES
                </Badge>
                <div className="mt-1">
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
                </div>
              </div>

              <div className="">
                <Box
                  mt="2"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                  className=""
                >
                  Tithe And Offering
                </Box>
              </div>

              <div>
                <Box mt="2" className=" text-left" overflow="hidden">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without
                </Box>
              </div>

              <div className="flex mb-5 mt-2">
                <div>
                  <Avatar name="Dan Abrahmov" src="./Blogging.png" />{" "}
                </div>

                <div>
                  <div className=" pl-3 font-medium">
                    <h3>By Charles Kwame</h3>
                  </div>
                  <div>
                    <h3 className=" pl-3">Secretary </h3>
                  </div>
                </div>
              </div>
            </Box>
          </div>
          <div className="  mb-5 ">
            <Box
              px="3"
              py="3"
              className="transition rounded-lg md:rounded-lg w-70 border-2 md:border delay-150 md:w-96 hover:-translate-y-1 hover:shadow-full hover:scale-100 hover:border"
              overflow="hidden"
            >
              <Image
                src="./How-Extroverts-Can-Thrive-in-Asynchronous-Remote-Work.png"
                alt="Image"
                className="rounded"
              />

              <div className="flex mt-5">
                <Badge px="3.5" py="1" colorScheme="purple">
                  TITHES
                </Badge>
                <div className="mt-1">
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
                </div>
              </div>

              <div className="">
                <Box
                  mt="2"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                  className=""
                >
                  Tithe And Offering
                </Box>
              </div>

              <div>
                <Box mt="2" className=" text-left" overflow="hidden">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without
                </Box>
              </div>

              <div className="flex mb-5 mt-2">
                <div>
                  <Avatar name="Dan Abrahmov" src="./Blogging.png" />{" "}
                </div>

                <div>
                  <div className=" pl-3 font-medium">
                    <h3>By Charles Kwame</h3>
                  </div>
                  <div>
                    <h3 className=" pl-3">Secretary </h3>
                  </div>
                </div>
              </div>
            </Box>
          </div>
          <div className="  mb-5 ">
            <Box
              px="3"
              py="3"
              className="transition rounded-lg md:rounded-lg w-70 border-2 md:border delay-150 md:w-96 hover:-translate-y-1 hover:shadow-full hover:scale-100 hover:border"
              overflow="hidden"
            >
              <Image
                src="./Self-Designing-Your-Productive-Work-Day.png"
                alt="Image"
                className="rounded"
              />

              <div className="flex mt-5">
                <Badge px="3.5" py="1" colorScheme="purple">
                  TITHES
                </Badge>
                <div className="mt-1">
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
                </div>
              </div>

              <div className="">
                <Box
                  mt="2"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                  className=""
                >
                  Tithe And Offering
                </Box>
              </div>

              <div>
                <Box mt="2" className=" text-left" overflow="hidden">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without
                </Box>
              </div>

              <div className="flex mb-5 mt-2">
                <div>
                  <Avatar name="Dan Abrahmov" src="./Blogging.png" />{" "}
                </div>

                <div>
                  <div className=" pl-3 font-medium">
                    <h3>By Charles Kwame</h3>
                  </div>
                  <div>
                    <h3 className=" pl-3">Secretary </h3>
                  </div>
                </div>
              </div>
            </Box>
          </div>
        </div>
        <div className="flex flex-wrap justify-around  md:gap-5 mt-10">
          <div className="  mb-5 ">
            <Box
              px="3"
              py="3"
              className="transition rounded-lg md:rounded-lg w-70 border-2 md:border delay-150 md:w-96 hover:-translate-y-1 hover:shadow-full hover:scale-100 hover:border"
              overflow="hidden"
            >
              <Image
                src="./Self-Designing-Your-Productive-Work-Day.png"
                alt="Image"
                className="rounded"
              />

              <div className="flex mt-5">
                <Badge px="3.5" py="1" colorScheme="purple">
                  TITHES
                </Badge>
                <div className="mt-1">
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
                </div>
              </div>

              <div className="">
                <Box
                  mt="2"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                  className=""
                >
                  Tithe And Offering
                </Box>
              </div>

              <div>
                <Box mt="2" className=" text-left" overflow="hidden">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without
                </Box>
              </div>

              <div className="flex mb-5 mt-2">
                <div>
                  <Avatar name="Dan Abrahmov" src="./Blogging.png" />{" "}
                </div>

                <div>
                  <div className=" pl-3 font-medium">
                    <h3>By Charles Kwame</h3>
                  </div>
                  <div>
                    <h3 className=" pl-3">Secretary </h3>
                  </div>
                </div>
              </div>
            </Box>
          </div>
          <div className="  mb-5 ">
            <Box
              px="3"
              py="3"
              className="transition rounded-lg md:rounded-lg w-70 border-2 md:border delay-150 md:w-96 hover:-translate-y-1 hover:shadow-full hover:scale-100 hover:border"
              overflow="hidden"
            >
              <Image
                src="./Who-and-How-we-Hire-at-Float.png"
                alt="Image"
                className="rounded"
              />

              <div className="flex mt-5">
                <Badge px="3.5" py="1" colorScheme="purple">
                  TITHES
                </Badge>
                <div className="mt-1">
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
                </div>
              </div>

              <div className="">
                <Box
                  mt="2"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                  className=""
                >
                  Tithe And Offering
                </Box>
              </div>

              <div>
                <Box mt="2" className=" text-left" overflow="hidden">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without
                </Box>
              </div>

              <div className="flex mb-5 mt-2">
                <div>
                  <Avatar name="Dan Abrahmov" src="./Blogging.png" />{" "}
                </div>

                <div>
                  <div className=" pl-3 font-medium">
                    <h3>By Charles Kwame</h3>
                  </div>
                  <div>
                    <h3 className=" pl-3">Secretary </h3>
                  </div>
                </div>
              </div>
            </Box>
          </div>
          <div className="  mb-5 ">
            <Box
              px="3"
              py="3"
              className="transition rounded-lg md:rounded-lg w-70 border-2 md:border delay-150 md:w-96 hover:-translate-y-1 hover:shadow-full hover:scale-100 hover:border"
              overflow="hidden"
            >
              <Image
                src="./Support-Is-More-Than-Responding-to-Customer-Tickets.png"
                alt="Image"
                className="rounded"
              />

              <div className="flex mt-5">
                <Badge px="3.5" py="1" colorScheme="purple">
                  TITHES
                </Badge>
                <div className="mt-1">
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
                </div>
              </div>

              <div className="">
                <Box
                  mt="2"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                  className=""
                >
                  Tithe And Offering
                </Box>
              </div>

              <div>
                <Box mt="2" className=" text-left" overflow="hidden">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without
                </Box>
              </div>

              <div className="flex mb-5 mt-2">
                <div>
                  <Avatar name="Dan Abrahmov" src="./Blogging.png" />{" "}
                </div>

                <div>
                  <div className=" pl-3 font-medium">
                    <h3>By Charles Kwame</h3>
                  </div>
                  <div>
                    <h3 className=" pl-3">Secretary </h3>
                  </div>
                </div>
              </div>
            </Box>
          </div>
          <div className="  mb-5 ">
            <Box
              px="3"
              py="3"
              className="transition rounded-lg md:rounded-lg w-70 border-2 md:border delay-150 md:w-96 hover:-translate-y-1 hover:shadow-full hover:scale-100 hover:border"
              overflow="hidden"
            >
              <Image
                src="./Who-and-How-we-Hire-at-Float.png"
                alt="Image"
                className="rounded"
              />

              <div className="flex mt-5">
                <Badge px="3.5" py="1" colorScheme="purple">
                  TITHES
                </Badge>
                <div className="mt-1">
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
                </div>
              </div>

              <div className="">
                <Box
                  mt="2"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                  className=""
                >
                  Tithe And Offering
                </Box>
              </div>

              <div>
                <Box mt="2" className=" text-left" overflow="hidden">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without
                </Box>
              </div>

              <div className="flex mb-5 mt-2">
                <div>
                  <Avatar name="Dan Abrahmov" src="./Blogging.png" />{" "}
                </div>

                <div>
                  <div className=" pl-3 font-medium">
                    <h3>By Charles Kwame</h3>
                  </div>
                  <div>
                    <h3 className=" pl-3">Secretary </h3>
                  </div>
                </div>
              </div>
            </Box>
          </div>
          <div className="  mb-5 ">
            <Box
              px="3"
              py="3"
              className="transition rounded-lg md:rounded-lg w-70 border-2 md:border delay-150 md:w-96 hover:-translate-y-1 hover:shadow-full hover:scale-100 hover:border"
              overflow="hidden"
            >
              <Image
                src="./How-Extroverts-Can-Thrive-in-Asynchronous-Remote-Work.png"
                alt="Image"
                className="rounded"
              />

              <div className="flex mt-5">
                <Badge px="3.5" py="1" colorScheme="purple">
                  TITHES
                </Badge>
                <div className="mt-1">
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
                </div>
              </div>

              <div className="">
                <Box
                  mt="2"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                  className=""
                >
                  Tithe And Offering
                </Box>
              </div>

              <div>
                <Box mt="2" className=" text-left" overflow="hidden">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without
                </Box>
              </div>

              <div className="flex mb-5 mt-2">
                <div>
                  <Avatar name="Dan Abrahmov" src="./Blogging.png" />{" "}
                </div>

                <div>
                  <div className=" pl-3 font-medium">
                    <h3>By Charles Kwame</h3>
                  </div>
                  <div>
                    <h3 className=" pl-3">Secretary </h3>
                  </div>
                </div>
              </div>
            </Box>
          </div>
          <div className="  mb-5 ">
            <Box
              px="3"
              py="3"
              className="transition rounded-lg md:rounded-lg w-70 border-2 md:border delay-150 md:w-96 hover:-translate-y-1 hover:shadow-full hover:scale-100 hover:border"
              overflow="hidden"
            >
              <Image
                src="./Self-Designing-Your-Productive-Work-Day.png"
                alt="Image"
                className="rounded"
              />

              <div className="flex mt-5">
                <Badge px="3.5" py="1" colorScheme="purple">
                  TITHES
                </Badge>
                <div className="mt-1">
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
                </div>
              </div>

              <div className="">
                <Box
                  mt="2"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                  className=""
                >
                  Tithe And Offering
                </Box>
              </div>

              <div>
                <Box mt="2" className=" text-left" overflow="hidden">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without
                </Box>
              </div>

              <div className="flex mb-5 mt-2">
                <div>
                  <Avatar name="Dan Abrahmov" src="./Blogging.png" />{" "}
                </div>

                <div>
                  <div className=" pl-3 font-medium">
                    <h3>By Charles Kwame</h3>
                  </div>
                  <div>
                    <h3 className=" pl-3">Secretary </h3>
                  </div>
                </div>
              </div>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
