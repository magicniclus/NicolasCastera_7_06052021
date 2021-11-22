// Gestion des données

import { recipes } from "./data.js";

export let data = recipes;
let filterData; //Retourne les données potentiellement modifiable 

export let activeTag = {
    appliance   : [],
    ustensils   : [],
    ingredients : [], 
    text        : []
}

export function allData() {
    filterData = new Set ();
    data.forEach(recipes => {
        filterData.add(recipes);
    })
    return filterData;
}

export function getIngredient() {
    let ingredient = new Set ()
    filterData.forEach(recipes => {
        recipes.ingredients.forEach(ing => {
            ingredient.add(ing.ingredient.toLowerCase())
        });
    });
    return ingredient;
}

export function getAppliance() {
    let appliance = new Set ();
    filterData.forEach(element => {
        appliance.add(element.appliance.toLowerCase());
    })
    return appliance;
}

export function getUstensil() {
    const ustensils = new Set ();
    filterData.forEach(element => {
        element.ustensils.forEach(ust => {
            ustensils.add(ust.toLowerCase())
        })
    })
    return ustensils;
}

