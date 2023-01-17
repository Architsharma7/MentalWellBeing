import React from "react";
import styles from "../styles/homepage.module.css";
import Wave from "react-wavify";
import { useRouter } from "next/router";
import { useState , useEffect} from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const quiz = () => {

  const auth = getAuth();
  const [currentUser, setCurrentUser] = useState();

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

  const router = useRouter();

  const classes = `${styles.spacer}, ${styles.layer}`;
  return (
    <div className="">
      <div className="bg-indigo-500">
        <div>
          <p>hello</p>
        </div>
        <div>
          <p>hello</p>
          <Wave
            fill="#f79902"
            paused={false}
            options={{
              height: 10,
              amplitude: 50,
              speed: 0.15,
              points: 7,
            }}
          />
        </div>
        <div>
          <div>
            <button onClick={signOutUser}>sign out</button>
          </div>
          <div className={classes}></div>
          <div>
            <button onClick = {() => router.push("/blog")}>blog</button>
          </div>
          <div>
            <button onClick = {() => router.push("/writeblog")}>createblog</button>
          </div>
        </div>
        <div>
          <p>hello</p>
        </div>
      </div>
    </div>
  );
};

export default quiz;

{
  /* <div>
        <p className='text-xl'>hello</p>
      </div>
      <div className="custom-shape-divider-bottom-1672955593">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div> */
}
