// src/features/components/SelectorCard.jsx
import React from "react";
import "./css/SelectorCard.css";

const SelectorCard = ({ skip, isSelected, onSelect }) => {
    const handleClick = () => {
        onSelect(skip.id);
    };

    return (
        <div
            className={`skip-card ${isSelected ? "selected" : ""}`}
            onClick={handleClick}
        >
            <div
                className="skip-card-background"
                style={{ backgroundImage: `url(${skip.imageUrl})` }}
            />
            <div className="skip-card-overlay">
                <div className="skip-card-top-left">{skip.title}</div>
                <div className="skip-card-top-right">{skip.capacity}</div>
                <div className="skip-card-bottom-left">{skip.price}</div>
                <button
                    className={`skip-card-button ${isSelected ? "selected" : ""}`}
                    onClick={(e) => {
                        e.stopPropagation();
                        handleClick();
                    }}
                >
                    {isSelected ? "Selected" : "Select This Skip"}
                </button>
            </div>
        </div>
    );
};

export default SelectorCard;
