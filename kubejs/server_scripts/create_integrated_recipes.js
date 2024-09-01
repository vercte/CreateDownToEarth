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

    // #region Crushing
    event.custom({
        type: "create:crushing",
        ingredients: [
            { item: "minecraft:quartz" },
        ],
        results: [
            { item: "create:experience_nugget", chance: 0.80}
        ]
    });

    event.custom({
        type: "create:crushing",
        ingredients: [
            { item: "spelunkery:rough_quartz_block" },
        ],
        results: [
            { item: "create:experience_nugget", count: 9, chance: 0.80}
        ]
    });
    // #endregion

    event.custom({
        type: "create:haunting",
        ingredients: [
            { item: "minecraft:oxeye_daisy" },
        ],
        results: [
            { item: "garnished:pansophical_daisy"}
        ]
    });
});