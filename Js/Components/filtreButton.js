import { updateUstensilsList, updateApplianceList, updateIngredientList } from "../Data/dataManagers.js";

export class FiltreButton {

    constructor(domTarget, callback, title, phrasing, callBackTaget) {
        this.tableHash = [];
        this.title = title;
        this.DOM = document.createElement('div');
        this.DOM.classList.add('filtreButton');
        this.DOM.classList.add(title);
        this.phrasing = phrasing;
        this.callback = callback;
        this.callBackTarget = callBackTaget;
        this.input = document.createElement('input');
        this.inputTilte = document.createElement('span');
        domTarget.appendChild(this.DOM)
        this.clickValue = false;
        this.inputValue = null;
        this.tagContainer = document.createElement("div");
        this.tagContainer.setAttribute('class', 'tagContainer');
        this.tagContainer.style.cursor = 'pointer';
        this.render();
    }

    render() {
        this.DOM.innerHTML = "";
        this.filterTop = document.createElement('div');
        this.filterTop.setAttribute('class', 'filtreBoutton__filterTop');
        this.DOM.appendChild(this.filterTop);
        this.addInput(this.filterTop);
        this.addArrow(this.filterTop);
        this.DOM.appendChild(this.tagContainer);
        if (this.clickValue) {
            this.addTag();
        }
    }

    /**
     * [addInput description]
     *
     * @param   {HTMLElement}  parent  [parent description]
     *
     */
    addInput(parent) {
        this.input.setAttribute('type', "text");
        this.input.setAttribute("id", this.title);
        this.input.setAttribute("name", this.title);
        this.input.setAttribute('placeholder', this.phrasing);
        if(!this.clickValue) this.input.style.display='none';
        else this.input.style.display='block';

        this.inputTilte.innerHTML = this.title;
        this.inputTilte.setAttribute('id', this.title)
        parent.appendChild(this.inputTilte);
        if(!this.clickValue) this.inputTilte.style.display='block';
        else this.inputTilte.style.display='none';

        if (this.inputValue!== null) this.input.setAttribute("value", this.inputValue);
        parent.appendChild(this.input);
        this.input.oninput = ((e) => { 
            this.target = e.target.value;
            if (this.target.length > 2) {
                this.initHashTable(this.listElement, this.target);
                this.inputValue = this.target;
            } else {
                this.tableHash = [];
            }
            this.addTag();
        })
    }

    /**
     * Creer une table de hash en de l'ensemble des mots dans Array 
     * et filtre l'array si value est = à une valeur dans l'array
     *
     * @param   {Array}  array  [array description]
     * @param   {string}  value  [value description]
     *
     * @return  {void}         [return description]
     */
    initHashTable (array, value) {
        let word;
        for (let i = 0, size = this.listElement.length; i < size; i++){
            let bigTitle = array[i];
            let newTitle = bigTitle.split(" ");
            newTitle.forEach(el => {
                for(let ii = 0, size = el.length; ii<size; ii++){
                    word = el.slice(0, ii);
                    if(word === value){
                        if(this.tableHash.indexOf(array[i]) === -1) {
                            this.tableHash.push(array[i])
                        };
                    }
                }
            });
        }
    }

    /**
     * [addArrow description]
     *
     * @param   {HTMLElement}  parent     [parent description]
     *
     */
    addArrow(parent) {
        const arrow__container = document.createElement('div');
        arrow__container.setAttribute('class', 'filtreButton__Arrow')
        arrow__container.innerHTML += `<i class="fas fa-chevron-${this.clickValue == false ? 'down' : 'up'}"></i>`;
        arrow__container.style.cursor = 'pointer';
        parent.appendChild(arrow__container)
        /**
         * 
         *
         * @param   {event}  e  [e description]
         *
         * @return  {void}     [return description]
         */
        arrow__container.onclick = (e) => {
            e.stopPropagation();
            this.clickValue = !this.clickValue;
            if (this.clickValue) {
                this.DOM.classList.add('click');
            } else {
                this.DOM.classList.remove('click');
                this.tagContainer.innerText="";
            };
            this.render();
        }
    }


    /**
     * [addTag description]
     * 
     * @returns {void}
     */
    addTag() {
        let list = this.tableHash.length > 0 ? this.tableHash : this.listElement;
        this.tagContainer.innerText="";
        list.forEach(element => {
            const tagContainer__tag = document.createElement('span');
            tagContainer__tag.setAttribute('class', 'tagContainer__tag '+ element);
            tagContainer__tag.innerHTML = element;
            this.tagContainer.appendChild(tagContainer__tag);
            this.tagContainer.style.display='grid';
            tagContainer__tag.onclick = () => {
                this.clickValue = !this.clickValue;
                if(this.clickValue === false){
                    this.tagContainer.style.display='none';
                }
                this.DOM.classList.remove('click');
                this.callback(this.title, element);
                this.render();
            }
        });
    }

    /**
     * Gestion des données affichés dans les bouton en fonction de leurs titres
     *
     * @return  {Object}  [return description]
     */
    get listElement() {
        if (this.title == "Ingredients") return updateIngredientList();
        if (this.title == "Appareil") return updateApplianceList();
        return updateUstensilsList();
    }
}