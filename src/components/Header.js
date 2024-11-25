import React from "react";
import logo from "../assets/img/QUIZMania.png";
import { Link } from "react-router";

const Header = (props) => {
  const { userState = "register", userInfo } = props;

  return (
    <div className="header">
      <div className="header-wrapper container">
        <div className="logo-wrapper">
          <img src={logo} alt="QUIZMania" />
        </div>

        <div className="header-right">
          {userState === "register" ? (
            <></>
          ) : userState === "loggedIn" ? (
            <Link to={"/"} className="header-btn">
              Exit Quiz
            </Link>
          ) : (
            <div className="user-info">
              <div className="user-img">{userInfo[0]?.toUpperCase()}</div>
              <p>{userInfo}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
