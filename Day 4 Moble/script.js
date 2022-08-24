const menu = document.getElementById("mobileMenu");
const exit = document.getElementById("exit");
const nav = document.querySelector("nav");

const toggleNav = function() {
    if(nav.classList.contains('open')) {
        nav.classList.remove("open");
        menu.style.width = "2.7rem";
        menu.style.overflow = "auto";
        
    } else{
        nav.classList.add('open');
        menu.style.width = "0";
        menu.style.overflow = "hidden";
    };
};

menu.addEventListener("click", toggleNav);
exit.addEventListener("click", toggleNav);