// src/App.js
import React, { useState } from "react";
import ProgressStepper from "./features/poc/bin/components/ProgressStepper";
import Selector from "./features/poc/bin/components/Selector";
import "./App.css";

function App() {
    const [currentStep, setCurrentStep] = useState(2);

    // Poți suprascrie steps dacă vrei
    const steps = [
        "Postcode",
        "Waste Type",
        "Select Skip",
        "Permit Check",
        "Choose Date",
        "Payment",
    ];

    return (
        <div>
            <ProgressStepper currentStep={currentStep} steps={steps} />
            <Selector />
            <div className="container d-flex justify-content-between py-4">
                <button
                    className="btn btn-secondary"
                    onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
                >
                    Back
                </button>
                <button
                    className="btn btn-primary"
                    onClick={() => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))}
                >
                    Continue
                </button>
            </div>
        </div>
    );
}

export default App;
