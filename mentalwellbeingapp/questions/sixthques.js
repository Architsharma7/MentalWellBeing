import React from 'react'
import { useState } from "react";

const Sixthques = ({selectedOption, setSelectedOption}) => {
  // const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div>
        <div className='flex justify-center'>
            <p className='text-center text-black text-base md:text-xl'>Have you observed any memory loss in the past week?</p>
        </div>
        <div className="mt-8 md:mt-20 flex justify-center">
              <ul className="md:grid md:grid-rows-1 md:grid-cols-3 md:gap-x-20 grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-4">
                <li onClick={() => setSelectedOption({...selectedOption, sixth:"yes"})} className="border border-black px-4 py-2 rounded-md hover:bg-violet-400 hover:text-white hover:scale-110 transition duration-200 cursor-pointer text-black text-center mx-4">
                  Yes
                </li>
                <li onClick={() => setSelectedOption({...selectedOption, sixth:"no"})} className="border border-black px-4 py-2 rounded-md hover:bg-violet-400 hover:text-white hover:scale-110 transition duration-200 cursor-pointer text-black text-center mx-4">
                  No
                </li>
                <li onClick={() => setSelectedOption({...selectedOption, sixth:"maybe"})} className="border border-black px-4 py-2 rounded-md hover:bg-violet-400 hover:text-white hover:scale-110 transition duration-200 cursor-pointer text-black text-center mx-4">
                  Maybe
                </li>
              </ul>
            </div>
    </div>
  )
}

export default Sixthques;