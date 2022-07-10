import "./App.css";
import { useState } from "react";

function App() {
    const [buttonBackground, setButtonBackground] = useState("red");

    return (
        <div>
            <button
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
    );
}

export default App;
