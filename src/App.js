import { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import UserContext from "./utils/UserContext";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  const [userName, setuserName] = useState();
  useEffect(() => {
    // Authencation -> send the username and passord
    const data = {
      name: "Niranjan Zambare",
    };
    setuserName(data.name);
  }, []);

  return (
    <div className="app">
      <UserContext.Provider value={{ loggedInUser: userName }}>
        <Header />
      </UserContext.Provider>

      <Outlet />
    </div>
  );
};

export default AppLayout;
