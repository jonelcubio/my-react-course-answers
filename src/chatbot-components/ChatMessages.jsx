import React from "react";
import {useState} from "react";
import ChatMessage from "../chatbot-components/ChatMessage";
export default function ChatMessages() {

  // const {chatMessages, setChatMessages} = useState([]);

  const array = useState ([{
      message: "hello chatbot",
      sender: "user",
      id: "id1"
    }, {
      message: "How can I help you?",
      sender: "robot",
      id: "id2"
    },  {
      message: "Can you get today's date?",
      sender: "user",
      id: "id3"
    }, {
      message: "Today's date is: 1/6/2026",
      sender: "robot",
      id: "id4"
  }]);

  const chatMessages = array[0];
  const setChatMessages = array[1];


    function sendMessage() {
       setChatMessages([
        ...chatMessages,
        {
          message: "test",
          sender: "user",
          id: crypto.randomUUID() 
        }
       ]);

    }

  return(
    <>
     
     <button className="chatbot-btn meow" onClick={sendMessage}>Send a message</button>

    {chatMessages.map((chatMessage) => {
      return (
        <ChatMessage 
          message={chatMessage.message} 
          sender={chatMessage.sender}
          key={chatMessage.id} 
        />
      );
    })}
    </>
  );
}