import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useRouter } from "next/router";

const Blogs = () => {
  const [blogList, setBlogList] = useState([]);
  const postCollectionRef = collection(db, "blogs");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      // console.log(data)
      setBlogList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  const router = useRouter()

  return (
    <div>
      <div className="w-screen flex justify-center mt-5">
        <p className="text-3xl font-semibold">Blogs</p>
      </div>
      <div className="mt-10 mb-10">
        <div className="w-screen flex">
          <div className="w-2/3 justify-start">
            {blogList.map((posts) => {
              return (
                <div className="flex text-center flex-col justify-center items-center border border-black ml-20 mt-4 rounded-2xl px-10 py-3">
                  <div className="">
                    <p className="text-2xl font-semibold">{posts.title}</p>
                    <p className="text-lg mt-5">{posts.content}</p>
                    <p className="text-sm mt-4 font-semibold">{posts.author.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-1/3 justify-end mt-4">
            <div className="bg-violet-100 mx-10 px-3 py-3 rounded-2xl text-center flex flex-col justify-center">
              <p className="text-xl font-semibold">Want to write something about Mental health or share your experience?</p>
              <button onClick={() => router.push("/writeblog")} className="mt-7 mb-3 bg-white text-indigo-500 border border-indigo-500 px-4 py-2 rounded-xl mx-auto">Write A Blog</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

{
  /* <p>{posts.title}</p>
          <p>{posts.content}</p>
          <p>{posts.author.name}</p> */
}

{
  /* <p>{posts.createdAt.seconds}</p> */
}
