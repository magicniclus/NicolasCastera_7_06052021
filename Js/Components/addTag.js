export class AddTag {

    appliance;
    ustensils;
    ingredients;
    texts;

    /**
     * [constructor description]
     *
     * @param   {Function}  domTarget  [domTarget description]
     * @param   {Object}  tag        [tag description]
     * @param   {FileList}  [callback]   [callback description]
     *
     */
    constructor(domTarget, tags, callback) {
        this.DOM = domTarget;
        this.callback = callback;
        this.tag = tags;
        this.render();
    }


    /**
     * Gestion de l'affichage des tag 
     *
     * @return  {void}  [return description]
     */
    render() {
        this.addTag();
    }



    /**
     *Ajout des tag dans le contener en fonction de leurs typologie 
     *Ingredient || Ustensils || Appareils
     * @return  {void}  [return description]
     */
    addTag() {
        this.tag.ingredients.forEach(element => {
            this.tagContainer = document.createElement('div');
            this.tagContainer.setAttribute('class', 'tagContainer');
            this.tagContainer.setAttribute('class', 'ing');
            const tags = document.createElement('span');
            tags.innerHTML = element;
            this.tagContainer.appendChild(tags);
            this.DOM.appendChild(this.tagContainer);
            this.addArrow(element, "ingredients");
        })

        this.tag.appliance.forEach(element => {
            this.tagContainer = document.createElement('div');
            this.tagContainer.setAttribute('class', 'app');
            const tags = document.createElement('span');
            tags.innerHTML = element;
            this.tagContainer.appendChild(tags);
            this.DOM.appendChild(this.tagContainer);
            this.addArrow(element, "appliance");
        })

        this.tag.ustensils.forEach(element => {
            this.tagContainer = document.createElement('div');
            this.tagContainer.setAttribute('class', 'tagContainer');
            this.tagContainer.setAttribute('class', 'ust');
            const tags = document.createElement('span');
            tags.innerHTML = element;
            this.tagContainer.appendChild(tags);
            this.DOM.appendChild(this.tagContainer);
            this.addArrow(element, "ustensils");
        })
    }


    /**
     * Ajout de la flèche syr les bouton et du callback au click 
     *
     * @param   {string}  value    [value description]
     * @param   {string}  element  [element description]
     *
     * @return  {void}           [return description]
     */
    addArrow(value, element) {
        const arrow = document.createElement('i');
        arrow.setAttribute('class', 'far fa-times-circle')
        arrow.onclick = () => {
            this.callback(element, value);
        }
        this.tagContainer.appendChild(arrow);
    }
}