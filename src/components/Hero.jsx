import { Link } from "react-router-dom";
export default function Hero() {
  return(
    <>
    <div className="hero-main">
      <div className="hero-title">My React Learning Progress</div>

      <div className="hero-btn-con">
        <Link to="/lesson1" target="_blank"><button className="btn-link">Lesson 1</button></Link>
        <button className="btn-link">Lesson 2</button>
      </div>
    </div>
    </>
  );
}