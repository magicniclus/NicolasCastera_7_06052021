import { recipes } from "./data.js";

const listIdOfRecipesByUstensils    = {};
const listIdOfRecipesByAppliance    = {};
const listIdOfRecipesByIngredient   = {};

let ustValideRecipes = [];
let appValideRecipes = [];
let ingValideRecipes = [];

let ustensilList;
let applianceList;
let ingredientList;


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
            if(listIdOfRecipesByIngredient[[recipes[i].ingredients[r].ingredient.toLocaleLowerCase()]] === undefined) listIdOfRecipesByIngredient[[recipes[i].ingredients[r].ingredient.toLocaleLowerCase()]] = [];
            if(listIdOfRecipesByIngredient[[recipes[i].ingredients[r].ingredient.toLocaleLowerCase()]].indexOf(i) === -1) listIdOfRecipesByIngredient[[recipes[i].ingredients[r].ingredient.toLocaleLowerCase()]].push(i)
        }
    };
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

/**
 * Gestionnaire de l'affichage des recettes
 *
 * @return  {Object}  Recette filtrées
 */
export function getRecipes(){
    if(ustValideRecipes.length === 0 && appValideRecipes.length === 0){
        return recipes;
    }
}

/**
 * Création de la list des ustensil qui correspond à l'ensemble des ustensils de l'ensemble des 
 * recettes si activeTag === 0 sinon reprends les ustensils de newRecipes
 *
 * @return  {Array}  [Retourne la list des ustensils actifs]
 */
export function updateUstensilsList(){
    //Ajout des ustensil dans le bouton à l'ouverture de la page
    ustensilList = new Set();
    if(activeTag.ustensils.length === 0){
        recipes.forEach(rec => {
            rec.ustensils.forEach(ust => {
                ustensilList.add(ust.toLowerCase())
            })
        })
    } else {
        // ustensilList = new Set();
        // newRecipes.forEach(rec => {
        //     rec.ustensils.forEach(ust => {
        //         ustensil.add(ust)
        //     });
        // })
    }
    
    return [...ustensilList];
}

/**
 * Création de la list des appareils qui correspond à l'ensemble des appareils de l'ensemble des 
 * recettes si activeTag === 0 sinon reprends les appareils de newRecipes
 *
 * @return  {Array}  [retourn la list des appareils actifs]
 */
export function updateApplianceList(){
    //Ajout des ustensil dans le bouton à l'ouverture de la page
    applianceList = new Set();
    if(activeTag.appliance.length === 0){
        recipes.forEach(rec => {
            applianceList.add(rec.appliance.toLowerCase())
        })
    } else {
        // ustensilList = new Set();
        // newRecipes.forEach(rec => {
        //     rec.ustensils.forEach(ust => {
        //         ustensil.add(ust)
        //     });
        // })
    }

    return [...applianceList];
}

/**
 * Création de la list des ingredients qui correspond à l'ensemble des ingredients de l'ensemble des 
 * recettes si activeTag === 0 sinon reprends les appareils de newRecipes
 *
 * @return  {Array}  [retourn la list des appareils actifs]
 */
export function updateIngredientList (){
    ingredientList = new Set();
    if(activeTag.ingredients.length === 0){
        recipes.forEach(rec => {
            rec.ingredients.forEach(ing => {
                ingredientList.add(ing.ingredient.toLowerCase())
            })
        })
    }
    
    return [...ingredientList];
}


/**
 * Ajout des tag dans activeTag au click dans une valeur d'un des boutons en fonction de leurs type
 *
 * @param   {string}  type   Ingredient || Appareil || Ustensils
 * @param   {string}  value  Valeur de l'ingredient || appareil || ustensil cliqué 
 *
 * @return  {void}         
 */
export function makeActiveTag(type, value) {
    const indexUst = activeTag.ustensils.indexOf(value);
    const indexApp = activeTag.appliance.indexOf(value);
    const indexIng = activeTag.ingredients.indexOf(value);

    if(type === "Ustensils"){
        if(indexUst === -1){
            activeTag.ustensils.push(value.toLowerCase())
        } else {
            activeTag.ustensils.splice(indexUst, 1)
        }
    }

    if(type === "Appareil"){
        if(indexIng === -1){
            activeTag.appliance.push(value.toLowerCase())
        } else {
            activeTag.appliance.splice(indexApp, 1)
        }
    }

    if(type === "Ingredients"){
        if(indexIng === -1){
            activeTag.ingredients.push(value.toLowerCase())
        } else {
            activeTag.ingredients.splice(indexIng, 1)
        }
    }
}