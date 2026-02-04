import back from '../assets/back.svg';
import forward from '../assets/forward.svg';
import { Link } from 'react-router-dom';
import Beams from "../reactBits/Beams.jsx";
import Lesson4ans from '../components/Lesson4ans.js';
export default function Lesson4() {
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
        />
      </div>
    
    <div className="lesson1-main">
      
       
      <Link to="/lesson3"><button className="lesson1-prev cursor-target" title='Lesson 3'><img src={back} alt="Previous" className='lesson1-ico' /></button></Link>

      <div className="lesson1-title">Lesson 4</div>
      
     <Link to="/"><button className="lesson1-forward cursor-target" title='Lesson 5'><img src={forward} alt="Forward" className='lesson1-ico' /></button></Link>

    </div>
     <Lesson4ans />
    </>
  );
}