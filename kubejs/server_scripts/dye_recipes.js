ServerEvents.recipes((event) => {
    event.shapeless(
        Item.of("minecraft:lime_dye", 2),
        ["minecraft:yellow_dye", "minecraft:blue_dye"]
    );
});