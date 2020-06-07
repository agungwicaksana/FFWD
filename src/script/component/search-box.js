class SearchBox extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback(){
        this.render();
    }

    


    get value() {
        // return this.shadowDOM.querySelector("#searchElement").value;
    }

    render() {
        // Html Element
        this.innerHTML = `
        <div class="row">
            <div class="col s12">
                <div class="input-field col s10 m9 offset-m1">
                    <input id="pencarian" type="text" class="">
                    <label for="pencarian">Cari Masakan</label>
                </div>
                <div class="input-field col s2 m1">
                    <i class="material-icons">search</i>
                </div>
            </div>
        </div>
        `
    }

    // handle button ketika diklik
    // this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent)
}

customElements.define("search-box", SearchBox);