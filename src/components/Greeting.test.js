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

  test("renders changed when the button is clicked", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test("Its good to see you! dosent render when the button is clicked", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const outputElement = screen.queryByText('good to see you', {exact: false} );
    expect(outputElement).toBeNull();
  });
});
