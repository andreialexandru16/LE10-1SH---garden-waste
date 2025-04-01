// Exemplu de setare a proprietății `disabled` în skipData
// Poți stabili tu condițiile (ex: ultimele 3 skip-uri sau altă logică)

// src/features/components/skip-config.js
const skipData = [
    {
        id: 1,
        title: "6 Yard Skip",
        size: 6,
        displayPrice: "£342 for 14 days",
        imageUrl: "https://via.placeholder.com/600x400?text=6+Yard+Skip",
        disabled: false,
    },
    {
        id: 2,
        title: "8 Yard Skip",
        size: 8,
        displayPrice: "£420 for 14 days",
        imageUrl: "https://via.placeholder.com/600x400?text=8+Yard+Skip",
        disabled: false,
    },
    {
        id: 3,
        title: "10 Yard Skip",
        size: 10,
        displayPrice: "£448 for 14 days",
        imageUrl: "https://via.placeholder.com/600x400?text=10+Yard+Skip",
        disabled: true, // EX: marcat ca disabled
    },
    {
        id: 4,
        title: "12 Yard Skip",
        size: 12,
        displayPrice: "£491 for 14 days",
        imageUrl: "https://via.placeholder.com/600x400?text=12+Yard+Skip",
        disabled: true, // EX: marcat ca disabled
    },
    {
        id: 5,
        title: "14 Yard Skip",
        size: 14,
        displayPrice: "£527 for 14 days",
        imageUrl: "https://via.placeholder.com/600x400?text=14+Yard+Skip",
        disabled: true, // EX: marcat ca disabled
    },
];

export default skipData;
