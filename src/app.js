const menuResponsive = document.getElementById('responsive-menu');
const menu = document.getElementById('menubtn');

menu.addEventListener('click', (e) =>{
    if (menuResponsive.classList.contains('translate-x-full') && menu.classList.contains('bg-open-menu')) {
        menu.classList.remove("bg-open-menu");
        menu.classList.add("bg-close-menu");
        menuResponsive.classList.remove("translate-x-full");
        menuResponsive.classList.add("translate-x-0");
    } else {
        menu.classList.remove("bg-close-menu");
        menu.classList.add("bg-open-menu");
        menuResponsive.classList.remove("translate-x-0");
        menuResponsive.classList.add("translate-x-full");
    }
});

menuResponsive.addEventListener('click', (e) =>{
    if (menuResponsive.classList.contains('translate-x-full') && menu.classList.contains('bg-open-menu')) {
        menu.classList.remove("bg-open-menu");
        menu.classList.add("bg-close-menu");
        menuResponsive.classList.remove("translate-x-full");
        menuResponsive.classList.add("translate-x-0");
    } else {
        menu.classList.remove("bg-close-menu");
        menu.classList.add("bg-open-menu");
        menuResponsive.classList.remove("translate-x-0");
        menuResponsive.classList.add("translate-x-full");
    }
});

