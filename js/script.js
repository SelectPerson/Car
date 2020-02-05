$(document).ready(() => {
    let getNavMenu = $('ul.navbar__menu');
    $('.navbar').on('click', () => {
        getNavMenu.slideToggle(400);


    });
    $('a.navbar__menu__elem__a').on(('click'), () => popupOn());
    $('button.service__right__submit').on(('click'), () => popupOn());
    $('a.menu__elem__a__order').on(('click'), () => popupOn());
    $('img.popup__send__close').on(('click'), () => {
        $('.popup__dipslay').hide(200);
        $('.popup__background').css('display','none');

    });
    function popupOn() {
        $('.popup__dipslay').show(200);
        $('.popup__background').css('display','block');
    }





});