import {makeActiveTag as makeActiveTagAlgo1, getRecipes as getRecipesAlgo1} from "../Js/Data/dataManagers.js"; 
import { makeActiveTag as makeActiveTagAlgo2, getRecipes as getRecipesAlgo2} from "../Js/Data/dataManagerAlgo2.js"; 

let start;
const times = {
    algo1:0,
    algo2 : 0
}

const body = document.querySelector('body');
const main = document.createElement('main');
body.appendChild(main);

function startBenchmark(loop) {  
    //Algo Un
    startFunction();
    makeActiveTagAlgo1("ingredients","beurre salé");
    makeActiveTagAlgo1("ingredients", "farine");
    makeActiveTagAlgo1("ingredients", "banane");
    makeActiveTagAlgo1("ingredients", "glaçons");
    makeActiveTagAlgo1("ingredients", "tomate");
    makeActiveTagAlgo1("ingredients", "poulet");
    makeActiveTagAlgo1("appliance", "poële");
    makeActiveTagAlgo1("appliance", "blender");
    makeActiveTagAlgo1("appliance", "cocotte");
    makeActiveTagAlgo1("ustensils", "couteau");
    makeActiveTagAlgo1("ustensils", "casserole");
    makeActiveTagAlgo1("ustensils", "louche");
    makeActiveTagAlgo1("ustensils", "bol");
    makeActiveTagAlgo1("ustensils", "cuillière en bois");
    makeActiveTagAlgo1("ingredients","beurre sa");
    makeActiveTagAlgo1("ingredients", "fari");
    makeActiveTagAlgo1("ingredients", "bana");
    makeActiveTagAlgo1("ingredients", "glaço");
    makeActiveTagAlgo1("ingredients", "toma");
    makeActiveTagAlgo1("ingredients", "poul");
    makeActiveTagAlgo1("appliance", "poë");
    makeActiveTagAlgo1("appliance", "blend");
    makeActiveTagAlgo1("appliance", "cocot");
    makeActiveTagAlgo1("ustensils", "coute");
    makeActiveTagAlgo1("ustensils", "cassero");
    makeActiveTagAlgo1("ustensils", "louc");
    makeActiveTagAlgo1("ustensils", "b");
    makeActiveTagAlgo1("ustensils", "cuillière en bo");
    makeActiveTagAlgo1("ingredients","beurre salé");
    makeActiveTagAlgo1("ingredients", "far");
    makeActiveTagAlgo1("ingredients", "ban");
    makeActiveTagAlgo1("ingredients", "glaç");
    makeActiveTagAlgo1("ingredients", "tom");
    makeActiveTagAlgo1("ingredients", "pot");
    makeActiveTagAlgo1("appliance", "poële");
    makeActiveTagAlgo1("appliance", "blender");
    makeActiveTagAlgo1("appliance", "coco");
    makeActiveTagAlgo1("ustensils", "couteau");
    makeActiveTagAlgo1("ustensils", "casser");
    makeActiveTagAlgo1("ustensils", "louche");
    makeActiveTagAlgo1("ustensils", "bol");
    makeActiveTagAlgo1("ustensils", "cuillière en bois");
    //Algo 2
    endFunction(1)
    startFunction();
    makeActiveTagAlgo2("ingredients","beurre salé");
    makeActiveTagAlgo2("ingredients", "farine");
    makeActiveTagAlgo2("ingredients", "banane");
    makeActiveTagAlgo2("ingredients", "glaçons");
    makeActiveTagAlgo2("ingredients", "tomate");
    makeActiveTagAlgo2("ingredients", "poulet");
    makeActiveTagAlgo2("appliance", "poële");
    makeActiveTagAlgo2("appliance", "blender");
    makeActiveTagAlgo2("appliance", "cocotte");
    makeActiveTagAlgo2("ustensils", "couteau");
    makeActiveTagAlgo2("ustensils", "casserole");
    makeActiveTagAlgo2("ustensils", "louche");
    makeActiveTagAlgo2("ustensils", "bol");
    makeActiveTagAlgo2("ustensils", "cuillière en bois");
    makeActiveTagAlgo2("ingredients","beurre salé");
    makeActiveTagAlgo2("ingredients", "farine");
    makeActiveTagAlgo2("ingredients", "banane");
    makeActiveTagAlgo2("ingredients", "glaçons");
    makeActiveTagAlgo2("ingredients", "tomate");
    makeActiveTagAlgo2("ingredients", "poulet");
    makeActiveTagAlgo2("appliance", "poële");
    makeActiveTagAlgo2("appliance", "blender");
    makeActiveTagAlgo2("appliance", "cocotte");
    makeActiveTagAlgo2("ustensils", "couteau");
    makeActiveTagAlgo2("ustensils", "casserole");
    makeActiveTagAlgo2("ustensils", "louche");
    makeActiveTagAlgo2("ustensils", "bol");
    makeActiveTagAlgo2("ustensils", "cuillière en bois");
    makeActiveTagAlgo2("ingredients","beurre salé");
    makeActiveTagAlgo2("ingredients", "far");
    makeActiveTagAlgo2("ingredients", "ban");
    makeActiveTagAlgo2("ingredients", "glaç");
    makeActiveTagAlgo2("ingredients", "tom");
    makeActiveTagAlgo2("ingredients", "pot");
    makeActiveTagAlgo2("appliance", "poële");
    makeActiveTagAlgo2("appliance", "blender");
    makeActiveTagAlgo2("appliance", "coco");
    makeActiveTagAlgo2("ustensils", "couteau");
    makeActiveTagAlgo2("ustensils", "casser");
    makeActiveTagAlgo2("ustensils", "louche");
    makeActiveTagAlgo2("ustensils", "bol");
    makeActiveTagAlgo2("ustensils", "cuillière en bois");
    endFunction(2);
    for (let i=loop; i>0; i--){
        startFunction();
        getRecipesAlgo1();
        endFunction(1);
        startFunction();
        getRecipesAlgo2();
        endFunction(2);
    }

    main.innerHTML = `
        <h1>Comparatif algorithme Un et  algorithme Deux</h1>
        <div class='content'>
            <div class='alogUn'>algorithme un : ${times.algo1+"ms"}</div>
            <div class='alogDeux'>Alorithme deux : ${times.algo2+" ms"}</div>
        </div>
        <div id="gap"></div>
    `

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
}

function startFunction(){
    start = new Date().getTime();
}

function endFunction(id){
    times["algo"+id] += new Date().getTime() - start;
}

startBenchmark(1000);