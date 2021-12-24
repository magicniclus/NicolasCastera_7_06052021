import { recipes } from "./data.js";

const listIdOfRecipesByUstensils    = {};
const listIdOfRecipesByAppliance    = {};
const listIdOfRecipesByIngredient   = {};

let ustValideRecipes = [];
let appValideRecipes = [];
let ingValideRecipes = []


initIdUstensils();
initIdAppliance();
initIdIngredient()

/**
 * Retourne une clé valeur pour l'ensemble des id des ustensils ok
 *
 * @return  {Object}  Renvoi un objet 
 */
export function initIdUstensils() {
    for (let i = 0, size = recipes.length; i < size; i++) {
        recipes[i].ustensils.forEach(ustensil => {
            if (listIdOfRecipesByUstensils[ustensil] === undefined) listIdOfRecipesByUstensils[ustensil] = [];
            if (listIdOfRecipesByUstensils[ustensil].indexOf(i) === -1)listIdOfRecipesByUstensils[ustensil].push(i)
        });
    }
    console.log(listIdOfRecipesByUstensils);
    return listIdOfRecipesByUstensils;
}

/**
 * Retourne une clé valeur pour l'ensemble des id des appareils ok
 *
 * @return  {Object}  Renvoi un objet 
 */
  export function initIdAppliance() {
    for (let i = 0, size = recipes.length; i < size; i++) {
        if (listIdOfRecipesByAppliance[[recipes[i].appliance]] === undefined) listIdOfRecipesByAppliance[[recipes[i].appliance]] = [];
        if (listIdOfRecipesByAppliance[[recipes[i].appliance]].indexOf(i) === -1)listIdOfRecipesByAppliance[[recipes[i].appliance]].push(i)
    };
    console.log(listIdOfRecipesByAppliance);
    return listIdOfRecipesByAppliance;
 }

 /**
 * Retourne une clé valeur pour l'ensemble des id des ingredient ok
 *
 * @return  {Object}  Renvoi un objet 
 */
 export function initIdIngredient(){
    for (let i = 0, size = recipes.length; i < size; i++) {
        for(let r = 0, rSize = recipes[i].ingredients.length; r < rSize; r++){
            if(listIdOfRecipesByIngredient[[recipes[i].ingredients[r].ingredient]] === undefined) listIdOfRecipesByIngredient[[recipes[i].ingredients[r].ingredient]] = [];
            if(listIdOfRecipesByIngredient[[recipes[i].ingredients[r].ingredient]].indexOf(i) === -1) listIdOfRecipesByIngredient[[recipes[i].ingredients[r].ingredient]].push(i)
        }
    };
    console.log(listIdOfRecipesByIngredient);
    return listIdOfRecipesByIngredient;
 }

 /**
 * Object de récuperation des tags actifs ok
 *
 * @var {Object} 
 */
export let activeTag = {
    appliance: [],
    ustensils: [],  //[couteau]
    ingredients: [],
    text: []
}

export function getRecipes(){
    if(ustValideRecipes.length === 0 && appValideRecipes.length === 0){
        return recipes;
    }
}