import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../utils/appStore";
import UserContext from "../utils/UserContext";

describe("Header section Test", () => {
  it("Should load the render header component", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <UserContext.Provider value={{ loggedInUser: "Niranjan" }}>
            <Header />
          </UserContext.Provider>
        </Provider>
      </BrowserRouter>
    );

    const heading = screen.getByRole("heading");
    const loginbutton = screen.getByRole("button");
    const loginbtnName = screen.getByText("Login");
    console.log(loginbtnName);

    console.log(heading);
    console.log(loginbutton);
    expect(loginbtnName).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(loginbutton).toBeInTheDocument();
  });
});
