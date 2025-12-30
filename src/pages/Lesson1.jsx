import back from '../assets/back.svg';
import forward from '../assets/forward.svg';
import { Link } from 'react-router-dom';
import Lesson1ans from '../components/Lesson1ans';
import Beams from "../reactBits/Beams";


export default function Lesson1() {
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
      
       
      <Link to="/"><button className="lesson1-prev cursor-target"><img src={back} alt="Previous" className='lesson1-ico' /></button></Link>

      <div className="lesson1-title">Lesson 1</div>
      
     <button className="lesson1-forward cursor-target"><img src={forward} alt="Forward" className='lesson1-ico' /></button>
    
    </div>

    <Lesson1ans />
    
    </>
  );
}