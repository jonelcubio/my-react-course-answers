import Beams from "../reactBits/Beams";

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
        />
      </div>


      
    </>
  );
}