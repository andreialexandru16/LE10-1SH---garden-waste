import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import SelectorCard from './SelectorCard';
import ProgressStepper from './ProgressStepper';

/**
 * Main component for bin selection page
 * Manages state, data fetching, and layout of bin selection options
 */
const Selector = () => {
    // State management for component
    const [bins, setBins] = useState([]);
    const [selectedBin, setSelectedBin] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch bin data on component mount
    useEffect(() => {
        const fetchBins = async () => {
            try {
                setLoading(true);
                // Mocked data for development - would use actual API call in production
                // In production: const response = await fetch('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft');
                const data = [
                    {"id":11554,"size":4,"hire_period_days":14,"transport_cost":null,"per_tonne_cost":null,"price_before_vat":311,"vat":20,"postcode":"NR32","area":null,"forbidden":false,"created_at":"2021-04-06T17:04:42","updated_at":"2024-04-02T09:22:38","allowed_on_road":true,"allows_heavy_waste":true},
                    {"id":11555,"size":6,"hire_period_days":14,"transport_cost":null,"per_tonne_cost":null,"price_before_vat":342,"vat":20,"postcode":"NR32","area":null,"forbidden":false,"created_at":"2021-04-06T17:04:42","updated_at":"2024-04-02T09:22:38","allowed_on_road":true,"allows_heavy_waste":true},
                    {"id":11556,"size":8,"hire_period_days":14,"transport_cost":null,"per_tonne_cost":null,"price_before_vat":420,"vat":20,"postcode":"NR32","area":null,"forbidden":false,"created_at":"2021-04-06T17:04:42","updated_at":"2024-04-02T09:22:38","allowed_on_road":true,"allows_heavy_waste":true},
                    {"id":11557,"size":10,"hire_period_days":14,"transport_cost":null,"per_tonne_cost":null,"price_before_vat":448,"vat":20,"postcode":"NR32","area":null,"forbidden":false,"created_at":"2021-04-06T17:04:42","updated_at":"2024-04-02T09:22:38","allowed_on_road":false,"allows_heavy_waste":false},
                    {"id":11558,"size":12,"hire_period_days":14,"transport_cost":null,"per_tonne_cost":null,"price_before_vat":491,"vat":20,"postcode":"NR32","area":null,"forbidden":false,"created_at":"2021-04-06T17:04:42","updated_at":"2024-04-02T09:22:38","allowed_on_road":false,"allows_heavy_waste":false},
                    {"id":11559,"size":14,"hire_period_days":14,"transport_cost":null,"per_tonne_cost":null,"price_before_vat":527,"vat":20,"postcode":"NR32","area":null,"forbidden":false,"created_at":"2021-04-06T17:04:42","updated_at":"2024-04-02T09:22:38","allowed_on_road":false,"allows_heavy_waste":false},
                    {"id":11560,"size":16,"hire_period_days":14,"transport_cost":null,"per_tonne_cost":null,"price_before_vat":556,"vat":20,"postcode":"NR32","area":null,"forbidden":false,"created_at":"2021-04-06T17:04:42","updated_at":"2024-04-02T09:22:38","allowed_on_road":false,"allows_heavy_waste":false},
                    {"id":11561,"size":20,"hire_period_days":14,"transport_cost":236,"per_tonne_cost":236,"price_before_vat":944,"vat":20,"postcode":"NR32","area":null,"forbidden":false,"created_at":"2021-04-06T17:04:42","updated_at":"2024-04-02T09:22:38","allowed_on_road":false,"allows_heavy_waste":true},
                    {"id":11562,"size":40,"hire_period_days":14,"transport_cost":236,"per_tonne_cost":236,"price_before_vat":944,"vat":20,"postcode":"NR32","area":null,"forbidden":false,"created_at":"2021-04-06T17:04:42","updated_at":"2024-04-02T09:22:38","allowed_on_road":false,"allows_heavy_waste":false}
                ];

                setBins(data);
                setLoading(false);
            } catch (err) {
                setError('Failed to load bin options. Please try again later.');
                setLoading(false);
                console.error('Error fetching bin data:', err);
            }
        };

        fetchBins();
    }, []);

    // Handler for bin selection
    const handleSelectBin = (bin) => {
        setSelectedBin(bin.id);
    };

    // Handler for continue button action
    const handleContinue = () => {
        // Would implement navigation to next step in production
        // For now just log the selected bin
        console.log(`Selected bin ID: ${selectedBin}`);
    };

    // Handler for back button action
    const handleBack = () => {
        // Would implement navigation to previous step in production
        console.log('Navigating back to previous step');
    };

    /**
     * Utility function to group bins into rows for responsive grid layout
     * @param {Array} bins - Array of bin objects
     * @param {Number} itemsPerRow - Maximum number of items per row
     * @returns {Array} Array of bin arrays grouped by row
     */
    const groupBinsIntoRows = (bins, itemsPerRow = 3) => {
        const rows = [];
        for (let i = 0; i < bins.length; i += itemsPerRow) {
            rows.push(bins.slice(i, i + itemsPerRow));
        }
        return rows;
    };

    const binRows = groupBinsIntoRows(bins);

    // Loading state UI
    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    // Error state UI
    if (error) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
                <div className="bg-red-500 p-4 rounded-lg">
                    <p>{error}</p>
                    <button
                        className="mt-4 px-4 py-2 bg-white text-red-500 rounded-lg font-medium"
                        onClick={() => window.location.reload()}
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    // Main component UI
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Progress indicator */}
            <ProgressStepper currentStep={3} />

            {/* Main content area */}
            <div className="container mx-auto px-4 pb-16">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold mb-2">Choose Your Bin Size</h1>
                    <p className="text-gray-400">Select the bin size that best suits your needs</p>
                </div>

                {/* Responsive grid of bin options */}
                <div className="space-y-6">
                    {binRows.map((row, rowIndex) => (
                        <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {row.map((bin) => (
                                <SelectorCard
                                    key={bin.id}
                                    bin={bin}
                                    isSelected={selectedBin === bin.id}
                                    onSelect={() => handleSelectBin(bin)}
                                />
                            ))}
                        </div>
                    ))}
                </div>

                {/* Informational section */}
                <div className="mt-8 bg-gray-800 p-4 rounded-lg">
                    <div className="flex items-start">
                        <svg className="w-5 h-5 text-blue-400 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                            <p className="text-sm text-gray-300">
                                All bins include 14-day hire period. Prices shown include VAT. Heavy waste includes soil, rubble, bricks,
                                concrete and similar materials. If you're unsure about which bin size is right for you,
                                please <a href="#" className="text-blue-400 hover:underline">contact our support team</a> for assistance.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Navigation controls */}
                <div className="mt-8 flex justify-between">
                    <button
                        onClick={handleBack}
                        className="px-6 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors"
                    >
                        Back
                    </button>

                    <button
                        onClick={handleContinue}
                        className={`px-6 py-2 rounded-md flex items-center transition-colors ${
                            selectedBin
                                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                : 'bg-gray-600 text-gray-300 cursor-not-allowed'
                        }`}
                        disabled={!selectedBin}
                    >
                        Continue
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Selector;