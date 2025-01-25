// Author Quintan Meinung
// WoW Randomizer Application
// This file contains the logic for randomizing a hero's faction, race, gender, and class


// 1. Global Variables and Constants
// Valid Faction/Race Combinations:
const validFactionCombinations = {
    Alliance: ["Human", "Dwarf", "Gnome", "Night_Elf"],
    Horde: ["Orc", "Troll", "Tauren", "Undead"]
};

// Valid Race/Class Combinations:
const validCombinations = {
    Human: ["Warrior", "Mage", "Priest", "Warlock", "Rogue"],
    Dwarf: ["Warrior", "Hunter", "Paladin", "Priest", "Rogue"],
    Gnome: ["Warrior", "Mage", "Warlock", "Rogue"],
    Night_Elf: ["Warrior", "Druid", "Priest", "Hunter", "Rogue"],
    Orc: ["Warrior", "Hunter", "Shaman", "Warlock", "Rogue"],
    Troll: ["Warrior", "Mage", "Hunter", "Priest", "Shaman", "Rogue"],
    Tauren: ["Warrior", "Hunter", "Druid", "Shaman"],
    Undead: ["Warrior", "Mage", "Priest", "Warlock", "Rogue"]
};

// Variables to hold Faction/Gender/Race/Hero Classes
const factions = Object.keys(validFactionCombinations); // Use valid combinations keys
const genders = ["Male", "Female"];
const races = Object.keys(validCombinations); // Use valid combinations keys
const allRaces = Object.keys(validCombinations); // For the random race selection

// 2. Helper Function to Replace "_" with a space for better format
function formatRaceName(race) {
    return race.replace("_", " "); 
}

// 3. Main Logic Functions
// Randomizer Function for all Combination Results
function randomizeHero() {
    const faction = factions[Math.floor(Math.random() * factions.length)];
    const raceOptionsForFaction = validFactionCombinations[faction];
    const race = raceOptionsForFaction[Math.floor(Math.random() * raceOptionsForFaction.length)]; // Pick a race from the faction   
    const possibleClasses = validCombinations[race];
    const heroClass = possibleClasses[Math.floor(Math.random() * possibleClasses.length)];
    const gender = genders[Math.floor(Math.random() * genders.length)];
    
    return { faction, gender, race, heroClass };
}

// 4. Event Listeners and UI Manipulation
// Get the element by ID to update the UI with new hero details on every user button click
document.getElementById("randomize-btn").addEventListener("click", () => {
    const hero = randomizeHero();  
    // Update the UI with new hero details
    document.getElementById("faction").textContent = hero.faction;
    document.getElementById("gender").textContent = hero.gender;
    document.getElementById("race").textContent = formatRaceName(hero.race);
    document.getElementById("class").textContent = hero.heroClass;
});