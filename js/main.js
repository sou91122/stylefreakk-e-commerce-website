(function ($) {
    "use strict";
    jQuery(document).ready(function ($) {
        //Menu On Hover
        $('body').on('mouseenter mouseleave', '.nav-item,.top-dropdown', function (e) {
            if ($(window).width() > 750) {
                var _d = $(e.target).closest('.nav-item,.top-dropdown'); _d.addClass('show');
                setTimeout(function () {
                    _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
                }, 1);
            }
        });
         //Menu On Hover
        //  menu toggler
         $(function(){
             $('.navbar-toggler').on('click', function () {
                 $(this).toggleClass('open');
             });
         });
        //  menu toggler
        //  menu sticky
        $(function () {
            //caches a jQuery object containing the header element
            var header = $("#menu-area");
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();

                if (scroll >= 88) {
                    header.addClass("add-sticky");
                } else {
                    header.removeClass("add-sticky");
                }
            });
            if ($(window).width() < 767) {
                var header = $("#topbar-area");
                $(window).scroll(function () {
                    var scroll = $(window).scrollTop();

                    if (scroll >= 88) {
                        header.addClass("add-sticky");
                    } else {
                        header.removeClass("add-sticky");
                    }
                });

            }
        });
        //  menu sticky
        // main-slider starts //
        $('#main-slider').slick({
            dots: false,
            infinite: false,
            speed: 1500,
            cssEase:'ease',
            infinite:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        // main-slider ends //
        // product-carousel //
        $('#product-carousel').slick({
            dots: false,
            infinite: false,
            speed: 1500,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        // product-carousel //
        // top-collection-carousel //
        $('#top-collection-carousel').slick({
            dots: false,
            infinite: false,
            speed: 1500,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        // top-collection-carousel //
        // recent-carousel //
        $('#recent-carousel').slick({
            dots: false,
            infinite: false,
            speed: 1500,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        // recent-carousel //
        // related-carousel //
        $('#related-carousel').slick({
            dots: false,
            infinite: false,
            speed: 1500,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        // related-carousel //
        // our team-carousel //
        $('#our-team').slick({
            dots: true,
            infinite: false,
            speed: 1500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        // our team-carousel //
        // List group item
        $(function () {
            if ($(window).width() < 992) {
                var $slideup = $(".left-list-item a");
                $slideup.on('click', function () {
                    if (!($(this).hasClass("current"))) {
                        $slideup.removeClass("current").next("ul").slideUp();
                    }
                    $(this).toggleClass("current");
                    $(this).next("ul").slideToggle("slow");
                    return false;
                });
            }
        });
        // List group item
        // footer link item 
        $(function(){
            var $slide = $(".link-item a");
            $slide.on('click', function () {
                if (!($(this).hasClass("current"))) {
                    $slide.removeClass("current").next("ul").slideUp();
                }
                $(this).toggleClass("current");
                $(this).next("ul").slideToggle("slow");
                return false;
            });
        });
        // footer link item 
         // products details thumb scroll
        $(function(){
            $(".details-inner-indicators").niceScroll(
                {
                    scrollspeed: 80,
                    mousescrollstep: 80,
                    cursorwidth:
                        "0px"
                }
            );
        });
        // products details thumb scroll
        // sortby toggle
        $(function(){
            $('.sortby-toggle').click(function () {
                $('.sortby').toggleClass('active')
                $('.sortby-toggle').toggleClass('active')
            })
        });
        // sortby toggle
        // product details carousel change on hover
        $(function(){
            $("#product-details-inner .carousel-indicators li").hover(function () {
                var goto = Number($(this).attr('data-slide-to'));
                $("#product-details-inner").carousel(goto);
            });
        });
        // product details carousel change on hover
        // product details image zoom
        $(function(){
            $('.zoom').elevateZoom({
                cursor: 'pointer',
                imageCrossfade: true,
                zoomWindowWidth: 650,
                zoomWindowHeight: 550,
                responsive: true,
            });
        });
        // product details image zoom
        // price range slider 
        $(function(){
            var slider = document.getElementById('price-slider');
            noUiSlider.create(slider, {
                start: [0, 1000],
                connect: true,
                range: {
                    'min': 0,
                    'max': 1000
                },
                tooltips: true,
                format: wNumb({
                    decimals: 2,
                    thousand: ',',
                    prefix: '₹'
                })
            });
        });
        // price range slider
    });
    // loader
    $(window).on('load', function (e) {
        $("#loading").delay(300).fadeOut("slow"); // will fade out the white DIV that covers the website.
    })
    // loader
}(jQuery));

