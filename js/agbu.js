$(document).ready(function () {
    var trigger = $('.hamburger'),
        overlay = $('.overlay'),
        isClosed = false;

    trigger.click(function () {
        hamburger_cross();
    });

    function hamburger_cross() {

        if (isClosed == true) {
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
        } else {
            overlay.show();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
        }
    }

    $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
    });
});

$(document).ready(function() {
    $('#partner_carousel').slick({
        dots: true,
        infinite: true,
//    speed: 300,
        slidesToShow: 5,
//    centerMode: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    });

});


$(document).ready(function(){

    $.fn.scrollView = function () {
        return this.each(function () {
            $('html, body').animate({
                scrollTop: $(this).offset().top
            }, 1000);
        });
    }

    $('.expander').click(function (event) {
        event.preventDefault();
        $('#autoscroll_imitation').scrollView();
        if ( $('#chevron').attr('src') == 'img/contactdown.png' ) {
            $('#chevron').attr('src','img/contactup.png');
        } else {
            $('#chevron').attr('src','img/contactdown.png');
        }

    });

});


$(document).ready(function(){

    $.fn.scrollView = function () {
        return this.each(function () {
            $('html, body').animate({
                scrollTop: $(this).offset().top
            }, 1000);
        });
    }

    $('.kinder_chevrondown').click(function (event) {
        console.log("suka!");
        event.preventDefault();
        $('#kinder_autoscroll_imitation').scrollView();
    })
});


$(document).ready(function() {
    var iHeight = window.screen.height;

    if(iHeight <= 960) {

        window.onorientationchange = function() {
            window.location.reload();
        }
    }

});