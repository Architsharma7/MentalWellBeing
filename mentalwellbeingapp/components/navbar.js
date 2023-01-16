import React from "react";

const Navbar = () => {

  return (
    <nav className=" bg-violet-100 px-2 sm:px-4 py-4 w-full z-20 top-0 left-0 border-b border-gray-200 rounded-md">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/" className="flex items-center ml-2 md:ml-0">
          <span className="self-center text-xl font-semibold whitespace-nowrap">
            Mentalwellbeing
          </span>
        </a>
        <div className="flex md:order-2">
        <button className="text-white bg-blue-500 hover:bg-white hover:text-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 text-center mr-2 md:mr-0 hover:scale-110 transform transition duration-300">
          <a href="/signIn"><span className="mx-4">Log In</span></a>
        </button>
        </div> 
        {/* <div
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
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;