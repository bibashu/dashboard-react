import { Search, Bell } from "react-bootstrap-icons"
import s from "./style.module.css"
export function Header() {
  return (
    <div className={s.navbar}>
       <input className={s.input} type="text" placeholder="search" />
       <Search className={s.iconSearch} />
       <Bell className={s.bell} />
    </div>
  );
}
