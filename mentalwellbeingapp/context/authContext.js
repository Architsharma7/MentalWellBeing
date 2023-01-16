import { useContext, useState, useEffect, useRef, createContext } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useRouter } from "next/router";
import { signOut } from "firebase/auth";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { publicPaths } from "../routes/route";

const AuthContext = createContext();

export const useAuth = () => {return useContext(AuthContext)};

const googleProvider = new GoogleAuthProvider();

export default function AuthContextProvider({children}){
    const [currentUser, setCurrentUser] = useState(null);
    const [authorized, setAuthorized] = useState(false);
    const router = useRouter();
    const user = auth.currentUser;

    const signUp = (email, password, confirmPassword) => {
      if (password === confirmPassword) {
        createUserWithEmailAndPassword(auth, email, password)
          .then(async () => {
            await addNewUserData();
            router.push("/quiz");
          })
          .catch((err) => alert(err.message));
      } else {
        alert("Passwords don't match");
      }
    };
  
    const LogIn = (loginEmail, loginPassword) => {
      signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        .then(() => {
          router.push("/quiz");
        })
        .catch((err) => alert(err.message));
    };
  
    const LoginWithGoogle = () => {
      signInWithPopup(auth, googleProvider)
        .then(async () => {
          router.push("/quiz");
        })
        .catch((err) => alert(err.message));
    };
  
    const SignUpWithGoogle = () => {
      signInWithPopup(auth, googleProvider)
        .then(async () => {
          await addNewUserData();
          router.push("/quiz");
        })
        .catch((err) => alert(err.message));
    };
  
    const SignOut = () => {
      signOut(auth)
        .then(() => router.push("/"))
        .catch((err) => alert(err.message));
    };

    useEffect(() => {
      const unscubscribe = onAuthStateChanged(auth, async (user) => {
        setCurrentUser(user);
      });
      return unscubscribe;
    }, []);

    useEffect(() => {
      const authCheck = () => {
        if (!user && !publicPaths.includes(router.asPath.split("?")[0])) {
          setAuthorized(false);
          // dispatch(setRedirectLink({ goto: router.asPath }));
          void router.push({
            pathname: "/signIn",
          });
        } else {
          setAuthorized(true);
        }
      };
  
      authCheck();
  
      const preventAccess = () => setAuthorized(false);
  
      router.events.on("routeChangeStart", preventAccess);
      router.events.on("routeChangeComplete", authCheck);
  
      return () => {
        router.events.off("routeChangeStart", preventAccess);
        router.events.off("routeChangeComplete", authCheck);
      };
    }, [router, router.events, currentUser]);

    const value = {
      currentUser,
      LogIn,
      LoginWithGoogle,
      SignOut,
      signUp,
      SignUpWithGoogle,
    }

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}