const doc = jQuery(document);

// Perfect Scrollbar not working
// const demo = document.querySelector('#forScrollbar');
// const ps = new PerfectScrollbar(demo);

$(window).on("load", function () {
    $('.loader').fadeOut(500);
})

doc.ready(function () {
    "use strict";

    $(window).scrollTop(0);

    // I am...
    const typed = new Typed('.mytext', {
        strings: ['Scott Susanto', 'a Software Engineer', 'an Engineering Entrepreneur'],
        smartBackspace: true,
        loop: true,
        typeSpeed: 33,
        backSpeed: 33,
        backDelay: 1500
    });

    // Hello there...
    var hasPlayed = false;
    $(window).scroll(function () {
        const scroll = $(window).scrollTop();

        if (scroll >= 800 && !hasPlayed) {
            hasPlayed = true;
            const typedTwo = new Typed('#hello', {
                strings: ['Hello there...'],
                smartBackspace: false,
                loop: false,
                typeSpeed: 100
            });
        }
    });

    // One Page Nav
    $('.navbar-nav').onePageNav({
        currentClass: 'active'
    });


    // Navbar background
    $(window).scroll(function () {
        const scroll = $(window).scrollTop();

        if (scroll >= 200) {
            $('.navbar').addClass('bg-darker');
        } else {
            $('.navbar').removeClass('bg-darker');
        }
    });

    // Animate CSS
    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return (((elemBottom - 150) <= docViewBottom) && (elemTop - 110 >= docViewTop));
    };

    $(window).scroll(function () {
        $('.right').each(function () {
            if (isScrolledIntoView(this) === true) {
                $(this).removeClass('animate__fadeOutRight');
                $(this).addClass('animate__fadeInRight');
            } else {
                $(this).removeClass('animate__fadeInRight');
                $(this).addClass('animate__fadeOutRight');
            }
        })
    });

    $(window).scroll(function () {
        $('.left').each(function () {
            if (isScrolledIntoView(this) === true) {
                $(this).removeClass('animate__fadeOutLeft');
                $(this).addClass('animate__fadeInLeft');
            } else {
                $(this).removeClass('animate__fadeInLeft');
                $(this).addClass('animate__fadeOutLeft');
            }
        })
    });

    $('.card').hover(function () {
        $(this).addClass('rgb');
    }, function () {
        $(this).removeClass('rgb');
    })
});