(function(aic) {
    var Location = aic.Location,

        kitchen = new Location(
            "The Kitchen",
            "You are in a large kitchen. There is the stench of decay."
        ),

        library = new Location(
            "The Library",
            "You are in a dusty library. Ancient books line the walls."
        ),

        dungeon = new Location(
            "The Dungeon",
            "You are in a dark, dank dungeon."
        ),

        armoury = new Location(
            "The Armoury",
            "You are in the armoury. It is in a state of disrepair."
        );


    kitchen.addExit("north", library);
    library.addExit("south", kitchen);

    kitchen.addExit("down", dungeon);
    dungeon.addExit("up", kitchen);

    library.addExit("west", armoury);
    armoury.addExit("east", library);

    kitchen.addItem("a cleaver");
    library.addItem("a rusty key");
    dungeon.addItem("a mysterious sapphire");
    armoury.addItem("an elven sword");

    aic.startLocation = library;

})(AdventuresInCode);