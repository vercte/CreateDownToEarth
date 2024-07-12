ServerEvents.tags("item", (event) => {
    event.remove("c:salt", "createfood:salt");
});

ServerEvents.recipes((event) => {
    const removeID = (id) => { event.remove({ id: id }) }
    const removeOut = (output) => { event.remove({ output: output }) }

    event.remove({ mod: "createfood", type: "farmersdelight:cooking" })

    const mixing = (inputs, outputs, heat, processingTime) => {
        event.custom({
            type: "create:mixing",
            ingredients: inputs,
            results: outputs,
            heatRequirement: heat || "",
            processingTime: processingTime || 140
        });
    }

    const compacting = (inputs, outputs, heat) => {
        event.custom({
            type: "create:compacting",
            ingredients: inputs,
            results: outputs,
            heatRequirement: heat
        });
    }

    const splashing = (input, outputs) => {
        event.custom({
            type: "create:splashing",
            ingredients: input,
            results: outputs
        });
    }

    //#region create food buckets
    const createFoodBuckets = [
        "squid_ink",
        "melon_jam",
        "melon_milkshake",
        "melon_ice_cream",
        "melon_cream_frosting",
        "apple_jam",
        "sweet_berry_jam",
        "chorus_fruit_jam",
        "glow_berry_jam",
        "apple_juice",
        "berry_juice",
        "chorus_fruit_juice",
        "glow_berry_juice",
        "apple_milkshake",
        "apple_ice_cream",
        "berry_milkshake",
        "berry_ice_cream",
        "glow_berry_milkshake",
        "glow_berry_ice_cream",
        "chorus_fruit_milkshake",
        "chorus_fruit_ice_cream",
        "chocolate_milkshake",
        "chocolate_ice_cream",
        "milkshake",
        "ice_cream",
        "heavy_cream",
        "slime",
        "white_chocolate_fudge",
        "dark_chocolate_fudge",
        "chocolate_fudge",
        "toffee_fudge",
        "caramel_fudge",
        "butterscotch_fudge",
        "apple_cream_frosting",
        "condensed_milk",
        "butterscotch",
        "toffee",
        "blackstrap_molasses",
        "molasses",
        "cane_syrup",
        "sugar_cane_juice",
        "vegetable_oil_bucket",
        "black_gelatin_mix",
        "blue_gelatin_mix",
        "brown_gelatin_mix",
        "cyan_gelatin_mix",
        "gray_gelatin_mix",
        "green_gelatin_mix",
        "light_blue_gelatin_mix",
        "light_gray_gelatin_mix",
        "lime_gelatin_mix",
        "magenta_gelatin_mix",
        "orange_gelatin_mix",
        "pink_gelatin_mix",
        "purple_gelatin_mix",
        "red_gelatin_mix",
        "yellow_gelatin_mix",
        "gelatin_mix",
        "sweet_berry_cream_frosting",
        "cacao_butter",
        "cacao_mass",
        "caramel",
        "chocolate_cream_frosting",
        "chocolate_milk",
        "chorus_fruit_cream_frosting",
        "cream_frosting",
        "dark_chocolate",
        "glow_berry_cream_frosting",
        "hot_chocolate",
        "hot_dark_chocolate",
        "hot_white_chocolate",
        "white_chocolate"
    ];

    for(let item of createFoodBuckets) {
        let itemID = `createfood:${item}_bucket`;
        event.remove({ input: itemID, type: "minecraft:crafting_shapeless" });
    }
    //#endregion

    //#region salt
    removeID("spelunkery:mixing/rock_salt");
    removeID("spelunkery:mixing/salt");
    removeOut("createfood:salt");

    mixing([
        { item: "minecraft:pointed_dripstone" },
        { fluid: "minecraft:water", amount: FluidAmounts.BUCKET / 10}
    ], [
        { item: "spelunkery:rock_salt" }
    ], "heated");

    // recipe for pointed dripstone
    compacting([
        { item: "minecraft:cobblestone" },
        { item: "minecraft:clay_ball" },
        { fluid: "minecraft:water", amount: FluidAmounts.BUCKET / 10} 
    ], [
        { item: "minecraft:pointed_dripstone" }
    ], "heated");
    //#endregion

    //#region dough
    removeID("createfood:create/splashing/wheat_dough_from_splashing_water_farmersdelight");
    removeID("createfood:create/mixing/wheat_dough_from_mixing_water_farmersdelight");

    splashing([
        { item: "create:wheat_flour" }
    ], [
        { item: "farmersdelight:wheat_dough" }
    ]);

    mixing([
        { item: "create:wheat_flour" },
        { fluid: "minecraft:water", amount: FluidAmounts.BUCKET / 4 }
    ], [
        { item: "farmersdelight:wheat_dough" }
    ]);
    //#endregion
});