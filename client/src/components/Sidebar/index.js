import React from "react";
import "./style.css";
export default function Sidebar() {
  return (
    <div className="main-sidebar">
      <div className="main-sidebar-logo-container">
        <img
          src="https://a6e8z9v6.stackpathcdn.com/akea/homepage3/wp-content/uploads/2018/11/logo-hp3.png"
          className="main-sidebar-logo"
        />
      </div>
      <div className="main-sidebar-menu">
        <a className="main-sidebar-menu-item" href="/">Home</a>
        <a className="main-sidebar-menu-item" href="/about">About</a>
      </div>
      <div className="main-sidebar-social-icon-container">
        <i className="fa-brands fa-facebook-f main-sidebar-social-icon"></i>
        <i className="fa-brands fa-twitter main-sidebar-social-icon"></i>
        <i className="fa-brands fa-github main-sidebar-social-icon"></i>
      </div>
    </div>
  );
}
