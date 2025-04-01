// src/features/poc/bin/components/ProgressStepper.jsx
import React from "react";

const ProgressStepper = ({ currentStep = 0, steps = [] }) => {
    return (
        <ul className="nav nav-pills justify-content-center my-4">
            {steps.map((step, index) => {
                const isActive = index <= currentStep;
                return (
                    <li className="nav-item mx-2" key={step}>
            <span className={`nav-link ${isActive ? "active" : ""}`}>
              <span className="badge bg-secondary me-1">{index + 1}</span>
                {step}
            </span>
                    </li>
                );
            })}
        </ul>
    );
};

export default ProgressStepper;
