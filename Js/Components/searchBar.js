//Création d'une search bar

export class SearchBar {
    constructor (domTarget, phrasing) {
        this.phrasing = phrasing;

        this.clickValue = false;

        this.DOM = document.createElement('div');
        this.DOM.setAttribute('class', 'searchBar');
        domTarget.appendChild(this.DOM);

        this.render();
    }

    render() {
        this.DOM.innerHTML += `<i class="fas fa-search"></i>`;
        this.addInput(this.DOM);
    }

    addInput (parent){
        const input = document.createElement('input');
        input.onclick = () => {
            this.clickValue =! this.clickValue;
            
        }
        input.setAttribute('type', "text");
        input.setAttribute("id", 'searchBar__input');
        input.setAttribute("name", 'searchBar__input');
        input.setAttribute('value',  "");
        input.setAttribute('placeholder', this.phrasing);
        parent.appendChild(input);

        input.addEventListener('keyup', e => {
            e.preventDefault();
            console.log(input.value);
        })
    }
}