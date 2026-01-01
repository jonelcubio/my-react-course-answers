import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Lesson1 from './pages/Lesson1.jsx';

export function App() {
  

  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lesson1" element={<Lesson1 />} />
      </Routes>
    </>
  )
}


