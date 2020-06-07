class CicipFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <footer class="page-footer light-blue accent-2 mt50">
          <div class="container">
            <div class="row">
              <div class="col s12">
                <h5 class="white-text center-align">Cicip.id</h5>
                <p class="grey-text text-lighten-4 center-align">Bingung mau makan apa? Mampir kesini dulu aja</p>
              </div>
            </div>
            <div class="row">
                <div class="col s12">
                    <p class="grey-text text-lighten-4 center-align">Data Provider - www.themealdb.com</p>
                </div>
            </div>
          </div>
          <div class="footer-copyright light-blue accent-3">
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