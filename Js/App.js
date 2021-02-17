const BtnNav = document.querySelector(".mobile_nav i");
const MobileMenu = document.querySelector(".menu_mobile")
BtnNav.addEventListener("click", () => {
    MobileMenu.classList.toggle("Active_menu_mobile")
    if (MobileMenu.classList.contains("Active_menu_mobile")) {
        BtnNav.className = "fa fa-times"
    } else {
        BtnNav.className = "fa fa-bars"
    }
})

$('.Reviews_carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})