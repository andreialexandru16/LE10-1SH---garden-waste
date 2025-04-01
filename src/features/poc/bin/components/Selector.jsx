import React, { useState } from "react";
import skipData from "./skip-config";
import SelectorCard from "./SelectorCard";

const Selector = () => {
    const [selectedSkipId, setSelectedSkipId] = useState(null);

    const handleSelect = (id) => {
        setSelectedSkipId(id);
    };

    return (
        <div style={{ padding: "2rem 1rem", backgroundColor: "#121212", minHeight: "100vh" }}>
            <h2 style={{ color: "#fff", marginBottom: "1rem" }}>Choose Your Skip Size</h2>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
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
