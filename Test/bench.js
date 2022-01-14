import {makeActiveTag as makeActiveTagAlgo1, getRecipes as getRecipesAlgo1} from "../Js/Data/dataManagers.js"; 
import { makeActiveTag as makeActiveTagAlgo2, getRecipes as getRecipesAlgo2} from "../Js/Data/dataManagers.js"; 

let start;
const times = {
    algo1:0,
    algo2 : 0
}

function startBenchmark(loop) {  
    startFunction();
    makeActiveTagAlgo1("ingredients","coco");
    makeActiveTagAlgo1("ingredients", "sucre");
    makeActiveTagAlgo1("ingredients", "concombre");
    makeActiveTagAlgo1("ingredient", "carotte");
    makeActiveTagAlgo1("appliance", "blender");
    makeActiveTagAlgo1("ustensils", "couteau");
    makeActiveTagAlgo1("ustensils", "verres");
    //ajouter d'autres élements
    endFunction(1)
    startFunction();
    makeActiveTagAlgo2("ingredients","coco");
    makeActiveTagAlgo2("ingredients", "sucre");
    makeActiveTagAlgo2("ingredients", "concombre");
    makeActiveTagAlgo2("ingredients", "carotte");
    makeActiveTagAlgo2("appliance", "blender");
    makeActiveTagAlgo2("ustensils", "couteau");
    makeActiveTagAlgo2("ustensils", "verres");
    endFunction(2);
    for (let i=loop; i>0; i--){
        startFunction();
        console.log(getRecipesAlgo1()); 
        endFunction(1);
        startFunction();
        console.log(getRecipesAlgo2()); 
        endFunction(2);
    }
    console.log("algo1", times.algo1+"ms", "algo2", times.algo2+"ms");
}

function startFunction(){
    start = new Date().getTime();
}

function endFunction(id){
    times["algo"+id] += new Date().getTime() - start;
}

startBenchmark(1000);