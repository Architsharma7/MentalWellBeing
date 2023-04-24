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
      <ScrollToBottom>
        {messages.map((messageContent) => {
          return (
            <div>
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
      </ScrollToBottom>
      <input
        type="text"
        value={currentMessage}
        onChange={(event) => setcurrentMessage(event.target.value)}
        onKeyPress={(event) => {
          event.key === "Enter" && sendMessage();
        }}
        className="border border-black"
      ></input>
      <button onClick={sendMessage}>send</button>
    </div>
  );
};

export default ChatClient;
