const menu = document.getElementById("mobileMenu");
const exit = document.getElementById("exit");
const nav = document.querySelector("nav");

const toggleNav = function() {
    if(nav.classList.contains('open')) {
        nav.classList.remove("open");
        menu.style.width = "2.7rem";
        exit.style.width = "0";
        menu.style.overflow = "auto";
        menu.style.overflow = "hidden";
        
    } else{
        nav.classList.add('open');
        menu.style.width = "0";
        exit.style.width = "4rem";
        menu.style.overflow = "hidden";
        exit.style.overflow = "auto";
    };
};

menu.addEventListener("click", toggleNav);
exit.addEventListener("click", toggleNav);