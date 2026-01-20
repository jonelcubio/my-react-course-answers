import {useState} from 'react';

export default function Lesson3ans() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  function handleClick(event) {
   console.log('Clicked')
  }

  function handleCountClick() {
    setCount(count +1);
  }

  function handleResetClick(){
    setCount(0);
    setName('');
  }

  function BtnCounter() {
    return(
      <>
      <button className="lesson1btn" onClick={handleCountClick}>Clicked {count} {count === 1 ? 'time' : 'times'}</button> 
      </>
    );
  }

  function handleOnChange(event){
    setName(event.target.value);
  }

  function handleExampleClick() {
    setName('Jacob Marcus');
  }

  return(
    <>
    <main className="lesson1">
      <div className="titleName">State,Event Handlers, Create the Chatbot Features</div>
      <div className="titlebody"></div>

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

      <div className="titlenum">3f.</div>
       <div className="l2h-con">
          <img src="https://i.imgur.com/Q28PBFE.png" alt="2h" className="img-exe" />
        </div> 

        <BtnCounter />
        <BtnCounter />

        <button className="lesson1btn" onClick={handleResetClick}>Reset</button>


        <div className="titlenum">3g.</div>
       <div className="l2h-con">
          <img src="https://i.imgur.com/aKzdoLm.png" alt="2h" className="img-exe" />
        </div> 
        <input type="text" placeholder='Type a name here' className='inputtype' onChange={handleOnChange}/>
        <p>{name || 'Hello'}</p>
        <div className="l2h-con">
          <img src="https://i.imgur.com/04SZ4Ad.png" alt="2h" className="img-exe" />
        </div> 
        <div className="l2h-con">
          <img src="https://i.imgur.com/zOEzSrn.png" alt="2h" className="img-exe" />
        </div> 

        <div className="titlenum">3h.</div>
       <div className="l2h-con">
          <img src="https://i.imgur.com/HhIAiDr.png" alt="2h" className="img-exe" />
        </div> 
        <input type="text" placeholder='Type a name here' className='inputtype' onChange={handleOnChange} value={name}/>
        <button className="lesson1btn" onClick={handleResetClick}>Reset</button> 
        <button className="lesson1btn" onClick={handleExampleClick}>Example</button> 
        <p>{'Hello ' + name || 'Hello'}</p>
        
    </main>
    </>
  );
}