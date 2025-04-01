import React, { useState } from "react";
import ProgressStepper from "./features/poc/bin/components/ProgressStepper";
import Selector from "./features/poc/bin/components/Selector";

function App() {
    // Definim pașii aici
    const steps = ["Permit Check", "Waste Type", "Select Skip", "Choose Date", "Payment"];

    // Starea pentru pasul curent
    const [currentStep, setCurrentStep] = useState(2);

    return (
        <div>
            {/* Bara de progres primește steps și currentStep ca prop */}
            <ProgressStepper steps={steps} currentStep={currentStep} />

            {/* Selectorul pentru skip-uri */}
            <Selector />

            {/* Butoane de navigare */}
            <div className="container d-flex justify-content-between py-4">
                <button
                    onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
                    className="btn btn-secondary"
                >
                    Back
                </button>
                <button
                    onClick={() => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))}
                    className="btn btn-primary"
                >
                    Continue
                </button>
            </div>
        </div>
    );
}

export default App;
