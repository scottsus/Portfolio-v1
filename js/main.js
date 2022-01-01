const doc = jQuery(document);

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

    if ($(window).scrollTop() < 200) {
        $('.navbar-nav').addClass('navbar-nav-bg');
    }

    $(window).scroll(function () {
        const top = $(window).scrollTop();

        if (top >= 200) {
            $('header').addClass('overlay');
            $('.navbar-nav').removeClass('navbar-nav-bg');
        } else if ($('header').hasClass('overlay')) {
            $('header').removeClass('overlay');
        } else {
            $('.navbar-nav').addClass('navbar-nav-bg');
        }
    });

    $('.progress-content .skill-progress').each(function () {
        const waypoint = new Waypoint({
            element: this,
            handler: function (direction) {
                const value = $(this.element).attr('data-progress');
                $(this.element).css('width', '' + value + '%');
            },
            offset: '75%'
        });
    });



});