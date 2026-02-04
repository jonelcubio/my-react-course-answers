import sendMessage from "./ChatMessages.js";
import React,{useState} from "react";

export default function ChatInput({chatMessages, setChatMessages}) {

  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    if (isLoading || inputText === '') {
      return;
    }

    setIsLoading(true);

    const newChatMessages = [
        ...chatMessages,
        {
          message: inputText,
          sender: "user",
          id: crypto.randomUUID() 
        }
       ]

      setChatMessages(newChatMessages);

       const response = await Chatbot.getResponseAsync(inputText);

       setChatMessages([ 
        ...newChatMessages,
        {
          message: response,
          sender: "robot",
          id: crypto.randomUUID() 
        }
       ]);

       setInputText('');
       setIsLoading(false); 
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    } else if (event.key === 'Escape') {
      setInputText('');
    }
  }

  return(

    <div className="chatbot-chatinput">
      <input type="text" 
      placeholder="Send a message to Chatbot" 
      className="chatbot-input" 
      onChange={saveInputText}
      onKeyDown={handleKeyDown}
      value={inputText}
      />
      
      <button 
        className="chatbot-btn"
        onClick={sendMessage}
        >Send
      </button>

      
    </div>
  );
}