import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { replaceCamelWithSpaces } from "./App";

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

test("Button is enabled when app loads, and checkbox is unchecked", () => {
    render(<App />);

    const colorButton = screen.getByRole("button", {
        name: "Change to blue",
    });

    const checkbox = screen.getByRole("checkbox", {
        name: "Disable Button",
    });

    expect(colorButton).toBeEnabled();
    expect(checkbox).not.toBeChecked();
});

test("Button is disabled when checked", () => {
    render(<App />);

    const colorButton = screen.getByRole("button", {
        name: "Change to blue",
    });

    const checkbox = screen.getByRole("checkbox", {
        name: "Disable Button",
    });

    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
    expect(colorButton).toBeDisabled();
    expect(colorButton).toHaveStyle({ backgroundColor: "grey" });
});

test("Button colour to be grey when checked", () => {
    render(<App />);

    const colorButton = screen.getByRole("button", {
        name: "Change to blue",
    });

    const checkbox = screen.getByRole("checkbox", {
        name: "Disable Button",
    });

    fireEvent.click(checkbox);

    expect(colorButton).toHaveStyle({ backgroundColor: "grey" });
});

describe("spaced before camel-case capital letters", () => {
    test("Works for no innner capital letters", () => {
        expect(replaceCamelWithSpaces("Red")).toBe("Red");
    });
    test("works for one inner capital letter", () => {
        expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
    });
    test("Works for multiple inner capital letters", () => {
        expect(replaceCamelWithSpaces("MediumVioletRed")).toBe(
            "Medium Violet Red"
        );
    });
});
