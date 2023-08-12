import React, { useState, useContext } from "react";
import { CDN_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header = () => {
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  const [loginbtnName, setloginbtnName] = useState("Login");
  return (
    <div className="flex justify-between bg-orange-200 mb-2">
      <div>
        <img className="w-56 shadow-slate-950" alt="logo" src={CDN_LOGO} />
      </div>
      <div className="flex items-center">
        <h2 className="text-2xl font-black text-start text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Food delivery Application{" "}
        </h2>
      </div>

      <div className="flex items-center">
        <ul className="flex hover:justify-between p-4 m-4">
          <li className="p-4">OnlineStatus : {onlineStatus ? "✅" : "🔴"}</li>
          <li className="p-4 hover:bg-amber-700">
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 hover:bg-amber-700">
            <Link to="/about">About</Link>
          </li>
          <li className="p-4 hover:bg-amber-700">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="p-4 hover:bg-amber-700">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-4 font-extrabold">{loggedInUser}</li>

          <button
            className="p-4 hover:bg-amber-700 transition delay-700 duration-300 ease-in-out"
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
