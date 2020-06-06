import "./kategori.js";

class Navbar extends HTMLElement {
    constructor() {
        super();
        this.logo = "Cicip.id";
        this.menu = this.menu();
    }

    menu() {
        return [
            {menu: "Cari Masakan", link: "#cari-masakan"},
            {menu: "Rekomendasi", link: "#rekomendasi"},
            {menu: "Kategori", link: "#kategori"}
        ]
    }

    menuHtml() {
        let menuList = "";
        this.menu.forEach((m,i) => {
            menuList += `<li><a href="${m.link}">${m.menu}</a></li>\n`;
        });
        return menuList;
    }
    
    connectedCallback() {
        this.render();
        this.init();
    }
    
    render() {
        this.innerHTML = `
            <nav>
                <div class="nav-wrapper">
                    <a href="#!" class="brand-logo">${this.logo}</a>
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                    <ul class="right hide-on-med-and-down">
                        ${this.menuHtml()}
                    </ul>
                </div>
            </nav>
            <ul class="sidenav" id="mobile-demo">
                ${this.menuHtml()}
            </ul>`;
    }
    init() {
        document.addEventListener('DOMContentLoaded', function() {
            const elems = document.querySelectorAll('.sidenav');
            M.Sidenav.init(elems);
        });
    }
}

customElements.define("my-navbar", Navbar);