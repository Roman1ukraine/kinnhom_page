// $(document).ready(function() {
// 	$('.menu__burger') .click(function(event){
// 		$('.menu__burger,.menu-list').toggleClass('active');
// 	});
// } );




let header__burger = document.querySelector('.menu__burger');
let header_menu = document.querySelector('.menu');
let back = document.querySelector('body');
let header__list = document.querySelector('.menu-list');

header__burger.onclick = function(){
    header__burger.classList.toggle('active');
    header_menu.classList.toggle('active');
    header__list.classList.toggle('active');
    back.classList.toggle('lock');
}

header__list.onclick = function () {
    header__list.classList.remove('active');
    back.classList.toggle('lock');
}


const swiper = new Swiper('.swiper', {
    speed: 400,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoHeight: true,
    breakpoints: {
        // when window width is >= 300px
        300: {
            slidesPerView: 2.2,
            spaceBetween: 5
        },
        // when window width is >= 435px
        435: {
            slidesPerView: 3.3,
            spaceBetween: 10
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3.2,
            spaceBetween: 20
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4.3,
            spaceBetween: 30
        }
        }
    });


