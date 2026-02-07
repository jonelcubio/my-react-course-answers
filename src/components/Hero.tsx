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

        <div className="hero-mid-btn">
          <LessonBtn img="https://images.pexels.com/photos/28954162/pexels-photo-28954162.jpeg" title="Lesson 5" link="lesson4" />
          <LessonBtn img="https://images.pexels.com/photos/17866992/pexels-photo-17866992.jpeg" title="Lesson 6" link="lesson4" />
          <LessonBtn img="https://images.pexels.com/photos/3750858/pexels-photo-3750858.jpeg" title="Lesson 7" link="lesson4" />
          <LessonBtn img="https://images.pexels.com/photos/130636/pexels-photo-130636.jpeg" title="Lesson 8" link="lesson4" />
          <LessonBtn img="https://images.pexels.com/photos/3648977/pexels-photo-3648977.jpeg" title="Lesson 9" link="lesson4" />
        </div>
    </div>

      <div className="hero-con-right"></div>
    </div>
    </>
  );
}