import React from "react";
import { useRouter } from "next/router";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const router = useRouter();
  const auth = getAuth();
  const [currentUser, setCurrentUser] = useState();
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target !== menuRef.current && e.target !== buttonRef.current) {
        setOpen(false);
      }
    });
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
    });
  }, [auth]);

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <nav className=" bg-violet-100 px-2 sm:px-4 py-4 w-full z-20 top-0 left-0 border-b border-gray-200 rounded-md">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/" className="flex items-center ml-2 md:ml-0">
          <span className="self-center text-xl font-semibold whitespace-nowrap">
            Mentwell
          </span>
        </a>
        <div className="flex md:order-2">
          {!currentUser ? (
            <button className="bg-indigo-500 hover:bg-white hover:border hover:border-indigo-400 text-white hover:text-indigo-400 font-medium rounded-lg text-md px-5 py-2.5 text-center mr-2 md:mr-0 transform transition duration-300">
              <a href="/signIn">
                <span className="mx-4">Log In</span>
              </a>
            </button>
          ) : (
            <button
              className="rounded-full inline-flex items-center bg-indigo-500 h-11 w-11 py-2 z-10 px-3 text-white text-3xl"
              onClick={() => setOpen(!open)}
              ref={buttonRef}
            >
              {currentUser.displayName[0]}
            {/* <FaRegUserCircle className=""/> */}
              {/* user profile picture fetched from firebase */}
              {open && (
                <div
                  className="bg-white py-2 rounded-lg shadow-lg w-48 absolute right-12 top-16 mt-1 text-base"
                  ref={menuRef}
                >
                  <ul className="flex justify-center text-black flex-col">
                    <li
                      className="px-4 py-2 hover:bg-slate-200 justify-center align-middle"
                      onClick={() => router.push("/quiz")}
                    >
                      Quiz
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-slate-200 justify-center align-middle"
                      onClick={() => router.push("/blogs")}
                    >
                      Blogs
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-slate-200 justify-center align-middle"
                      onClick={() => router.push("/chat")}
                    >
                      Chat
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-slate-200"
                      onClick={() => signOutUser()}
                    >
                      Sign Out
                    </li>
                  </ul>
                </div>
              )}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
