import React from 'react'

const Footer = () => {
  return (
    <div className="bg-black">
    <div className="bg-gray-800">
      <footer className="p-4 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6">
        <span className="text-sm text-gray-500 sm:text-center">
          Made By Archit @Arcsh7
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 sm:mt-0">
          <li>
            <a href="/" className="hover:underline">
              Github
            </a>
          </li>
        </ul>
      </footer>
    </div>
    </div>
  )
}

export default Footer