// import "./styles/style.css";
import $ from "jquery";
import "materialize-css/dist/js/materialize.min";

// component
import "../component/parallax-header.js";
import "../component/rekomendasi.js";
import "../data/data-rekomendasi.js";
import "../component/kategori.js";
import "../component/search-modal.js";
import "../component/footer.js"

// data
import CariMakanan from "../data/cari-makanan.js";

function main() {
    setTimeout(() => {
        (function initScroll() { $('html,body').animate({scrollTop: $(window).scrollTop() + 1});})();
    }, 1500);

    const searchModal = document.querySelector('search-modal');
    $('search-box i').click(async function(event) {
        try {
            event.preventDefault();
            const keyword = $('#pencarian').val();
            const makanan = await CariMakanan.getMeal(keyword);
            searchModal.mealData = makanan;
        } catch(error) {
            alert(error)
        }
    })
    
}

export default main;