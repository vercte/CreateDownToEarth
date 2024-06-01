Platform.mods.kubejs.name = "Create Down To Earth";

StartupEvents.modifyCreativeTab("kubejs:tab", (event) => {
    event.remove("downtoearth:incomplete_measuring_tape");
});