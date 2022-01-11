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
const listIdOfRecipesByTitle = {};
const listIdOfRecipesByText = {};

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

let searchValue = [];

/**
 * Recette filtré à retourner 
 *
 * @var {Array}
 */
let newRecipes = [];

initIdUstensils();
initIdAppliance();
initIdIngredient();
initIdTitle();
initIdText();

/**
 * Retourne une clé valeur pour l'ensemble des id des ustensils 
 *
 * @return  {Object}  Renvoi un objet 
 */
export function initIdUstensils() {
    let word;
    let ustensilName;
    for (let i = 0, size = recipes.length; i < size; i++){
        recipes[i].ustensils.forEach(ust => {
            ustensilName = ust.toLowerCase();
            for( let ii=3, size=ustensilName.length; ii<size +1; ii++){
                word = ustensilName.slice(0,ii);
                if (listIdOfRecipesByUstensils[word] === undefined) listIdOfRecipesByUstensils[word] = [];
                listIdOfRecipesByUstensils[word].push(i)
            }
        })
    }
    return listIdOfRecipesByUstensils;
}

/**
 * Retourne une clé valeur pour l'ensemble des id des appareils 
 *
 * @return  {Object}  Renvoi un objet 
 */
export function initIdAppliance() {
    let word;
    let applianceName;
    for (let i = 0, size = recipes.length; i < size; i++){
        applianceName = recipes[i].appliance.toLowerCase();
        for( let ii=3, size=applianceName.length; ii<size +1; ii++){
            word = applianceName.slice(0,ii);
            if (listIdOfRecipesByAppliance[word] === undefined) listIdOfRecipesByAppliance[word] = [];
            listIdOfRecipesByAppliance[word].push(i)
        }
    }
}

/**
* Retourne une clé valeur pour l'ensemble des id des ingredient 
*
* @return  {Object}  Renvoi un objet 
*/
export function initIdIngredient() {
    let word;
    let ingredientName;
    for (let i = 0, size = recipes.length; i < size; i++) {
        recipes[i].ingredients.forEach(ingredient => {
            ingredientName = ingredient.ingredient.toLowerCase();
            for( let ii=3, size=ingredientName.length; ii<size +1; ii++){
                word = ingredientName.slice(0,ii);
                if (listIdOfRecipesByIngredient[word] === undefined) listIdOfRecipesByIngredient[word] = [];
                listIdOfRecipesByIngredient[word].push(i)
            }
        });
    };
    return listIdOfRecipesByIngredient;
}

/**
* Retourne une clé valeur pour l'ensemble des id des titre 
*
* @return  {Object}  Renvoi un objet 
*/
export function initIdTitle() {
    const list = {}
    let word;
    let listIdOfRecipesByTitle;
    for (let i = 0, size = recipes.length; i < size; i++){
        listIdOfRecipesByTitle = recipes[i].name.toLowerCase();
        for( let ii=3, size=listIdOfRecipesByTitle.length; ii<size +1; ii++){
            word = listIdOfRecipesByTitle.slice(0,ii);
            if (list[word] === undefined) list[word] = [];
            list[word].push(i)
        }
    }
    return listIdOfRecipesByTitle;
}

/**
* Retourne une clé valeur pour l'ensemble des id des descriptions
*
* @return  {Object}  Renvoi un objet 
*/
export function initIdText() {
    let word;
    let descriptionName;
    for (let i = 0, size = recipes.length; i < size; i++){
        descriptionName = recipes[i].description.toLowerCase();
        let newValue = descriptionName.split(" ");
        for(let ii = 0, size=newValue.length; ii < size -1; ii++){
            for(let iii =3, size = newValue[ii].length; iii < size +1; iii++){
                word = newValue[ii].slice(0, iii);
                if (listIdOfRecipesByText[word] === undefined) listIdOfRecipesByText[word] = [];
                listIdOfRecipesByText[word].push(i)
            }
        }

    }
    return listIdOfRecipesByText;
}

/**
* Object de récuperation des tags actifs ok
*
* @var {Object} 
*/
export let activeTag = {
    appliance: [],
    ustensils: [],
    ingredients: [],
    text: [],
    title: []
};

/**
 * Gestionnaire de l'affichage des recettes
 *
 * @return  {Object}  Recette filtrées
 */
