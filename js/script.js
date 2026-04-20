const topBar = document.getElementById('top-bar');
const menuBtn = document.getElementById('menu-btn');
const sideMenu = document.getElementById('side-menu');
const overlay = document.getElementById('side-menu-overlay');
const heroSection = document.querySelector('.hero-section');

if (heroSection) {
    function updateHeader() {
        if (window.scrollY > 80) {
            topBar.classList.add('scrolled');
            topBar.classList.remove('transparent');
        } else {
            topBar.classList.add('transparent');
            topBar.classList.remove('scrolled');
        }
    }
    window.addEventListener('scroll', updateHeader);
    updateHeader();
} else {
    topBar.classList.add('scrolled');
    topBar.classList.remove('transparent');
}

menuBtn.addEventListener('click', () => {
    sideMenu.classList.add('open');
    overlay.classList.add('active');
});

overlay.addEventListener('click', () => {
    sideMenu.classList.remove('open');
    overlay.classList.remove('active');
});