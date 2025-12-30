import { Link } from "react-router-dom";
import TrueFocus from "../reactBits/truefocus";
export default function Hero() {
  return(
    <>
    <div className="hero-main">
      
      <TrueFocus 
      sentence="My React Learning Progress"
      manualMode={false}
      blurAmount={5}
      borderColor="pink"
      animationDuration={1}
      pauseBetweenAnimations={1}
      />

      <div className="hero-btn-con">
        <Link to="/lesson1"><button className="btn-link">Lesson 1</button></Link>
        <button className="btn-link">Lesson 2</button>
      </div>
    </div>
    </>
  );
}