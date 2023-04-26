import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import styles from "../styles/progressbar.module.css";
import Image from "next/image";
import robotpic from "../public/robot.png";
import Firstques1 from "../questions/firstques1";
import Secondques from "../questions/secondques";
import Thirdques from "../questions/thirdques";
import Fourthques from "../questions/fourthques";
import Fifthques from "../questions/fifthques";
import Sixthques from "../questions/sixthques";
import Seventhques from "../questions/seventhques";

const Quiz = () => {
  const auth = getAuth();
  const [currentUser, setCurrentUser] = useState();
  const [page, setPage] = useState(0);
  const [selectedOption, setSelectedOption] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
    fifth: "",
    sixth: "",
    seventh: "",
  });

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
    });
  }, [auth]);

  const router = useRouter();
  const user = auth.currentUser;

  const PageDisplay = () => {
    if (page == 0) {
      return (
        <Firstques1
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      );
    } else if (page == 1) {
      return (
        <Secondques
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      );
    } else if (page == 2) {
      return (
        <Thirdques
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      );
    } else if (page == 3) {
      return (
        <Fourthques
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      );
    } else if (page == 4) {
      return (
        <Fifthques
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      );
    } else if (page == 5) {
      return (
        <Sixthques
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      );
    } else {
      return (
        <Seventhques
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      );
    }
  };

  const [apiOutput, setApiOutput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const callGenerateEndpoint = async () => {
    setIsGenerating(true);
    if(!selectedOption.first) return;
    
    console.log("Calling OpenAI...");
    const response = await fetch("/api/quizanswer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ selectedOption }),
    });

    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...", output.text);

    setApiOutput(`${output.text}`);
    setIsGenerating(false);
    console.log(selectedOption);
  };

  const hello = async() => {
    console.log(selectedOption)
  }

  return (
    <div className="w-screen flex flex-col justify-center">
      <div className="flex flex-col justify-center mx-2 text-center mt-10">
        <p className="md:text-4xl text-2xl text-black font-semibold">
          Welcome{" "}
          <span className="text-indigo-400 font-semibold">Archit Sharma</span>{" "}
        </p>
        <Image
          src={robotpic}
          alt="ai therapist"
          className="h-14 w-14 rounded-full mx-auto mt-5"
        ></Image>
        <p className="md:text-2xl text-lg mt-3 text-gray-600">
          I'm your AI therapist and i will give you suggestions based on the
          quiz below
        </p>
      </div>
      <div className="w-2/3 flex justify-center shadow-2xl md:mt-24 mt-16 mx-auto shadow-violet-200 bg-white mb-4">
        {!apiOutput ? 
          <div className="px-6 pt-4 pb-6">
            <div className="flex justify-center ">
              <div className={styles.progressbar}>
                <div
                  style={{
                    width:
                      page === 0
                        ? "14.28%"
                        : page == 1
                        ? "28.5%"
                        : page == 2
                        ? "42.8"
                        : page == 3
                        ? "57%"
                        : page == 4
                        ? "71.36%"
                        : page == 5
                        ? "85.64%"
                        : "100%",
                  }}
                ></div>
              </div>
            </div>
            <div className="md:mt-10 mt-7">
              <PageDisplay />
              <div className="mt-16 md:mt-24 flex justify-between">
                <button
                  className={`bg-violet-400 px-7 md:py-2 py-1 rounded-lg text-center text-white hover:scale-110 transition duration-200 ${
                    page == 0 ? "invisible" : "visible"
                  }`}
                  onClick={() => {
                    setPage((currPage) => currPage - 1);
                  }}
                >
                  prev
                </button>
                <button
                  className="bg-violet-400 px-7 md:py-2 py-1 rounded-lg text-center text-white hover:scale-110 transition duration-200"
                  onClick={() => {
                    if (page == 6) {
                      callGenerateEndpoint();
                    } else {
                      setPage((currPage) => currPage + 1);
                    }
                  }}
                >
                  {page == 6 ? "submit" : "next"}
                </button>
              </div>
            </div>
          </div>
          :
          <div className="px-6 pt-4 pb-6 flex justify-center">{apiOutput}</div>
        }
      </div>
    </div>
  );
};

export default Quiz;

// {currentUser ? user.displayName : "hello"}

{
  /* <div>
        <p className='text-xl'>hello</p>
      </div>
      <div className="custom-shape-divider-bottom-1672955593">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>  */
}
