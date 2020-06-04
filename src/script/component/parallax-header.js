class ParallaxHeader extends HTMLElement {
    constructor() {
        super();
        
    }
    connectedCallback() {
        this.render();
        this.init();
    }
    
    render() {
        this.innerHTML = `
        <div class="parallax-container">
            <div class="parallax"><img src="img/burritoChicken.jpg"></div>
        </div>
        `
    }
    init() {
        document.addEventListener('DOMContentLoaded', function() {
            const elems = document.querySelectorAll('.parallax');
            M.Parallax.init(elems);
        });
    }
}

customElements.define("parallax-header", ParallaxHeader);