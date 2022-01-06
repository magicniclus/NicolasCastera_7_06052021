import { updateUstensilsList, updateApplianceList, updateIngredientList } from "../Data/dataManagers.js";

export class FiltreButton {

    constructor(domTarget, callback, title, phrasing, callBackTaget) {
        this.tableHash = [];
        this.title = title;
        this.change = false;
        this.DOM = document.createElement('div');
        this.DOM.classList.add('filtreButton');
        this.DOM.classList.add(title);
        this.phrasing = phrasing;
        this.callback = callback;
        this.callBackTarget = callBackTaget;
        domTarget.appendChild(this.DOM)
        this.clickValue = false;
        this.render();
    }

    render() {
        this.DOM.innerHTML = "";
        this.filterTop = document.createElement('div');
        this.filterTop.setAttribute('class', 'filtreBoutton__filterTop');
        this.DOM.appendChild(this.filterTop);
        this.addInput(this.filterTop);
        this.addArrow(this.filterTop);
    }

    /**
     * [addInput description]
     *é
     * @param   {HTMLElement}  parent  [parent description]
     *
     */
    addInput(parent) {
        const input = document.createElement('input');
        input.setAttribute('type', "text");
        input.setAttribute("id", this.title);
        input.setAttribute("name", this.title);
        input.setAttribute('placeholder', this.clickValue ? this.phrasing : this.title);
        parent.appendChild(input);

        /**
         * Affichage des tag au click sur l'input
         *
         * @param   {Event}  e  [e description]
         *
         * @return  {boolean}     [return description]
         */
        input.oninput = ((e) => { 
            let target = e.target.value;
            if (target.length > 2) {
                this.initHashTable(this.listElement, target);
            } else {
                this.tableHash = [];
            }
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
                        console.log(array[i]);
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
        arrow__container.onclick = (e) => {
            e.stopPropagation();
            this.clickValue = !this.clickValue;
            if (this.clickValue) {
                this.render();
                this.addTag(this.DOM, this.callback);
                this.DOM.classList.add('click');
            } else {
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
    addTag(parent, callback) {
        const tagContainer = document.createElement("div");
        tagContainer.setAttribute('class', 'tagContainer');
        tagContainer.style.cursor = 'pointer';
        let list = this.tableHash.length > 0 ? this.tableHash : this.listElement;
        list.forEach(element => {
            const tagContainer__tag = document.createElement('span');
            tagContainer__tag.setAttribute('class', 'tagContainer__tag '+ element);
            tagContainer__tag.innerHTML = element;
            tagContainer.appendChild(tagContainer__tag);
            tagContainer__tag.onclick = () => {
                this.clickValue = !this.clickValue;
                this.DOM.classList.remove('click');
                callback(this.title, element);
                this.render();
            }
        });

        parent.appendChild(tagContainer);
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