// Gestionnaire d'affichage
import { allData, data, activeTag, addNewValueInIngredientBtn, filterData } from "../Data/dataManager.js";
import { Vignette } from "../Components/vignette.js";
import { FiltreButton } from "../Components/filtreButton.js";
import { AddTag } from "../Components/addTag.js";

let vignetteContainer;
let filterContainer;
let addTagBar;

export async function init (domTarget){

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

function updateTagBar () {
    addTagBar.innerHTML = '';
    new AddTag(addTagBar, activeTag);
 }

function addBtnFilter () {
    filterContainer.innerHTML = '';
    new FiltreButton(filterContainer, updateBtnFilter.bind(this), 'Ingredients',  'Rechercher un ingrédient')

    new FiltreButton (filterContainer, updateBtnFilter.bind(this), 'Appareil', 'Rechercher un appareil')

    new FiltreButton(filterContainer, updateBtnFilter.bind(this), 'Ustensils',  'Rechercher un ustensil')
}

function updateMain (){
    vignetteContainer.innerHTML = '';
    filterData.forEach(recipes => {
        new Vignette(vignetteContainer, recipes)
    })
}

function updateBtnFilter (type, filterToAdd) {
    addNewValueInIngredientBtn(filterToAdd, type);
    updateMain();
    addBtnFilter();
    updateTagBar();
}