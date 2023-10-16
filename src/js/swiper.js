const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

const menu = document.querySelector("#menu").cloneNode(1);

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
    e.preventDefault();
    popup.classList.toggle("open");
    hamb.classList.toggle("active");
    body.classList.toggle("noscroll");
    renderPopup();
    body.classList.toggle("body-gray");
}

function renderPopup() {
    popup.appendChild(menu);
}

const links = Array.from(menu.children);

links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
    popup.classList.remove("open");
    hamb.classList.remove("active");
    body.classList.remove("noscroll");
    body.classList.remove("body-gray");
}

var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
        1100: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
        568: {
            slidesPerView: 1,
        },
        320: {
            slidesPerView: 1,
        },
    },
});