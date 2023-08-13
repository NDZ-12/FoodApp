import { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import UserContext from "./utils/UserContext";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
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
    <Provider store={appStore}>
      <div className="app">
        <UserContext.Provider value={{ loggedInUser: userName }}>
          <Header />
        </UserContext.Provider>

        <Outlet />
      </div>
    </Provider>
  );
};

export default AppLayout;
