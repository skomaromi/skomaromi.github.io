window.onload = main;

function main() {
    // initialize Masonry
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer'
    });

    // set current copyright year
    var timeNow = new Date();
    var yearSpan = $('.page-footer #year');
    yearSpan.text(timeNow.getFullYear());
}
