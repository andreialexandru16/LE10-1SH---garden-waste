import React from "react";

const SelectorCard = ({ skip, isSelected, onSelect }) => {
    const cardStyles = {
        border: isSelected ? "2px solid #1D4ED8" : "1px solid #333",
        backgroundColor: "#1f1f1f",
        color: "#fff",
        borderRadius: "8px",
        padding: "1rem",
        margin: "0.5rem",
        flex: "1",
        textAlign: "center",
        cursor: "pointer",
    };

    const buttonStyles = {
        backgroundColor: isSelected ? "#1D4ED8" : "#333",
        color: "#fff",
        border: "none",
        padding: "0.5rem 1rem",
        borderRadius: "4px",
        marginTop: "1rem",
        cursor: "pointer",
    };

    return (
        <div style={cardStyles} onClick={() => onSelect(skip.id)}>
            <h3 style={{ marginBottom: "0.5rem" }}>{skip.title}</h3>
            <p style={{ margin: "0.5rem 0" }}>{skip.price}</p>
            <p style={{ margin: "0.5rem 0" }}>{skip.capacity}</p>
            <p style={{ fontSize: "0.9rem", color: "#aaa" }}>{skip.description}</p>
            <button style={buttonStyles}>
                {isSelected ? "Selected" : "Select This Skip"}
            </button>
        </div>
    );
};

export default SelectorCard;
