import back from '../assets/back.svg';
import forward from '../assets/forward.svg';
import { Link } from 'react-router-dom';
import Lesson2ans from '../components/Lesson2ans';
import Beams from "../reactBits/Beams";


export default function Lesson2() {
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
      
       
      <Link to="/lesson1"><button className="lesson1-prev cursor-target" title='Lesson 1'><img src={back} alt="Previous" className='lesson1-ico' /></button></Link>

      <div className="lesson1-title">Lesson 2</div>
      
     <Link to="/"><button className="lesson1-forward cursor-target" title='Lesson 3'><img src={forward} alt="Forward" className='lesson1-ico' /></button></Link>
    
    </div>

    <Lesson2ans />
    
    </>
  );
}