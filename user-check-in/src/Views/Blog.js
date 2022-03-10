import React from "react";
import Subscribe from "../Components/Subscribe";
import BlogBanner from "../Components/BlogBanner";
import BlogContents from "../Components/BlogContents";


function Blog() {


  // set the color of a particular blog/article when clicked on in local storage so it
  // can be used for the blog background color or useLocation can be used to get the data that
  // will be passed.

  // data will be pushed from the blog page to the detailed page.

  const color = ""
  return (
    <div>
      <BlogBanner color={color} />
      <div className="md:pr-16 md:pl-16 2xl:pl-72 2xl:pr-72 pr-4 pl-4 relative md:top-52 -top-32 md:mb-80 ">
        <BlogContents />

        {/* <Subscribe /> */}
      </div>
    </div>
  );
}

export default Blog;
