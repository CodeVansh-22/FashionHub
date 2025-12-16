/* --- SWIPER SLIDER INIT --- */
var swiper = new Swiper(".home-slider", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});

/* --- DARK/LIGHT THEME TOGGLE --- */
let themeBtn = document.querySelector('#theme-btn');
let htmlElement = document.documentElement; // Targets the <html> tag

themeBtn.onclick = () => {
    themeBtn.classList.toggle('fa-sun'); // Change icon to Sun
    
    if (themeBtn.classList.contains('fa-sun')) {
        htmlElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); // Save preference
    } else {
        htmlElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

// Check Local Storage on Load
window.onload = () => {
    if (localStorage.getItem('theme') === 'dark') {
        htmlElement.setAttribute('data-theme', 'dark');
        themeBtn.classList.add('fa-sun');
    }
}