export function getRecipes() {
    updateAvailableRecipesByUst();
    updateAvailableRecipesByApp();
    updateAvailableRecipesByIng();

    if (ingValideRecipes.length === 0 && appValideRecipes.length === 0 && ustValideRecipes.length === 0 && searchValue.length === 0) return recipes;

    globalValideRecipes = [];

    //Ajout des recettes ingredients
    if (globalValideRecipes.length === 0 && globalValideRecipes.length === 0) globalValideRecipes = ingValideRecipes;
    if (globalValideRecipes.length > 0) {
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
    //Ajout des recettes ustensils
    if (ustValideRecipes.length > 0 && globalValideRecipes.length === 0) globalValideRecipes = ustValideRecipes;
    if (ustValideRecipes.length > 0 && globalValideRecipes.length > 0) {
        globalValideRecipes = globalValideRecipes.filter(id => {
            if (ustValideRecipes.includes(id)) {
                return id;
            }
        })
    }

    //Ajout des recettes par l'ensemble des filtres possible à la saisir 
    if ([...searchValue].length > 0 && globalValideRecipes.length === 0) globalValideRecipes = searchValue;
    if ([...searchValue].length > 0 && globalValideRecipes.length > 0) {
        globalValideRecipes = globalValideRecipes.filter(id => {
            if (searchValue.includes(id)) {
                return id;
            }
        })
    }

    newRecipes = [];
    globalValideRecipes = [...new Set(globalValideRecipes)];

    globalValideRecipes.forEach(id => {
        newRecipes.push(recipes[id]);
    })
    return newRecipes;
};

/**
 * On trouve les id des recettes qui correspondent aux valeurs rentré dans la searchbar
 *
 * @param   {string}  value  valeur saisi dans la search bar
 *
 * @return  {Array}         change le contenu du tableau searchValue 
 */
 export function getRecipesByTagBar(value) {
    value = value.toLowerCase();
    if (value.length < 3) {
        getValideEntrie = true;
        searchValue = [];
    }
    else { 
        let getValideUst = isInList(listIdOfRecipesByUstensils, value);
        let getValideApp = isInList(listIdOfRecipesByAppliance, value);
        let getValideIng = isInList(listIdOfRecipesByIngredient, value);
        let getValideText = isInList(listIdOfRecipesByText, value);
        let getValideTitle = isInList(listIdOfRecipesByTitle, value);
        searchValue= [...new Set(searchValue)];
    
        if(!getValideUst && !getValideApp && !getValideIng && !getValideText && !getValideTitle){
            getValideEntrie = false;
        } else getValideEntrie = true;
    }
};

//************ Amelioration
function isInList(listRef, element){
    let bool = false
    element = element.toLowerCase();
    Object.keys(listRef).forEach(ref => {
        if(ref.includes(element.toLowerCase())){
            bool = true;
        }
        
        if(ref.includes(element.toLowerCase())){
            searchValue = searchValue.concat(listRef[ref.toLowerCase()]);
        }
    })
    return bool;
}

//********Changement des forEach en for of
/**
 * Création de la list des ustensils qui correspond à l'ensemble des ustensils de l'ensemble des 
 * recettes si activeTag === 0 sinon reprends les ustensils de newRecipes
 *
 * @return  {Array}  [retourn la list des ustensils actifs]
 */
export function updateUstensilsList() {
    ustensilList = new Set();
    if (activeTag.ustensils.length === 0 && activeTag.appliance.length === 0 && activeTag.ingredients.length === 0) {
        for(const rec of recipes){
            for(const ust of rec.ustensils){
                ustensilList.add(ust.toLowerCase());
            }
        }
    } else {
        for(const rec of newRecipes){
            for(const ust of rec.ustensils){
                ustensilList.add(ust.toLowerCase());
            }
        }
    }
    return [...ustensilList];
}

//********Changement des forEach en for of
/**
 * Création de la list des appareils qui correspond à l'ensemble des appareils de l'ensemble des 
 * recettes si activeTag === 0 sinon reprends les appareils de newRecipes
 *
 * @return  {Array}  [retourn la list des appareils actifs]
 */
export function updateApplianceList() {
    applianceList = new Set();
    if (activeTag.ustensils.length === 0 && activeTag.appliance.length === 0 && activeTag.ingredients.length === 0) {
        for(const rec of recipes){
            applianceList.add(rec.appliance);
        }
    } else {
        for(const rec of newRecipes){
            applianceList.add(rec.appliance);
        }
    }
    return [...applianceList];
}

//********Changement des forEach en for of
/**
 * Création de la list des ingredients qui correspond à l'ensemble des ingredients de l'ensemble des 
 * recettes si activeTag === 0 sinon reprends les ingrédients de newRecipes
 *
 * @return  {Array}  [retourn la list des ingrédients actifs]
 */
export function updateIngredientList() {
    ingredientList = new Set();
    if (activeTag.ustensils.length === 0 && activeTag.appliance.length === 0 && activeTag.ingredients.length === 0) {
        for(const rec of recipes){
            for(const ing of rec.ingredients){
                ingredientList.add(ing.ingredient.toLowerCase())
            }
        }
    } else {
        for(const rec of newRecipes){
            for(const ing of rec.ingredients){
                ingredientList.add(ing.ingredient.toLowerCase())
            }
        }
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

    if (type === "ustensils") {
        if (indexUst === -1) {
            activeTag.ustensils.push(value.toLowerCase())
        }
    }

    if (type === "appareil") {
        if (indexIng === -1) {
            activeTag.appliance.push(value.toLowerCase())
        }
    }

    if (type === "ingredients") {
        if (indexIng === -1) {
            activeTag.ingredients.push(value.toLowerCase())
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

//*********Passage du switch a des condition if else 
/**
 * Supression des l'élément dans activeTag
 *
 * @param   {string}  value  [value description]
 * @param   {string}  type   [type description]
 *
 * @return  {void}         [return description]
 */
export function updateActiveTag(type, value) { //BUG Supprime le resultat mais n'actualise pas les vignettes
    console.log(type);
    const index = activeTag[type].indexOf(value);
    if (index !== -1) {
        activeTag[type].splice(index, 1);
    }
    if(type = 'ingredients') ingValideRecipes = [];
    else if(type = 'appliance') appValideRecipes= [];
    else ustValideRecipes = [];
}