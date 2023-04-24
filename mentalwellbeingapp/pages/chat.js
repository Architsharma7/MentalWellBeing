import React from "react";
import io from "socket.io-client";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import ChatClient from "../components/chat-client";

export const socket = io.connect("http://localhost:3001");

const Chat = () => {

  const auth = getAuth();

  const [currentUser, setCurrentUser] = useState();
  const [showChat, setShowChat] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user.displayName);
    });
  }, [auth]);

  const [room, setroom] = useState("");

  const joinRoom = () => {
    if(room !== ""){
    socket.emit("join_room", room);
    setShowChat(true)
    }
  };

  const anxietyroom = async() => {
    setroom("anxiety");
    console.log(currentUser)
    console.log(room)
    joinRoom(room)
  };

  return (
    <div>
      {!showChat ?
      <button onClick={anxietyroom}>Join stressroom</button>
      :
      <ChatClient socket={socket} currentUser={currentUser} room={room}/>
}
    </div>
  );
};

export default Chat;