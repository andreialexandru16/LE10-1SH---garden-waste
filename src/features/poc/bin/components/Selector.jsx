// src/features/components/Selector.jsx
import React, { useState } from "react";
import skipData from "./skip-config";
import SelectorCard from "./SelectorCard";
import "./css/Selector.css";

const Selector = () => {
    const [selectedSkipId, setSelectedSkipId] = useState(null);

    const handleSelect = (id) => {
        setSelectedSkipId(id);
    };

    return (
        <div className="selector-container container">
            <h2 className="selector-title">Choose Your Skip Size</h2>
            <p className="selector-subtitle">Select the skip size that best suits your needs</p>
            <div className="row mt-4">
                {skipData.map((skip) => (
                    <div className="col-md-4 mb-4" key={skip.id}>
                        <SelectorCard
                            skip={skip}
                            isSelected={skip.id === selectedSkipId}
                            onSelect={handleSelect}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Selector;
