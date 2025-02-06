// Valid Race/Class Combinations for Cataclysm:
export const cataclysmData = {
    factions: ["Alliance", "Horde"],
    genders: ["Male", "Female"],
    validCombinations : {
        Alliance: { 
            Human: ["Warrior", "Mage", "Hunter", "Priest", "Warlock", "Rogue", "Death_Knight"],
            Dwarf: ["Warrior", "Hunter", "Paladin", "Priest", "Rogue", "Mage", "Shaman", "Warlock", "Death_Knight"],
            Gnome: ["Warrior", "Mage", "Warlock", "Rogue", "Hunter", "Priest", "Death_Knight"],
            Night_Elf: ["Warrior", "Druid", "Priest", "Hunter", "Rogue", "Mage", "Death_Knight"],
            Draenei: ["Warrior", "Priest", "Hunter","Mage", "Warlock", "Paladin", "Shaman", "Death_Knight"],
            Worgen: ["Warrior", "Druid", "Priest", "Hunter", "Rogue", "Mage", "Warlock", "Death_Knight"]    
        },
        Horde: {
            Orc: ["Warrior", "Hunter", "Shaman", "Warlock", "Rogue", "Mage", "Death_Knight"],
            Troll: ["Warrior", "Mage", "Hunter", "Priest", "Shaman", "Rogue", "Warlock", "Druid", "Death_Knight"],
            Tauren: ["Warrior", "Hunter", "Druid", "Shaman", "Paladin", "Priest", "Death_Knight"],
            Undead: ["Warrior", "Mage", "Priest", "Hunter", "Warlock", "Rogue", "Death_Knight"],
            Blood_Elf: ["Warrior", "Mage", "Hunter", "Priest", "Warlock", "Rogue", "Paladin", "Death_Knight"],
            Goblin: ["Warrior", "Mage", "Hunter", "Priest", "Warlock", "Rogue", "Shaman", "Death_Knight"],   
        }
    }
};