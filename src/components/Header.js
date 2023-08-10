import React, { useState } from "react";
import { CDN_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  const [loginbtnName, setloginbtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" alt="logo" src={CDN_LOGO} />
      </div>

      <div className="nav-items">
        <ul>
          <li>OnlineStatus : {onlineStatus ? "✅✅✅✅" : "🔴🔴🔴"}</li>
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/">Cart</Link>
          </li>

          <button
            className="Login"
            onClick={() => {
              loginbtnName === "Login"
                ? setloginbtnName("Logout")
                : setloginbtnName("Login");
            }}
          >
            {loginbtnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
