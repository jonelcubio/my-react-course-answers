import { Link } from "react-router-dom";
import TrueFocus from "../reactBits/TrueFocus";
import Beams from "../reactBits/Beams";
import FlowingMenu from "../reactBits/FlowingMenu";

export default function Hero() {

  const demoItems = [
  { link: '/lesson1', text: 'Lesson 1', image: 'https://images.pexels.com/photos/1477166/pexels-photo-1477166.jpeg' },
  { link: '/lesson2', text: 'Lesson 2', image: 'https://images.pexels.com/photos/235990/pexels-photo-235990.jpeg' },
  { link: '/', text: 'Lesson 3', image: 'https://images.pexels.com/photos/1042423/pexels-photo-1042423.jpeg' },
  { link: '/', text: 'Lesson 4', image: 'https://images.pexels.com/photos/1230157/pexels-photo-1230157.jpeg' },
  { link: '/', text: 'Lesson 5', image: 'https://images.pexels.com/photos/12267702/pexels-photo-12267702.jpeg' }
];

  return(
    <>
    <div className="hero-main">

    <div style={{ height: '600px', position: 'relative' }}>
      <FlowingMenu items={demoItems} />
    </div>

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
    
    <div className="truefocus">
       <TrueFocus 
      sentence="My React Learning Progress"
      manualMode={false}
      blurAmount={5}
      borderColor="pink"
      animationDuration={2}
      pauseBetweenAnimations={1}
      />
    </div>
      
      <div className="flowing-style" style={{ position: 'relative' }}>
      <FlowingMenu items={demoItems} />
      </div>

    </div>
    </>
  );
}