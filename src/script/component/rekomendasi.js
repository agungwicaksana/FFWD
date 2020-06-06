import DataRekomendasi from "../data/data-rekomendasi.js"

class Rekomendasi extends HTMLElement {
    constructor() {
        super();
    }

    async generateMeals() {
        const jumlahRekomendasi = 4;
        let meals = [];
        for(let i=0;i<jumlahRekomendasi;i++){
            const data = await DataRekomendasi.getMeal()
            meals.push(data[0]);
        }
        // console.log(meals[0]);
        
        let elems = [];
        meals.forEach(meal => {
            const ingredients = this.ingredients(meal);
            // console.log(ingredients);
            
            let ingredientEl = [];
            ingredients.forEach(ing => {
                const el = `<tr><td>${ing}</td></tr>`;
                ingredientEl += el;
            })
            elems += this.mealElems(meal, ingredientEl);   
        });
        this.render(elems);
    }

    ingredients(meal) {
        let ingredients = []
        for(let i=0;i<20;i++){
            const ingredient = meal[`strIngredient${i +1}`];
            const measure = meal[`strMeasure${i +1}`];
            
            if(ingredient == "" || ingredient == " " || ingredient == null) {
            } else {
                ingredients.push(`${ingredient} (${measure})`);
            }
        };
        return ingredients;
    }

    connectedCallback() {
        this.generateMeals();
    }

    render(elems) {
        return this.innerHTML = `
        <div class="container">
            <div class="row">
                <div class="col s12">
                    <h4>Rekomendasi Untukmu</h4>
                </div>
            </div>
            <div class="row">
                ${elems}
            </div>
        </div>
        `;
    }

    mealElems(meal, ingredientEl) {
        return `
        <div class="col s12 m6 l4 xl3">
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
                                <th>Ingredients</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${ingredientEl}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        `
    }
};

customElements.define("rekomendasi-masakan", Rekomendasi);