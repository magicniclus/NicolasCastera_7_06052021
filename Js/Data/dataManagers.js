import { recipes } from "./data.js";

/**
 * Création d'un tableau d'objet contenant des clés valeur 
 * de chaque recette par les id générés 
 *
 * @var {Object}
 */
const listIdOfRecipesByUstensils = {};
const listIdOfRecipesByAppliance = {};
const listIdOfRecipesByIngredient = {};

/**
 * Liste des id valides par type 
 *
 * @var {Array}
 */
let ustValideRecipes = [];
let appValideRecipes = [];
let ingValideRecipes = [];
let globalValideRecipes = [];

/**
 * Liste des Ustensil || Appliance || Ingredient 
 * à afficher dans les boutons 
 *
 * @var {Set}
 */
let ustensilList;
let applianceList;
let ingredientList;

/**
 * Recette filtré à retourner 
 *
 * @var {Array}
 */
let newRecipes = [];

initIdUstensils();
initIdAppliance();
initIdIngredient();

/**
 * Retourne une clé valeur pour l'ensemble des id des ustensils ok
 *
 * @return  {Object}  Renvoi un objet 
 */
export function initIdUstensils() {
    for (let i = 0, size = recipes.length; i < size; i++) {
        recipes[i].ustensils.forEach(ustensil => {
            if (listIdOfRecipesByUstensils[ustensil] === undefined) listIdOfRecipesByUstensils[ustensil] = [];
            if (listIdOfRecipesByUstensils[ustensil].indexOf(i) === -1) listIdOfRecipesByUstensils[ustensil].push(i)
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
        if (listIdOfRecipesByAppliance[[recipes[i].appliance.toLocaleLowerCase()]] === undefined) listIdOfRecipesByAppliance[[recipes[i].appliance.toLocaleLowerCase()]] = [];
        if (listIdOfRecipesByAppliance[[recipes[i].appliance.toLocaleLowerCase()]].indexOf(i) === -1) listIdOfRecipesByAppliance[[recipes[i].appliance.toLocaleLowerCase()]].push(i)
    };
    return listIdOfRecipesByAppliance;
}

/**
* Retourne une clé valeur pour l'ensemble des id des ingredient ok
*
* @return  {Object}  Renvoi un objet 
*/
export function initIdIngredient() {
    for (let i = 0, size = recipes.length; i < size; i++) {
        for (let r = 0, rSize = recipes[i].ingredients.length; r < rSize; r++) {
            if (listIdOfRecipesByIngredient[[recipes[i].ingredients[r].ingredient.toLocaleLowerCase()]] === undefined) listIdOfRecipesByIngredient[[recipes[i].ingredients[r].ingredient.toLocaleLowerCase()]] = [];
            if (listIdOfRecipesByIngredient[[recipes[i].ingredients[r].ingredient.toLocaleLowerCase()]].indexOf(i) === -1) listIdOfRecipesByIngredient[[recipes[i].ingredients[r].ingredient.toLocaleLowerCase()]].push(i)
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
    text: [],
    title: []
}

/**
 * Gestionnaire de l'affichage des recettes
 *
 * @return  {Object}  Recette filtrées
 */
export function getRecipes() {
    updateAvailableRecipesByUst();
    updateAvailableRecipesByApp();
    updateAvailableRecipesByIng();
    if (ingValideRecipes.length === 0 && appValideRecipes.length === 0 && ustValideRecipes.length === 0) return recipes;

    globalValideRecipes = [];

    //Ajout des recettes ingredients
    if (ingValideRecipes.length > 0 && globalValideRecipes.length === 0) globalValideRecipes = ingValideRecipes;
    if (ingValideRecipes.length > 0 && globalValideRecipes.length > 0) {
        globalValideRecipes = globalValideRecipes.filter(id => {
            if (ingValideRecipes.includes(id)) {
                return id;
            }
        })
    };
    //Ajout des recettes appareils
    if (appValideRecipes.length > 0 && globalValideRecipes.length === 0) globalValideRecipes = appValideRecipes;
    if (appValideRecipes.length > 0 && globalValideRecipes.length > 0) {
        globalValideRecipes = globalValideRecipes.filter(id => {
            if (appValideRecipes.includes(id)) {
                return id;
            }
        })
    }
    //Ajout des reettes ustensils
    if (ustValideRecipes.length > 0 && globalValideRecipes.length === 0) globalValideRecipes = ustValideRecipes;
    if (ustValideRecipes.length > 0 && globalValideRecipes.length > 0) {
        globalValideRecipes = globalValideRecipes.filter(id => {
            if (ustValideRecipes.includes(id)) {
                return id;
            }
        })
    }

    newRecipes = [];

    globalValideRecipes.forEach(id => {
        newRecipes.push(recipes[id]);
    })

    return newRecipes;
}

/**
 * Création de la list des ustensils qui correspond à l'ensemble des ustensils de l'ensemble des 
 * recettes si activeTag === 0 sinon reprends les ustensils de newRecipes
 *
 * @return  {Array}  [retourn la list des ustensils actifs]
 */
export function updateUstensilsList() {
    ustensilList = new Set();
    if (activeTag.ustensils.length === 0 && activeTag.appliance.length === 0 && activeTag.ingredients.length === 0) {
        recipes.forEach(rec => {
            rec.ustensils.forEach(ust => {
                ustensilList.add(ust.toLowerCase());
            })
        })
    } else {
        newRecipes.forEach(rec => {
            rec.ustensils.forEach(ust => {
                ustensilList.add(ust.toLowerCase());
            })
        })
    }
    return [...ustensilList];
}

/**
 * Création de la list des appareils qui correspond à l'ensemble des appareils de l'ensemble des 
 * recettes si activeTag === 0 sinon reprends les appareils de newRecipes
 *
 * @return  {Array}  [retourn la list des appareils actifs]
 */
export function updateApplianceList() {
    applianceList = new Set();
    if (activeTag.ustensils.length === 0 && activeTag.appliance.length === 0 && activeTag.ingredients.length === 0) {
        recipes.forEach(rec => {
            applianceList.add(rec.appliance.toLowerCase());
        })
    } else {
        newRecipes.forEach(rec => {
            applianceList.add(rec.appliance.toLowerCase());
        })
    }
    return [...applianceList];
}

/**
 * Création de la list des ingredients qui correspond à l'ensemble des ingredients de l'ensemble des 
 * recettes si activeTag === 0 sinon reprends les ingrédients de newRecipes
 *
 * @return  {Array}  [retourn la list des ingrédients actifs]
 */
export function updateIngredientList() {
    ingredientList = new Set();
    if (activeTag.ustensils.length === 0 && activeTag.appliance.length === 0 && activeTag.ingredients.length === 0) {
        recipes.forEach(rec => {
            rec.ingredients.forEach(ing => {
                ingredientList.add(ing.ingredient.toLowerCase())
            })
        })
    } else {
        newRecipes.forEach(rec => {
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

    if (type === "Ustensils") {
        if (indexUst === -1) {
            activeTag.ustensils.push(value.toLowerCase())
        } else {
            activeTag.ustensils.splice(indexUst, 1)
        }
    }

    if (type === "Appareil") {
        if (indexIng === -1) {
            activeTag.appliance.push(value.toLowerCase())
        } else {
            activeTag.appliance.splice(indexApp, 1)
        }
    }

    if (type === "Ingredients") {
        if (indexIng === -1) {
            activeTag.ingredients.push(value.toLowerCase())
        } else {
            activeTag.ingredients.splice(indexIng, 1)
        }
    }
}

/**
 * Filtrage des id des ustensils
 *
 * @return  {Array}  newList de la fonction updateMatchingList
 */
export function updateAvailableRecipesByUst() {
    if (activeTag.ustensils.length === 0) return;
    if (activeTag.ustensils.length === 1) {
        ustValideRecipes = listIdOfRecipesByUstensils[activeTag.ustensils[0]]
    } else if (activeTag.ustensils.length > 1) {
        for (const ust of activeTag.ustensils) {
            ustValideRecipes = updateMatchingList(ustValideRecipes, listIdOfRecipesByUstensils[ust])
        }
    }
}

/**
 * Filtrage des id des appareils
 *
 * @return  {Array}  newList de la fonction updateMatchingList
 */
export function updateAvailableRecipesByApp() {
    //Appareils
    if (activeTag.appliance.length === 0) return;
    if (activeTag.appliance.length === 1) {
        appValideRecipes = listIdOfRecipesByAppliance[activeTag.appliance[0]];
        return;
    }
}

/**
 * Filtrage des id des ingredients
 *
 * @return  {Array}  newList de la fonction updateMatchingList
 */
export function updateAvailableRecipesByIng() {
    //Ingredients
    if (activeTag.ingredients.length === 0) return;
    if (activeTag.ingredients.length === 1) {
        ingValideRecipes = listIdOfRecipesByIngredient[activeTag.ingredients[0]];
        return ingValideRecipes;
    } else if (activeTag.ingredients.length > 1) {
        for (const ing of activeTag.ingredients) {
            ingValideRecipes = updateMatchingList(ingValideRecipes, listIdOfRecipesByIngredient[ing])
        }
    }
}

/**
 * Filtre un tableau par rapport aux éléments d'un autre tableau 
 *
 * @param   {Array}  refList     [refList description]
 * @param   {Array}  filterList  [filterList description]
 *
 * @return  {Array}              [return description]
 */
function updateMatchingList(refList, filterList) {
    const newList = [];
    for (const id of refList) {
        if (filterList.indexOf(id) !== -1) newList.push(id)
    }
    return newList;
}