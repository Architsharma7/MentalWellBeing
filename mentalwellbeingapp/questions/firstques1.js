import React from 'react'
import { useState } from "react";

const Firstques1 = ({selectedOption,setSelectedOption}) => {
  // const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div>
        <div className='flex justify-center'>
            <p className='text-center text-black text-base md:text-xl'>Have you felt worried or nervous in the past week?</p>
        </div>
        <div className="mt-8 md:mt-20 flex justify-center">
              <ul className="md:grid md:grid-rows-1 md:grid-cols-3 md:gap-x-10 grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-4">
                {/* <li className="border border-black px-4 py-2 rounded-md hover:bg-violet-400 hover:text-white hover:scale-110 transition duration-200 cursor-pointer text-black text-center">
                  Yes
                </li>
                <li className="border border-black px-4 py-2 rounded-md hover:bg-violet-400 hover:text-white hover:scale-110 transition duration-200 cursor-pointer text-black text-center">
                  No
                </li>
                <li className="border border-black px-4 py-2 rounded-md hover:bg-violet-400 hover:text-white hover:scale-110 transition duration-200 cursor-pointer text-black text-center">
                  Maybe
                </li> */}
                <li onClick={() => setSelectedOption({...selectedOption, first:"yes"})} className="border border-black px-4 py-2 rounded-md  hover:scale-110 transition  duration-200 cursor-pointer text-black text-center mx-4 focus:text-violet-400">yes</li>
                <li onClick={() => setSelectedOption({...selectedOption, first:"no"})} className="border border-black px-4 py-2 rounded-md hover:bg-violet-400 hover:text-white hover:scale-110 transition duration-200 cursor-pointer text-black text-center mx-4">no</li>
                <li onClick={() => setSelectedOption({...selectedOption, first:"maybe"})} className="border border-black px-4 py-2 rounded-md hover:bg-violet-400 hover:text-white hover:scale-110 transition duration-200 cursor-pointer text-black text-center mx-4">maybe</li>
              </ul>
            </div>
    </div>
    // <div>
        /* <div className='flex justify-center'>
            <p className='text-center text-black text-base md:text-xl'>How would you rate your sleep in the past two weeks?</p>
        </div>
        <div className="mt-12 md:mt-20 flex justify-center">
              <ul className="grid grid-rows-1 grid-cols-3 " >
                <li className="border border-black px-4 py-2 rounded-md hover:bg-violet-400 hover:text-white hover:scale-110 transition duration-200 cursor-pointer text-black text-center">
                  1
                </li>
                <li className="border border-black px-4 py-2 rounded-md hover:bg-violet-400 hover:text-white hover:scale-110 transition duration-200 cursor-pointer text-black text-center">
                  2
                </li>
                <li className="border border-black px-4 py-2 rounded-md hover:bg-violet-400 hover:text-white hover:scale-110 transition duration-200 cursor-pointer text-black text-center">
                  3
                </li> */
                /* <li className="border border-black px-4 py-2 rounded-md hover:bg-violet-400 hover:text-white hover:scale-110 transition duration-200 cursor-pointer text-black text-center" value={4}>
                  4
                </li>
                <li className="border border-black px-4 py-2 rounded-md hover:bg-violet-400 hover:text-white hover:scale-110 transition duration-200 cursor-pointer text-black text-center" value={5}>
                  5
                </li> */
                /* <li className="border border-black px-4 py-2 rounded-md hover:bg-violet-400 hover:text-white hover:scale-110 transition duration-200 cursor-pointer text-black text-center" value={5}>
                  5
                </li> */
    //           </ul>
    //         </div>
    // </div>
  )}
// md:grid md:grid-rows-5 md:grid-cols-1 md:gap-x-20 grid grid-cols-3 gap-x-4 gap-y-4

export default Firstques1;