// src/features/poc/bin/components/SelectorCard.jsx

import React from "react";

const SelectorCard = ({ skip, isSelected, onSelect }) => {
    return (
        <div
            className={`card h-100 ${isSelected ? "border-primary shadow" : "border-secondary"}`}
            style={{ cursor: "pointer" }}
            onClick={() => onSelect(skip.id)}
        >
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{skip.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{skip.capacity}</h6>
                <p className="card-text flex-grow-1">{skip.description}</p>
                <p className="card-text fw-bold">{skip.price}</p>
                <button className={`btn ${isSelected ? "btn-primary" : "btn-outline-primary"}`}>
                    {isSelected ? "Selected" : "Select This Skip"}
                </button>
            </div>
        </div>
    );
};

export default SelectorCard;
