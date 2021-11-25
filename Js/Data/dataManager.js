// Gestion des données

import { recipes } from "./data.js";
let getAllData;
export let filterData = new Set(); //Retourne les données potentiellement modifiable 
export let data = allData();

/**
 * Récuperation des tags actifs 
 *
 * @var {Object}
 */
export let activeTag = {
    appliance   : [],
    ustensils   : [],
    ingredients : [], 
    text        : []
}



/**
 * Récuperation de l'ensemble des données et ajout de ces dernieres
 * dans la varible filterData
 *
 * @return  {Object}  [return description]
 */
export function allData() {
    recipes.forEach(recipes => {
        filterData.add(recipes);
    })
    return filterData;
}



/**
 * Récuperation des ingrédients des recettes dans filterData
 *
 * @return  {Set}  [return description]
 */
export function getIngredient() {
    let ingredient = new Set ()
    filterData.forEach(recipes => {
        recipes.ingredients.forEach(ing => {
            ingredient.add(ing.ingredient.toLowerCase())
        });
    });
    return ingredient;
}



/**
 * Récuperation des appareils des recettes dans filterData
 *
 * @return  {Object}  [return description]
 */
export function getAppliance() {
    let appliance = new Set ();
    filterData.forEach(element => {
        appliance.add(element.appliance.toLowerCase());
    })
    return appliance;
}



/**
 * Récuperation des ustensils des recettes dans filterData
 *
 * @return  {Object}  [return description]
 */
export function getUstensil() {
    const ustensils = new Set ();
    filterData.forEach(element => {
        element.ustensils.forEach(ust => {
            ustensils.add(ust.toLowerCase())
        })
    })
    return ustensils;
}



/**
 * Filtre des tags dans les bouton au click +
 * Ajout des tags dans activeTag
 *
 * @param   {string}  value    [value description]
 * @param   {string}  element  [element description]
 *
 * @return  {Object}           [return description]
 */
export function addNewValueInBtn(value, element) {
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
        if (!activeTag.ingredients.includes(value)){
            activeTag.ingredients.push(value)
        }
    }

    if (element ==='Appareil'){
        let filterAppliance = new Set ();
        filterData.forEach(recipe => {
            if(recipe.appliance.toLowerCase() == value){
                filterAppliance.add(recipe);
            }
        })
        filterData = filterAppliance;
        if (!activeTag.appliance.includes(value)){
            activeTag.appliance.push(value)
        };
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
        if (!activeTag.ustensils.includes(value)){
            activeTag.ustensils.push(value)
        };
    }
}



/**
 * Suppression des tag cliqué de activeTag
 *
 * @param   {string}  value  [value description]
 * @param   {string}  type   [type description]
 *
 * @return  {Object}         [return description]
 */
export function removeValueInBtn (value, type){
    const index = activeTag[type].indexOf(value);
    if(index >= 0){
        activeTag[type].forEach(filterRecipe => {
            if(filterRecipe.toLowerCase() == value){
                activeTag[type].splice(index, 1)
            }
        });
    }
}