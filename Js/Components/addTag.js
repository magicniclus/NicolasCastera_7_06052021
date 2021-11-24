export class AddTag {

    appliance;
    ustensils;
    ingredients;
    texts;

    /**
     * [constructor description]
     *
     * @param   {HTMLElement}  domTarget  [domTarget description]
     * @param   {Object}  tag        [tag description]
     * @param   {FileList}  [callback]   [callback description]
     *
     */
    constructor (domTarget, tags, callback){
        this.DOM = domTarget;
        this.callback = callback;
        this.tag = tags;
        this.render ();
    }

    render(){
        this.addTag();
    }

    addTag () {
        this.tag.ingredients.forEach(element =>{
            console.log(element);
            this.tagContainer = document.createElement('div');
            this.tagContainer.setAttribute('class', 'tagContainer');
            this.tagContainer.setAttribute('class', element.type);
            const tags = document.createElement('span');
            tags.innerHTML = element.name;
            this.tagContainer.appendChild(tags);
            this.DOM.appendChild(this.tagContainer);
            this.addArrow();
        })

        this.tag.appliance.forEach(element =>{
            console.log(element);
            this.tagContainer = document.createElement('div');
            this.tagContainer.setAttribute('class', element.type);
            const tags = document.createElement('span');
            tags.innerHTML = element.name;
            this.tagContainer.appendChild(tags);
            this.DOM.appendChild(this.tagContainer);
            this.addArrow();
        })

        this.tag.ustensils.forEach(element =>{
            this.tagContainer = document.createElement('div');
            this.tagContainer.setAttribute('class', 'tagContainer');
            this.tagContainer.setAttribute('class', element.type);
            const tags = document.createElement('span');
            tags.innerHTML = element.name;
            this.tagContainer.appendChild(tags);
            this.DOM.appendChild(this.tagContainer);
            this.addArrow();
        })
    }

    addArrow () {
        const arrow = document.createElement('i');
        arrow.setAttribute('class', 'far fa-times-circle')
        arrow.onclick = () => {
            this.callback(this.tag);
        }
        this.tagContainer.appendChild(arrow);
    }
}