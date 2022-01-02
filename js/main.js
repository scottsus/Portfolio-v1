const doc = jQuery(document);

// Initialize the plugin
const demo = document.querySelector('#forScrollbar');
const ps = new PerfectScrollbar(demo);

$(window).on("load", function () {
    $('.loader').fadeOut(500);
})

doc.ready(function () {
    "use strict";

    $(window).scrollTop(0);

    const typed = new Typed('.mytext', {
        strings: ['Scott Susanto', 'a Full Stack Engineer', 'a USC Trojan'],
        smartBackspace: true,
        loop: true,
        typeSpeed: 33,
        backSpeed: 33,
        backDelay: 1500
    });

    $('.navbar-nav').onePageNav({
        currentClass: 'active'
    });


    $(window).scroll(function () {
        const scroll = $(window).scrollTop();

        if (scroll >= 200) {
            $('.navbar').addClass('bg-dark');
        } else {
            $('.navbar').removeClass('bg-dark');
        }
    });
});