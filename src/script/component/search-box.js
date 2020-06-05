class SearchBox extends HTMLElement {
    constructor() {
        super();
        // this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }


    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render() {
        this.innerHTML = `
        <div class="row">
            <form class="col s12">
                <div class="row">
                    <div class="input-field col s10 m8 offset-m2 offset-s1">
                        <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
                        <label for="icon_prefix2">First Name</label>
                        <i class="material-icons prefix">search</i>
                    </div>
                </div>
            </form>
        </div>
       `;

        // this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-box", SearchBox);