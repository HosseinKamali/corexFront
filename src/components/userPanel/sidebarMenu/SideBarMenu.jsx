import "./sideBarMenu.css";
import menu from "../../data";
import { useState } from "react";
import { Link, matchPath } from "react-router-dom";

const SideBarMenu = () => {
  const [data, setData] = useState(menu);

  return (
    <div className="wrapperSidebar">
      <ul className="navbarMenu">
        {data.map((item, index) => {
          const { title, path, icon } = item;

          return (
            <li
              className="icon"
              id={item.subNav === true ? "open" : ""}
              key={index}
            >
              <span>{icon}</span>
              <Link to={path}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBarMenu;
