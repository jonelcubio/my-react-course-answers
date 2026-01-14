import sendMessage from "../chatbot-components/ChatMessages";
import {useState} from "react";
export default function ChatInput() {

  const [inputText, setInputText] = useState("");

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    console.log(inputText);
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
      />
      

      <button 
        className="chatbot-btn"
        onClick={sendMessage}
        >Send
      </button>

      
    </div>
  );
}