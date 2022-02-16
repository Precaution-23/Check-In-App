import React from "react";
import { HiChevronDoubleRight } from "react-icons/hi";

function AuthHeader({ authpages }) {
  return (
    <div className="relative">
      <div className="max-w-full mx-auto bg-header px-4 sm:px-6 h-20">
        <div className="flex justify-between items-center  py-3 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10 text-xl" 
                src="./vmix logo.png"
                alt=""
              />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            {window.location.pathname === "/signup" ? (
            <a
            href="/signin"
            className="h-14 w-28 rounded-md  transition-delay: 1500ms ml-8 whitespace-nowrap  inline-flex items-center justify-center px-4 py-2 border-2 border-white shadow-sm text-lg font-medium text-white bg-header hover:bg-header"
          >
            Log In
          </a>
            ) : window.location.pathname === "/signin" ? (
              <a
              href="/signup"
              className="h-14 rounded-md transition-delay: 1500ms ml-8 whitespace-nowrap  inline-flex items-center justify-center px-4 py-2 border-2 border-white shadow-sm text-lg font-medium text-white bg-header hover:bg-header"
            >
              <span className="flex">
                <div>Get Started</div>
                <div className="mt-1 ml-1"><HiChevronDoubleRight size={20} /></div>
              </span>
            </a>
            ) : (
              ``
            )}
          </div>
        </div>
      </div>
      {/* 
      <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="Workflow"
                />
              </div>
              <div className="-mr-2">
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
        
          </div>
          <div className="py-6 px-5 space-y-6">
            <div>
              <a
                href="#"
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Get Started
              </a>
              <p className="mt-6 text-center text-base font-medium text-gray-500">
                Existing account? 
                <a href="#" className="text-indigo-600 hover:text-indigo-500">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div> */}

      <div className="">{authpages}</div>
    </div>
  );
}

export default AuthHeader;
