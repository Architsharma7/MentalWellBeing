import React from 'react'
import { useState } from 'react';
import { addDoc } from 'firebase/firestore';

const Writeblog = () => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [open, setOpen] = useState(false);

    const createPost = async() => {
        await addDoc(); 
    }

  return (
    <div className='w-screen'>
        <div className='flex flex-col justify-center mt-20'>
            <div className='w-screen justify-center mt-6 flex'>
                <textarea className='w-3/4 px-3 h-14 py-2 border border-indigo-400 rounded-md text-lg md:text-xl lg:text-2xl align-middle resize-y' placeholder='Title' value={title} onChange={(event) => setTitle(event.target.value)}></textarea>
            </div>
            <div className='w-screen justify-center flex mt-10'>
                <textarea className='w-3/4 px-5 h-96 py-3 border border-indigo-400 rounded-md resize-y' placeholder='start writing your blog here...' value={content} onChange={(event) => setContent(event.target.value)}></textarea>
            </div>
        </div>
        <div className='mt-6 flex justify-center mx-auto'>
            <button className='bg-indigo-400 py-2 px-10 rounded-md hover:scale-110 transition duration-150 text-center hover:bg-white hover:border hover:border-indigo-400 text-white hover:text-indigo-400'>Post</button>
        </div>
    </div>
  )
}

export default Writeblog;