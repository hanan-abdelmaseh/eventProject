let menuBars = document.getElementById('menu-bars');
let navbar = document.querySelector('.navbar')


menuBars.addEventListener('click', function() {
    menuBars.classList.toggle('fa-times')
    navbar.classList.toggle('active')
});
// on scroll
window.onscroll = () => {
        menuBars.classList.remove('fa-times')
        navbar.classList.remove('active')
    }
    //////////

var swiper = new Swiper(".home-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnIteraction: false
    }
});
var swiper = new Swiper(".review-slider", {

    slidesPerView: 1,
    loop: true,
    grabCursor: true,
    spaceBetween: 10,
    breakpoints: {

        0: {
            slidesPerView: 1
        },
        700: {
            slidesPerView: 2
        },
        1050: {
            slidesPerView: 3
        }

    },
    autoplay: {
        delay: 5000,
        disableOnIteraction: false
    }
});

var toggleBtn = document.querySelector('.toggle-btn');
var themeToggler = document.querySelector('.theme-toggler');
toggleBtn.addEventListener('click', function() {
    themeToggler.classList.toggle('toggle-active');
})
document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.onclick = () => {
        let color = btn.style.backgroundColor;


        document.querySelector(':root').style.setProperty('--main-color', color)
    }

})