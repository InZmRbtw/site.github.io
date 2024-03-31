var slides = document.querySelectorAll('.slider-line img');
var slider = [];
for (var i = 0; i < slides.length; i++) {

    slider[i] = slides[i].src;
    slides[i].remove();
}

var step = 1;
var offset = 0;

function draw() {
    let img = document.createElement('img');
    img.src = slider[step];
    img.style.left = offset * 100 + '%';
    document.querySelector('.slider-line').appendChild(img);
    if (step + 1 == slider.length) {
        step = 0;
    } else {
        step++;
    }
    offset = 1;
}

function left() {
    let slides2 = document.querySelectorAll('.slider-line img');
    let offset2 = 0;
    for (var i = 0; i < slides2.length; i++) {
        slides2[i].style.left = offset2 * 100 - 100 + '%';
        offset2++;
    }
    setTimeout(function() {
        slides2[0].remove();
        draw();
    }, 700);
}

draw();
draw();

setInterval(left, 5000);

var search = document.querySelector('.search-field input');
var products = document.querySelectorAll('.product-card-wrapper');

function searchScroll() {
    let offset = document.querySelector('.product-list').getBoundingClientRect().top;
    let headerSize;

    if (window.innerWidth > 960) {
        headerSize = 90;
    } else {
        headerSize = 160;
    }
    window.scrollTo({
        top: offset + window.scrollY - headerSize,
        behavior: "smooth"
    });
}

function toggleEmpySearch(count) {
    let emptyList = document.querySelector('.empty-list');
    if (count == products.length) {
        emptyList.classList.remove('invisible');
        emptyList.classList.add('flex');
    } else {
        emptyList.classList.add('invisible');
        emptyList.classList.remove('flex');
    }
}

function showSearchResults() {
    let searchValue = search.value.toLowerCase();
    let invisCount = 0;
    products.forEach(productCard => {
        if (productCard.dataset.name.includes(searchValue)) {
            productCard.classList.remove('invisible');
            return;
        }
        productCard.classList.add('invisible');
        invisCount++;
    });

    toggleEmpySearch(invisCount);
    searchScroll();
}

search.addEventListener('keyup', () => {
    showSearchResults();
})
