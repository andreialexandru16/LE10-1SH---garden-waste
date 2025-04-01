import React from 'react';

/**
 * Component for displaying the multi-step process progress bar
 * @param {Number} currentStep - The current active step in the process
 */
const ProgressStepper = ({ currentStep }) => {
    // Configuration for each step in the process
    const steps = [
        { id: 1, name: 'Postcode' },
        { id: 2, name: 'Waste Type' },
        { id: 3, name: 'Select Bin' },
        { id: 4, name: 'Permit Check' },
        { id: 5, name: 'Choose Date' },
        { id: 6, name: 'Payment' }
    ];

    return (
        <div className="container mx-auto pt-6 px-4">
            <div className="flex flex-wrap justify-between items-center mb-8">
                {steps.map((step) => (
                    <div
                        key={step.id}
                        className={`flex items-center mb-4 sm:mb-0 ${
                            step.id < currentStep
                                ? 'opacity-60' // Past steps
                                : step.id === currentStep
                                    ? '' // Current step (full opacity)
                                    : 'opacity-60' // Future steps
                        }`}
                    >
                        {/* Step indicator circle */}
                        <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                step.id <= currentStep
                                    ? 'bg-blue-500' // Current and completed steps
                                    : 'bg-gray-700' // Future steps
                            }`}
                        >
                            {step.id < currentStep ? (
                                // Checkmark for completed steps
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            ) : (
                                // Step number for current and future steps
                                <span className="text-white">{step.id}</span>
                            )}
                        </div>
                        {/* Step name */}
                        <div className={`ml-2 ${step.id === currentStep ? 'font-medium' : ''}`}>{step.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProgressStepper;