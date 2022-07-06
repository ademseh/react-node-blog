import React from "react";
import "./style.scss";
export default function Sidebar() {
  return (
    <div className="main-sidebar">
      <div className="main-sidebar__logo-container">
        <img
          src="https://a6e8z9v6.stackpathcdn.com/akea/homepage3/wp-content/uploads/2018/11/logo-hp3.png"
          className="main-sidebar__logo-container-logo"
        />
      </div>
      <div className="main-sidebar__menu">
        <a className="main-sidebar__menu-item" href="/">
          Home
        </a>
        <a className="main-sidebar__menu-item" href="/about">
          About
        </a>
      </div>
      <div className="main-sidebar__social-icons">
        <i className="fa-brands fa-facebook-f main-sidebar-social-icons-item"></i>
        <i className="fa-brands fa-twitter main-sidebar-social-icon-item"></i>
        <i className="fa-brands fa-github main-sidebar-social-icon-item"></i>
      </div>
    </div>
  );
}
