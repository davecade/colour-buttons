import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

export function replaceCamelWithSpaces(colorName) {
    return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
    const [buttonBackground, setButtonBackground] = useState("red");
    const [toggleButton, setToggleButton] = useState(false);

    useEffect(() => {
        if (toggleButton) {
            setButtonBackground("grey");
        } else {
            setButtonBackground("red");
        }
    }, [toggleButton]);

    return (
        <div className="app-container">
            <div className="button-container">
                <button
                    disabled={toggleButton}
                    style={{ backgroundColor: buttonBackground }}
                    onClick={() => {
                        if (buttonBackground === "red") {
                            setButtonBackground("blue");
                        } else {
                            setButtonBackground("red");
                        }
                    }}
                >
                    {buttonBackground === "red"
                        ? "Change to blue"
                        : "Change to red"}
                </button>
            </div>
            <input
                className="checkbox"
                type="checkbox"
                id="checkboxButton"
                name="checkboxButton"
                onChange={() => setToggleButton(!toggleButton)}
                checked={toggleButton}
            ></input>
            <label htmlFor="checkboxButton">Disable Button</label>
        </div>
    );
}

export default App;
