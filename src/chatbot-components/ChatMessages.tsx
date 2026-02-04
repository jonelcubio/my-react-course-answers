import React from "react";
import {useState} from "react";
import ChatMessage from "./ChatMessage.js";
export default function ChatMessages({chatMessages}) {

  return(
    <>
     <div className="chat-messages-con">
         {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage 
            message={chatMessage.message} 
            sender={chatMessage.sender}
            key={chatMessage.id} 
          />
          );
        })}
     </div>
  
    </>
  );
}