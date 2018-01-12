(function ($) {

    "use strict";
    $(".carousel-inner .item:first-child").addClass("active");
    /* Mobile menu click then remove
    ==========================*/
    $(".mainmenu-area #mainmenu li a").on("click", function () {
        $(".navbar-collapse").removeClass("in");
    });
    $('.single-feature').on('mouseenter', function () {
        $('.single-feature').removeClass('active');
        $(this).addClass('active');
    });

    /* Scroll to top
    ===================*/
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });


    /*=========================================================================

    Count Down Timer

    =========================================================================*/

    var countDownDate = new Date("2018-02-01 00:00:00").getTime();

    // Update the count down every 1 second

    var x = setInterval(function() {



        // Get todays date and time

        var now = new Date().getTime();

        

        // Find the distance between now an the count down date

        var distance = countDownDate - now;

        

        // Time calculations for days, hours, minutes and seconds

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));

        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        

        // Output the result in an element with id="demo"

        document.getElementById("timer").innerHTML = "<div class=\"box\"><label id=\"day\" class=\"dinamic\">" + days + "</label> <label class=\"static\">Days</label> </div>" + "<div class=\"box\"><label id=\"hour\" class=\"dinamic\">" +hours + "</label> <label class=\"static\">Hour </label></div>" + " <div class=\"box\"><label id=\"minutes\" class=\"dinamic\"> " + minutes + "</label> <label class=\"static\">Minutes</label> </div>" + "<div class=\"box\"><label id=\"day\" class=\"dinamic\">" + seconds + "</label> <label class=\"static\">Second</label></div> ";

        

        // If the count down is over, write some text 

        if (distance < 0) {

            clearInterval(x);

            document.getElementById("timer").innerHTML = "EXPIRED";

        }

    }, 1000);



    /* testimonials Slider Active
    =============================*/
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        responsiveClass: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right" ></i>'],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });

    $(".rslides").responsiveSlides({
        auto: true, // Boolean: Animate automatically, true or false
        speed: 500, // Integer: Speed of the transition, in milliseconds
        timeout: 4000, // Integer: Time between slide transitions, in milliseconds
        pager: false, // Boolean: Show pager, true or false
        nav: false, // Boolean: Show navigation, true or false
        random: false, // Boolean: Randomize the order of the slides, true or false
        pause: false, // Boolean: Pause on hover, true or false
        pauseControls: true, // Boolean: Pause when hovering controls, true or false
        prevText: "Previous", // String: Text for the "previous" button
        nextText: "Next", // String: Text for the "next" button
        maxwidth: "", // Integer: Max-width of the slideshow, in pixels
        navContainer: "", // Selector: Where controls should be appended to, default is after the 'ul'
        manualControls: "", // Selector: Declare custom pager navigation
        namespace: "rslides", // String: Change the default namespace used
        before: function () {}, // Function: Before callback
        after: function () {} // Function: After callback
    });
    /*--------------------
              MAGNIFIC POPUP JS
              ----------------------*/
    var magnifPopup = function () {
        $('.vbttn').magnificPopup({
            type: 'iframe',
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: true
            }
        });
    };
    // Call the functions 
    magnifPopup();


    /*---------------------------
     MICHIMP INTEGRATION
    -----------------------------*/
    $('#mc-form').ajaxChimp({
        url: 'http://facebook.us14.list-manage.com/subscribe/post?u=b2a3f199e321346f8785d48fb&amp;id=6d023c55e5', //Set Your Mailchamp URL
        callback: function (resp) {
            if (resp.result === 'success') {
                $('.subscribe-form input, .subscribe-form button').fadeOut();
            }
        }
    });
    $('.bg1').parallax("50%", -0.3);
    $('.bg2').parallax("50%", -0.1);
    $('.bg3').parallax("50%", -0.2);
    $('.bg4').parallax("50%", -0.2);
    /* Preloader Js
    ===================*/
    $(window).on("load", function () {
        $('.preloader').fadeOut(500);
        new WOW().init({
            mobile: true,
        });
    });
})(jQuery);