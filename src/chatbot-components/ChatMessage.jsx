import robot from "../assets/robot.png";
import user from "../assets/user.png";

export default function ChatMessage({message, sender}) { //<--- eto yung props

/*
  if (sender === 'robot') {
    return(
      <div className="chat-message">
        <img src={robot} alt="chat-message-ico" className="chat-message-ico" />
        {message}      
    </div>
    );
  }
*/

  return(
    <>
    <div className="chat-message">
        {sender === 'robot' && (
          <img src={robot} alt="chat-message-ico" className="chat-message-ico" />
          )}

        {message}

        { sender === 'user' && (
          <img src={user} alt="chat-message-ico" className="chat-message-ico" />
          )}
    </div>
    </>
  );
}