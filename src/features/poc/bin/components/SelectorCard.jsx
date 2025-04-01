import React from 'react';
import { AlertTriangle } from 'lucide-react';

/**
 * Card component for displaying individual bin options
 * @param {Object} bin - Bin data object
 * @param {Boolean} isSelected - Whether this bin is currently selected
 * @param {Function} onSelect - Handler function for bin selection
 */
const SelectorCard = ({ bin, isSelected, onSelect }) => {
    /**
     * Calculate the total price with VAT included
     * @returns {String} Formatted price with 2 decimal places
     */
    const calculatePrice = () => {
        const priceBeforeVat = bin.price_before_vat;
        const vatAmount = (priceBeforeVat * bin.vat) / 100;
        return (priceBeforeVat + vatAmount).toFixed(2);
    };

    return (
        <div
            className={`relative bg-gray-800 rounded-lg p-4 transition-all ${
                isSelected
                    ? 'ring-2 ring-blue-500'
                    : 'hover:bg-gray-700'
            }`}
        >
            {/* Size indicator badge */}
            <div className="absolute top-4 right-4 bg-blue-600 text-white py-1 px-3 rounded-full text-sm font-medium">
                {bin.size} Yards
            </div>

            {/* Image area - using placeholder in development */}
            <div className="h-48 mb-4 overflow-hidden rounded-md">
                <img
                    src="/api/placeholder/400/320"
                    alt={`${bin.size} Yard Bin`}
                    className="object-cover w-full h-full"
                />
            </div>

            {/* Bin details */}
            <h3 className="text-xl font-bold">{bin.size} Yard Bin</h3>
            <p className="text-gray-400">{bin.hire_period_days} day hire period</p>

            {/* Conditional warning messages */}
            {!bin.allowed_on_road && (
                <div className="flex items-center mt-2 text-amber-400 text-sm">
                    <AlertTriangle className="w-4 h-4 mr-1" />
                    <span>Private Property Only</span>
                </div>
            )}

            {!bin.allows_heavy_waste && (
                <div className="flex items-center mt-1 text-red-400 text-sm">
                    <AlertTriangle className="w-4 h-4 mr-1" />
                    <span>Not Suitable for Heavy Waste</span>
                </div>
            )}

            {/* Pricing information */}
            <div className="mt-4 flex items-baseline">
                <span className="text-2xl font-bold text-blue-500">£{calculatePrice()}</span>
                <span className="ml-2 text-gray-400 text-sm">per week</span>
            </div>

            {/* Selection button with conditional styling */}
            <button
                onClick={() => onSelect(bin)}
                className={`w-full mt-4 py-2 px-4 rounded-md flex items-center justify-center transition-colors ${
                    isSelected
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
            >
                {isSelected ? (
                    <span>Selected</span>
                ) : (
                    <>
                        <span>Select This Bin</span>
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </>
                )}
            </button>
        </div>
    );
};

export default SelectorCard;