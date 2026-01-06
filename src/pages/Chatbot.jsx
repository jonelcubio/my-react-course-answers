import Beams from "../reactBits/Beams";
import ChatInput from "../chatbot-components/ChatInput";
import ChatMessage from "../chatbot-components/ChatMessage";
import robot from "../assets/robot.png";
import user from "../assets/user.png";
export default function Chatbot() {
  return(
    <>
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
        />``
      </div>


      <ChatInput />
      <ChatMessage message="hello chatbot" sender="user"/>
      <ChatMessage message="How can I help you?" sender="robot" />
      <ChatMessage message="Can you get today's date?" sender="user"/>
      <ChatMessage message="Today's date is: 1/6/2026" sender="robot" />
    </>
  );
}