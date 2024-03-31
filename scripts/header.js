window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 0) {
        document.querySelector("header").classList.add('header-shadow');
    } else {
        document.querySelector("header").classList.remove('header-shadow');
    }
})

var catalogOverlay = document.querySelector('.catalog-overlay');
var headerBurgerBtn = document.querySelector('.header-burger-button');
var headerBurgerLine = document.querySelector('.header-burger-line');
var navigationLinks = document.querySelector('.navigation-links')
if (headerBurgerBtn) {
    headerBurgerBtn.onclick = function() {
        navigationLinks.classList.toggle('invisible');
        catalogOverlay.classList.toggle('invisible');
        headerBurgerLine.classList.toggle('header-burger-opened');
    }
    catalogOverlay.onclick = function() {
        navigationLinks.classList.toggle('invisible');
        catalogOverlay.classList.toggle('invisible');
        headerBurgerLine.classList.toggle('header-burger-opened');
    }
}

function headerBurgerOnresize() {
    if (headerBurgerLine.classList.contains('header-burger-opened')) {
        return;
    }
    if (window.innerWidth < 768) {
        navigationLinks.classList.add('invisible');
        navigationLinks.classList.remove('flex');
    } else {
        navigationLinks.classList.remove('invisible');
        navigationLinks.classList.add('flex');
    }
}

function initHeader() {
    if (window.innerWidth >= 768) {
        navigationLinks.classList.add('flex');
    } else {
        navigationLinks.classList.add('invisible');
    }
}

initHeader();
window.addEventListener('resize', function() {
    headerBurgerOnresize();
})
