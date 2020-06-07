class CicipFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <footer class="page-footer deep-orange lighten-2 mt50">
          <div class="container">
            <div class="row">
              <div class="col s12">
                <h5 class="white-text center-align">Cicip.id</h5>
                <p class="white-text center-align">Bingung mau makan apa? Mampir aja ke Cicip.id</p>
              </div>
            </div>
            <div class="row">
                <div class="col s12">
                    <p class="white-text center-align">Data Provider - www.themealdb.com</p>
                </div>
            </div>
          </div>
          <div class="footer-copyright deep-orange lighten-1">
            <div class="container white-text">
            © 2020 Developed by Agung Wicaksana
            <a class="white-text right" href="#!">Cicip.id</a>
            </div>
          </div>
        </footer>
        `
    }
}

customElements.define("cicip-footer", CicipFooter)