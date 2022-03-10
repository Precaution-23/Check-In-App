import React from "react";
import { Box, Badge, Image, Avatar } from "@chakra-ui/react";

function RelatedBlogs() {
  return (
    <div>
      <div className="text-center md:text-3xl text-3xl mt-8 ">Related Reads</div>
      <div className="flex flex-wrap justify-around  2xl:gap-0 mt-10 mb-20">
        <div className="mb-5 ">
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
                text commonly used to demonstrate the visual form of a document
                or a typeface without
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
                text commonly used to demonstrate the visual form of a document
                or a typeface without
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
                text commonly used to demonstrate the visual form of a document
                or a typeface without
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
                text commonly used to demonstrate the visual form of a document
                or a typeface without
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
                text commonly used to demonstrate the visual form of a document
                or a typeface without
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
                text commonly used to demonstrate the visual form of a document
                or a typeface without
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
                text commonly used to demonstrate the visual form of a document
                or a typeface without
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
  );
}

export default RelatedBlogs;
