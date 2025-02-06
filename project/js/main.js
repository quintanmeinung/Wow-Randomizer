// Author Quintan Meinung
// WoW Randomizer Application
// This file contains the logic for randomizing a hero's faction, race, gender, and class

import { classicData } from './data/classic.js';
import { retailData } from './data/retail.js';
import { cataclysmData } from "./data/cataclysm.js";
import { getRandomElement } from './helpers.js';

const expansions = {
    Classic: classicData,
    Cataclysm: cataclysmData,
    Retail: retailData
};

let currentExpansion = classicData;

//Function for updating the expansion for User
function updateExpansion(expansion) {
    if (expansions[expansion]) {
        currentExpansion = expansions[expansion];
        document.getElementById("expansion").textContent = `Current Expansion: ${expansion}`;
    }
}

// 2. Helper Functions to Replace "_" with a space for better format
function formatRaceName(race, heroClass) {
    return race.replace("_", " ");
}

function formatClassName(heroClass) {
    return heroClass.replace("_", " ");
}

// 3. Main Logic Functions
// Randomizer Function for all Combination Results
function randomizeHero() {
    const faction = getRandomElement(currentExpansion.factions);
    const gender = getRandomElement(currentExpansion.genders);
    const factionRaces = currentExpansion.validCombinations[faction]; 
    const race = getRandomElement(Object.keys(factionRaces));
    const heroClass = getRandomElement(factionRaces[race]);

    return { faction, gender, race, heroClass };
}


// 4. Event Listeners and UI Manipulation
// Get the element by ID to update the UI with new hero details on every user button click
//document.addEventListener("DOMContentLoaded", () => {
// Randomize Hero Button
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("randomize-btn").addEventListener("click", () => {
        const hero = randomizeHero();
        document.getElementById("faction").textContent = hero.faction;
        document.getElementById("gender").textContent = hero.gender;
        document.getElementById("race").textContent = formatRaceName(hero.race);
        document.getElementById("class").textContent = formatClassName(hero.heroClass);
    });

    document.getElementById("classic-btn").addEventListener("click", () => updateExpansion("Classic"));
    document.getElementById("cataclysm-btn").addEventListener("click", () => updateExpansion("Cataclysm"));
    document.getElementById("retail-btn").addEventListener("click", () => updateExpansion("Retail"));
});
