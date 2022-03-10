import React from "react";
import { Box, Badge, Image, Avatar } from "@chakra-ui/react";
import { BiStopwatch } from "react-icons/bi";
import BlogBanner from "../Components/BlogBanner";
import RelatedBlogs from "../Components/RelatedBlogs";
import {useLocation} from "react-router-dom"
import Subscribe from "../Components/Subscribe";

function BlogDetails() {

const location = useLocation()

  return (
    <div>
      <BlogBanner color={location.state} />
      <div className=" relative md:top-9 -top-80">
        <div className="text-center md:text-5xl text-xl mt-5 font-semibold">Kingdom Of God</div>

        <div className="flex justify-center mb-5 mt-5 ">
          <div>
            <Avatar name="Dan Abrahmov" src="./Blogging.png" size="lg" />{" "}
          </div>

          <div className="pl-3">
            <div className="font-semibold">
              <div className=" flex text-xl">By Charles Kwame</div>
            </div>
            <div>
              <h3 className="flex text-center text-xl">Secretary </h3>
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-5 mt-10">
          <Box
            className="transition md:rounded-lg   md:border delay-150 w-[45rem] "
            overflow="hidden"
          >
            <Image
              src="./Self-Designing-Your-Productive-Work-Day.png"
              alt="Image"
              className="rounded"
            />
          </Box>
        </div>

        <div className="flex justify-center mt-5">
          <Badge px="3.5" py="1" colorScheme="gray" style={{color: location.state}}>
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
                <BiStopwatch size={22} />
              </span>{" "}
              5 min read
            </Box>
          </div>
        </div>
        <div className="flex justify-center md:mx-80 mx-4 mt-5 2xl:mx-96 mb-5">
        What is Lorem Ipsum?
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
        <hr className="md:mx-80 mx-4 mb-5" />
        <div className="flex mb-5 mt-5 md:mx-80 mx-4">
          <div>
            <Avatar name="Dan Abrahmov" src="./Blogging.png" size="lg" />{" "}
          </div>

          <div className="">
            <div className="font-semibold">
              <div className="pl-3 flex text-xl">By Charles Kwame</div>
            </div>
            <div>
              <h3 className="flex pl-3 text-center text-xl">Secretary </h3>
            </div>
          </div>
        </div>

        <div className="2xl:mx-60">
            < Subscribe />
        </div>

        <div className="md:pr-16 md:pl-16 2xl:pl-72 2xl:pr-72">
        <RelatedBlogs />
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
