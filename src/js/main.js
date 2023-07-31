//Swiper
const swiper = new Swiper(".swiper", {
    centeredSlides: true,
    loop: true,
    speed: 2000,
    slidesPerView: 1,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});


// Smooth nav
const anchors = document.querySelectorAll('a[href^="#"]')

for(let anchor of anchors) {
    anchor.addEventListener("click", function(e) {
        e.preventDefault()
        const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
        document.querySelector(goto).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}

// Nav icon
const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__inner');

navBtn.onclick = function () {
    navIcon.classList.toggle('nav-icon--active');
    nav.classList.toggle('header__inner--mobile');
    document.body.classList.toggle('no-scroll');
}
