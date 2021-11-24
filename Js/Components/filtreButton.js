import { getIngredient, getAppliance, getUstensil } from "../Data/dataManager.js";

export class FiltreButton {

    constructor (domTarget, callback, title, phrasing) {
        this.title = title;
        //this.className = title;
        this.DOM = document.createElement('div');
        this.DOM.classList.add('filtreButton');
        this.DOM.classList.add(title);
        this.phrasing = phrasing;
        //this.list = props;
        this.callback = callback;
        // this.fonctionDeux = fonctionDeux;
        domTarget.appendChild(this.DOM)
        this.clickValue = false;
        getIngredient()
        this.render();
    }

    render(){
        this.DOM.innerHTML = "";
        const filterTop = document.createElement('div');
        filterTop.setAttribute('class', 'filtreBoutton__filterTop');
        this.DOM.appendChild(filterTop);
        this.addInput(filterTop);
        this.addArrow(filterTop);
        // console.log(this.title);
    }

    /**
     * [addInput description]
     *
     * @param   {HTMLElement}  parent  [parent description]
     *
     */
    addInput (parent){
        const input = document.createElement('input');
        input.setAttribute('type', "text");
        input.setAttribute("id", this.title);
        input.setAttribute("name", this.title);
        input.setAttribute('value', this.clickValue ? "": this.title);
        input.setAttribute('placeholder', this.clickValue ?this.phrasing : "");
        parent.appendChild(input);

        input.addEventListener('keyup', e => {
            e.preventDefault();
            if(input.value.length >= 3){
                console.log(input.value.length);
            }
        })
    }


    /**
     * [addArrow description]
     *
     * @param   {HTMLElement}  parent     [parent description]
     * @param   {HTMLElement}  container  [container description]
     * @param   {Function}  callback   [callback description]
     *
     */
    addArrow (parent) {
        const arrow__container = document.createElement('div');
        arrow__container.setAttribute('class', 'filtreButton__Arrow')
        arrow__container.innerHTML += `<i class="fas fa-chevron-${this.clickValue == false ? 'down' : 'up' }"></i>`;
        arrow__container.style.cursor='pointer';
        parent.appendChild(arrow__container)
        arrow__container.onclick = () => {
            this.clickValue =! this.clickValue;
            if (this.clickValue){
                this.render();
                this.addTag(this.DOM, this.callback);
                this.DOM.classList.add('click');
            }else{
                this.DOM.classList.remove('click');
                this.render();
            };
        }
    }


    /**
     * [addTag description]
     *
     * @param   {HTMLElement}  parent    [parent description]
     * @param   {Function}  callback  [callback description]
     * 
     * @returns {void}
     *
     */
    addTag (parent, callback) {
        const tagContainer = document.createElement("div");
        tagContainer.setAttribute('class', 'tagContainer');
        tagContainer.style.cursor = 'pointer';
        this.listElement.forEach(element => {
            const tagContainer__tag = document.createElement('span');
            tagContainer__tag.setAttribute('class', 'tagContainer__tag');

            tagContainer__tag.innerHTML = element;
            tagContainer.appendChild(tagContainer__tag);
            tagContainer__tag.onclick = () => {
                this.clickValue =! this.clickValue;
                this.DOM.classList.remove('click');
                callback(this.title, element);
                this.render();
            }
        });

        parent.appendChild(tagContainer);
    }

    get listElement(){
        if (this.title == "Ingredients") return getIngredient();
        if (this.title == "Appareil") return getAppliance();
        return getUstensil();
    }
} 