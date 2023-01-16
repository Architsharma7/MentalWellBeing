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
            Mentalwellbeing
          </span>
        </a>
        <div className="flex md:order-2">
          {!currentUser ? (
            <button className="text-white bg-blue-500 hover:bg-white hover:text-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 text-center mr-2 md:mr-0 hover:scale-110 transform transition duration-300">
              <a href="/signIn">
                <span className="mx-4">Log In</span>
              </a>
            </button>
          ) : (
            <button
              className="rounded-full inline-flex items-center bg-blue-500 h-12 w-12"
              onClick={() => setOpen(!open)}
              ref={buttonRef}
            >
              {/* user profile picture fetched from firebase */}
              <img src="" alt="" className="w-12" />
              {open && (
                <div
                  className="bg-white py-2 rounded-lg shadow-lg w-48 absolute right-12 top-16 mt-2"
                  ref={menuRef}
                >
                  <ul className="flex justify-center text-black flex-col">
                    <li
                      className="px-4 py-2 hover:bg-slate-200 justify-center align-middle"
                      onClick={() => router.push("/quiz")}
                    >
                      Dashboard
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
