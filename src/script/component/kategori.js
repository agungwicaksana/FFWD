import setSameHeight from "../view/same-height.js";
import DataKategori from "../data/kategori.js";
import KategoriMeals from "../data/kategori-meals.js";

class KategoriMasakan extends HTMLElement {
    constructor() {
        super();
    }

    async getData() {
        try {
            const kategori = await DataKategori.Kategori();
            return kategori;
        } catch(error) {
            alert(error)
        }
    }

    async generateLi() {
        const kategori = await this.getData();
        let katEl = ``;
        kategori.forEach(kat => {
            katEl += `<li><a href="#kategori-masakan">${kat.strCategory}</a></li>`;
        });
        document.querySelector('#kategori').innerHTML = katEl;
    }

    async getMeals(kategori) {
        try {
            const kategoriMeals = await KategoriMeals.getKMeals(kategori);
            return kategoriMeals;
        } catch(error) {
            alert(error);
        }
    }

    onSelect() {
        const ul = document.querySelector('ul#kategori');
        ul.addEventListener("click", async e => {
            const kateogri = e.target.textContent;
            document.querySelector('.dropdown-trigger').innerText = kateogri;
            const mealsData = await this.getMeals(kateogri);
            const rendered = this.kategoriCard(mealsData);
            const cardContainer = document.querySelector('.card-container');
            cardContainer.innerHTML = rendered;
            
            // CSS Same height
            setSameHeight.setTheHeight('kategori-masakan')
        })
    }

    connectedCallback() {
        this.generateLi();
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="container animate__animated animate__fadeInDown">
            <div class="row">
                <div class="col s12">
                    <h4>Kategori Masakan — 
                        <li><a class='dropdown-trigger' href='#' data-target='kategori'>Pilih Kategori</a></li>
                        <ul id='kategori' class='dropdown-content'></ul>
                    </h4>
                </div>
            </div>
            <div class="row card-container">
            </div>
        </div>
        `;
        this.init();
        this.onSelect();
    }

    init() {
        const options = {
            constrainWidth : false
        }
        document.addEventListener('DOMContentLoaded', function() {
            const elems = document.querySelectorAll('.dropdown-trigger');
            const instances = M.Dropdown.init(elems, options);
        });
    }

    kategoriCard(meals) {
        let mealsCard = ``;
        for(let i=0;i<8;i++) {
            const meal  = meals[i];
            mealsCard += `
            <div class="col s12 m6 l4 xl3 animate__animated animate__fadeInLeft">
                <div class="card">
                    <div class="card-image">
                        <img src="${meal.strMealThumb}">
                    </div>
                    <div class="card-content">
                        <span class="card-title">${meal.strMeal}</span>
                    </div>
                </div>
            </div>
            `;
        };
        return mealsCard
    }
};

customElements.define("kategori-masakan", KategoriMasakan);