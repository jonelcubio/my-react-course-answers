import socks from "../assets/socks.png";
import tennis from "../assets/tennis.png";
import tshirt from "../assets/tshirt.png";

import ProductDetails from "./ProductDetails";
export default function Lesson2ans() {
  return(
  <>
  <main className="lesson1">
    <div className="titleName">Components, Props, Start the Chatbot Project</div>
    <div className="titlebody"></div>

    <div className="titlenum">Chatbot Project</div>
      <div className="lessonbody">
        <a href="/chatbot" target="_blank" rel="noreferrer noopener"><button className="lesson1btn">Chatbot!</button></a>
      </div>


    <div className="titlenum">2a.</div>
      <div className="lessonbody">
        <p>"Hello, welcome to my website"</p>
      </div>

    <div className="titlenum">2b.</div>
      <div className="lessonbody">
        <p>"Hello, welcome to my website"</p>
        <div className="l2-style">
          <button className="lesson1btn">Login</button>
          <button className="lesson1btn">Sign up</button>
        </div>
      </div>

    <div className="titlenum">2c.</div>
      <div className="lessonbody">
        <p>"Hello, welcome to my website"</p>
        <br />
        <div className="l2-2c-input-con">
          <input type="text" placeholder="Email" className="l2-2c-input"/>
          <input type="password" placeholder="Password" className="l2-2c-input"/>
        </div>
        <div className="l2-style">
          <button className="lesson1btn">Login</button>
          <button className="lesson1btn">Sign up</button>
        </div>        
      </div>

      <div className="titlenum">2e.</div>
      <div className="lessonbody">
        <p>Cotton socs</p>
        <p>Price: $10.90</p>
        <button className="lesson1btn">Add to cart</button>  
      </div>

       <div className="titlenum">2f.</div>
        <div className="lessonbody">
        <div className="lesson2f">
          <ProductDetails productName="Tennis balls" price="$6.00" />
          <ProductDetails productName="Plain T-Shirt" price="$7.99" />
        </div>
      </div>


       <div className="titlenum">2g.</div>
        <div className="lessonbody">
          <ProductDetails productName="Cotton socks" price="$10.90" discountPrice="$5.45" />
        </div>

        <div className="titlenum">2h.</div>
        <div className="lessonbody">
          <div className="l2h-con">
            <img src="https://i.imgur.com/fXdBYjg.png" alt="2h" className="l2h-img" />
          </div> 
        </div>

        <div className="titlenum">2j.</div>
        <div className="lessonbody">
          
          <ProductDetails productName="Cotton socks" price="$10.90" discountPrice="$5.45" imageSrc={socks} />
          <ProductDetails productName="Tennis balls" price="$6.00" imageSrc={tennis} />
          <ProductDetails productName="Plain T-shirt" price="$7.99" imageSrc={tshirt} />
         
          
        
        </div>
  </main>
  </>
  );
}