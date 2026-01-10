import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Lesson1 from './pages/Lesson1.jsx';
import Lesson2 from './pages/Lesson2.jsx';
import Chatbot from './pages/Chatbot.jsx';
import Lesson3 from './pages/Lesson3.jsx';

export function App() {
  

  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lesson1" element={<Lesson1 />} />
        <Route path="/lesson2" element={<Lesson2 />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/lesson3" element={<Lesson3 />} />
      </Routes>
    </>
  )
}


