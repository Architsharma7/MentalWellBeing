import React from "react";
import io from "socket.io-client";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import ChatClient from "../components/chat-client";

export const socket = io.connect("http://localhost:3001");

const Chat = () => {
  const auth = getAuth();

  const [currentUser, setCurrentUser] = useState();
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user.displayName);
    });
  }, [auth]);

  const [room, setroom] = useState("");

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  const anxietyroom = async () => {
    setroom("anxiety");
    console.log(currentUser);
    console.log(room);
    joinRoom(room);
  };
  const stressmroom = async () => {
    setroom("Stress Management");
    console.log(currentUser);
    console.log(room);
    joinRoom(room);
  };
  const stressrroom = async () => {
    setroom(" Stress Relief");
    console.log(currentUser);
    console.log(room);
    joinRoom(room);
  };
  const depressionroom = async () => {
    setroom("Depression");
    console.log(currentUser);
    console.log(room);
    joinRoom(room);
  };
  const examstressroom = async () => {
    setroom("Exam stress");
    console.log(currentUser);
    console.log(room);
    joinRoom(room);
  };
  const healthroom = async () => {
    setroom("Physical health");
    console.log(currentUser);
    console.log(room);
    joinRoom(room);
  };
  const psyhealthroom = async () => {
    setroom("Psychological health");
    console.log(currentUser);
    console.log(room);
    joinRoom(room);
  };

  return (
    <div>
      {!showChat ? (
        <div className="w-screen">
          <div className="w-screen flex flex-col justify-center mt-5 text-center">
            <p className="text-3xl font-semibold">Chat Rooms</p>
            <p className="mt-3">Join a chat room acoording to topic you want to talk about</p>
          </div>
          <div className="grid grid-flow-row grid-cols-3 gap-x-10 justify-center mx-20 mt-10 text-center gap-y-16">
            <button onClick={() => stressrroom()} className="px-10 py-5 bg-indigo-500 rounded-2xl text-white font-semibold text-2xl hover:scale-110 duration-300 hover:bg-white hover:text-indigo-500 hover:border hover:border-indigo-500">
              Stress Relief
            </button>
            <button onClick={() => stressmroom()}  className="px-10 py-5 bg-indigo-500 rounded-2xl text-white font-semibold text-2xl hover:scale-110 duration-300 hover:bg-white hover:text-indigo-500 hover:border hover:border-indigo-500">
              Stress Management
            </button>
            <button onClick={() => depressionroom()}  className="px-10 py-5 bg-indigo-500 rounded-2xl text-white font-semibold text-2xl hover:scale-110 duration-300 hover:bg-white hover:text-indigo-500 hover:border hover:border-indigo-500">
              Depression
            </button>
            <button onClick={() => anxietyroom()}  className="px-10 py-5 bg-indigo-500 rounded-2xl text-white font-semibold text-2xl hover:scale-110 duration-300 hover:bg-white hover:text-indigo-500 hover:border hover:border-indigo-500">
              Anxiety
            </button>
            <button onClick={() => examstressroom()}  className="px-10 py-5 bg-indigo-500 rounded-2xl text-white font-semibold text-2xl hover:scale-110 duration-300 hover:bg-white hover:text-indigo-500 hover:border hover:border-indigo-500">
              Exam stress
            </button>
            <button onClick={() => healthroom()}  className="px-10 py-5 bg-indigo-500 rounded-2xl text-white font-semibold text-2xl hover:scale-110 duration-300 hover:bg-white hover:text-indigo-500 hover:border hover:border-indigo-500">
              Physical health
            </button>
            <button onClick={() => psyhealthroom()}  className="px-10 py-5 bg-indigo-500 rounded-2xl text-white font-semibold text-2xl hover:scale-110 duration-300 hover:bg-white hover:text-indigo-500 hover:border hover:border-indigo-500">
              Psychological health
            </button>
          </div>
        </div>
      ) : (
        <ChatClient socket={socket} currentUser={currentUser} room={room} />
      )}
    </div>
  );
};

export default Chat;
