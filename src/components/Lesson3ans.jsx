import {useState} from 'react';

export default function Lesson3ans() {

  const [count, setCount] = useState(0);

  function handleClick(event) {
   console.log('Clicked')
  }

  function handleCountClick() {
    setCount(count +1);
  }

  function BtnCounter() {
    return(
      <>
      <button className="lesson1btn" onClick={handleCountClick}>Clicked {count} {count === 1 ? 'time' : 'times'}</button> 
      </>
    );
  }

  return(
    <>
    <main className="lesson1">
      <div className="titleName">State,Event Handlers, Create the Chatbot Features</div>
      <div className="titlebody"></div>

      <p>Continue with 2:21:40</p>
       <div className="l2h-con">
          <a href="https://youtu.be/TtPXvEcE11E?si=dwKCf5h35YU8iGI8&t=8500"><img src="https://i.imgur.com/G74qgTc.png" alt="2h" className="l2h-img" /></a>
        </div> 


       <div className="titlenum">3a.</div>
       <div className="l2h-con">
          <img src="https://i.imgur.com/9xBTl75.png" alt="2h" className="img-exe" />
        </div> 
      <div className="lessonbody">
         <button className="lesson1btn" onClick={handleClick}>Clicked 0 times</button>  
      </div>

       <div className="titlenum">3b.</div>
       <div className="l2h-con">
          <img src="https://i.imgur.com/2vRxglY.png" alt="2h" className="img-exe" />
        </div> 
      <div className="lessonbody">
          <div className="lessonbody">
         <button className="lesson1btn" onClick={handleCountClick}>Clicked {count} times</button>  
      </div>
       <div className="l2h-con">
          <img src="https://i.imgur.com/qJb4seL.png" alt="2h" className="img-exe" />
        </div> 
       <div className="l2h-con">
          <img src="https://i.imgur.com/oDaoTj3.png" alt="2h" className="img-exe" />
        </div> 
        <div className="l2h-con">
          <img src="https://i.imgur.com/mrlcXv5.png" alt="2h" className="img-exe" />
        </div> 
       
        <div className="titlenum">3c.</div>
       <div className="l2h-con">
          <img src="https://i.imgur.com/ofyALoG.png" alt="2h" className="img-exe" />
        </div> 
         <button className="lesson1btn" onClick={handleCountClick}>Clicked {count} {count === 1 ? 'time' : 'times'}</button> 
         <div className="l2h-con">
          <img src="https://i.imgur.com/HyQ2sBO.png" alt="2h" className="img-exe" />
        </div> 
      </div>

      <div className="titlenum">3d.</div>
       <div className="l2h-con">
          <img src="https://i.imgur.com/NEmFELw.png" alt="2h" className="img-exe" />
        </div> 
      
       <BtnCounter />
       <BtnCounter />

      <div className="titlenum">3e.</div>
       <div className="l2h-con">
          <img src="https://i.imgur.com/vXYHq7F.png" alt="2h" className="img-exe" />
        </div> 
       <p className='p-wrap'>Apparently, na-skip ko na ung exercise 3e dahil hindi na ako gumawa ng separte component for the btn counter, <br />at dahil dito ko na sya nilagay ay already nasa parent component na sya at naka-lift na ung state. </p>

    </main>
    </>
  );
}