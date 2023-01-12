import { createContext, useContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useRouter } from "next/router";
import { signOut } from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => {return useContext(AuthContext)};

export default function AuthContextProvider({children}){
    const [iscurrentUser, setCurrentUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);

    const router = useRouter();
    const user = auth.currentUser;

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setCurrentUser(user);
            console.log(user)
        } else {
        }
      });

      const signOutyou = () => {
        signOut(auth)
          .then(() => {
            router.push("/");
          })
          .catch((error) => {
            alert(error.message);
          });
      };

    function SignOutUser(user){
       signOutyou();
    }

    const signUp = (email,password,confirmPassword) => {
        if(password === confirmPassword){
        createUserWithEmailAndPassword(auth, email, password).then(async() =>
          await router.push("/quiz"),
        ).then(async() => setCurrentUser(iscurrentUser(user))).then(() => console.log(iscurrentUser)).catch((err) => alert(err.message));
        }else{
          alert("Passwords don't match");
        }
      };

    const value = {
        iscurrentUser,
        isAuth,
        signUp,
        SignOutUser
    }

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}