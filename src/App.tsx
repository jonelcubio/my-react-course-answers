import { Routes, Route } from 'react-router-dom';
import '@mantine/core/styles.css'; 
import { MantineProvider } from '@mantine/core';
import SplashCursor from '../src/reactBits/SplashCursor';
import Home from '../src/pages/Home.js'
import Lesson1 from './pages/Lesson1.js';
import Lesson2 from './pages/Lesson2.js';
import Chatbot from './pages/Chatbot.js';
import Lesson3 from './pages/Lesson3.js';
import Lesson4 from './pages/Lesson4.js';
export function App() {
  

  return (
    <>
      <SplashCursor />
      <MantineProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lesson1" element={<Lesson1 />} />
        <Route path="/lesson2" element={<Lesson2 />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/lesson3" element={<Lesson3 />} />
        <Route path="/lesson4" element={<Lesson4 />} />
      </Routes>
      </MantineProvider>
    </>
  )
}


