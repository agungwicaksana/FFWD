class SearchModal extends HTMLElement {
    constructor() {
        super();
    }

    set mealData(meal) {
        this._data = meal;
        const cards = this.createCard(this._data);
        this.render(cards);
    }

    createCard(data) {
        let cards = '';
        data.forEach(meal => {
            let ingredients = ``;
            for(let i=0;i<20;i++) {
                const ingredient = meal[`strIngredient${i+1}`];
                const measure = meal[`strMeasure${i+1}`];
                if(ingredient == "" || ingredient == " " || ingredient == null){} else {
                    const list = `<tr><td class="center-align">${ingredient} (${measure})</td></tr>`
                    ingredients += list;
                };
            }
            cards += `
            <div class="col s12 m6 l4">
                <div class="card">
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src="${meal.strMealThumb}">
                    </div>
                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">
                            <span>${meal.strMeal}</span><br>
                            <i class="material-icons right">more_vert</i>
                        </span>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">
                            <span>${meal.strMeal}</span>
                            
                            <br/>
                            <i class="material-icons right">close</i>
                        </span>
                        <p>${meal.strArea}</p>
                        <table>
                            <thead>
                                <tr>
                                    <th class="center-align">Ingredients</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${ingredients}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            `;
        });
        return cards
    }

    render(cards) {
        this.innerHTML = `
        <div id="modal1" class="modal modal-fixed-footer">
            <div class="modal-content">
                <div class="row">
                    ${cards}
                </div>
            </div>
            <div class="modal-footer">
                <a href="#!" class="modal-close waves-effect waves-green btn-flat">Tutup</a>
            </div>
        </div>
        `;
        this.init();
    }
    init() {
        const elem = document.querySelector('#modal1')
        M.Modal.init(elem);
        const instance = M.Modal.getInstance(elem);
        instance.open();
    }
}

customElements.define("search-modal", SearchModal);