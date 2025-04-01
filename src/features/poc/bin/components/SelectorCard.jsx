// src/features/components/SelectorCard.jsx
import React from "react";
import "./css/SelectorCard.css";

const SelectorCard = ({ skip, isSelected, onSelect }) => {
    const handleClick = () => {
        if (!skip.disabled) {
            onSelect(skip.id);
        }
    };

    return (
        <div
            className={`selector-card ${isSelected ? "selected" : ""} ${
                skip.disabled ? "disabled" : ""
            }`}
            onClick={handleClick}
        >
            <div
                className="card-image"
                style={{ backgroundImage: `url(${skip.imageUrl})` }}
            ></div>
            <div className="card-overlay">
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
