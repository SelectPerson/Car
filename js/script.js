$(document).ready(() => {
    /* Slider */
    let getCurrentReviews = 0;
    // getElementRew();
    startTimer();
    let getTitle = $('h1.reviews__right__title');
    let getPrice = $('h1.reviews__get__price');
    let getDay = $('h1.reviews__get__day');
    let getRew = $('h1.reviews__get__rew');
    let getFeed = $('p.reviews__wrapper__right__first');
    let getAuthor = $('p.reviews__wrapper__right__second');
    let getImg = $('img.reviews__wrapper__left__img');

    function startTimer() {
        setInterval(() => {
            console.log('test');
            getCurrentReviews++;
            if(getCurrentReviews === GetReviews.length) {
                getCurrentReviews = 0;
            }
            getElementRew();
        }, 4000);
    }

    $('.reviews__arrow__left').on('click',() => {
        getCurrentReviews--;
        if(getCurrentReviews === -1) {
            getCurrentReviews = GetReviews.length - 1;
            console.log(getCurrentReviews);
        }

        getElementRew();
    });

    $('.reviews__arrow__right').on('click',() => {
        getCurrentReviews++;
        if(getCurrentReviews === GetReviews.length) {
            getCurrentReviews = 0;
        }


        getElementRew();
    });
    function getElementRew() {
        $('.main__reviews__wrapper').fadeTo(600,0.2, () => {
            getTitle.html(GetReviews[getCurrentReviews].title);
            getPrice.html(GetReviews[getCurrentReviews].price);
            getDay.html(GetReviews[getCurrentReviews].day);
            getRew.html(GetReviews[getCurrentReviews].review);
            getFeed.html(GetReviews[getCurrentReviews].text);
            getAuthor.html(GetReviews[getCurrentReviews].author);
            getImg.attr('src',GetReviews[getCurrentReviews].img);
            $('.main__reviews__wrapper').fadeTo(600,1);
        });

    }




    console.log(GetReviews[0].title);


    GetReviews.map((index) => {

    });

    let getNavMenu = $('ul.navbar__menu');
    $('.navbar').on('click', () => {
        getNavMenu.slideToggle(400);
    });
    $('li.navbar__menu__elem__order').on(('click'), () => popupOn());
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

let getMenu = document.querySelectorAll('li.menu__elem');

getMenu.forEach((index,i) => {
    getMenu[i].addEventListener('click',() => {
        switch (i) {
            case 0: scrollToBlock('.main__about'); break;
            case 1: scrollToBlock('.main__service'); break;
            case 2: scrollToBlock('.main__reviews'); break;
        }

    });
});

let getMenuNavBar = document.querySelectorAll('li.navbar__menu__elem');

getMenuNavBar.forEach((index,i) => {
    getMenuNavBar[i].addEventListener('click',() => {
        switch (i) {
            case 0: scrollToBlock('.main__about'); break;
            case 1: scrollToBlock('.main__service'); break;
            case 2: scrollToBlock('.main__reviews'); break;
        }

    });
});

function scrollToBlock(element) {
    let getElem = document.querySelector(element);
    window.scrollTo({
        top: getElem.offsetTop,
        behavior: 'smooth',
    });
}

let GetReviews = [
    {
        id: 1,
        title: 'Volkswagen Passat 2017',
        price: "$290",
        day: '3 Дні',
        review: "5/5",
        text: '“Чудовий сервіс та швидко все зробили, рекомендую!”',
        author: "Андрій Буренюк",
        img: 'img/reviews/first.png'
    },
    {
        id: 2,
        title: 'Car2',
        price: "$700",
        day: '7 Дні',
        review: "5/5",
        text: 'Найс',
        author: "Sasha",
        img: 'img/car.png'
    },
    {
        id: 3,
        title: 'Car3',
        price: "$600",
        day: '2 Дні',
        review: "5/5",
        text: 'Найс сервіс',
        author: "Lenya",
        img: 'img/reviews/first.png'
    },
    {
        id: 4,
        title: 'Car4',
        price: "$400",
        day: '1 Дні',
        review: "5/5",
        text: 'Дофіга тексту. Дофіга тексту. Дофіга тексту. Дофіга тексту. Дофіга тексту. Дофіга тексту. Дофіга тексту. Дофіга тексту. Дофіга тексту. Дофіга тексту. Дофіга тексту. Дофіга тексту. Дофіга тексту. Дофіга тексту. ',
        author: "Dima",
        img: 'img/car.png'
    }
];


