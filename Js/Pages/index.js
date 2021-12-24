// Gestionnaire d'affichage
import {activeTag, getRecipes} from "../Data/dataManagers.js"
import { Vignette } from "../Components/vignette.js";
import { FiltreButton } from "../Components/filtreButton.js";
import { AddTag } from "../Components/addTag.js";


let vignetteContainer;
let filterContainer;
let addTagBar;



/**
 * Gestion de l'affichage 
 *
 * @param   {HTMLElement}  domTarget  [domTarget description]
 *
 * @return  {void}             [return description]
 */
export async function init(domTarget) {
    addTagBar = document.createElement('aside');
    addTagBar.setAttribute('class', 'tagBar');
    await domTarget.appendChild(addTagBar);
    updateTagBar();
    filterContainer = document.createElement('div');
    filterContainer.setAttribute('class', 'filterContainer');
    await domTarget.appendChild(filterContainer);
    addBtnFilter();
    vignetteContainer = document.createElement('aside');
    vignetteContainer.setAttribute('class', 'vignette__container')
    await domTarget.appendChild(vignetteContainer);
    await updateMain();
}



/**
 * Gestion de l'affiche de la bar d'affichage des tag
 *
 * @return  {void}  [return description]
 */
function updateTagBar() {
    addTagBar.innerHTML = '';
    new AddTag(addTagBar, activeTag);
}



/**
 * Gestiond de l'affichage des boutons 
 *
 * @return  {void}  [return description]
 */
function addBtnFilter() {
    filterContainer.innerHTML = '';
    // new FiltreButton(filterContainer, updateBtnFilter.bind(this), 'Ingredients', 'Rechercher un ingrédient')

    // new FiltreButton(filterContainer, updateTagList.bind(this), 'Appareil', 'Rechercher un appareil')

    // new FiltreButton(filterContainer, updateTagList.bind(this), 'Ustensils', 'Rechercher un ustensil')
}



/**
 * Gestion de l'affichage des vignettes 
 *
 * @return  {void}  [return description]
 */
function updateMain() {
    vignetteContainer.innerHTML = '';
    getRecipes().forEach(recipes => {
        new Vignette(vignetteContainer, recipes)
    })
}



/**
 * Gestion de l'envoi des données aux bouton au click sur ces derniers
 * + mise à jour de l'affichage 
 *
 * @param   {string}  type   [type description]
 * @param   {string}  value  [value description]
 *
 */
async function updateTagList(type, value) {
        // await initIdUstensils();
        // await updateUstensilsList();
        // await makeActiveTag(value, type);
        // await updateAvailableRecipes()
        // await updateMain();
        // await updateTagBar();
}