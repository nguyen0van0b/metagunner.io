window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementsByClassName('header')[0].classList.add('header-down');
        document.getElementsByClassName('header__container')[0].classList.add('header__container-down');
    } else {
        document.getElementsByClassName('header')[0].classList.remove('header-down');
        document.getElementsByClassName('header__container')[0].classList.remove('header__container-down');
    }
}
// slider sclick
$(document).ready(function() {
    $('.howtoplay__slider').slick({
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }]
    });
});

function Function_menu_mobile() {
    var x = document.getElementById("myTopnav");
    if (x.className === "main-menu") {
        x.className += " responsive";
    } else {
        x.className = "main-menu";
    }
}