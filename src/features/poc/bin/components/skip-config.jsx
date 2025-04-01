// src/features/components/skip-config.jsx

const skipImages = {
    4: "https://picsum.photos/seed/4yardskip/600/400",
    6: "https://picsum.photos/seed/6yardskip/600/400",
    8: "https://picsum.photos/seed/8yardskip/600/400",
    10: "https://picsum.photos/seed/10yardskip/600/400",
    12: "https://picsum.photos/seed/12yardskip/600/400",
    14: "https://picsum.photos/seed/14yardskip/600/400",
    16: "https://picsum.photos/seed/16yardskip/600/400",
    20: "https://picsum.photos/seed/20yardskip/600/400",
    40: "https://picsum.photos/seed/40yardskip/600/400",
};

const skipData = [
    {
        id: 11554,
        size: 4,
        hire_period_days: 14,
        transport_cost: null,
        per_tonne_cost: null,
        price_before_vat: 311,
        vat: 20,
        postcode: "NR32",
        area: null,
        forbidden: false,
        created_at: "2021-04-06T17:04:42",
        updated_at: "2024-04-02T09:22:38",
        allowed_on_road: true,
        allows_heavy_waste: true,
    },
    {
        id: 11555,
        size: 6,
        hire_period_days: 14,
        transport_cost: null,
        per_tonne_cost: null,
        price_before_vat: 342,
        vat: 20,
        postcode: "NR32",
        area: null,
        forbidden: false,
        created_at: "2021-04-06T17:04:42",
        updated_at: "2024-04-02T09:22:38",
        allowed_on_road: true,
        allows_heavy_waste: true,
        disabled:true
    },
    {
        id: 11556,
        size: 8,
        hire_period_days: 14,
        transport_cost: null,
        per_tonne_cost: null,
        price_before_vat: 420,
        vat: 20,
        postcode: "NR32",
        area: null,
        forbidden: false,
        created_at: "2021-04-06T17:04:42",
        updated_at: "2024-04-02T09:22:38",
        allowed_on_road: true,
        allows_heavy_waste: true,
        disabled:true
    },
    {
        id: 11557,
        size: 10,
        hire_period_days: 14,
        transport_cost: null,
        per_tonne_cost: null,
        price_before_vat: 448,
        vat: 20,
        postcode: "NR32",
        area: null,
        forbidden: false,
        created_at: "2021-04-06T17:04:42",
        updated_at: "2024-04-02T09:22:38",
        allowed_on_road: false,
        allows_heavy_waste: false,
    },
    {
        id: 11558,
        size: 12,
        hire_period_days: 14,
        transport_cost: null,
        per_tonne_cost: null,
        price_before_vat: 491,
        vat: 20,
        postcode: "NR32",
        area: null,
        forbidden: false,
        created_at: "2021-04-06T17:04:42",
        updated_at: "2024-04-02T09:22:38",
        allowed_on_road: false,
        allows_heavy_waste: false,
    },
    {
        id: 11559,
        size: 14,
        hire_period_days: 14,
        transport_cost: null,
        per_tonne_cost: null,
        price_before_vat: 527,
        vat: 20,
        postcode: "NR32",
        area: null,
        forbidden: false,
        created_at: "2021-04-06T17:04:42",
        updated_at: "2024-04-02T09:22:38",
        allowed_on_road: false,
        allows_heavy_waste: false,
    },
    {
        id: 11560,
        size: 16,
        hire_period_days: 14,
        transport_cost: null,
        per_tonne_cost: null,
        price_before_vat: 556,
        vat: 20,
        postcode: "NR32",
        area: null,
        forbidden: false,
        created_at: "2021-04-06T17:04:42",
        updated_at: "2024-04-02T09:22:38",
        allowed_on_road: false,
        allows_heavy_waste: false,
        disabled:true
    },
    {
        id: 11561,
        size: 20,
        hire_period_days: 14,
        transport_cost: 236,
        per_tonne_cost: 236,
        price_before_vat: 944,
        vat: 20,
        postcode: "NR32",
        area: null,
        forbidden: false,
        created_at: "2021-04-06T17:04:42",
        updated_at: "2024-04-02T09:22:38",
        allowed_on_road: false,
        allows_heavy_waste: true,
    },
    {
        id: 11562,
        size: 40,
        hire_period_days: 14,
        transport_cost: 236,
        per_tonne_cost: 236,
        price_before_vat: 944,
        vat: 20,
        postcode: "NR32",
        area: null,
        forbidden: false,
        created_at: "2021-04-06T17:04:42",
        updated_at: "2024-04-02T09:22:38",
        allowed_on_road: false,
        allows_heavy_waste: false,
    },
];

skipData.forEach((skip) => {
    skip.title = `${skip.size} Yard Skip`;
    skip.imageUrl =
        skipImages[skip.size] || "https://picsum.photos/seed/defaultskip/600/400";
    skip.displayPrice = `£${skip.price_before_vat} for ${skip.hire_period_days} days`;
});

export default skipData;
