import React, {useState} from 'react'

function BlogBanner({color}) {
    const [first, setfirst] = useState(color)

    const routing = window.location.pathname
    
  return (
    <div>
      <div className="header md:h-144 h-80 md:-left-3 md:w-[100.9%] -left-6 md:absolute bg-header top-0" style={{background : `${first}`}}>
        {
          routing === "/blog" ? (
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
          ) : (
            ``
          )
        }
       
      </div>
    </div>
  );
}

export default BlogBanner