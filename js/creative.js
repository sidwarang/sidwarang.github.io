/*!
 * Creative v1.0.4 (http://startbootstrap.com/template-overviews/creative)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);
    sr.reveal('.about_img', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);
    sr.reveal('.hexagon', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    // Initialize and Configure Magnific Popup Lightbox Plugin
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

    $('.hexagon1').hover(function () {
        $('.hexagon1').css("background-image", "url(img/icons/skills/95.png)");
    },
    function () {
        $('.hexagon1').css("background-image", "url(img/icons/skills/html5-javascript-css3.gif)");
    });

    $('.hexagon2').hover(function () {
            $('.hexagon2').css("background-image", "url(img/icons/skills/85.png)");
        },
        function () {
            $('.hexagon2').css("background-image", "url(img/icons/skills/angular-ionic-jquery.gif)");
        });
    $('.hexagon3').hover(function () {
            $('.hexagon3').css("background-image", "url(img/icons/skills/95.png)");
        },
        function () {
            $('.hexagon3').css("background-image", "url(img/icons/skills/rest.png)");
        });
    $('.hexagon4').hover(function () {
            $('.hexagon4').css("background-image", "url(img/icons/skills/95.png)");
        },
        function () {
            $('.hexagon4').css("background-image", "url(img/icons/skills/nodejs.png)");
        });

    $('.hexagon5').hover(function () {
            $('.hexagon5').css("background-image", "url(img/icons/skills/90.png)");
        },
        function () {
            $('.hexagon5').css("background-image", "url(img/icons/skills/mysql-mongo.gif)");
        });
    $('.hexagon6').hover(function () {
            $('.hexagon6').css("background-image", "url(img/icons/skills/90.png)");
        },
        function () {
            $('.hexagon6').css("background-image", "url(img/icons/skills/php-laravel.gif)");
        });
    $('.hexagon7').hover(function () {
            $('.hexagon7').css("background-image", "url(img/icons/skills/95.png)");
        },
        function () {
            $('.hexagon7').css("background-image", "url(img/icons/skills/java.png)");
        });

    $('.hexagon8').hover(function () {
            $('.hexagon8').css("background-image", "url(img/icons/skills/85.png)");
        },
        function () {
            $('.hexagon8').css("background-image", "url(img/icons/skills/python-shell.gif)");
        });

    // $(window).load(function(){
    //     $('#myModal').modal('show');
    // });

})(jQuery); // End of use strict
