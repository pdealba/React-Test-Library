import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Greeting from "./Greeting";

describe("Greeting Component", () => {
  test("renders Hello World! as a text", () => {
    render(<Greeting />);

    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders good to see you if the button was not clicked", () => {
    render(<Greeting />);

    const defaultParagraphElement = screen.getByText("good to see you", {
      exact: false,
    });
    expect(defaultParagraphElement).toBeInTheDocument();
  });

  test("renders changed wen the button is clicked", () => {
    render(<Greeting />);

    const changeButton = screen.getByRole("button");
    userEvent.click(changeButton);

    const changedParagraph = screen.getByText("Changed!");
    expect(changeButton).toBeInTheDocument();
  });
});
