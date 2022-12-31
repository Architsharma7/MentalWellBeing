import React from "react";
import "../styles/homepage.module.css";

const Homepage = () => {
  return (
    <div className="bg-violet-200 flex flex-col">
      {/* heading for the project short description */}
      <div className="w-screen h-screen bg-indigo-500 flex items-center">
        <div className="w-1/2 float-left justify-start mx-10">
          <p className="text-white text-5xl">hello Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut odit voluptatum, eveniet minus sed dolorem corrupti deleniti unde enim, repellendus architecto quaerat hic reiciendis, quis nihil molestiae! Similique, incidunt consectetur?</p>
        </div>
        <div className="w-1/2 float-right justify-end mx-10">
          {/* svg goes here */}
        </div>
        {/* <div className='absolute w-full h-56 bottom-0' id='curve'></div> */}
      </div>
      {/* heading and desc ends here */}
      {/* About section starts here */}
      <div>
        <p className="text-sm flex justify-center mt-10">About</p>
        <div className="w-screen">
          
        </div>
        <div>

        </div>
      </div>
    </div>
  );
};

export default Homepage;

// -skew-y-6 sm:-skew-y-3 2xl:transform-none
