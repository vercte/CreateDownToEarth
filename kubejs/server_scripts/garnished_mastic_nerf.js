ServerEvents.recipes((event) => {
    const removeCrushingRecipe = (input) => event.remove({ input: input, type: "create:crushing" });

    removeCrushingRecipe("#create:stone_types/ochrum");
    removeCrushingRecipe("#create:stone_types/crimsite");
    removeCrushingRecipe("#create:stone_types/veridium");
    removeCrushingRecipe("#create:stone_types/asurine");

    event.custom({
        type: "create:crushing",
        ingredients: [
            { tag: "create:stone_types/ochrum" }
        ],
        results: [
            { item: "spelunkery:raw_gold_nugget", count: 2, chance: 0.4 },
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
            { item: "spelunkery:rough_cinnabar", count: 1, chance: 0.1 }
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
});
