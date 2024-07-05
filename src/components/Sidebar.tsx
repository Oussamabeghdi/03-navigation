import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/todo.png";
import "../styles/Sidebar.css";

type Props = {
  onClickSideBar: (title: string) => void;
};

const Sidebar: React.FC<any> = (props: Props) => {
  function onClickSideBar(value: string) {
    return props.onClickSideBar(value);
  }
  const location = useLocation();
  return (
    <aside className="aside-sidebar">
      <div className="sidebar-class">
        <h2>Sidebar</h2>
        <ul className="list-sidebar">
          <img src={logo} alt="" />
          <li>
            <Link
              to="/"
              className={location.pathname === "/" ? "gras" : ""}
              onClick={() => onClickSideBar("Accueil")}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/tasks"
              className={location.pathname === "/tasks" ? "gras" : ""}
              onClick={() => onClickSideBar("Tâches")}
            >
              Tâches
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "gras" : ""}
              onClick={() => onClickSideBar("About")}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
