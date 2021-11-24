// Gestion des données

import { recipes } from "./data.js";
let getAllData;
export let filterData = new Set(); //Retourne les données potentiellement modifiable 
export let data = allData();

export let activeTag = {
    appliance   : [],
    ustensils   : [],
    ingredients : [], 
    text        : []
}

export function allData() {
    recipes.forEach(recipes => {
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

export function addNewValueInIngredientBtn(value, element) {
    if (element === 'Ingredients'){   
        let filterIngredient = new Set ();
        filterData.forEach(recipe => {
            recipe.ingredients.forEach(element => {
                if(element.ingredient.toLowerCase() == value){
                    filterIngredient.add(recipe);
                }
            });
        });
        filterData = filterIngredient;
    }

    if (element ==='Appareil'){
        let filterAppliance = new Set ();
        filterData.forEach(recipe => {
            if(recipe.appliance.toLowerCase() == value){
                filterAppliance.add(recipe);
            }
        })
        filterData = filterAppliance;
    }

    if (element === 'Ustensils'){
        let filterUstensil = new Set();
        filterData.forEach(recipe => {
            recipe.ustensils.forEach(ust => {
                if(ust.toLowerCase() == value){
                    filterUstensil.add(recipe)
                }
            });
        })
        filterData = filterUstensil;
    }
    
}