import React from "react";
import { useState } from "react";

const Firstques = () => {
  // const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <p className="text-center text-black text-base md:text-xl">
          Have you felt worried or nervous in the past week?
        </p>
        <div className="flex justify-center mt-10">
          <ul className="grid grid-rows-3 grid-flow-row gap-4">
            {/* <li className="border border-black px-4 py-2 rounded-md hover:bg-violet-400 hover:text-white hover:scale-110 transition duration-200 cursor-pointer text-black text-center">
              Yes
            </li>
            <li className="border border-black px-4 py-2 rounded-md hover:bg-violet-400 hover:text-white hover:scale-110 transition duration-200 cursor-pointer text-black text-center">
              No
            </li>
            <li className="border border-black px-4 py-2 rounded-md hover:bg-violet-400 hover:text-white hover:scale-110 transition duration-200 cursor-pointer text-black text-center">
              Maybe
            </li> */}
            <li>hi</li>
            <li>hi</li>
            <li>hi</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Firstques;
