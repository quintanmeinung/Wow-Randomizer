// Author Quintan Meinung
// WoW Randomizer Application
// This file contains the logic for randomizing a hero's faction, race, gender, and class
import { classicData } from './data/classic.js';
import { retailData } from './data/retail.js';
import { getRandomElement } from './helpers.js';

let currentExpansion = classicData;

// 2. Helper Function to Replace "_" with a space for better format
function formatRaceName(race) {
    return race.replace("_", " "); 
}

// 3. Main Logic Functions
// Randomizer Function for all Combination Results
function randomizeHero() {
    const faction = currentExpansion.factions[Math.floor(Math.random() * currentExpansion.factions.length)];
    const genders = currentExpansion.genders;
    const gender = genders[Math.floor(Math.random() * genders.length)];
    const factionRaces = currentExpansion.validCombinations[faction]; // Get races for the faction
    const races = Object.keys(factionRaces);
    const race = races[Math.floor(Math.random() * races.length)];
    const heroClass = factionRaces[race][Math.floor(Math.random() * factionRaces[race].length)];
    return { faction, gender, race, heroClass };
}

//Function for updating the expansion for User
function updateExpansion(expansion) {
    currentExpansion = expansion === 'Retail' ? retailData : classicData;
    document.getElementById("expansion").textContent = `Current Expansion: ${expansion}`;
}

// 4. Event Listeners and UI Manipulation
// Get the element by ID to update the UI with new hero details on every user button click
document.addEventListener("DOMContentLoaded", () => {
    // Randomize Hero Button
    document.getElementById("randomize-btn").addEventListener("click", () => {
        const hero = randomizeHero();  
        // Update the UI with new hero details
        document.getElementById("faction").textContent = hero.faction;
        document.getElementById("gender").textContent = hero.gender;
        document.getElementById("race").textContent = formatRaceName(hero.race);
        document.getElementById("class").textContent = hero.heroClass;
    });

    //Get element by ID for expansion update if the user requests it
    document.getElementById("expansion-select").addEventListener("change", (event) => {
        updateExpansion(event.target.value);
    });
});
console.log("Randomizing hero...");
console.log("Current expansion data:", currentExpansion);