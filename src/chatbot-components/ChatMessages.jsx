import React from "react";
import {useState} from "react";
import ChatMessage from "../chatbot-components/ChatMessage";
export default function ChatMessages({chatMessages}) {

  return(
    <>
     
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