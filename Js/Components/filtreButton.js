import {} from "../Data/dataManagers.js";

export class FiltreButton {

    constructor (domTarget, callback, title, phrasing) {
        this.title = title;
        this.DOM = document.createElement('div');
        this.DOM.classList.add('filtreButton');
        this.DOM.classList.add(title);
        this.phrasing = phrasing;
        this.callback = callback;
        domTarget.appendChild(this.DOM)
        this.clickValue = false;
        this.render();
    }

    render(){
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
    addInput (parent){
        const input = document.createElement('input');
        input.setAttribute('type', "text");
        input.setAttribute("id", this.title);
        input.setAttribute("name", this.title);
        input.setAttribute('value', this.clickValue ? "": this.title);
        input.setAttribute('placeholder', this.clickValue ?this.phrasing : "");
        parent.appendChild(input);

        /**
         * Affichage des tag au click sur l'input
         *
         * @param   {Event}  e  [e description]
         *
         * @return  {boolean}     [return description]
         */
        input.oninput = ((e) => { //BUG Probleme de saisi de valeur au click sur l'input Debug oninput
            this.clickValue =true;
            if (this.clickValue){
                this.render();
                this.addTag(this.DOM, this.callback);
                this.DOM.classList.add('click');
            }else{
                this.DOM.classList.remove('click');
                this.render();
            };

        })

        /**
         * Affichage des valeur a la saisi de text
         *
         * @param   {Event}  keyup  [keyup description]
         * @param   {Event}  e      [e description]
         *
         * @return  {void}         [return description]
         */
        input.addEventListener('keyup', e => {
            if(input.value.length >= 3){
                this.listElement.forEach(element => {
                    if(element.includes(e.target.value)){
                        console.log(element);
                    }
                });
            }
        })
    }


    /**
     * [addArrow description]
     *
     * @param   {HTMLElement}  parent     [parent description]
     *
     */
    addArrow (parent) {
        const arrow__container = document.createElement('div');
        arrow__container.setAttribute('class', 'filtreButton__Arrow')
        arrow__container.innerHTML += `<i class="fas fa-chevron-${this.clickValue == false ? 'down' : 'up' }"></i>`;
        arrow__container.style.cursor='pointer';
        parent.appendChild(arrow__container)
        arrow__container.onclick = (e) => {
            e.stopPropagation();
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



    /**
     * Gestion des données affichés dans les bouton en fonction de leurs titres
     *
     * @return  {Object}  [return description]
     */
    get listElement(){
        // if (this.title == "Ingredients") return getIngredient();
        // if (this.title == "Appareil") return updateApplianceList();
        // return updateUstensilsList();
    }
} 