// Valid Race/Class Combinations for Classic:
export const classicData = {
    factions: ["Alliance", "Horde"],
    genders: ["Male", "Female"],
    validCombinations : {
        Alliance : {
        Human: ["Warrior", "Mage", "Priest", "Warlock", "Rogue"],
        Dwarf: ["Warrior", "Hunter", "Paladin", "Priest", "Rogue"],
        Gnome: ["Warrior", "Mage", "Warlock", "Rogue"],
        Night_Elf: ["Warrior", "Druid", "Priest", "Hunter", "Rogue"]
        },
        Horde : {
            Orc: ["Warrior", "Hunter", "Shaman", "Warlock", "Rogue"],
            Troll: ["Warrior", "Mage", "Hunter", "Priest", "Shaman", "Rogue"],
            Tauren: ["Warrior", "Hunter", "Druid", "Shaman"],
            Undead: ["Warrior", "Mage", "Priest", "Warlock", "Rogue"]
        }
    }
};