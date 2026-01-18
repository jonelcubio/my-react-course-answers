import sendMessage from "../chatbot-components/ChatMessages";
import {useState} from "react";

export default function ChatInput({chatMessages, setChatMessages}) {

  const [inputText, setInputText] = useState("");

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {

    const newChatMessages = [
        ...chatMessages,
        {
          message: inputText,
          sender: "user",
          id: crypto.randomUUID() 
        }
       ]

      setChatMessages(newChatMessages);

       const response = Chatbot.getResponse(inputText);

       setChatMessages([ 
        ...newChatMessages,
        {
          message: response,
          sender: "robot",
          id: crypto.randomUUID() 
        }
       ]);

       setInputText('');
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
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