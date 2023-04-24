import React from "react";
import { useState, useEffect } from "react";
import "../styles/homepage.module.css";
import ScrollToBottom from "react-scroll-to-bottom";

const ChatClient = ({ socket, currentUser, room }) => {
  const [currentMessage, setcurrentMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        currentUser: currentUser,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      // console.log(messageData)
      await socket.emit("send_message", messageData);
      setMessages((list) => [...list, messageData]);
      setcurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessages((list) => [...list, data]);
      console.log(data);
    });
  }, [socket]);

  return (
    <div>
      <div className="w-screen flex justify-center mx-auto text-xl font-semibold mt-4">
        <p>{room}</p>
      </div>
      <div className="mt-10">
        {/* <ScrollToBottom>
          {messages.map((messageContent) => {
            return (
              <div className="">
                <p
                  id={
                    currentUser === messageContent.currentUser ? "you" : "other"
                  }
                >
                  {messageContent.message}
                </p>
                <p id="time">{messageContent.time}</p>
                <p id="author">{messageContent.currentUser}</p>
              </div>
            );
          })}
        </ScrollToBottom> */}
        <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messages.map((messageContent) => {
            return (
              <div
                className="message"
                id={currentUser === messageContent.currentUser ? "you" : "other"}
              >
                <div>
                  <div className="message-content">
                    <p>{messageContent.message}</p>
                  </div>
                  <div className="message-meta">
                    <p id="time">{messageContent.time}</p>
                    <p id="author">{messageContent.currentUser}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
        <div className="w-screen">
          <div
            className="fixed
             inset-x-0
             bottom-0"
          >
            <input
              type="text"
              value={currentMessage}
              onChange={(event) => setcurrentMessage(event.target.value)}
              onKeyPress={(event) => {
                event.key === "Enter" && sendMessage();
              }}
              className="border border-black px-7 py-5 w-11/12"
            ></input>
            <button
              onClick={sendMessage}
              className="w-1/12 bg-indigo-500 py-6 text-white"
            >
              send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatClient;
