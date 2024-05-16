ServerEvents.recipes((event) => {
    event.custom({
        type: "create:milling",
        ingredients: [
            { item: "spelunkery:rock_salt" }
        ],
        results: [
            { item: "spelunkery:salt", count: 1 },
            { item: "spelunkery:salt", count: 1, chance: 0.5 },
        ],
        processingTime: 160
    });
});