// Main Js
import { init } from "./Pages/index.js";
const body = document.querySelector('body');
const header = document.createElement("header");
const main = document.createElement('main');

body.appendChild(header);
body.appendChild(main)


addLogo(header);

init(main)

function addLogo (domTarget){
    domTarget.innerHTML = `
        <div class="header">
            <img src="images/Vector.png" alt="logo du site les petits plats"/>
            <h1>Les petits plats</h1>
        </div>

    `;
} 
