import React from "react";
import "../styles/homepage.module.css";

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
      desc: "",
    },
    {
      img: "",
      title: "hello",
      desc: "",
    },
  ];
  return (
    <div className="bg-violet-200 flex flex-col">
      <div className="mb-20">
        {/* heading for the project short description */}
        <div className="w-screen h-screen bg-indigo-500 flex items-center">
          <div className="w-1/2 float-left justify-start mx-10">
            <p className="text-white text-5xl">
              hello Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              odit voluptatum, eveniet minus sed dolorem corrupti deleniti unde
              enim, repellendus architecto quaerat hic reiciendis, quis nihil
              molestiae! Similique, incidunt consectetur?
            </p>
          </div>
          <div className="w-1/2 float-right justify-end mx-10">
            {/* svg goes here */}
          </div>
          {/* <div className='absolute w-full h-56 bottom-0' id='curve'></div> */}
        </div>
        {/* heading and desc ends here */}
        {/* About section starts here */}
        <div>
          <p className="text-sm flex justify-center mt-10">About</p>
          <div className=" mt-20">
            <div className="grid gap-x-6 gap-y-5 w-4/5 mx-auto grid-cols-3">
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
          <div className="flex justify-start mx-10 w-1/2 float-left border-2 border-indigo-600 p-4 rounded-lg">
            <img src="bgsquare.jpg" alt="" className="h-20 mr-4 rounded-full" />
            <p className="justify-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo magni
              totam molestiae illo non exercitationem deleniti impedit voluptas
              repudiandae? Exercitationem odit placeat mollitia accusamus est
              sint tempore hic cum voluptatem?
            </p>
          </div>
          <div className="flex justify-end mx-10 w-1/2 float-right mt-20 border-2 border-indigo-600 p-4 rounded-lg mb-20">
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
      <div className="bg-indigo-500 w-screen mb-20">
        <div className="mt-20 mx-20">
          <div className="flex flex-row justify-start w-2/3 float-left">
            <img src="worldmap2.png" alt="" className="w-4/5" />
          </div>
          <div className="flex justify-end w-1/3 float-right flex-row align-middle">
            <div className="flex flex-col">
              <p className="text-white justify-center float-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos aperiam aliquam sint nostrum itaque, cumque dolores
                natus, dolore deserunt repudiandae neque quas. Esse repellendus
                neque voluptatibus ratione! Sint, deleniti itaque.
              </p>
              <input type="search" className="px-4 py-2 mt-10" />
              <button className="mt-4 bg-blue-500 w-1/4 justify-center px-6 py-2 rounded-2xl text-center">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

// -skew-y-6 sm:-skew-y-3 2xl:transform-none
