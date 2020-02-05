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
    /* Scroll */

    let Scroll = document.getElementById('arrow_up');
    let boolScroll = false;
    Scroll.style.transition = "opacity 0.5s ease-in";
    window.addEventListener('scroll', function() {
        if(window.scrollY >= 1000) {
            if(!boolScroll) {
                Scroll.style.display = 'block';
                setTimeout(function() {
                    Scroll.style.opacity = '1';
                    boolScroll = true;
                },500);
            }


        }
        else {
            if(boolScroll == true) {
                Scroll.style.opacity = '0';
                setTimeout(function() {
                    // Scroll.style.display = 'none';
                    boolScroll = false;
                },500);
            }

        }
    },false);

    Scroll.addEventListener('click', function(e) {
        console.log('test');
        if(window.scrollY >= 0) {
            // this.scrollTo(0,0);
            // window.scrollY = 2000;
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
        // console.log(window.scrollY);
    },false);

});