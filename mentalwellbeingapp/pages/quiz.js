import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import styles from "../styles/progressbar.module.css";
import Image from "next/image";
import robotpic from "../public/robot.png";
import Firstques from "../questions/firstques";
import Secondques from "../questions/secondques";
import Thirdques from "../questions/thirdques";
import Fourthques from "../questions/fourthques";
import Fifthques from "../questions/fifthques";
import Sixthques from "../questions/sixthques";
import Seventhques from "../questions/seventhques";

const Quiz = () => {
  const auth = getAuth();
  const [currentUser, setCurrentUser] = useState();
  const [page, setPage] = useState(0);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
    });
  }, [auth]);

  const router = useRouter();
  const user = auth.currentUser;

  const PageDisplay = () => {
    if (page == 0) {
      return <Firstques />;
    } else if (page == 1) {
      return <Secondques />;
    } else if (page == 2) {
      return <Thirdques />;
    } else if (page == 3) {
      return <Fourthques />;
    } else if (page == 4) {
      return <Fifthques />;
    } else if (page == 5) {
      return <Sixthques />;
    } else {
      return <Seventhques />;
    }
  };

  return (
    <div className="w-screen flex flex-col justify-center">
      <div className="flex flex-col justify-center mx-2 text-center mt-10">
        <p className="md:text-4xl text-2xl text-black font-semibold">
          Welcome{" "}
          <span className="text-indigo-400 font-semibold">Archit Sharma</span>{" "}
        </p>
        <Image
          src={robotpic}
          alt="ai therapist"
          className="h-14 w-14 rounded-full mx-auto mt-5"
        ></Image>
        <p className="md:text-2xl text-lg mt-3 text-gray-600">
          I'm your AI therapist and i will give you suggestions based on the
          quiz below
        </p>
      </div>
      <div className="w-2/3 flex justify-center h-96 shadow-2xl md:mt-24 mt-16 mx-auto shadow-violet-200 bg-white mb-4">
        <div className="px-6 py-4">
          <div className="flex justify-center ">
            <div className={styles.progressbar}>
              <div
                style={{
                  width:
                    page === 0
                      ? "14.28%"
                      : page == 1
                      ? "28.5%"
                      : page == 2
                      ? "42.8"
                      : page == 3
                      ? "57%"
                      : page == 4
                      ? "71.36%"
                      : page == 5
                      ? "85.64%"
                      : "100%",
                }}
              ></div>
            </div>
          </div>
          <div className="md:mt-10 mt-7">
            <PageDisplay />
            <div className="mt-12 md:mt-20 flex justify-center">
              <ul className="md:grid md:grid-rows-1 md:grid-cols-5 md:gap-x-20 grid grid-cols-3 gap-x-4 gap-y-4 ">
                <li className="border border-black px-4 py-2 rounded-md hover:bg-violet-400 hover:text-white hover:scale-110 transition duration-200 cursor-pointer text-black text-center">
                  1
                </li>
                <li className="border border-black px-4 py-2 rounded-md hover:bg-violet-400 hover:text-white hover:scale-110 transition duration-200 cursor-pointer text-black text-center">
                  2
                </li>
                <li className="border border-black px-4 py-2 rounded-md hover:bg-violet-400 hover:text-white hover:scale-110 transition duration-200 cursor-pointer text-black text-center">
                  3
                </li>
                <li className="border border-black px-4 py-2 rounded-md hover:bg-violet-400 hover:text-white hover:scale-110 transition duration-200 cursor-pointer text-black text-center">
                  4
                </li>
                <li className="border border-black px-4 py-2 rounded-md hover:bg-violet-400 hover:text-white hover:scale-110 transition duration-200 cursor-pointer text-black text-center">
                  5
                </li>
              </ul>
            </div>
            <div className="mt-16 md:mt-24 flex justify-between">
              <button
                className={`bg-violet-400 px-7 md:py-2 py-1 rounded-lg text-center text-white hover:scale-110 transition duration-200 ${page==0 ? "invisible" : "visible"}`}
                onClick={() => {
                  setPage((currPage) => currPage - 1);
                }}
              >
                prev
              </button>
              <button
                className="bg-violet-400 px-7 md:py-2 py-1 rounded-lg text-center text-white hover:scale-110 transition duration-200"
                onClick={() => {
                  setPage((currPage) => currPage + 1);
                }}
              >
                { page == 6 ? "submit" : "next"}
              </button>
            </div>
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
