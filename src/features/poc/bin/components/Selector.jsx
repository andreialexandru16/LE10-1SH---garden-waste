// src/features/components/Selector.jsx
import React, { useState } from "react";
import skipData from "./skip-config";
import SelectorCard from "./SelectorCard";
import "./css/Selector.css";

const Selector = () => {
    const [selectedSkipId, setSelectedSkipId] = useState(null);
    const handleSelect = (id) => setSelectedSkipId(id);

    return (
        <div className="selector-container">
            <h2 className="selector-title">Choose Your Skip Size</h2>
            <p className="selector-subtitle">
                Select the skip size that best suits your needs
            </p>
            <div className="selector-grid">
                {skipData.map((skip) => (
                    <SelectorCard
                        key={skip.id}
                        skip={skip}
                        isSelected={skip.id === selectedSkipId}
                        onSelect={handleSelect}
                    />
                ))}
            </div>
        </div>
    );
};

export default Selector;
