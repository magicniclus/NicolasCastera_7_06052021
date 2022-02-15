import {makeActiveTag as makeActiveTagAlgo1, getRecipes as getRecipesAlgo1} from "../Js/Data/dataManagers.js"; 
import { makeActiveTag as makeActiveTagAlgo2, getRecipes as getRecipesAlgo2} from "../Js/Data/dataManagerAlgo2.js"; 

let start;
const times = {
    algo1:0,
    algo2 : 0
}

function startBenchmark(loop) {
    const dataToAdd = [
        {
            "ingredients": [
                "lait de coco",
                "poulet"
            ]
        },
        {
            "appliance" :[ "Cocotte"],
        },
        {
            "ustensil" : ["couteau"]
        }
    ];

    dataToAdd.forEach(element => {
        for (const [key, value] of Object.entries(element)){
            value.forEach( elm =>{
                makeActiveTagAlgo1(key, elm);
                makeActiveTagAlgo2(key, elm);
            })
        }
    });

    for (let i=loop; i>0; i--){
        startFunction();
        getRecipesAlgo1();
        endFunction(1);
        startFunction();
        getRecipesAlgo2();
        endFunction(2);
    }

    const algoUn = document.querySelector('.alogUn');
    const algoDeux = document.querySelector('.alogDeux');

    algoUn.innerHTML= `algorithme un : ${times.algo1+"ms"}`;
    algoDeux.innerHTML= `algorithme deux : ${times.algo2+"ms"}`;

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
    console.log("algo1", times.algo1+"ms", "algo2", times.algo2+"ms");
}

function startFunction(){
    start = new Date().getTime();
}

function endFunction(id){
    times["algo"+id] += new Date().getTime() - start;
}

startBenchmark(1000);