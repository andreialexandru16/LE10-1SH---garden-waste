import React from "react";

const steps = [
    "Permit Check",
    "Waste Type",
    "Select Skip",
    "Choose Date",
    "Payment",
];

const ProgressStepper = ({ currentStep = 2 }) => {
    // currentStep este index-ul pasului curent (0-based)
    // Ex: 0 = Permit Check, 1 = Waste Type, etc.

    return (
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "1rem" }}>
            {steps.map((step, index) => {
                const isActive = index <= currentStep;
                return (
                    <div
                        key={step}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            color: isActive ? "#1D4ED8" : "#999",
                        }}
                    >
                        <div
                            style={{
                                width: "30px",
                                height: "30px",
                                borderRadius: "50%",
                                backgroundColor: isActive ? "#1D4ED8" : "#333",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "#fff",
                                marginBottom: "0.5rem",
                            }}
                        >
                            {index + 1}
                        </div>
                        <div style={{ fontSize: "0.8rem" }}>{step}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default ProgressStepper;
