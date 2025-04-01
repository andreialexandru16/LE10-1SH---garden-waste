import React from "react";
import {
    FaRegIdBadge,
    FaRecycle,
    FaTruck,
    FaCalendarAlt,
    FaCreditCard,
} from "react-icons/fa";
import "./css/ProgressStepper.css";

const defaultSteps = [
    { label: "Permit Check", icon: <FaRegIdBadge /> },
    { label: "Waste Type", icon: <FaRecycle /> },
    { label: "Select Skip", icon: <FaTruck /> },
    { label: "Choose Date", icon: <FaCalendarAlt /> },
    { label: "Payment", icon: <FaCreditCard /> },
];

const ProgressStepper = ({ currentStep = 0, steps = defaultSteps }) => {
    return (
        <div className="progress-stepper">
            {steps.map((step, index) => {
                const isActive = index <= currentStep;
                return (
                    <div className="step-container" key={step.label}>
                        <div className={`step ${isActive ? "active" : ""}`}>
                            <div className="step-icon">{step.icon}</div>
                            <div className="step-label">{step.label}</div>
                        </div>
                        {index < steps.length - 1 && (
                            <div className={`connector ${index < currentStep ? "active" : ""}`} />
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default ProgressStepper;
