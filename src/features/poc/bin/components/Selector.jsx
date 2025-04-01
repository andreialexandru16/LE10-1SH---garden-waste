// src/features/poc/bin/components/Selector.jsx

import React, { useState } from "react";
import skipData from "./skip-config";
import SelectorCard from "./SelectorCard";

const Selector = () => {
    const [selectedSkipId, setSelectedSkipId] = useState(null);

    const handleSelect = (id) => {
        setSelectedSkipId(id);
    };

    return (
        <div className="container py-5" style={{ backgroundColor: "#121212", minHeight: "100vh" }}>
            <h2 className="text-center text-white mb-4">Choose Your Skip Size</h2>
            <div className="row">
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
