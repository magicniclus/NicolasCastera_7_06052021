// // import { init } from "../Pages/index.js";
// import { recipes } from "./data.js";

// /**
//  * Liste des id des recettes par leurs ustensils 
//  *
//  * @var {Object}
//  */
// const listIdOfRecipesByUstensils = {};

// let newReceipes = [];


// /**
//  * Liste des id par ustensil des recettes valides
//  *
//  * @var {Array}
//  */
// let listValideRecipeByUst = [];

// /**
//  * la liste des ustensils dipsonibles à l'ajout
//  *
//  * @type {Set}
//  */
// let ustensil;



// /**
//  * Liste des id des recettes par leurs ustensils 
//  *
//  * @var {Object}
//  */
//  const listIdOfRecipesByAppliance = {};
 
//  /**
//   * Liste des id par appliance des recettes valides
//   *
//   * @var {Array}
//   */
//   let listValideRecipeByApp = [];


// /**
//  * La liste des appareil disponible à l'ajout
//  *
//  * @var {Set}
//  */
// let appliance;


// initIdUstensils();
// initIdAppliance();

// /**
//  * Retourne une clé valeur pour l'ensemble des id des ustensils ok
//  *
//  * @return  {Object}  Renvoi un objet 
//  */
// export function initIdUstensils() {
//     for (let i = 0, size = recipes.length; i < size; i++) {
//         recipes[i].ustensils.forEach(ustensil => {
//             if (listIdOfRecipesByUstensils[ustensil] === undefined) listIdOfRecipesByUstensils[ustensil] = [];
//             if (listIdOfRecipesByUstensils[ustensil].indexOf(i) === -1)listIdOfRecipesByUstensils[ustensil].push(i)
//         });
//     }
//     return listIdOfRecipesByUstensils;
// }


// /**
//  * Retourne une clé valeur pour l'ensemble des id des appareils ok
//  *
//  * @return  {Object}  Renvoi un objet 
//  */
//  export function initIdAppliance() {
//     for (let i = 0, size = recipes.length; i < size; i++) {
//         if (listIdOfRecipesByUstensils[[recipes[i].appliance]] === undefined) listIdOfRecipesByUstensils[[recipes[i].appliance]] = [];
//         if (listIdOfRecipesByUstensils[[recipes[i].appliance]].indexOf(i) === -1)listIdOfRecipesByUstensils[[recipes[i].appliance]].push(i)
//     };
    
//     return listIdOfRecipesByUstensils;
// }


// /**
//  * Object de récuperation des tags actifs ok
//  *
//  * @var {Object} 
//  */
// export let activeTag = {
//     appliance: [],
//     ustensils: [],  //[couteau]
//     ingredients: [],
//     text: []
// }


// /**
//  * Affichage des recttes
//  *
//  * @return  {Object}  L'ensemble des recettes
//  */
// export function getRecipes() {
//     console.log(activeTag);
//     if (listValideRecipeByUst.length === 0 && listValideRecipeByApp.length === 0) return recipes; //TODO completer condition avec les autres cas
//     let newRecipesId = [];
//     newReceipes = [];

//     //on ajoute les recette par ustensils
//     if (listValideRecipeByUst.length > 0) newRecipesId = listValideRecipeByUst;

//     newRecipesId.forEach(id=>{
//         newReceipes.push(recipes[id]);
//     })
//     return newReceipes;
// }


// /**
//  * Ajout des ustensils dans le bouton à l'ouverture,
//  * et modification si activeTag > 0
//  *
//  * @return  {Array}         liste des ustensils
//  */

// export function updateUstensilsList() {
//     //Ajout des ustensil dans le bouton à l'ouverture de la page
//     ustensil = new Set();
//     if(activeTag.ustensils.length === 0){
//         recipes.forEach(rec => {
//             rec.ustensils.forEach(ust => {
//                 ustensil.add(ust.toLowerCase())
//             })
//         })
//     } else {
//         ustensil = new Set();
//         newReceipes.forEach(rec => {
//             rec.ustensils.forEach(ust => {
//                 ustensil.add(ust)
//             });
//         })
//     }
    
//     return [...ustensil];
// }


// /**
//  * [export description]
//  * Ajout des appareils dans le bouton à l'ouverture,
//  * et modification si activeTag > 0
//  * 
//  * @return  {array}  [return description]
//  */
// export function updateApplianceList() {
//     //Ajout des ustensil dans le bouton à l'ouverture de la page
//     appliance = new Set();
//     if(activeTag.appliance.length === 0){
//         recipes.forEach(rec => {
//             appliance.add(rec.appliance)
//         })
//     } else {
//         appliance = new Set();
//         newReceipes.forEach(rec => {
//                 appliance.add(rec.appliance)
//         })
//     }
//     return [...appliance];
// }


// /**
//  * Ajout des tags actifs a activeTag
//  *
//  * @param   {string}  value  valeur de l'ustensil cliqué 
//  *
//  * @return  {void} 
//  */
// export function makeActiveTag (value, type) {
//     let indexUst = activeTag.ustensils.indexOf(value)
//     let indexApp = activeTag.appliance.indexOf(value)
//     console.log(type);
//     if(type === 'Ustensils'){
//         if(indexUst === -1){
//             activeTag.ustensils.push(value);
//         } else {
//             activeTag.ustensils.splice(indexUst, 1);
//         };
//     }
    
//     if(type === 'Appareil'){
//         if(indexApp === -1){
//             activeTag.appliance.push(value)
//         } else {
//             activeTag.appliance.splice(indexApp, 1);
//         };
//     }
    

// }


// /**
//  * Ressort les recette valides en fonction de l'id
//  *
//  * @return {Array}
//  *
//  */
// export function updateAvailableRecipes() {
//     if(activeTag.ustensils.length === 0 && activeTag.appliance.length === 0) return;
//     if(activeTag.ustensils.length === 1 && activeTag.appliance.length === 0) {
//     listValideRecipeByUst = listIdOfRecipesByUstensils[activeTag.ustensils[0]];
//     return;
//     }
//     if(activeTag.ustensils.length === 0 && activeTag.appliance.length === 1) {
//         listValideRecipeByUst = listIdOfRecipesByUstensils[activeTag.ustensils[0]];
//         return;
//         }
    

//     for(const ust of activeTag.ustensils){
//         listValideRecipeByUst  = updateMatchingList(listValideRecipeByUst, listIdOfRecipesByUstensils[ust])//BUG 
//     }

//     for (const App of activeTag.appliance){
 
//     }


// }


// function updateMatchingList(refList, filterList){
//     const newList = [];
//     for (const id of refList){
//         if ( filterList.indexOf(id) !==-1) newList.push(id)
//     }
//     return newList;
// }
























