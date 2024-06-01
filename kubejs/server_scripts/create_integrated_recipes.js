ServerEvents.recipes((event) => {
    event.remove({ output: "measurements:tape_measure" })
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "minecraft:gold_ingot" },
        results: [
            { item: "measurements:tape_measure" }
        ],
        loops: 1,
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    { item: "downtoearth:incomplete_tape_measure" },
                    { item: "create:iron_sheet" }
                ],
                results: [
                    { item: "downtoearth:incomplete_tape_measure" }
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "downtoearth:incomplete_tape_measure" },
                    { item: "minecraft:iron_nugget" }
                ],
                results: [
                    { item: "downtoearth:incomplete_tape_measure" }
                ]
            },
            {
                type: "create:pressing",
                ingredients: [
                    { item: "downtoearth:incomplete_tape_measure" }
                ],
                results: [
                    { item: "downtoearth:incomplete_tape_measure" }
                ]
            }
        ],
        transitionalItem: { item: "downtoearth:incomplete_tape_measure" }
    });
});