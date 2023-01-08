import React, { useState } from "react";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" bg-violet-200 px-2 sm:px-4 py-2.5 w-full z-20 top-0 left-0 border-b border-gray-200">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap">
            Mentalwellbeing
          </span>
        </a>
        <div className="flex md:order-2">
          <button
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div> 
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg lg:bg-violet-200 xl:bg-violet-200 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-violet-200 bg-white">
            <li>
              <a
                href="/blog"
                className="block py-2 pl-3 pr-4 text-black rounded md:hover:text-blue-700 md:p-0 text-center border-b md:border-b-0"
                aria-current="page"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/chat"
                className="block py-2 pl-3 pr-4 text-black rounded md:hover:text-blue-700 md:p-0 text-center border-b md:border-b-0"
              >
                Chat
              </a>
            </li>
            <li>
              <a
                href="/quiz"
                className="block py-2 pl-3 pr-4 text-black rounded md:hover:text-blue-700 md:p-0 text-center"
              >
                Quiz
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
