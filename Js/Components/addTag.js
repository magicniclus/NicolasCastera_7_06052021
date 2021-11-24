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
    constructor (domTarget, tag, callback){
        this.DOM = domTarget;
        this.callback = callback;
        this.tag = tag;
        for (const [key, value] of Object.entries(this.tag)) {
            this[key] = value;
        }
        this.render ();
    }

    render(){
        this.addTag();
    }

    addTag () {
        Object.values(this.ingredients).forEach(element =>{
            console.log(element);
            this.tagContainer = document.createElement('div');
            this.tagContainer.setAttribute('class', 'tagContainer');
            this.tagContainer.setAttribute('class', element);
            const tags = document.createElement('span');
            tags.innerHTML = element;
            this.tagContainer.appendChild(tags);
            this.DOM.appendChild(this.tagContainer);
            this.addArrow();
        })

        Object.values(this.appliance).forEach(element =>{
            this.tagContainer = document.createElement('div');
            this.tagContainer.setAttribute('class', element.type);
            const tags = document.createElement('span');
            tags.innerHTML = element.name;
            this.tagContainer.appendChild(tags);
            this.DOM.appendChild(this.tagContainer);
            this.addArrow();
        })

        Object.values(this.ustensils).forEach(element =>{
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