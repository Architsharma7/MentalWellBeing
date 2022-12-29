import React from "react";

const SingIn = () => {
  return (
    <div>
      <div className="h-screen w-screen flex">
        <div className="h-4/5 w-1/2 border border-solid border-black flex-col justify-center align-middle shadow-md mx-auto my-auto">
          <div className="flex justify-center mt-5">
            <p className="text-4xl">Sign In</p>
          </div>
          <div className="flex justify-start mt-6">
            <form>
                <label className="text-xl mt-5">Email</label>
                <input type="email" placeholder="Enter your email" className="border border-black w-full py-1.5"/>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingIn;
