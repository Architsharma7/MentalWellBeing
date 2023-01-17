import React from "react";
import { useState, useEffect } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { GrAddCircle } from "react-icons/gr";
import { BiImageAdd } from "react-icons/bi";
import { BsBookmarkPlus } from "react-icons/bs";
import { auth, db } from "../firebase/firebaseConfig";
import { useRouter } from "next/router";
import { storage } from "../firebase/firebaseConfig";
import { ref, uploadBytes } from "firebase/storage";
import {v4} from "uuid"

const Writeblog = () => {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [open, setOpen] = useState(false);
  const [imageUpload, setImageUpload] = useState(null);

//   const menuRef = useRef();
//   const buttonRef = useRef();

  const router = useRouter();

  const postCollectionRef = collection(db, "blogs");

  const createPost = async () => {
    await addDoc(postCollectionRef, {
      title,
      content,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
      createdAt : serverTimestamp(),
    });
    router.push("/blog");
  };

  const addImage = () => {
    if(imageUpload == null) return;
    const imageRef = ref(storage, `bannerImage/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then(() => {
        alert("image uploaded")
    })
  }


  // useEffect(() => {
  //     window.addEventListener("click", (e) => {
  //       if (e.target !== menuRef.current && e.target !== buttonRef.current) {
  //         setOpen(false);
  //       }
  //     });
  //   }, []);

  return (
    <div className="w-screen">
      <div className="flex justify-center">
        <div className="w-3/4 flex mt-20 justify-start">
          <button
            className="rounded-full items-center"
            onClick={() => setOpen(!open)}
          >
            <GrAddCircle className="w-7 h-7" />
          </button>
          {open && (
            <span className="ml-5">
              <ul className="text-black flex flex-row align-baseline">
                <li className="mx-2">
                   <span className="relative flex"> <BiImageAdd className="w-7 h-7 cursor-pointer"/><input className="absolute w-7 h-7 z-0" type="file" accept="image/*" onChange={(event) => {setImageUpload(event.target.files[0])}}></input></span>
                </li>
                <li className="mx-2">
                  <BsBookmarkPlus className="w-5 h-7 cursor-pointer" />
                </li>
              </ul>
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="w-screen justify-center mt-6 flex">
          <textarea
            className="w-3/4 px-3 h-14 py-2 border border-indigo-400 rounded-md text-lg md:text-xl lg:text-2xl align-middle resize-y"
            placeholder="Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          ></textarea>
        </div>
        <div className="w-screen justify-center flex mt-10">
          <textarea
            className="w-3/4 px-5 h-96 py-3 border border-indigo-400 rounded-md resize-y"
            placeholder="start writing your blog here..."
            value={content}
            onChange={(event) => setContent(event.target.value)}
          ></textarea>
        </div>
      </div>
      <div className="mt-6 flex justify-center mx-auto">
        <button className="bg-indigo-400 py-2 px-10 rounded-md hover:scale-110 transition duration-150 text-center hover:bg-white hover:border hover:border-indigo-400 text-white hover:text-indigo-400" onClick={() => {createPost(); addImage();}}>
          Publish
        </button>
      </div>    
    </div>
  );
};

export default Writeblog;
