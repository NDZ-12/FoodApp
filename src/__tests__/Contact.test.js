import { render, screen } from "@testing-library/react";
import ContactUs from "../components/ContactUs";

test("renders the ContactUs component", () => {
  render(<ContactUs />);

  //   const heading = screen.getByRole(
  //     "heading",
  //     { name: "Contact Us Page" },
  //     { name: "Location : Pune" }
  //   );

  //   expect(heading).toBeInTheDocument();w

  const contactUsHeader = screen.getByText("Contact Us Page");
  const locationInfo = screen.getByText("Location : Pune");
  const nameInput = screen.getByPlaceholderText("name");
  const messageInput = screen.getByPlaceholderText("message");
  const submitButton = screen.getByText("Submit");

  expect(contactUsHeader).toBeInTheDocument();
  expect(locationInfo).toBeInTheDocument();
  expect(nameInput).toBeInTheDocument();
  expect(messageInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test("render componenst with different approach", () => {
  render(<ContactUs />);
  const buttontext = screen.getByRole("button");
  const messageplaceholdertext = screen.getByPlaceholderText("message");
  const heading = screen.getByRole(
    "heading",
    { name: "Contact Us Page" },
    { name: "Location : Pune" }
  );
  expect(heading).toBeInTheDocument();
  expect(buttontext).toBeInTheDocument();
  expect(messageplaceholdertext).toBeInTheDocument();
});
