import React, { useState } from "react";
import ProgressStepper from "./features/components/ProgressStepper";
import Selector from "./features/components/Selector";

function App() {
    // Exemplu de gestionare a pasului curent
    const [currentStep, setCurrentStep] = useState(2);

    return (
        <div>
            {/* Bara de progres */}
            <ProgressStepper currentStep={currentStep} />

            {/* Conținutul principal, de exemplu Selector-ul */}
            <Selector />

            {/* Butoane de navigare (exemplu simplu) */}
            <div style={{ display: "flex", justifyContent: "space-between", padding: "1rem" }}>
                <button
                    onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
                    style={{ backgroundColor: "#333", color: "#fff", border: "none", padding: "0.5rem 1rem" }}
                >
                    Back
                </button>
                <button
                    onClick={() => setCurrentStep((prev) => Math.min(prev + 1, 4))}
                    style={{ backgroundColor: "#1D4ED8", color: "#fff", border: "none", padding: "0.5rem 1rem" }}
                >
                    Continue
                </button>
            </div>
        </div>
    );
}

export default App;
