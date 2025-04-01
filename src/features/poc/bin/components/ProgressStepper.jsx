// src/features/poc/bin/components/ProgressStepper.jsx
import React from "react";
import "./css/ProgressStepper.css";

const defaultSteps = [
    "Postcode",
    "Waste Type",
    "Select Skip",
    "Permit Check",
    "Choose Date",
    "Payment",
];

const ProgressStepper = ({ currentStep = 0, steps = defaultSteps }) => {
    return (
        <div className="progress-stepper-container">
            {steps.map((step, index) => {
                const isActive = index <= currentStep;
                const lineActive = index < currentStep;
                return (
                    <div className="progress-step-wrapper" key={step}>
                        <div className={`progress-step ${isActive ? "active" : ""}`}>
                            <span className="step-label">{step}</span>
                        </div>
                        {index < steps.length - 1 && (
                            <div className={`step-line ${lineActive ? "active" : ""}`}></div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default ProgressStepper;
