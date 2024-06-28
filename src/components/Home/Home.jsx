import s from "./style.module.css";
import img1 from "../../assets/Vector.png";
import img2 from "../../assets/bookmark 1.png";
import img3 from "../../assets/Vector (1).png";
import img4 from "../../assets/usd-square 1.png";

export function Home() {
  return (
    <div className={`container ${s.container}`}>
      <div className="d-flex justify-content-between ">
        <div className={`col-md-3 col-6 col-lg-3 } ${s.card} ${s.students}`}>
          <img src={img1} alt="" /> 
          <p>Students</p>
          <h1>243</h1>
        </div>
        <div className={`col-md-3 col-6 col-lg-3} ${s.card}`}>
          <img src={img2} alt="" />
          <p>Course</p>
          <h1>13</h1>
        </div>
        <div className={`col-md-3 col-6 col-lg-3} ${s.card}`}>
          <img src={img4} alt="" />
          <p>Payments</p>
          <h1>243</h1>
        </div>
        <div className={`col-md-3 col-6 col-lg-3} ${s.users} ${s.card} `}>
          <img src={img3} alt="" />
          <p>Users</p>
          <h1>3</h1>
        </div>
      </div>
    </div>
  );
}
