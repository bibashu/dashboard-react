import profil from "../../assets/profil.png";
import s from "./style.module.css";
import {Motherboard, HouseDoorFill, BarChartLine, Bookmark, CurrencyDollar  } from "react-bootstrap-icons"
export function Sidebar() {
  return (

      <div className={s.container}>
        <div className={`container ${s.containe}`}>
          <h4 className={s.title}>CRUD OPERATORS</h4>
          <img src={profil} className={`img-fluid rounded-circle w-50 ${s.image}`} alt="" />
          <h4 className="fw-bold fs-5 mt-3">John doe</h4>
          <h5 className={s.soustitle}>Admin</h5>
  
          <ul className={s.list}>
            <li className={s.listItem}>
              <HouseDoorFill className="me-3 fs-6 " />Home</li>
            <li className={s.listItem}><Bookmark className="me-3 fs-6" />Course</li>
            <li className={s.listItem}><Motherboard className="me-3 fs-6 " />Students</li>
            <li className={s.listItem}><CurrencyDollar className="me-3 fs-6" />Payment</li>
            <li className={s.listItem}><BarChartLine className="me-3 fs-6" />Report</li>
            <li className={s.listItem}>Settings</li>
          </ul>
        </div>
      </div>

  );
}
