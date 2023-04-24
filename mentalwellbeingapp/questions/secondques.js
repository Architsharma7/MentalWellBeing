import React from "react";
import { useState } from "react";

const Secondques = ({selectedOption,setSelectedOption}) => {
  // const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div className="flex flex-row">
        <div className="mt-10">
            <ul className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-5">
              <li className="text-blue-500 text-3xl">helli</li>
              <li className="text-blue-500 text-3xl">hello</li>
              <li className="text-blue-500 text-3xl">hello</li>
              <li className="text-blue-500 text-3xl">hello</li>
              <li className="text-blue-500 text-3xl">hello</li>
            </ul>
        </div>
      </div>
  );
};

export default Secondques;
// How would you rate your mood in the past two weeks?