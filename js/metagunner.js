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