import LessonBtn from "./LessonBtn";

export default function Hero() {

 
  return(
    <>
    <div className="hero-con">
      <div className="hero-con-left"></div>

    <div className="hero-con-mid">
        <div className="hero-mid-title">Learn React</div>

        <div className="hero-mid-btn">
          <LessonBtn img="https://images.pexels.com/photos/16153897/pexels-photo-16153897.jpeg" title="Lesson 1" link="lesson1" />
          <LessonBtn img="https://images.pexels.com/photos/532456/pexels-photo-532456.jpeg" title="Lesson 2" link="lesson2" />
          <LessonBtn img="https://images.pexels.com/photos/3686227/pexels-photo-3686227.jpeg" title="Lesson 3" link="lesson3" />
          <LessonBtn img="https://images.pexels.com/photos/34790954/pexels-photo-34790954.jpeg" title="Chatbot" link="chatbot" />
          <LessonBtn img="https://images.pexels.com/photos/10054154/pexels-photo-10054154.jpeg" title="Lesson 4" link="lesson4" />
      </div>

        <div className="hero-mid-btn"></div>
    </div>

      <div className="hero-con-right"></div>
    </div>
    </>
  );
}