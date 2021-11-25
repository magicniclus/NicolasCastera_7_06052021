export class Vignette {
    /**
     * Gestion de l'affiche des vignette 
     *
     * @param   {HTMLElement}  domTarget  [domTarget description]
     * @param   {Object}  props      [props description]
     *
     */
    constructor(domTarget, props) {
        this.DOM = document.createElement('article');
        this.DOM.setAttribute('class', 'vignette__container');
        this.data = props;
        domTarget.appendChild(this.DOM);
        this.render();
    }

    render() {
        const DOM = document.createElement('div');
        DOM.setAttribute('class', 'vignettes');

        const vignetteBottom = document.createElement('div');
        vignetteBottom.setAttribute('class', 'vignette__bottom');

        const vignetteBottomBottom = document.createElement('div');
        vignetteBottomBottom.setAttribute('class', 'vignette__bottom__bottom');

        DOM.innerHTML += `
        <div class='vignette__top'></div>`

        DOM.appendChild(vignetteBottom);

        vignetteBottom.innerHTML +=
            `
            <div class='vignette__bottom__top'>
                <span class='vignette__bottom__top__title'>
                ${this.data.name}
                </span>
                <div class='vignette__bottom__top__time'>
                    <i class="vignette__bottom__top__time__clock far fa-clock"></i>
                    <span class="vignette__bottom__top__time__minute">
                        ${this.data.time}min
                    </span>
                </div>
            </div>
        `

        vignetteBottom.appendChild(vignetteBottomBottom);

        this.showIngredients(this.data, vignetteBottomBottom)

        vignetteBottomBottom.innerHTML += `
            <span class='vignette__bottom__bottom__description'>
                ${this.data.description}
            </span>
        `
        this.DOM.appendChild(DOM)
    }

    showIngredients(props, parent) {
        let ingredient = document.createElement('div');
        ingredient.setAttribute('class', 'vignette__bottom__bottom__ingredient');
        for (const element of Object.values(props.ingredients)) {
            ingredient.innerHTML += `
            <div class = ingredient__container>
                <span class='ingredient'>${element.ingredient}</span>
                <span class='quantity'>${element.quantity != undefined ? element.quantity : ""}</span>
                <span class='unit'>${element.unit != undefined ? element.unit : ""}</span>
            </div>    
            `
        }
        parent.appendChild(ingredient);
    }
}