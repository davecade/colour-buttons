import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial colour", () => {
    render(<App />);

    // find an element with a role of the button and text of "Change to blue"
    const colorButton = screen.getByRole("button", {
        name: "Change to blue",
    });

    // expect the background color to be red
    expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});

test("Button turns blue when clicked", () => {
    render(<App />);

    const colorButton = screen.getByRole("button", {
        name: "Change to blue",
    });

    // expect the background color to be red
    expect(colorButton).toHaveStyle({ backgroundColor: "red" });

    // clicks on the button
    fireEvent.click(colorButton);

    // expect the background color to be blue
    expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

    expect(colorButton.textContent).toBe("Change to red");
});
