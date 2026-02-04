
type LessonBtnProps ={
    img: string;
    title: string;
    link: string;
  }

export default function LessonBtn({img, title, link}: LessonBtnProps) {

  return(
    <>
    <a href={link} target="_blank" rel="noreferrer noopener">
    <div className="lessonbtn-con">
      <div className="lessonbtn-img-con">
        <img src={img} alt={title} className="lessonbtn-img" />
      </div>
      <div className="lessonbtn-title">{title}</div>
    </div> </a>
    </>
  )
}