import $ from "jquery";

class setSameHeight {
    static setTheHeight(pembungkus) {
        const cardContent = document.querySelectorAll(`${pembungkus} span.card-title`);
        let heights = []
        cardContent.forEach(e => {
            heights.push($(e).height());
        })
        const maxHeight = Math.max(...heights)
        $(`${pembungkus} .card-content`).css('height', maxHeight + 48);
    }
};

export default setSameHeight;