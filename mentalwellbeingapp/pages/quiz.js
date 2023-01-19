import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getAuth,onAuthStateChanged} from "firebase/auth";

const Quiz = () => {
  const auth = getAuth();
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
    });
  }, [auth]);

  const router = useRouter();
  const user = auth.currentUser;

  return (
    <div className="w-screen flex flex-col justify-center">
      <div className="flex flex-col justify-center mx-2 text-center mt-10">
        <p className="md:text-4xl text-2xl text-black">Welcome <span className="text-indigo-400">{user.displayName}</span> </p>
        <p className="md:text-2xl text-lg mt-3 text-gray-600">please got through the quiz and get depression</p>
      </div>
      <div className="w-2/3 flex justify-center h-96 shadow-2xl mt-24 mx-auto shadow-violet-200">
        <div className="px-6 py-4">
          <div className="flex justify-center">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;

// {currentUser ? user.displayName : "hello"}

{
  /* <div>
        <p className='text-xl'>hello</p>
      </div>
      <div className="custom-shape-divider-bottom-1672955593">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>  */
}
