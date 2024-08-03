ServerEvents.recipes((event) => {
    const removeCrushingRecipe = (input) => event.remove({ input: input, type: "create:crushing" });

    // #region Vanilla Create Ores
    removeCrushingRecipe("#create:stone_types/ochrum");
    removeCrushingRecipe("#create:stone_types/crimsite");
    removeCrushingRecipe("#create:stone_types/veridium");
    removeCrushingRecipe("#create:stone_types/asurine");
    removeCrushingRecipe("create:limestone");

    event.custom({
        type: "create:crushing",
        ingredients: [
            { tag: "create:stone_types/ochrum" }
        ],
        results: [
            { item: "spelunkery:raw_gold_nugget", count: 4, chance: 0.7 },
            { item: "minecraft:quartz", count: 1, chance: 0.1 }
        ],
        processingTime: 250
    });

    event.custom({
        type: "create:crushing",
        ingredients: [
            { tag: "create:stone_types/crimsite" }
        ],
        results: [
            { item: "spelunkery:raw_iron_nugget", count: 3, chance: 0.7 },
            { item: "spelunkery:rough_cinnabar", count: 1, chance: 0.05 }
        ],
        processingTime: 250
    });

    event.custom({
        type: "create:crushing",
        ingredients: [
            { tag: "create:stone_types/veridium" }
        ],
        results: [
            { item: "spelunkery:raw_copper_nugget", count: 2, chance: 0.6 },
            { item: "minecraft:clay_ball", count: 1, chance: 0.2 }
        ],
        processingTime: 250
    });

    event.custom({
        type: "create:crushing",
        ingredients: [
            { tag: "create:stone_types/asurine" }
        ],
        results: [
            { item: "spelunkery:raw_zinc_nugget", count: 2, chance: 0.5 },
            { item: "minecraft:gunpowder", count: 1, chance: 0.05 }
        ],
        processingTime: 250
    });

    event.custom({
        type: "create:crushing",
        ingredients: [
            { item: "create:limestone" }
        ],
        results: [
            { item: "spelunkery:raw_zinc_nugget", count: 1, chance: 0.05 },
            { item: "spelunkery:raw_iron_nugget", count: 1, chance: 0.08 },
            { item: "garnished:crushed_salt" }
        ],
        processingTime: 250
    });
    // #endregion

    // #region Zultanite Crushing
    removeCrushingRecipe("#garnished:stone_types/zultanite/red");
    removeCrushingRecipe("#garnished:stone_types/zultanite/yellow");
    removeCrushingRecipe("#garnished:stone_types/zultanite/green");
    removeCrushingRecipe("#garnished:stone_types/zultanite/blue");

    event.custom({
        type: "create:crushing",
        ingredients: [
            { tag: "garnished:stone_types/zultanite/yellow" }
        ],
        results: [
            { item: "spelunkery:raw_gold_nugget", count: 3, chance: 0.5 },
            { item: "minecraft:quartz", count: 1, chance: 0.1 }
        ],
        processingTime: 250
    });

    event.custom({
        type: "create:crushing",
        ingredients: [
            { tag: "garnished:stone_types/zultanite/red" }
        ],
        results: [
            { item: "spelunkery:raw_iron_nugget", count: 3, chance: 0.5 },
            { item: "spelunkery:rough_cinnabar", count: 1, chance: 0.1 }
        ],
        processingTime: 250
    });

    event.custom({
        type: "create:crushing",
        ingredients: [
            { tag: "garnished:stone_types/zultanite/green" }
        ],
        results: [
            { item: "spelunkery:raw_copper_nugget", count: 4, chance: 0.6 },
            { item: "minecraft:clay_ball", count: 1, chance: 0.2 }
        ],
        processingTime: 250
    });

    event.custom({
        type: "create:crushing",
        ingredients: [
            { tag: "garnished:stone_types/zultanite/blue" }
        ],
        results: [
            { item: "spelunkery:raw_zinc_nugget", count: 2, chance: 0.5 },
            { item: "minecraft:gunpowder", count: 1, chance: 0.05 }
        ],
        processingTime: 250
    });
    // #endregion
});
