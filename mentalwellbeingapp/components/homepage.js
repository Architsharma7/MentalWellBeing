import React from "react";
import { useState } from "react";
import { useAuth } from "../context/authContext";
import Image from "next/image";
import titlepic from "../public/titlepic.png";
import quiz from "../public/quiz2.png"

const Homepage = () => {
  const { currentUser } = useAuth();
  const cards = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOGOwKKcixa5Qbn-r2SgeauvUJl3xYtAKamg&usqp=CAU",
      title: `Take a quiz`,
      desc: `Take an AI based quiz that will ask you only 7 easy questions and ananlyze your mental health and will give suggestions to improve it. The AI is based on GPT-3.5 and provide the most accurate results and suggestions. `,
    },
    {
      img: "https://static.vecteezy.com/system/resources/previews/005/337/802/original/icon-symbol-chat-outline-illustration-free-vector.jpg",
      title: "Chat with people",
      desc: "Chat with like minded people about your mental health or related issues in a CHAT ROOM according to your choice. Currently we have 7 rooms for different mental health related issues in which people can openly share their experience or advice someone.",
    },
    {
      img: "https://as2.ftcdn.net/v2/jpg/02/44/68/97/1000_F_244689725_wCaHdOOJohF5fDtXvhj4Hid1JvZYqwJc.jpg",
      title: "Read and write blogs",
      desc: "Got some experiences you want to share with the world about mental health awareness? Write a blog about it and publish it here. You can also read different blogs on our webapp.",
    },
  ];
  const images = [
    {
      image: "",
    },
    {
      image: "",
    },
    {
      image: "",
    },
  ];

  const [userInput, setUserInput] = useState("");

  const [apiOutput, setApiOutput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const callGenerateEndpoint = async () => {
    setIsGenerating(true);

    console.log("Calling OpenAI...");
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userInput }),
    });

    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...", output.text);

    setApiOutput(`${output.text}`);
    setIsGenerating(false);
  };

  const onUserChangedText = (event) => {
    console.log(event.target.value);
    setUserInput(event.target.value);
  };

  return (
    <div className="bg-violet-100 flex flex-col">
      <div className="mb-20">
        {/* heading for the project short description */}
        <div className="w-screen md:mt-12 lg:mt-16 mt-10 bg-violet-100 flex items-center flex-col">
          {/* <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 md:float-left lg:float-left xl:float-left md:justify-start lg:justify-start xl:justify-start justify-center mx-10 mt-10 md:mt-0 lg:mt-0 xl:mt-0 mb-20 md:mb-0 lg:mb-0 xl:mb-0"> */}
          <div className="flex flex-col justify-center align-middle w-screen mx-4">
            <p className="text-black text-4xl md:text-6xl lg:text-6xl xl:text-6xl text-center font-bold leading-relaxed">
              The one stop solution for the well-being of your
            </p>
            <p className="text-indigo-600 text-4xl md:text-6xl lg:text-6xl xl:text-6xl text-center font-bold leading-9">
              mental health
            </p>
            <p className="text-gray-900 text-2xl text-center font-normal font-sans leading-relaxed md:mx-16 mx-7 mt-8">
              We provide an innovative AI based solution with a unique p2p chat and blog feature to improve the mental health of a user
            </p>
          </div>
          <div className="flex align-middle mt-10 w-screen mx-auto justify-center">
            <div className="flex w-3/5 float-none">
            <Image
              src={titlepic}
              alt=""
              className="w-full"
              priority={true}
              height="600px"
              width="600px"
            />
            </div>
            {/* <div className="w-1/5 float-left justify-start">
            <div className={styles.ball}></div>
            </div>
            <div className="w-1/5 float-right justify-end">
            <div className={styles.ball}></div>
            </div> */}
            {/*  */}
          </div>
        </div>
        {/* <div className='absolute w-full h-56 bottom-0' id='curve'></div> */}
        {/* </div> */}
        {/* <div className="rotate-180 -mt-12">
          <Wave
            fill="#5c6bc0"
            paused={true}
            options={{
              height: 30,
              amplitude: 40,
              speed: 0.15,
              points: 4,
            }}
          />
          <Wave
            fill="#536dfe"
            paused={true}
            options={{
              height: 30,
              amplitude: 40,
              speed: 0.15,
              points: 4,
            }}
            className= "-mt-16"
          />
        </div>
        <div className="rotate-180 -mt-12">
        
        </div> */}

        {/* heading and desc ends here */}
        {/* About section starts here */}
        <div>
          <p className="text-6xl flex justify-center md:mt-28 mt-12 w-4/5 mx-auto text-center">
            We provide all solutions for your mental health that are potentially the best you can ask for. 
          </p>
          <div className="mt-24">
            <div className="grid gap-x-12 gap-y-10 w-4/5 mx-auto grid-rows-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
              {cards.map((items, key) => {
                return (
                  <div
                    className="w-full rounded-lg bg-violet-100 hover:scale-105 transform transition duration-300"
                    key={key}
                  >
                    <img
                      className="object-fill w-full h-60 rounded-md mt-6 "
                      alt="just a pic"
                      src={items.img}
                    />
                    <div className="p-4">
                      <h4 className="text-3xl font font-semibold text-black font-Roboto leading-normal tracking-normal">
                        {items.title}
                      </h4>
                      <p className="mb-2 mt-3 text-gray-400 tracking-wide leading-normal font-semibold text-md">
                        {items.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center mt-20 mx-auto flex-col align-middle">
        <div className={styles.proton}>
          <div className={styles.electron}></div>
        </div>
      </div> */}
      {/* <div className="bg-violet-100 w-screen">
        <div className="mt-20">
          <div className="flex md:justify-start lg:justify-start xl:justify-start justify-center mx-10 md:w-1/2 lg:w-1/2 xl:w-1/2 md:float-left lg:float-left xl:float-left border-2 border-indigo-600 p-4 rounded-lg">
            <img src="bgsquare.jpg" alt="" className="h-20 mr-4 rounded-full" />
            <p className="justify-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo magni
              totam molestiae illo non exercitationem deleniti impedit voluptas
              repudiandae? Exercitationem odit placeat mollitia accusamus est
              sint tempore hic cum voluptatem?
            </p>
          </div>
          <div className="flex md:justify-end lg:justify-end xl:justify-end justify-center mx-10 md:w-1/2 lg:w-1/2 xl:w-1/2 md:float-right lg:float-right xl:float-right border-2 border-indigo-600 p-4 rounded-lg mb-20 mt-20">
            <img src="bgsquare.jpg" alt="" className="h-20 mr-4 rounded-full" />
            <p className="justify-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo magni
              totam molestiae illo non exercitationem deleniti impedit voluptas
              repudiandae? Exercitationem odit placeat mollitia accusamus est
              sint tempore hic cum voluptatem?
            </p>
          </div>
        </div>
      </div> */}
      <div className="bg-indigo-500 w-screen rounded-t-3xl">
        <div className="mt-20 mx-20">
          <div className="md:flex lg:flex xl:flex flex-row md:justify-start lg:justify-start xl:justify-start md:w-2/3 lg:w-2/3 xl:w-2/3 md:float-left lg:float-left xl:float-left hidden md:mb-24 lg:mb-24 xl:mb-24">
            <img src="worldmap2.png" alt="" className="w-4/5" />
          </div>
          <div className="flex md:justify-end lg:justify-end xl:justify-end md:w-1/3 lg:w-1/3 xl:w-1/3 md:float-right lg:float-right xl:float-right justify-center flex-row align-middle mb-20">
            <div className="flex flex-col">
              <p className="text-white justify-center md:float-left lg:float-left xl:float-left text-center">
                Got any mental health issue and don't know who to call? Just type in the city or country you live in, we will connect you with the right contact.
              </p>
              <input
                type="search"
                className="px-4 py-2 mt-10"
                value={userInput}
                onChange={onUserChangedText}
              />
              <div className="flex justify-center">
                <button
                  className="mt-4 bg-violet-400 flex justify-center px-12 py-2 rounded-2xl text-white w-20"
                  onClick={callGenerateEndpoint}
                >
                  {isGenerating ? "Loading..." : "Search"}
                </button>
              </div>
              {apiOutput && (
                <div className="mt-6 text-white justify-center">
                  <p className="text-md">{apiOutput}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

// -skew-y-6 sm:-skew-y-3 2xl:transform-none
