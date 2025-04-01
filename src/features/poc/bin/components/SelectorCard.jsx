// src/features/components/SelectorCard.jsx
import React from "react";
import "./css/SelectorCard.css";

const SelectorCard = ({ skip, isSelected, onSelect }) => {
    const handleClick = () => {
        if (skip.disabled) return;
        onSelect(skip.id);
    };

    return (
        <div
            className={`selector-card ${isSelected ? "selected" : ""} ${
                skip.disabled ? "disabled" : ""
            }`}
            onClick={handleClick}
        >
            <div className="card-image-wrapper">
                <img src={skip.imageUrl} alt={skip.title} className="card-image" />
            </div>
            <div className="card-content">
                <div className="card-header">
                    <h3 className="card-title">{skip.title}</h3>
                    <span className="card-capacity">{skip.size} yards</span>
                </div>
                <div className="card-footer">
                    <span className="card-price">{skip.displayPrice}</span>
                    <button className="select-button" disabled={skip.disabled}>
                        {isSelected ? "Selected" : "Select This Skip"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SelectorCard;
