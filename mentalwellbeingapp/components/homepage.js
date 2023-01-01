import React from "react";
import "../styles/homepage.module.css";
import { useState } from "react";

const Homepage = () => {
  const cards = [
    {
      img: "",
      title: "hello",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus laboriosam velit itaque molestiae, distinctio odit adipisci aspernatur dolorem. Sit id dolorum ratione nulla tempora ea nam exercitationem alias repudiandae beatae?",
    },
    {
      img: "",
      title: "hello",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel temporibus impedit minima dolores nihil, blanditiis asperiores debitis ad, ratione repudiandae recusandae doloremque nesciunt vitae atque iure. Hic debitis cupiditate atque?",
    },
    {
      img: "",
      title: "hello",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolore nisi amet quam! Veniam eum omnis animi placeat, illo fuga neque quaerat nobis molestias. Nam voluptate dolorem unde? Sequi, eum.",
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
    <div className="bg-violet-200 flex flex-col">
      <div className="mb-20">
        {/* heading for the project short description */}
        <div className="w-screen md:h-screen lg:h-screen xl:h-screen bg-indigo-500 flex items-center h-screen">
          <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 md:float-left lg:float-left xl:float-left md:justify-start lg:justify-start xl:justify-start justify-center mx-10 mt-10 md:mt-0 lg:mt-0 xl:mt-0 mb-20 md:mb-0 lg:mb-0 xl:mb-0">
            <p className="text-white text-4xl md:text-5xl lg:text-5xl xl:text-5xl text-center md:text-left lg:text-left xl:text-left">
              hello Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              odit voluptatum, eveniet minus sed dolorem corrupti deleniti unde
              enim, repellendus architecto quaerat hic reiciendis, quis nihil
              molestiae! Similique, incidunt consectetur?
            </p>
          </div>
          <div className="md:w-1/2 lg:w-/2 xl:w-1/2 md:float-right lg:float-right xl:float-right md:justify-end lg:justify-end xl:justify-end md:mx-10 lg:mx-10 xl:mx-10 hidden">
            {/* svg goes here */}
          </div>
          {/* <div className='absolute w-full h-56 bottom-0' id='curve'></div> */}
        </div>
        {/* heading and desc ends here */}
        {/* About section starts here */}
        <div>
          <p className="text-sm flex justify-center mt-10">About</p>
          <div className=" mt-20">
            <div className="grid gap-x-6 gap-y-10 w-4/5 mx-auto grid-rows-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
              {cards.map((items, key) => {
                return (
                  <div
                    className="w-full rounded-lg shadow-md bg-white"
                    key={key}
                  >
                    <img
                      className="object-cover w-full h-36 mt-6"
                      alt="just a pic"
                      src={items.img}
                    />
                    <div className="p-4">
                      <h4 className="text-3xl font font-semibold text-white font-Roboto leading-normal tracking-normal">
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
      <div className="bg-white w-screen">
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
      </div>
      <div className="bg-indigo-500 w-screen">
        <div className="mt-20 mx-20">
          <div className="md:flex lg:flex xl:flex flex-row md:justify-start lg:justify-start xl:justify-start md:w-2/3 lg:w-2/3 xl:w-2/3 md:float-left lg:float-left xl:float-left hidden md:mb-24 lg:mb-24 xl:mb-24">
            <img src="worldmap2.png" alt="" className="w-4/5" />
          </div>
          <div className="flex md:justify-end lg:justify-end xl:justify-end md:w-1/3 lg:w-1/3 xl:w-1/3 md:float-right lg:float-right xl:float-right justify-center flex-row align-middle mb-20">
            <div className="flex flex-col">
              <p className="text-white justify-center md:float-left lg:float-left xl:float-left text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos aperiam aliquam sint nostrum itaque, cumque dolores
                natus, dolore deserunt repudiandae neque quas. Esse repellendus
                neque voluptatibus ratione! Sint, deleniti itaque.
              </p>
              <input
                type="search"
                className="px-4 py-2 mt-10"
                value={userInput}
                onChange={onUserChangedText}
              />
              <div className="flex justify-center">
              <button
                className="mt-4 bg-blue-500 flex justify-center px-12 py-2 rounded-2xl text-white w-20"
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
