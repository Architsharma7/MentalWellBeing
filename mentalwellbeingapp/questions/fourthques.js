import React from 'react'
import { useState } from "react";

const Fourthques = ({selectedOption,setSelectedOption}) => {
  // const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div>
        <div className='flex justify-center'>
            <p className='text-center text-black text-base md:text-xl'>How would you rate your energy levels in the past two weeks?</p>
        </div>
        <div className="mt-12 md:mt-20 flex justify-center">
              <ul className="md:grid md:grid-rows-1 md:grid-cols-5 md:gap-x-20 grid grid-cols-3 gap-x-4 gap-y-4">
                <li onClick={() => setSelectedOption({...selectedOption, fourth:"1"})} className="border border-black px-4 py-2 rounded-md hover:bg-violet-400 hover:text-white hover:scale-110 transition duration-200 cursor-pointer text-black text-center mx-4">
                  1
                </li>
                <li onClick={() => setSelectedOption({...selectedOption, fourth:"2"})} className="border border-black px-4 py-2 rounded-md hover:bg-violet-400 hover:text-white hover:scale-110 transition duration-200 cursor-pointer text-black text-center mx-4">
                  2
                </li>
                <li onClick={() => setSelectedOption({...selectedOption, fourth:"3"})} className="border border-black px-4 py-2 rounded-md hover:bg-violet-400 hover:text-white hover:scale-110 transition duration-200 cursor-pointer text-black text-center mx-4">
                  3
                </li>
                <li onClick={() => setSelectedOption({...selectedOption, fourth:"4"})} className="border border-black px-4 py-2 rounded-md hover:bg-violet-400 hover:text-white hover:scale-110 transition duration-200 cursor-pointer text-black text-center mx-4 mt-6">
                  4
                </li>
                <li onClick={() => setSelectedOption({...selectedOption, fourth:"5"})} className="border border-black px-4 py-2 rounded-md hover:bg-violet-400 hover:text-white hover:scale-110 transition duration-200 cursor-pointer text-black text-center mx-4 mt-6">
                  5
                </li>
              </ul>
            </div>
    </div>
  )
}

export default Fourthques;