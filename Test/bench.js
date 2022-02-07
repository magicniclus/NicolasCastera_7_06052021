import {makeActiveTag as makeActiveTagAlgo1, getRecipes as getRecipesAlgo1} from "../Js/Data/dataManagers.js"; 
import { makeActiveTag as makeActiveTagAlgo2, getRecipes as getRecipesAlgo2} from "../Js/Data/dataManagerAlgo2.js"; 

let start;
const times = {
    algo1:0,
    algo2 : 0
}

function startBenchmark(loop) {  
    startFunction();
    makeActiveTagAlgo1("ingredients","beurre salé");
    getRecipesAlgo1();
    makeActiveTagAlgo1("ingredients", "farine");
    getRecipesAlgo1();
    makeActiveTagAlgo1("ingredients", "banane");
    getRecipesAlgo1();
    makeActiveTagAlgo1("ingredients", "glaçons");
    getRecipesAlgo1();
    makeActiveTagAlgo1("ingredients", "tomate");
    getRecipesAlgo1();
    makeActiveTagAlgo1("ingredients", "poulet");
    getRecipesAlgo1();
    makeActiveTagAlgo1("appliance", "poële");
    getRecipesAlgo1();
    makeActiveTagAlgo1("appliance", "blender");
    getRecipesAlgo1();
    makeActiveTagAlgo1("appliance", "cocotte");
    getRecipesAlgo1();
    makeActiveTagAlgo1("ustensils", "couteau");
    getRecipesAlgo1();
    makeActiveTagAlgo1("ustensils", "casserole");
    getRecipesAlgo1();
    makeActiveTagAlgo1("ustensils", "louche");
    getRecipesAlgo1();
    makeActiveTagAlgo1("ustensils", "bol");
    getRecipesAlgo1();
    makeActiveTagAlgo1("ustensils", "cuillière en bois");
    getRecipesAlgo1();
    makeActiveTagAlgo1("ingredients","beurre sa");
    getRecipesAlgo1();
    makeActiveTagAlgo1("ingredients", "fari");
    getRecipesAlgo1();
    makeActiveTagAlgo1("ingredients", "bana");
    getRecipesAlgo1();
    makeActiveTagAlgo1("ingredients", "glaço");
    getRecipesAlgo1();
    makeActiveTagAlgo1("ingredients", "toma");
    getRecipesAlgo1();
    makeActiveTagAlgo1("ingredients", "poul");
    getRecipesAlgo1();
    makeActiveTagAlgo1("appliance", "poë");
    getRecipesAlgo1();
    makeActiveTagAlgo1("appliance", "blend");
    getRecipesAlgo1();
    makeActiveTagAlgo1("appliance", "cocot");
    getRecipesAlgo1();
    makeActiveTagAlgo1("ustensils", "coute");
    getRecipesAlgo1();
    makeActiveTagAlgo1("ustensils", "cassero");
    getRecipesAlgo1();
    makeActiveTagAlgo1("ustensils", "louc");
    getRecipesAlgo1();
    makeActiveTagAlgo1("ustensils", "b");
    getRecipesAlgo1();
    makeActiveTagAlgo1("ustensils", "cuillière en bo");
    getRecipesAlgo1();
    makeActiveTagAlgo1("ingredients","beurre salé");
    getRecipesAlgo1();
    makeActiveTagAlgo1("ingredients", "far");
    getRecipesAlgo1();
    makeActiveTagAlgo1("ingredients", "ban");
    getRecipesAlgo1();
    makeActiveTagAlgo1("ingredients", "glaç");
    getRecipesAlgo1();
    makeActiveTagAlgo1("ingredients", "tom");
    getRecipesAlgo1();
    makeActiveTagAlgo1("ingredients", "pot");
    getRecipesAlgo1();
    makeActiveTagAlgo1("appliance", "poële");
    getRecipesAlgo1();
    makeActiveTagAlgo1("appliance", "blender");
    getRecipesAlgo1();
    makeActiveTagAlgo1("appliance", "coco");
    getRecipesAlgo1();
    makeActiveTagAlgo1("ustensils", "couteau");
    getRecipesAlgo1();
    makeActiveTagAlgo1("ustensils", "casser");
    getRecipesAlgo1();
    makeActiveTagAlgo1("ustensils", "louche");
    getRecipesAlgo1();
    makeActiveTagAlgo1("ustensils", "bol");
    getRecipesAlgo1();
    makeActiveTagAlgo1("ustensils", "cuillière en bois");
    getRecipesAlgo1();
    //Algo 2
    getRecipesAlgo1();
    //ajouter d'autres élements
    endFunction(1)
    startFunction();
    makeActiveTagAlgo2("ingredients","beurre salé");
    getRecipesAlgo2();
    makeActiveTagAlgo2("ingredients", "farine");
    getRecipesAlgo2();
    makeActiveTagAlgo2("ingredients", "banane");
    getRecipesAlgo2();
    makeActiveTagAlgo2("ingredients", "glaçons");
    getRecipesAlgo2();
    makeActiveTagAlgo2("ingredients", "tomate");
    getRecipesAlgo2();
    makeActiveTagAlgo2("ingredients", "poulet");
    getRecipesAlgo2();
    makeActiveTagAlgo2("appliance", "poële");
    getRecipesAlgo2();
    makeActiveTagAlgo2("appliance", "blender");
    getRecipesAlgo2();
    makeActiveTagAlgo2("appliance", "cocotte");
    getRecipesAlgo2();
    makeActiveTagAlgo2("ustensils", "couteau");
    getRecipesAlgo2();
    makeActiveTagAlgo2("ustensils", "casserole");
    getRecipesAlgo2();
    makeActiveTagAlgo2("ustensils", "louche");
    getRecipesAlgo2();
    makeActiveTagAlgo2("ustensils", "bol");
    getRecipesAlgo2();
    makeActiveTagAlgo2("ustensils", "cuillière en bois");
    getRecipesAlgo2();
    makeActiveTagAlgo2("ingredients","beurre salé");
    getRecipesAlgo2();
    makeActiveTagAlgo2("ingredients", "farine");
    getRecipesAlgo2();
    makeActiveTagAlgo2("ingredients", "banane");
    getRecipesAlgo2();
    makeActiveTagAlgo2("ingredients", "glaçons");
    getRecipesAlgo2();
    makeActiveTagAlgo2("ingredients", "tomate");
    getRecipesAlgo2();
    makeActiveTagAlgo2("ingredients", "poulet");
    getRecipesAlgo2();
    makeActiveTagAlgo2("appliance", "poële");
    getRecipesAlgo2();
    makeActiveTagAlgo2("appliance", "blender");
    getRecipesAlgo2();
    makeActiveTagAlgo2("appliance", "cocotte");
    getRecipesAlgo2();
    makeActiveTagAlgo2("ustensils", "couteau");
    getRecipesAlgo2();
    makeActiveTagAlgo2("ustensils", "casserole");
    getRecipesAlgo2();
    makeActiveTagAlgo2("ustensils", "louche");
    getRecipesAlgo2();
    makeActiveTagAlgo2("ustensils", "bol");
    getRecipesAlgo2();
    makeActiveTagAlgo2("ustensils", "cuillière en bois");
    getRecipesAlgo2();
    makeActiveTagAlgo2("ingredients","beurre salé");
    getRecipesAlgo2();
    makeActiveTagAlgo2("ingredients", "far");
    getRecipesAlgo2();
    makeActiveTagAlgo2("ingredients", "ban");
    getRecipesAlgo2();
    makeActiveTagAlgo2("ingredients", "glaç");
    getRecipesAlgo2();
    makeActiveTagAlgo2("ingredients", "tom");
    getRecipesAlgo2();
    makeActiveTagAlgo2("ingredients", "pot");
    getRecipesAlgo2();
    makeActiveTagAlgo2("appliance", "poële");
    getRecipesAlgo2();
    makeActiveTagAlgo2("appliance", "blender");
    getRecipesAlgo2();
    makeActiveTagAlgo2("appliance", "coco");
    getRecipesAlgo2();
    makeActiveTagAlgo2("ustensils", "couteau");
    getRecipesAlgo2();
    makeActiveTagAlgo2("ustensils", "casser");
    getRecipesAlgo2();
    makeActiveTagAlgo2("ustensils", "louche");
    getRecipesAlgo2();
    makeActiveTagAlgo2("ustensils", "bol");
    getRecipesAlgo2();
    makeActiveTagAlgo2("ustensils", "cuillière en bois");
    getRecipesAlgo2();
    endFunction(2);
    for (let i=loop; i>0; i--){
        startFunction();
        endFunction(1);
        startFunction();
        endFunction(2);
    }
<<<<<<< HEAD

    main.innerHTML = `
        <h1>Comparatif algorithme Un et  algorithme Deux</h1>
        <div class='content'>
            <div class='alogUn'>algorithme un : ${times.algo1+"ms"}</div>
            <div class='alogDeux'>Alorithme deux : ${times.algo2+" ms"}</div>
        </div>
    `
<<<<<<< HEAD

    let algoUn = document.querySelector('.alogUn');
    let algoDeux = document.querySelector('.alogDeux');

    if(times.algo1 < times.algo2){
        algoDeux.classList.add('red');
        algoUn.classList.add('green');
    } else if(times.algo1 > times.algo2) {
        algoDeux.classList.add('green');
        algoUn.classList.add('red');
    } else {
        algoDeux.classList.add('blue');
        algoUn.classList.add('blue');
    }
    document.getElementById("gap").innerText=`X${Math.round(times.algo2/times.algo1)}`
=======
    console.log("algo1", times.algo1+"ms", "algo2", times.algo2+"ms");
>>>>>>> parent of 1f1d65f... Mise en forme du bench
=======
>>>>>>> parent of c4c4627... modification
}

function startFunction(){
    start = new Date().getTime();
}

function endFunction(id){
    times["algo"+id] += new Date().getTime() - start;
}

startBenchmark(1000);