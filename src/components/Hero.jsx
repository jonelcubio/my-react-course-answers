import { Link } from "react-router-dom";
import TrueFocus from "../reactBits/TrueFocus";
import Beams from "../reactBits/Beams";

export default function Hero() {
  return(
    <>
    <div className="hero-main">

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
    
      
      
      <TrueFocus 
      sentence="My React Learning Progress"
      manualMode={false}
      blurAmount={5}
      borderColor="pink"
      animationDuration={2}
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