import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Lesson1 from './pages/Lesson1.jsx';
import TargetCursor from "./reactBits/TargetCursor.jsx";
export function App() {
  

  return (
    <>
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lesson1" element={<Lesson1 />} />
      </Routes>
    </>
  )
}


