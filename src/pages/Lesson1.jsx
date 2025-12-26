import back from '../assets/back.svg';
import forward from '../assets/forward.svg';
import { Link } from 'react-router-dom';
import Lesson1ans from '../components/Lesson1ans';

export default function Lesson1() {
  return(
    <>
    <div className="lesson1-main">
      
       
      <Link to="/"><button className="lesson1-prev"><img src={back} alt="Previous" className='lesson1-ico' /></button></Link>

      <div className="lesson1-title">Lesson 1</div>
      
     <button className="lesson1-forward"><img src={forward} alt="Forward" className='lesson1-ico' /></button>
    
    </div>

    <Lesson1ans />
    
    </>
  );
}