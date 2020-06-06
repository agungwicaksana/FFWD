import DataRekomendasi from "../data/data-rekomendasi.js"

class Rekomendasi extends HTMLElement {
    constructor() {
        super();
    }

    async coba() {
        const jumlahRekomendasi = 5;
        let meals = [];
        for(let i=0;i<jumlahRekomendasi;i++){
            const data = await DataRekomendasi.getMeal()
            meals.push(data[0]);
        }
        meals.forEach(e => {

            // Ini DATA DARI API
            // Lanjut menempel data ke HTML
            console.log(e);
            
        });
    }

    connectedCallback() {
        this.coba();
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="container">
            <div class="row">
                <div class="col s12">
                    <h4>Rekomendasi Untukmu</h4>
                </div>
            </div>
            <div class="row">
                <div class="col s12 m4">
                    

                <div class="card">
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src="">
                    </div>
                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
                        <p><a href="#">This is a link</a></p>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                        <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                </div>
                        


                </div>
            </div>
        </div>
        `;
    }
};

customElements.define("rekomendasi-masakan", Rekomendasi);