// src/features/poc/bin/components/ProgressStepper.jsx

import React from "react";
import "./css/ProgressStepper.css"; // importă fișierul CSS dedicat

/**
 * @param {number} currentStep - Indexul pasului curent (0-based)
 * @param {string[]} steps - Lista etichetelor pentru pași
 */
const ProgressStepper = ({ currentStep = 0, steps = [] }) => {
    return (
        <div className="d-flex justify-content-center align-items-center stepper-container">
            {steps.map((step, index) => (
                <React.Fragment key={step}>
                    {/* Fiecare pas */}
                    <div className="step-wrapper d-flex flex-column align-items-center">
                        <div
                            className={`step-circle ${index <= currentStep ? "active" : ""}`}
                        >
                            {index + 1}
                        </div>
                        <span className="step-label">{step}</span>
                    </div>

                    {/* Linia dintre pași (nu se afișează la ultimul pas) */}
                    {index < steps.length - 1 && (
                        <div
                            className={`step-line ${index < currentStep ? "active" : ""}`}
                        ></div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default ProgressStepper;
