import {useState} from "react";
import Beams from "../reactBits/Beams";
import ChatInput from "../chatbot-components/ChatInput";
import ChatMessage from "../chatbot-components/ChatMessage";
import robot from "../assets/robot.png";
import user from "../assets/user.png";
import ChatMessages from "../chatbot-components/ChatMessages.jsx";
export default function Chatbot() {

    const [chatMessages, setChatMessages] = useState([{
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

  return(
    <>
    <div className="chatbot-main">
      <div className="hero-bg-style" style={{ position: 'absolute' }}>
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={0}
        />
      </div>


      <ChatInput 
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
      <ChatMessages 
        chatMessages={chatMessages}
      />
      
    </div>
      
        
      
    </>
  );
}