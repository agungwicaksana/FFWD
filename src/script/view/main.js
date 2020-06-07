// import "./styles/style.css";
import $ from "jquery";
import "materialize-css/dist/js/materialize.min";

// component
import "../component/parallax-header.js";
import "../component/rekomendasi.js";
import "../data/data-rekomendasi.js";
import "../component/kategori.js";

function main() {
    console.log('halo');
    // console.log();
    

    setTimeout(() => {
        (function initScroll() { 
            $('html,body').animate({
                scrollTop: $(window).scrollTop() + 1
            });
            console.log('asd')
        })();
    }, 1500);
    
}

export default main;