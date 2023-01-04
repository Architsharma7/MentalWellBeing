import React, {useState} from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import {app} from "../firebase/firebase-config";

const SignUp = () => {

  const auth = getAuth();

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signUp = () => {
    if(password === confirmPassword){
    createUserWithEmailAndPassword(auth, email, password).then(() =>
      router.push("/quiz")
    ).catch((err) => alert(err.message));
    }else{
      alert("Passwords don't match");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center my-auto h-screen md:bg-bgSquare lg:bg-bgSquare bg-no-repeat bg-cover bg-center bg-fixed">
      <div className="bg-white shadow rounded lg:w-1/3 md:w-1/2 w-full p-10">
        <p
          className="text-2xl font-extrabold leading-6 text-gray-800"
        >
          Create Your Account
        </p>
        <p className="text-sm mt-4 font-medium leading-none text-gray-500">
          Already have an account? {" "}
          <span
            className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer"
          >
            <a href="/signIn">Login here</a>  
          </span>
        </p>
        <div className='mt-6'>
          <lable className="text-sm font-medium leading-none text-gray-800">
            Email
          </lable>
          <input
            type="email"
            className="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
            value={email}
            onChange = {(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mt-6  w-full">
          <lable className="text-sm font-medium leading-none text-gray-800">
            Password
          </lable>
          <div className="relative flex items-center justify-center">
            <input
              type="password"
              className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              value={password}
              onChange = {(event) => setPassword(event.target.value)}
            />
          </div>
        </div>
        <div className="mt-6  w-full">
          <lable className="text-sm font-medium leading-none text-gray-800">
            Confirm Password
          </lable>
          <div className="relative flex items-center justify-center">
            <input
              type="password"
              className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </div>
        </div>
        <div className="mt-8">
          <button
            className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
            onClick={signUp}
          >
            Create my account
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignUp;