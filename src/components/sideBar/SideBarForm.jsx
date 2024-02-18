import React, { useState } from "react";
import "./sideBarForm.css";
import { Link } from "react-router-dom";

const SideBarForm = () => {
  const [activeItem, setActiveItem] = useState("login");

  const handleClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="wrpperSideBar poppins-extrabold">
      <div className="btnHolder">
      


        <button
          onClick={() => handleClick("signUp")}
          className={activeItem === "signUp" ? "activeBar" : ""} >
          <Link to="/signUp">SignUp</Link>
          <span className={activeItem === "login" ? "notMember" : "notAnythings"}>Not a member?<br/><small>click on sign up</small></span>
        </button>


        <button
          onClick={() => handleClick("login")}
          className={activeItem === "login" ? "activeBar" : ""} >
          <Link to="/login" style={{paddingRight:"40px"}}> Login</Link>
          <span className={activeItem === "signUp" ? "member" : "notAnythings"}>Already a member<br/><small>Click on login</small></span>
        </button>
      </div>
    </div>
  );
};

export default SideBarForm;
