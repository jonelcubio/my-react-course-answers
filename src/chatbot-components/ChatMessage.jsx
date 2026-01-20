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
    <div className={sender === 'user' ? 'chat-message-user' : 'chat-message-robot'}>
        {sender === 'robot' && (
          <img src={robot} alt="chat-message-ico" className="chat-message-ico" />
          )}

        <div className="chat-message-text">
          {message}
        </div>
      
        { sender === 'user' && (
          <img src={user} alt="chat-message-ico" className="chat-message-ico" />
          )}
    </div>
    </>
  );
}